import React from 'react'
import ads from "../../../assets/img/ads.png"

const AdCardLite = () => {
    return (
        <div className="flex flex-col flex-1 justify-center p-2.5 text-sm bg-white shadow-sm">
            <div className="flex flex-col pb-11 bg-white border-0 border-emerald-800 border-solid">
                <div className="flex overflow-hidden relative flex-col items-end self-center px-16 pb-20 font-bold whitespace-nowrap aspect-square leading-[148%] w-[217px] max-md:pl-5">
                    <img loading="lazy" src={ads} alt="Advertisement" className="object-cover absolute inset-0 size-full" />
                    <div className="relative justify-center px-4 py-1 mb-20 bg-black max-md:mb-10">Ad</div>
                </div>
                <h3 className="mx-4 mt-8 text-xl font-semibold text-slate-800 max-md:mx-2.5">Advertisement title</h3>
                <p className="mx-4 mt-4 leading-5 text-gray-600 max-md:mx-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
}

export default AdCardLite