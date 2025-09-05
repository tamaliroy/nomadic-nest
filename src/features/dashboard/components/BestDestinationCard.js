import locationicon from '../../../assets/images/location-black.svg';
import starIcon from '../../../assets/images/star-black.svg';

function BestDestinationcard({destination}) {
    return (
        <div className='rounded-[20px] bg-white w-full h-[100px] flex items-center cursor-pointer'>
            <div className='flex gap-4 flex-grow items-center'>
                <img src={destination.imgSrc} alt="destination-picture" className='w-[80px] h-[60px] rounded-[10px]'/>
                <div>
                    <div className='font-bold mb-2'>{destination.name}</div>
                    <div className='flex text-[#000000] text-sm'>
                        <img src={locationicon} alt="location-icon" className='mr-2'/>
                        {destination.location}
                        <img src={starIcon} alt="ratings" className='ml-4 mr-2'/>
                        {destination.rating} ({destination.noOfReview} Reviews)
                    </div>
                </div>
                <div className='font-bold text-xl ml-auto'>${destination.price}/day</div>
            </div>
        </div>
    )
}

export default BestDestinationcard;