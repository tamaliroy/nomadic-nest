import React from "react";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import hotelplaceholder1 from '../../assets/images/hotel-placeholder-1.jpg';
import hotelplaceholder2 from '../../assets/images/hotel-placeholder-2.jpg';

const currencySymbol = (c) => {
  console.log('currency', c);
  switch ((c || "INR").toUpperCase()) {
    case "USD": return "$";
    case "EUR": return "€";
    case "GBP": return "£";
    case "INR":
    default: return "₹";
  }
};

export default function HotelCard({
  name,
  address,
  city,
  pricePerNight,
  currency,
  rating,
  description,
  primaryImageUrl,
  onBook,
}) {
  console.log('primaryImageUrl', primaryImageUrl);
  const price =
    pricePerNight != null
      ? `${currencySymbol(currency)}${pricePerNight.toLocaleString()} per night`
      : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 grid grid-cols-1 sm:grid-cols-[150px_1fr_150px] gap-4 rounded-2xl border bg-white shadow-sm hover:shadow-md overflow-hidden cursor-pointer"
    >
      <div className="relative h-44 sm:h-full flex items-center">
        <img
          src={primaryImageUrl || hotelplaceholder1}
          alt={name}
          className="h-[10rem] w-[10rem] object-cover rounded-[10px]"
          onError={(e) => ((e.currentTarget.src = hotelplaceholder1))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span>{address}{city ? `, ${city}` : ""}</span>
        </div>
        {rating && (
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.round(rating) ? "fill-current" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-1 text-gray-700">{rating.toFixed(1)}</span>
          </div>
        )}
        {description && (
          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
        )}
      </div>

      <div className="flex flex-col justify-end border-t sm:border-t-0 text-right">
        {price ? (
          <div className="text-xl font-semibold text-gray-900 text-center mb-4">{price}</div>
        ) : (
          <div className="text-sm text-gray-500">Call for price</div>
        )}
        <button
            onClick={onBook}
            className="
                inline-flex items-center justify-center
                rounded-[10px] px-6 py-2.5 font-semibold text-white
                bg-gradient-to-r from-[#5b7d70] to-[#2dd5ac]
                shadow-md transition-all duration-200
                hover:from-[#5b7d70] hover:to-[#2dd5ac]
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1
            ">
            Book Now
        </button>
      </div>
    </motion.div>
  );
}
