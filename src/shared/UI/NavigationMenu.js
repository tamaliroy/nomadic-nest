import React from 'react';
import ticket from '../../assets/images/tickets.svg';
import favourites from '../../assets/images/favourites.svg';
import messages from '../../assets/images/messages.svg';
import settings from '../../assets/images/settings.svg';
import home from '../../assets/images/home.svg';
import logout from '../../assets/images/logout.svg';
import { NavLink } from 'react-router-dom';
import { Pen } from 'lucide-react';

function NavigationMenu() {
    return (
        <div className='w-1/6 h-full'>
            <div className='font-bold text-2xl p-8 text-center'>
                {/* <img src={logo} alt="logo" /> */}
                Nomadic Nest
            </div>
            <ul className='nav-menu p-8 text-[#6f7174]'>
                <li className='selected p-4 cursor-pointer bg-[#54c4a1] rounded-full text-white flex font-bold'>
                    <NavLink to="/dashboard" className='flex'>
                        <img src={home} alt="home icon" className='mr-2' />
                        Dashboard
                    </NavLink>
                </li>
                <li className='p-4 cursor-pointer flex'>
                    <img src={ticket} alt="ticket icon" className='mr-2' />
                    My Bookings
                 </li>
                 <li className='p-4 cursor-pointer'>
                    <NavLink to="/trips" className='flex'>
                        <img src={ticket} alt="ticket icon" className='mr-2' />
                        Trips
                    </NavLink>
                 </li>
                <li className='p-4 cursor-pointer flex'>
                    <img src={favourites} alt="favourites icon" className='mr-2' />
                    Wishlist
                </li>
                <li className='p-4 cursor-pointer flex'>
                    <img src={messages} alt="messages icon" className='mr-2' />
                    Messages
                    <div className="ml-auto inline-block bg-orange-500 text-white text-sm font-medium px-2 py-1 rounded-full">
                        4
                    </div>
                </li>
                <li className='p-4 cursor-pointer flex'>
                    <Pen className='mr-2' size={16}/>
                    Write a review
                </li>
                <li className='p-4 cursor-pointer'>
                    <NavLink to="/userProfile" className='flex'>
                        <img src={settings} alt="settings icon" className='mr-2' />
                        My Profile
                    </NavLink>
                </li>
                <li className='p-4 cursor-pointer'>
                    <NavLink to="/hotels" className='flex'>
                        <img src={settings} alt="settings icon" className='mr-2' />
                        Hotels
                    </NavLink>
                </li>
                <li className='p-4 cursor-pointer absolute bottom-0'>
                    <NavLink to="/userProfile" className='flex'><img src={logout} alt="settings icon" className='mr-2' />Log Out</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;