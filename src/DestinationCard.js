import { useState, useEffect } from 'react';
import heart from './assets/images/heart.svg';
import heartHover from './assets/images/heart-hover.svg';
import { Card } from './destinationCard.styles';
import DestinationInfo from './DestinationInfo';

function DestinationCard({destination, onFavourite, onViewDetails, showInside}) {
    const [ isHovered, setIsHovered ] = useState();
    const [ heartIcon, setHeartIcon ] = useState(destination.isFavourite ? heartHover : heart);

    useEffect(() => {
        setHeartIcon(destination.isFavourite ? heartHover : heart);
    }, [destination]);

    return (
        <div>
            <Card className='rounded-[20px] bg-[#bce2ef] min-w-[230px] h-[230px] relative cursor-pointer'
                isHovered={isHovered} 
                imgSrc={destination.imgSrc} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => onViewDetails && onViewDetails(destination)}
                >
                <span onMouseEnter={() => setHeartIcon(heartHover)}
                    onMouseLeave={() => setHeartIcon(destination.isFavourite ? heartHover : heart)}
                    onClick={(e) => {
                        e.stopPropagation();
                        onFavourite && onFavourite(destination.id)
                    }}
                    className='absolute top-4 right-4 bg-white p-2 rounded-full' style={{zIndex: 2}}>
                    <img src={heartIcon} alt="heart" />
                </span>
                { showInside && <DestinationInfo destination={destination} absolute />}
            </Card>

            { !showInside && <DestinationInfo destination={destination} />}
        </div>
    )
}

export default DestinationCard;