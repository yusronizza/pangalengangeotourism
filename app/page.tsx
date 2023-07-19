import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[url('/home.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex  justify-center items-center bg-orange-800/10 backdrop-brightness-[.25]">
          <span className="text-white text-4xl w-1/2 text-center">
            Pangalengan Geotourism
          </span>
        </div>
      </div>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="w-full bg-white p-10 text-black">
        <div className="flex">
          <div className="w-1/2 p-5">
            <div className="text-2xl">Pertunjukan Seni</div>
            <div>Deskripsiapayta</div>
          </div>
          <div className="w-1/2 p-5">Hai</div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-5">Gambar</div>
          <div className="w-1/2 p-5 text-2xl">UMKM Expo</div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-5 text-2xl">Program Kerja</div>
          <div className="w-1/2 p-5">Hai</div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-5">Hai</div>
          <div className="w-1/2 p-5 text-2xl">Tempat Wisata</div>
        </div>
      </div>
    </>
  );
}
