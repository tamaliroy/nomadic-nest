import HotelCard from "../../../shared/UI/HotelCard";

export default function HotelResults({hotelList, isLoading, error}) {
  {console.log('hotelList', hotelList);}

    if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6 text-gray-500">
        <div className="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full mr-3"></div>
        Loading hotels...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Failed to load hotels: {error.message}
      </div>
    );
  }

   if (hotelList.length === 0) {
    return <div className="p-6 text-gray-600">No hotels found.</div>;
  }

  return (
    <div className="max-w-5xl p-6 flex flex-col gap-4">
      {hotelList.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} onBook={() => alert(`Booking ${hotel.name}`)} />
      ))}
    </div>
  );
}
