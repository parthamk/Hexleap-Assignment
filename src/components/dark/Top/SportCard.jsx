import React from 'react'

const SportCard = ({ sport }) => {
  return (
    <div className="flex flex-col flex-1 p-2.5 capitalize shadow-sm bg-zinc-700">
      <img loading="lazy" src={sport.image} alt={sport.title} className="self-center aspect-[0.56] w-[stretch]" />
      <div className="mt-5 text-lg font-medium text-white">{sport.title}</div>
      <div className="flex gap-5 py-3 pr-11 pl-2.5 mt-5 rounded-sm bg-zinc-800 max-md:pr-5">
        <div className="flex flex-col flex-1">
          <div className="text-xs text-neutral-200">total events</div>
          <div className="mt-3 text-sm font-medium text-white">{sport.events} Events</div>
        </div>
        <div className="flex flex-col flex-1 whitespace-nowrap">
          <div className="text-xs text-neutral-200">sport</div>
          <div className="mt-2.5 text-sm font-medium text-white">{sport.category}</div>
        </div>
      </div>
    </div>
  )
  
}

export default SportCard