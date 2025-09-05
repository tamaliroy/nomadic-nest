import background from '../../../assets/images/hotel-booking-layout.jpeg';
import HotelBookingWidget from '../components/HotelBookingWidget';

const Hotels = () => {
    return (
         <div className="w-5/6 mx-auto bg-gradient-to-b from-[#d1fae5] to-[#bae6fd] p-12">
            <div className="w-full h-3/4 grid grid-cols-2 bg-white rounded-[10px] relative">
                <div className="overflow-hidden">
                      <img src={background} alt="hotel booking" className="h-full w-full object-cover rounded-l-[10px]"/>  
                </div>
                <div className="p-[5rem] bg-gray-50 rounded-r-[10px]">
                    <div className="text-4xl font-semibold">Experience something new every moment</div>
                    <p className="text-xl text-[#9c9c94] mt-4">Escape to a place where you can relax and unwind, rejuvinate and reconnect.</p>
                </div>
                <HotelBookingWidget/>
            </div>
        </div>
    )
}

export default Hotels;


