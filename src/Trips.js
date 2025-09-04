import { useEffect, useRef, useState } from 'react';
import addIcon from './assets/images/add.svg';
import aiIcon from './assets/images/AI-icon.svg';
import locationIcon from './assets/images/location-black.svg';
import tripImage from './assets/images/amalfi-coast.jpeg';
import calendarIcon from './assets/images/calendar.svg';
import menu from './assets/images/menu.svg';
import { useNavigate } from 'react-router-dom';

const Trips = () => {
    const tripsMock = [
        {
            id: '1',
            title: 'Summer holiday in Greece',
            startdate: '03/01/2025',
            endDate: '03/10/2025',
            locations: [
                'Santorini',
                'Fira',
                'Oia'
            ],
            imgSrc: tripImage
        },
        {
            id: '2',
            title: 'Summer in Italy',
            startdate: '03/08/2025',
            endDate: '03/14/2025',
            locations: [
                'Amalfi Coast',
                'Amalfi'
            ],
            imgSrc: tripImage
        }
    ];
    const [ openMenuId, setOpenMenuId ] = useState(false);
    const [ trips, setTrips ] = useState(tripsMock);
    const menuRef = useRef();
    const navigate = useNavigate();

    function formatDate(startDate, endDate) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        const formattedStartDate = startDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
        });
        const formattedEndDate = endDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
        });
        return formattedStartDate + '-' + formattedEndDate;
    }

    const toggleMenu = (id) => {
        setOpenMenuId(id === openMenuId ? null : id);
    }

    const navigateToTripDetails = (id) => {
        navigate(`/tripDetails/${id}`);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".menu-container")) {
                setOpenMenuId(null);
            }
          };
          document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='w-5/6 bg-[#e4f1eb99] p-8 rounded-[50px] m-4'>
            <div className='font-bold text-3xl'>My Trips</div>
            <div className='flex gap-8 my-4 justify-evenly'>
                <button className='gap-2 primary-btn'><img src={addIcon} alt="plus icon"/>Create a new trip</button>
                <button className='gap-2 primary-btn'><img src={aiIcon} alt="AI icon"/>Build a trip with AI</button>
            </div>

            <div>
                {
                    trips?.map((trip) => (
                        <div className='rounded-[20px] bg-white w-full flex items-center cursor-pointer mt-4 p-4 relative'>
                            <div className='flex gap-4 flex-grow relative' onClick={() => navigateToTripDetails(trip.id)}>
                                <img src={trip.imgSrc} alt="destination-picture" className='w-[150px] h-[150px] rounded-[10px]'/>
                                <span className='bg-white p-2 rounded-[10px] absolute bottom-2 left-2 text-xs'>In 25 days</span>
                                <div>
                                    <div className='font-bold text-xl mb-2'>{trip.title}</div>
                                    <div className='flex text-[#000000] text-sm items-center gap-2'>
                                        <img src={calendarIcon} alt="calendar icon"/>
                                        <span>{formatDate(trip.startdate, trip.endDate)}</span>
                                        <img src={locationIcon} alt="location-icon" className='mr-2'/>
                                        {trip.locations?.join(', ')}
                                    </div>
                                </div>
                                <div className='font-bold text-xl ml-auto'></div>
                            </div>
                            <img src={menu} alt="menu" className='absolute top-4 right-4' onClick={() => toggleMenu(trip.id)}/>
                            { openMenuId === trip.id && (
                                <div ref={menuRef} style={{'zIndex': 1}} className="absolute right-4 top-4 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                                    <ul className="py-1">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Invite
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Share Trip
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold text-[#d95151]">
                                            Delete
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Trips;