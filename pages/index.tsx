import { PlusCircleIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';

import Link from 'next/link';

import GlobalLayout from '~/components/GlobalLayout';
import Navbar from '~/components/Navbar';
import { useCantHaveAuth } from '~/hooks/useRequireAuth';

const Home: NextPage = () => {
  useCantHaveAuth();

  return (
    <GlobalLayout
      title="Moddermore"
      titleSuffix={false}
      displayTitle={false}
      isLandingPage
    >
      <div className="min-w-screen relative mb-16 flex min-h-screen flex-col items-start px-12">
        <Navbar isLandingPage />

        <div className="mb-20 flex flex-col">
          <h2 className="mb-4 text-4xl font-bold">Moddermore</h2>
          <h2 className="mb-10 text-3xl font-semibold">
            Share the mods you use with anyone
          </h2>
          <h3 className="text-lg font-medium">
            Moddermore supports mods from both Modrinth and CurseForge. Import
            either manually, from Ferium, or from a folder of mod files. Exports
            are also available for download via ZIPs or .mrpacks.
          </h3>
        </div>

        <Link href="/new">
          <a className="primaryish-button px-6 py-4 text-xl">
            <PlusCircleIcon className="block h-8 w-8" />
            <span>Create a new list</span>
          </a>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 1080"
          className="absolute inset-0 -z-10 overflow-hidden brightness-75"
        >
          <rect width="1920" height="1080" fill="#22194d"></rect>
          <g clipPath='url("#SvgjsClipPath1042")'>
            <g transform="matrix(1.15,0,0,1.15,-139.57090358734126,-81)">
              <path
                d="M0,-1080C-0.1002405028646649,-999.1513447766106,-4.964117481288876,-751.527224402868,-0.6014430171879894,-594.9080686596636C3.7612314469128973,-438.28891291645925,23.73412460002074,-293.774768317517,26.17604678460532,-140.28506554077362C28.6179689691899,13.204637235969756,27.95702470317743,178.51765917124158,14.050090090319486,326.03014800079666C0.1431554774615389,473.54263683035174,-48.98721207654996,588.7910612800711,-57.26556089254237,744.7898674365568C-65.54390970853477,900.7886735930426,-42.810368208903505,1109.3971624452663,-35.620002805634954,1262.022984939711C-28.4296374023664,1414.6488074341557,-20.06003560720354,1510.881966559843,-14.123368472931048,1660.5448024032246C-8.186701338658555,1810.2076382466062,-2.353894745488508,2076.7574670672043,0,2160L 1920 2160 L 1920 -1080 Z"
                fill='url("#SvgjsLinearGradient1038")'
              ></path>
              <path
                d="M480,-1080C475.7669104800109,-953.6235724396454,458.5267532528226,-601.3841290698355,454.6014628800652,-321.74143463787203C450.6761725073078,-42.0987402059086,444.58557160413574,319.5298141801939,456.4482577634558,597.8561665917805C468.31094392277583,876.1825190033671,521.8522894632281,1087.859374263611,525.7775798359854,1348.2166798316475C529.7028702087428,1608.573985399684,487.6295966393309,2024.7027799719413,480,2160L 1920 2160 L 1920 -1080 Z"
                fill='url("#SvgjsLinearGradient1039")'
              ></path>
              <path
                d="M960,-1080C955.6055367531089,-973.206561466244,943.5033855159271,-650.401232104415,933.6332205186534,-439.23936879746407C923.7630555213797,-228.07750549051306,886.8865768487968,-21.371522146565837,900.7790100163575,186.971179841706C914.6714431839181,395.31388182997784,996.524448485955,599.3528649283815,1016.9878195240174,810.8168431321669C1037.4511905620798,1022.2808213359524,1033.057206165401,1230.8911895864464,1023.5592362447316,1455.7550490644187C1014.061266324062,1680.618908542391,970.5932060407886,2042.6258415107363,960,2160L 1920 2160 L 1920 -1080 Z"
                fill='url("#SvgjsLinearGradient1040")'
              ></path>
              <path
                d="M1440,-1080C1435.1657585669748,-992.7923969843389,1407.2236110932406,-708.010962217487,1410.994551401849,-556.754381906033C1414.7654917104576,-405.4978015945791,1452.8789139043347,-326.80840176871254,1462.625641851651,-172.46051813127607C1472.3723697989672,-18.112634493839607,1470.783251384942,221.22394461591497,1469.4749190857472,369.3329199185858C1468.1665867865522,517.4418952212566,1451.9914479816587,572.0795004999025,1454.7756480564808,716.1933336847487C1457.559848131303,860.307166869595,1487.5194360682608,1067.136470267973,1486.1801195346798,1234.0159190276631C1484.8408030010987,1400.8953677873533,1454.4364354441075,1563.1393460808333,1446.739748854994,1717.4700262428894C1439.0430622658807,1871.8007064049455,1441.1232914758323,2086.245004373815,1440,2160L 1920 2160 L 1920 -1080 Z"
                fill='url("#SvgjsLinearGradient1041")'
              ></path>
            </g>
          </g>
          <defs>
            <linearGradient
              x1="0.1"
              y1="0"
              x2="0"
              y2="1"
              id="SvgjsLinearGradient1038"
            >
              <stop stopColor="#22194d" offset="0"></stop>
              <stop stopColor="#19194d" offset="0"></stop>
            </linearGradient>
            <linearGradient
              x1="0.1"
              y1="0"
              x2="0"
              y2="1"
              id="SvgjsLinearGradient1039"
            >
              <stop stopColor="#4734a1" offset="0"></stop>
              <stop stopColor="#3534a1" offset="0.25"></stop>
            </linearGradient>
            <linearGradient
              x1="0.1"
              y1="0"
              x2="0"
              y2="1"
              id="SvgjsLinearGradient1040"
            >
              <stop stopColor="#8372d1" offset="0"></stop>
              <stop stopColor="#7372d1" offset="0.5"></stop>
            </linearGradient>
            <linearGradient
              x1="0.1"
              y1="0"
              x2="0"
              y2="1"
              id="SvgjsLinearGradient1041"
            >
              <stop stopColor="#ccc6ec" offset="0"></stop>
              <stop stopColor="#c6c6ec" offset="0.75"></stop>
            </linearGradient>
            <clipPath id="SvgjsClipPath1042">
              <rect width="1920" height="1080"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </GlobalLayout>
  );
};

export default Home;
