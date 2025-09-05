import { useState } from "react";
import { Title, FlexContainer, SubTitle, GridContainer } from "../styles/explore.styles";
import DestinationCard from "../../../shared/common/DestinationCard";
import location1 from '../../../assets/images/location1.jpeg';
import location2 from '../../../assets/images/location2.jpeg';
import mountFuji from '../../../assets/images/mountFuji.jpeg';
import { useNavigate } from "react-router";

const Explore = () => {
    const navigate = useNavigate();
    const mockDestinations = [
        {
            id: 1,
            name: 'Mount Forel',
            location: 'Greenland',
            rating: 4.8,
            noOfReviews: 12689,
            imgSrc: location1,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 2,
            name: 'Eco Camping',
            location: 'Patagonia',
            rating: 4.5,
            noOfReviews: 12689,
            imgSrc: location2,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false,
            description: 'Escape to the maldives for crystal clear waters, luxurious resorts and unparalleled relaxation.'
        }
    ];

    const [ destinations, setDestinations ] = useState(mockDestinations);

    const handleDetailedView = (destination) => {
        navigate(`/destination/${destination.id}`);
    }

    return (
        <FlexContainer className="w-5/6 bg-[#e4f1eb99] rounded-[50px] m-4 mr-0 p-8">
            <Title>Explore Iconic Locations</Title>
            <SubTitle>Discover the world's top destinations that promise unforgettable experiences. From scenic wonders to cultural
                hotspots, these places are waiting for you to explore. Dive into the beauty and charm of each unique location.
            </SubTitle>

            <GridContainer className="mt-8">
                {destinations.map((destination) => 
                    <DestinationCard destination={destination} onViewDetails={handleDetailedView}/>
                )}
            </GridContainer>
        </FlexContainer>
    )
}

export default Explore;