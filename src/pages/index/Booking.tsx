import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import BookingImage from "../../assets/booking_dental.webp";
import Map from "../../assets/icons/map.svg";
import CalendarReact from "../../components/Calendar";
const Booking: React.FC = () => {
  return (
    <main id="Booking">
      <div className="flex justify-center flex-col items-center mt-8 px-8 pb-16">
        <h1 className="text-black text-4xl font-bold font-poppins mb-4">
          ¡Agenda con nosotros!{" "}
        </h1>
        <h3 className="text-pink-600 font-pompiere text-4xl font-normal">
          Selecciona el día y hora para empezar tu transformación dental{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
          <div>
            <img
              src={BookingImage}
              alt={`Booking ${BookingImage}`}
              className="w-auto h-[550px] rounded-xl"
            />
          </div>
          <div className="w-[320px]">
            <h1 className="text-black text-xl font-medium font-poppins">
              CREAR CITA DENTAL{" "}
            </h1>
            <div className="flex gap-4 mt-2">
              <img src={Map} className="w-9 h-9 relative" alt="map-icon" />
              <h1 className="text-black text-xl font-light font-poppins">
                Calle frida kahlo 10410, Tijuana, Mexico{" "}
              </h1>
            </div>
            <h1 className="text-pink-600 text-xs font-light font-poppins mt-4">
              Event time zone: America/Tijuana GMT-07:00
            </h1>
            <div className="flex gap-4 mt-2">
              <CalendarReact />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Booking;
