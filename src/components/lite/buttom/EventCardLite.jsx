import React from 'react'

const EventCardLite = ({ event }) => {
    return (
        <div className="flex overflow-hidden relative flex-col px-4 pt-4 pb-2.5 aspect-[0.41]">
            <img
                src={event.backgroundImage}
                alt=""
                className="object-cover absolute inset-0 size-full"
            />
            <img
                src={event.eventImage}
                alt={event.name}
                className="w-full shadow-2xl aspect-[0.56] relative z-10"
            />
            <h3 className="relative self-center mt-12 text-lg leading-7 capitalize max-md:mt-10">
                {event.name}
            </h3>
            <div className="flex relative gap-1.5 justify-between self-center mt-4 uppercase">
                <div>{event.date}</div>
                <div className="flex gap-1">
                    <div>{event.day}</div>
                    <div className="shrink-0 w-px bg-black border border-black border-solid h-[13px]" />
                    <div>{event.time}</div>
                </div>
            </div>
            <div className="relative mt-5 leading-5 text-gray-600">
                {event.location}
            </div>
            <div className="relative justify-center px-11 py-3 mt-5 text-sm text-white capitalize bg-zinc-900 max-md:px-5">
                {event.collection}
            </div>
        </div>
    )
}

export default EventCardLite