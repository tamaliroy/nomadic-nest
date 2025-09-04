import location from './assets/images/location-black.svg';
import tripDetails from './mocks/tripsDetailsMock';
import abc from './assets/images/amalfi-coast.jpeg';

function TripDetails() {
    console.log('tripDetails', tripDetails);
    return (
        <div className="w-5/6 p-8 rounded-[50px] m-4">
           <div className='w-2/3'>
                {/* <img src={} alt="trip image"/> */}
           </div>
           <div className='w-1/3'>

           </div>
        </div>
    )
}

export default TripDetails;