import searchIcon from './assets/images/search.svg';
import bellIcon from './assets/images/bell.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import BestDestinationcard from './BestDestinationCard';
import forest from './assets/images/forest.jpeg';
import forest1 from './assets/images/forest-1.jpeg';
import forest2 from './assets/images/forest 2.jpeg';
import location1 from './assets/images/location1.jpeg';
import location2 from './assets/images/location2.jpeg';
import mountFuji from './assets/images/mountFuji.jpeg';
import rightArrow from './assets/images/right-arrow.svg';
import cloud from './assets/images/cloud-drizzle.svg';
import { HorizontalScroll } from './destinationCard.styles';

function Destinations() {
    const mockDestinations = [
        {
            id: 1,
            name: 'Mount Forel',
            location: 'Greenland',
            rating: 4.8,
            noOfReviews: 12689,
            imgSrc: location1,
            isFavourite: false
        },
        {
            id: 2,
            name: 'Eco Camping',
            location: 'Patagonia',
            rating: 4.5,
            noOfReviews: 12689,
            imgSrc: location2,
            isFavourite: false
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false
        },
        {
            id: 1,
            name: 'Mount Forel',
            location: 'Greenland',
            rating: 4.8,
            noOfReviews: 12689,
            imgSrc: location1,
            isFavourite: false
        },
        {
            id: 2,
            name: 'Eco Camping',
            location: 'Patagonia',
            rating: 4.5,
            noOfReviews: 12689,
            imgSrc: location2,
            isFavourite: false
        },
        {
            id: 3,
            name: 'Mount Fuji',
            location: 'Japan',
            rating: 4.7,
            noOfReviews: 12689,
            imgSrc: mountFuji,
            isFavourite: false
        }
    ];
    const mockBestDestinations = [
        {
            id: 1,
            name: 'Redwood Forest',
            location: 'California',
            rating: 4.9,
            noOfReview: 122,
            imgSrc: forest,
            price: '150'
        },
        {
            id: 2,
            name: 'Sahale Glacier Camp',
            location: 'Washington',
            rating: 4.7,
            noOfReview: 153,
            imgSrc: forest1,
            price: '100'
        },
        {
            id: 3,
            name: 'Monteverde Forest',
            location: 'Costa Rica',
            rating: 4.5,
            noOfReview: 201,
            imgSrc: forest2,
            price: '120'
        }
    ];
    const [destinations, setDestinations] = useState(mockDestinations);
    const [bestDestinations, setBestDestinations] = useState(mockBestDestinations);
    const [searchText, setSearchText] = useState("");
    const [selectedMenu, setSelectedMenu] = useState('mostPopular');
    const navigate = useNavigate();

    const handleFavourites = (id) => {
        setDestinations((prevDestinations) => prevDestinations.map((destination) => {
            if(id === destination.id) {
                return {...destination, isFavourite: !destination.isFavourite}
            } else return destination;
        }));
    }

    const handleDetailedView = (destination) => {
        navigate(`/destination/${destination.id}`);
    }

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleMenuChange = (event) => {
        setSelectedMenu(event)
    };

    const navigateToExplore = () => {
        navigate(`/explore`);
    }

    const filteredItems = destinations?.filter((item) => 
        item.name?.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="w-full bg-[#e4f1eb99] rounded-[50px] m-4 mr-0 p-8">
            <div className="flex items-start">
                <div className="flex-col">
                    <h1 className="font-bold text-3xl mb-4">Hello, Jeremy!</h1>
                    <div className="text-base text-[#6f7174]">Let's explore the world again.</div>
                </div>
                <div className='ml-auto relative'>
                    <img className='search-icon absolute ml-2' src={searchIcon} alt="search icon"/>
                    <input type="text" className="search-input h-[50px] w-[300px] rounded-[50px] px-8" placeholder="Search destination..."
                    value={searchText} onChange={handleChange}/>
                </div>
                <span className='ml-4 bg-white rounded-[50%] h-[50px] w-[50px] flex items-center justify-center relative cursor-pointer'>
                    <img src={bellIcon} alt="bell-icon" />
                    <span className='inline-block bg-orange-500 text-white text-sm font-medium px-2 py-1 rounded-full
                    absolute top-0 right-0'>4</span>
                </span>
            </div> 

            <div className='flex justify-between mt-8 mb-4'>
                <div className='flex menu'>
                    <div className={`p-2 text-base text-[#757070] cursor-pointer ${selectedMenu === 'mostPopular' ? 'selected' : ''}`} onClick={() => handleMenuChange('mostPopular')}>Most Popular</div>
                    <div className={`p-2 text-base text-[#757070] cursor-pointer ${selectedMenu === 'bestPrice' ? 'selected' : ''}`} onClick={() => handleMenuChange('bestPrice')}>Best Price</div>
                    <div className={`p-2 text-base text-[#757070] cursor-pointer ${selectedMenu === 'nearMe' ? 'selected' : ''}`} onClick={() => handleMenuChange('nearMe')}>Near Me</div>
                </div>
                <div className='text-sm flex text-[#757070] items-center cursor-pointer' onClick={navigateToExplore}>See All
                    <img src={rightArrow} alt="right-arrow" className='w-[24px] ml-2'/>
                </div>
            </div>
            <HorizontalScroll className='flex gap-4'>
                {filteredItems.map((destination) => (
                    <DestinationCard destination={destination} onFavourite={handleFavourites} onViewDetails={handleDetailedView} showInside={true} />
                ))}
            </HorizontalScroll>
            
            <div className='flex flex-grow mt-8 gap-4'>
                <div className='bg-white rounded-[50px] w-full p-8'>
                    <div className='font-bold text-xl text-black mb-2'>Find things to do by interest</div>
                    <div className='text-sm text-[#6f7174]'>Whatever you're into, we've got it</div>
                    { bestDestinations.map((destination) => (
                    <BestDestinationcard destination={destination}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Destinations;