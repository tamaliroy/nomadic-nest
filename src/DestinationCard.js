import { useState, useEffect } from 'react';
import locationicon from './assets/images/location.svg';
import starIcon from './assets/images/star.svg';
import heart from './assets/images/heart.svg';
import heartHover from './assets/images/heart-hover.svg';

function DestinationCard({destination, onFavourite, onViewDetails}) {
    const [ isHovered, setIsHovered ] = useState();
    const [ heartIcon, setHeartIcon ] = useState(destination.isFavourite ? heartHover : heart);

    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.2), rgba(1, 1, 1, 0.2)), url(${destination.imgSrc})`,
        backgroundSize: 'cover',
        boxShadow: isHovered
        ? "0 8px 16px rgba(0, 0, 0, 0.2)"
        : "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "box-shadow 0.3s ease",
    };
    useEffect(() => {
        setHeartIcon(destination.isFavourite ? heartHover : heart);
    }, [destination]);
    return (
        <div className='cards rounded-[20px] bg-[#bce2ef] min-w-[230px] h-[230px] relative cursor-pointer' 
        style={cardStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        onClick={() => onViewDetails(destination)}>
            <span onMouseEnter={() => setHeartIcon(heartHover)}
            onMouseLeave={() => setHeartIcon(destination.isFavourite ? heartHover : heart)} 
            onClick={(e) => {
                e.stopPropagation();
                onFavourite(destination.id)
            }}
            className='absolute top-4 right-4 bg-white p-2 rounded-full'>
                <img src={heartIcon} alt="heart"/>
            </span>
            <div className='absolute left-4 bottom-4 text-white'>
                <div className='font-bold mb-2'>{destination.name}</div>
                <div className='flex'>
                    <img src={locationicon} alt="location-icon" className='mr-2'/>
                    {destination.location}
                    <img src={starIcon} alt="ratings" className='ml-4 mr-2'/>
                    {destination.rating}
                </div>
            </div>
        </div>
    )
}

export default DestinationCard;