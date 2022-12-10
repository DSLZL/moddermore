import { useState } from 'react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/20/solid';

export const DonationMessage = () => {
  const [hide, setHide] = useState(false);

  return (
    <div
      className={clsx(
        'relative mb-12 flex flex-col gap-y-4 rounded-lg bg-zinc-100 p-6 shadow dark:bg-zinc-800',
        hide ? 'hidden' : null
      )}
    >
      <h2 className="text-lg font-bold">
        Hello! I&apos;m the creator of Moddermore.
      </h2>
      <p>
        This service is completely free for everyone to use, but running the
        services and databases behind them costs money! In addition, I have
        poured a lot of effort and time into making this possible, so please
        consider donating to keep this project sustainable and remain open for
        everyone 😇
      </p>
      <p>
        Donator perks will include{' '}
        <strong>custom slugs for your lists, mod file uploads,</strong> and more
        to come ✨
      </p>
      <a
        href="https://ko-fi.com/ryancaodev"
        className="hover:brigt rounded bg-yellow-500 px-4 py-3 text-center text-lg font-semibold text-white transition hover:brightness-90"
      >
        Donate
      </a>
      <button
        className="absolute top-0 right-0 m-4 rounded p-1"
        onClick={() => {
          setHide(true);
        }}
      >
        <XMarkIcon className="block h-5 w-5" />
      </button>
    </div>
  );
};
