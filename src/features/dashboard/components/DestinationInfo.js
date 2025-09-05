import locationicon from '../../../assets/images/location.svg';
import locationFilledIcon from '../../../assets/images/location-filled.svg';
import starIcon from '../../../assets/images/star.svg';
import starFilled from '../../../assets/images/star-filled.svg';

const DestinationInfo = ({destination, absolute = false}) => {
    return (
        <div className={`left-4 bottom-4 ${absolute ? 'absolute text-white' : ''}`}>
            <div className={`font-bold mb-2 ${!absolute ? 'mt-4' : ''}`}>{destination.name}</div>
            <div className={`${!absolute ? 'color-light-green': ''}`}>
                <div className='flex'>
                    {absolute ? <img src={locationicon} alt="location-icon" className='mr-2' />
                    : <img src={locationFilledIcon} alt="location-icon" className='mr-2' />}
                    {destination.location}
                </div>
                <div className='flex'>
                    {absolute ? <img src={starIcon} alt="ratings" className='mr-2' /> :
                    <img src={starFilled} alt="ratings" className='mr-2' />}
                    {destination.rating}&nbsp;
                    ({destination.noOfReviews})
                </div>
            </div>
            {!absolute && <div className='mt-4'>{destination.description}</div>}
        </div>
    )
}

export default DestinationInfo;