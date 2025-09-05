import { useState } from "react";
import { Search } from "lucide-react";
import RoundedButton from "../../../shared/UI/RoundedButton";

const HotelBookingWidget = () => {
  const [form, setForm] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    rooms: 0,
    guests: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl mx-auto absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-4/5 bg-white shadow-lg rounded-xl p-6 text-[#464444]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            placeholder="Where are you going?"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Check-In</label>
          <input
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Check-Out</label>
          <input
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Rooms</label>
          <input
            type="number"
            name="rooms"
            min="1"
            value={form.rooms}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

         <RoundedButton 
            icon={Search} 
            text="Search" 
            onClick={() => console.log("Search clicked")} 
        />
      </form>
    </div>
  );
}

export default HotelBookingWidget;
