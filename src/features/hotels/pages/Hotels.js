import background from '../../../assets/images/hotel-booking-layout.jpeg';
import HotelBookingWidget from '../components/HotelBookingWidget';
import HotelResults from './HotelResults';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { hotelFiltersConfig } from '../../../shared/filters/config/hotelFiltersConfig';
import { FilterSidebar } from '../../../shared/filters/components/FilterSidebar/FilterSidebar';

const Hotels = () => {

    // const { data: hotelList, error, isLoading } = useQuery({
    //     queryKey: ["hotels"],
    //     queryFn: async () => {
    //     const res = await fetch("http://localhost:8080/api/hotels");
    //     console.log('res', res);
    //     if (!res.ok) throw new Error("Network error");
    //     return res.json();
    //     },
    // });

    const [hotelList, setHotelList] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            const res = await fetch("http://localhost:8080/api/hotels");
            const hotelList = await res.json();
            setHotelList(hotelList);
        }
        fetchHotels();
    }, []);

    const handleOnChange = () => {
        console.log('on change');
    }

    return (
         <div className="w-5/6 mx-auto bg-[#f7f7f7] p-12 flex" style={{overflowY: 'auto'}}>
            {/* <div className="w-full h-3/4 grid grid-cols-2 bg-white rounded-[10px] relative">
                <div className="overflow-hidden">
                      <img src={background} alt="hotel booking" className="h-full w-full object-cover rounded-l-[10px]"/>  
                </div>
                <div className="p-[5rem] bg-gray-50 rounded-r-[10px]">
                    <div className="text-4xl font-semibold">Experience something new every moment</div>
                    <p className="text-xl text-[#9c9c94] mt-4">Escape to a place where you can relax and unwind, rejuvinate and reconnect.</p>
                </div>
                <HotelBookingWidget/>
            </div> */}
            {/* <div> */}
                <FilterSidebar config={hotelFiltersConfig} onChange={handleOnChange}/>
            {/* </div> */}
             <div className='mt-8'>
                {hotelList && <div className='px-6 font-bold text-xl'>{hotelList?.length} available hotels</div>}
                <HotelResults hotelList={hotelList} />
            </div>
        </div>
    )
}

export default Hotels;


