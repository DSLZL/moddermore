import type { NextPage } from "next";
import { type FormEventHandler, useCallback, useState } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { loadAsync } from "jszip";
import { parsePrismInstance } from "~/lib/import/prism";
import minecraftVersions from "~/lib/minecraftVersions.json";

import type { Mod, ModLoader } from "~/types/moddermore";

import { GlobalLayout } from "~/components/layout/GlobalLayout";
import { NewSubmitButton } from "~/components/partials/NewSubmitButton";
import { ProgressOverlay } from "~/components/ProgressOverlay";
import { buttonVariants } from "~/components/ui/Button";

import { PaperclipIcon } from "lucide-react";

import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

const PrismImportPage: NextPage = () => {
  const sess = useSession({ required: true });

  const [title, setTitle] = useState("");
  const [gameVersion, setGameVersion] = useState(minecraftVersions.releases[0]);
  const [instanceFile, setInstanceFile] = useState<File | null>(null);
  const [modLoader, setModLoader] = useState<ModLoader>("fabric");
  const [useMetadata, setUseMetadata] = useState(true);

  const [progress, setProgress] = useState({ value: 0, max: 0 });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const submitHandle: FormEventHandler = useCallback(
    (e) => {
      (async () => {
        e.preventDefault();
        if (!sess.data) return;

        setSubmitting(true);

        const zipFileContent = await instanceFile?.arrayBuffer();
        if (!zipFileContent) return;

        const parseResponse = await parsePrismInstance({
          f: await loadAsync(new Uint8Array(zipFileContent)),
          useMetadata,
          setProgress,
        });

        if (!parseResponse) return;

        const res = await fetch("/api/list/create", {
          method: "POST",
          body: JSON.stringify({
            title,
            gameVersion,
            modloader: modLoader,
            mods: parseResponse.filter(Boolean) as Mod[],
          }),
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          toast.error("Couldn't create the list");
          return;
        }

        const { id } = (await res.json()) as { id: string };
        await router.push(`/list/${id}`);
      })().catch((error) => {
        console.error(error);
      });
    },
    [gameVersion, instanceFile, modLoader, router, sess.data, title, useMetadata],
  );

  return (
    <GlobalLayout title="Import from MultiMC/Prism" displayTitle={false}>
      <form className="flex flex-col items-start gap-y-6" onSubmit={submitHandle}>
        <input
          name="title"
          value={title}
          type="text"
          className="title w-full bg-transparent focus:outline-none focus:ring-0"
          placeholder="Enter the title..."
          aria-label="Title of the mod list"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <div className="flex items-center gap-x-4">
          <select
            name="game-version"
            value={gameVersion}
            className="mm-input"
            aria-label="Game version"
            required
            onChange={(e) => {
              setGameVersion(e.target.value);
            }}
          >
            {[...minecraftVersions.releases, ...minecraftVersions.snapshots].map((v) => (
              <option value={v} key={v}>
                {v}
              </option>
            ))}
          </select>

          <select
            name="modloader"
            value={modLoader}
            className="mm-input"
            aria-label="Mod loader"
            onChange={(e) => {
              setModLoader(e.target.value as ModLoader);
            }}
          >
            <option value="quilt">Quilt</option>
            <option value="fabric">Fabric</option>
            <option value="forge">Forge</option>
            <option value="neoforge">NeoForge</option>
          </select>
        </div>

        <h2 className="mt-12 text-sm font-bold tracking-tight text-neutral-700 dark:text-neutral-300">
          Exported instance from MultiMC / Prism Launcher
        </h2>

        <div className="-mt-2 flex items-center gap-x-4">
          <label>
            <div
              role="button"
              className={twMerge(
                buttonVariants({
                  className: "flex cursor-auto hover:cursor-pointer",
                }),
              )}
            >
              <PaperclipIcon className="block h-5 w-5" />
              <span>Choose file</span>
            </div>

            <input
              name="mod-zip"
              type="file"
              className="sr-only"
              accept=".zip"
              required
              onChange={(e) => {
                setInstanceFile(e.target.files?.item(0) ?? null);
              }}
            />
          </label>

          {instanceFile && <span className="text-lg font-medium">{instanceFile.name}</span>}
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            className="rounded-sm bg-indigo-500"
            name="use-metadata"
            id="checkbox-use-metadata"
            checked={useMetadata}
            onChange={(e) => {
              setUseMetadata(e.target.checked);
            }}
          />
          <label htmlFor="checkbox-use-metadata">Use metadata generated by Prism?</label>
        </div>

        <NewSubmitButton submitting={submitting} disabled={sess.status === "loading" || submitting} />
      </form>

      {submitting && <ProgressOverlay label="Searching for mods..." {...progress} />}
    </GlobalLayout>
  );
};

export default PrismImportPage;
