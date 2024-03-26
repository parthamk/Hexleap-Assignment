import React, { useState } from 'react'
import SportCard from './dark/Top/SportCard'
import AdCard from './dark/Top/AdCard';
import EventCard from './dark/Buttom/EventCard'
import { sports } from './dark/Top/SportsData';
import { events } from './dark/Buttom/EventsData';
import prevbtn from '../assets/img/prevbtn.svg'
import backbtn from '../assets/img/backbtn.svg'


const HomeDark = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === events.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <div  style={{ backgroundColor: "#292B32" }}>
            <section className="flex flex-col px-5">
                <h2 className="w-full text-2xl font-bold text-white max-md:max-w-full">Sports</h2>
                <div className="mt-2 w-full bg-indigo-400 border-2 border-indigo-400 border-solid min-h-[2px] max-md:max-w-full" />
                <div className="flex gap-3.5 mt-6 max-md:flex-wrap">
                    {sports.map((sport, index) => (
                        <SportCard key={index} sport={sport} />
                    ))}
                    <AdCard />
                </div>
                <button className="justify-center self-center px-8 py-2.5 mt-12 text-sm font-semibold leading-7 text-white bg-blue-500 rounded shadow-sm max-md:px-5 max-md:mt-10">
                    See More
                </button>
            </section>
            {/* Events */}
            <section className="flex flex-col items-center px-20 py-16 text-sm text-white max-md:px-5">
                <h2 className="text-5xl font-bold leading-[52.5px] max-md:max-w-full max-md:text-4xl">
                    Collection Spotlight
                </h2>
                <p className="mt-6 leading-6 text-center max-md:max-w-full">
                    Discover extraordinary moments with our Spotlight Collection
                    metatickets—exclusive access to premium events for an unforgettable
                    experience. Grab yours today!
                </p>
                <div className="flex gap-5 self-stretch mt-14 w-full font-medium text-center max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <img
                        src={prevbtn}
                        alt=""
                        className="shrink-0 my-auto aspect-[0.76] w-[37px] cursor-pointer"
                        onClick={goToPrevious}
                    />
                    <div className="flex flex-auto gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                        {events.map((event, index) => (
                            <div key={index} className={index === currentIndex ? 'highlight-class' : ''}>
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                    <img
                        src={backbtn}
                        alt=""
                        className="shrink-0 my-auto aspect-[0.76] w-[37px] cursor-pointer"
                        onClick={goToNext}
                    />
                </div>
            </section>
        </div>
        
    )
}

export default HomeDark