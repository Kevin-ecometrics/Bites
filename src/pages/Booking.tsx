import React from "react";
import BookingImage from "../assets/Info1.png";
import Map from "../assets/icons/map.svg";
import Calendar from "../assets/icons/calendar.svg";
import Input from "../components/Input";
const Booking: React.FC = () => {
  return (
    <main>
      <div className="flex justify-center flex-col items-center mt-8 px-8 pb-16">
        <h1 className="text-black text-4xl font-bold font-poppins">
          BOOK US NOW
        </h1>
        <h3 className="text-pink-600 font-pompiere text-4xl font-normal">
          Select a date and time to save your dental care day
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
          <div>
            <img src={BookingImage} alt={`Booking ${BookingImage}`} />
          </div>
          <div className="w-[320px]">
            <h1 className="text-black text-xl font-medium font-poppins">
              CREATE DENTAL APPOINTMENT
            </h1>
            <div className="flex gap-4 mt-2">
              <img src={Map} className="w-9 h-9 relative" alt="map-icon" />
              <h1 className="text-black text-xl font-light font-poppins">
                Calle frida kahlo 10410, Tijuana, Mexico
              </h1>
            </div>
            <div className="flex gap-4 mt-2">
              <img src={Calendar} className="w-9 h-9 relative" alt="map-icon" />
              <input
                type="text"
                placeholder="Choose Date"
                className="w-72 bg-[#D9D9D9] text-black outline-none rounded-lg px-4 "
              />
            </div>
            <h1 className="text-pink-600 text-xs font-light font-poppins mt-4">
              Event time zone: America/Tijuana GMT-07:00
            </h1>
            <Input type="text" id="name" placeholder="Your Name" />
            <Input type="email" id="email" placeholder="Email" />
            <Input type="phone" id="phone" placeholder="Phone" />
            <button className="bg-pink-600 text-white mt-8 rounded-3xl py-2 px-8 text-lg font-normal font-poppins hover:bg-pink-800">BOOK US NOW</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Booking;
