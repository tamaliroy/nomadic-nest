import { useState } from "react";
import chevronDown from '../../../assets/images/chevron-down.svg';
import chevronUp from '../../../assets/images/chevron-up.svg';
import expand from '../../../assets/images/expand.svg';
import avatar from '../../../assets/images/avatar.svg';
import 'react-calendar/dist/Calendar.css';
import trip2 from '../../../assets/images/amalfi-coast.jpeg';
import { NavLink, useNavigate } from "react-router-dom";
import '../styles/Timeline.css';

function Schedule() {
    const [ schedule, setSchedule ] = useState([
        {
            name: 'Amalfi Coast',
            description: 'One of the many wonderful turquoise lakes in Alberta.',
            startDate: '06/16/2025',
            endDate: '06/20/2025',
            imgSrc: trip2
        },
        {
            name: 'Niagra Falls',
            description: 'Probably the most popular natural landmark in Canada',
            startDate: '06/22/2025',
            endDate: '06/26/2025',
            imgSrc: trip2
        },
        {
            name: 'Baffin island',
            description: "Canada's largest island (5th in the world) is located in nunavut.",
            startDate: '07/01/2025',
            endDate: '07/07/2025',
            imgSrc: trip2
        }
    ]);
    const [date, setDate] = useState(new Date());
    const [iconSrc, setIconsrc] = useState(chevronDown);
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

    function navigateToTripDetails() {
        navigate('/tripDetails');
    }

    function handleClick() {
        iconSrc === chevronDown ? setIconsrc(chevronUp) : setIconsrc(chevronDown);
    };

    return (
        <div className="w-full py-8 px-4">
            <NavLink to="/userProfile">
                <div className="h-[50px] relative flex gap-4 cursor-pointer" onClick={handleClick}>
                    <div className="bg-[#e4f1eb] h-[60px] w-[60px] rounded-[50px] flex items-center justify-center">
                        <img src={avatar} alt="avatar icon" className="w-[80%] h-[80%]"/>
                    </div>
                    <div>
                        <div className="font-bold text-xl">Zeremy Zuck</div>
                        <div className="text-[#6f7174]">Travel Enthusiast</div>
                    </div>
                    <img src={iconSrc} alt="arrow icon" className="absolute top-[50%] right-0" style={{transform: 'translateY(-50%)'}}/>
                </div>
            </NavLink>
            <div className="mt-8">
                <div className="font-bold text-xl flex justify-between">
                    Upcoming trips
                    <img src={expand} alt="expand" className="cursor-pointer" onClick={navigateToTripDetails}/>
                </div>
            <div className="timeline mt-8">
                {schedule.map((item) => (
                        <div className="timeline-item card rounded-[20px] bg-white w-full flex items-center cursor-pointer p-4 pt-0 pl-8">
                            <div className='flex gap-4 flex-grow items-center justify-between'>
                                <div>
                                    <div className='text-lg font-bold mb-2'>{item.name}</div>
                                    <div className='text-sm flex text-[#757070] mb-2'>
                                    {formatDate(item.startDate, item.endDate)}
                                    </div>
                                    <div className='text-sm flex text-[#757070]'>{item.description}</div>
                                </div>
                                <img src={item.imgSrc} alt="schedule-picture" className='w-[150px] h-[80px] rounded-[10px]'/>
                                <div className="timeline-circle"></div>
                            </div>
                        </div>
                    ))}
            </div>
            </div>
            {/* <div>
                <h1>Vertical Timeline</h1>
                <Timeline events={schedule} />
            </div> */}
        </div>
    )
}

export default Schedule;