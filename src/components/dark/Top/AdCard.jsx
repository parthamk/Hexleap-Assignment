import React from 'react'
import ads from "../../../assets/img/ads.png"

const AdCard = () => {
  return (
    <div className="flex flex-col flex-1 justify-center p-2.5 text-sm text-white shadow-sm bg-zinc-700">
      <div className="flex flex-col pb-11 border-0 border-emerald-800 border-solid bg-zinc-700">
        <div className="flex overflow-hidden relative flex-col items-end self-center px-16 pb-20 font-bold whitespace-nowrap aspect-square leading-[148%] w-[217px] max-md:pl-5">
          <img loading="lazy" src={ads} alt="Advertisement" className="object-cover absolute inset-0 size-full" />
          <div className="relative justify-center px-4 py-1 mb-20 bg-black max-md:mb-10">Ad</div>
        </div>
        <div className="mt-8 text-xl font-semibold">Advertisement title</div>
        <div className="mt-4 leading-5 text-neutral-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  )
}

export default AdCard