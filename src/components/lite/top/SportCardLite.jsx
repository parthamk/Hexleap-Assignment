import React from 'react'

const SportCardLite = ({ sport }) => {
    return (
        <div className="flex flex-col flex-1 p-2.5 capitalize bg-white shadow-sm">
            <img loading="lazy" src={sport.image} alt={sport.title} className="self-center aspect-[0.56] w-[stretch]" />
            <div className="mt-5 text-lg font-medium text-black">{sport.title}</div>
            <div className="flex gap-5 py-3 pr-10 pl-2.5 mt-5 rounded-sm bg-neutral-100 max-md:pr-5">
                <div className="flex flex-col flex-1">
                    <div className="text-xs text-gray-600">total events</div>
                    <div className="mt-3 text-sm font-medium text-black">{sport.events} Events</div>
                </div>
                <div className="flex flex-col flex-1 whitespace-nowrap">
                    <div className="text-xs text-gray-600">sport</div>
                    <div className="mt-2.5 text-sm font-medium text-black">{sport.category}</div>
                </div>
            </div>
        </div>
    )
}

export default SportCardLite