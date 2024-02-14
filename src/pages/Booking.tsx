import React, { useState, FormEvent, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingImage from "../assets/Info1.png";
import Map from "../assets/icons/map.svg";
import Calendar from "../assets/icons/calendar.svg";
import Input from "../components/Input";
import { Toaster, toast } from "react-hot-toast";
import moment from "moment-timezone";
const Booking: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const initialDate = new Date();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [bookedHours, setBookedHours] = useState([]);

  initialDate.setMinutes(0);

  const minTime = new Date();
  minTime.setHours(9, 0, 0); // Set the minimum time to 9:00 AM

  const maxTime = new Date();
  maxTime.setHours(18, 0, 0); // Set the maximum time to 6:00 PM

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhone(value);
  };

  useEffect(() => {
    fetch("https://bitescreadoresdesonrisas.com/bookedHours")
      .then((response) => response.json())
      .then((data) => setBookedHours(data));
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      toast.error(
        "The phone number must be exactly 10 digits and only contain digits"
      );
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      toast.error("The name must only contain letters");
      return;
    }

    const dateInTijuana = moment(startDate).tz("America/Tijuana").format();

    const bookingData = {
      date: dateInTijuana,
      name: name,
      email: email,
      phone: phone,
    };

    const response = await fetch(
      "https://bitescreadoresdesonrisas.com/booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      setPhone("");
      setName("");
      setEmail("");
      setStartDate(new Date());
      toast.success("Your appointment has been booked successfully");
    } else {
      console.error("Error:", response.status);
    }
  };

  return (
    <main id="Booking">
      <div className="flex justify-center flex-col items-center mt-8 px-8 pb-16">
        <h1 className="text-black text-4xl font-bold font-poppins mb-4">
          ¡Agenda con nosotros!{" "}
        </h1>
        <h3 className="text-pink-600 font-pompiere text-4xl font-normal">
          Selecciona el día y hora para empezar tu transformación dental{" "}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
            <div>
              <img src={BookingImage} alt={`Booking ${BookingImage}`} />
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
              <div className="flex gap-4 mt-2">
                <img
                  src={Calendar}
                  className="w-9 h-9 relative"
                  alt="map-icon"
                />
                <DatePicker
                  selected={startDate}
                  withPortal
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={60}
                  timeCaption="time"
                  minTime={minTime}
                  maxTime={maxTime}
                  excludeTimes={bookedHours.map((time) =>
                    moment(time, "HH:mm").toDate()
                  )}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  onChange={(date) => setStartDate(date || new Date())}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSApplication0">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            d="M40.04 22v20h-32V22"
                          ></path>
                          <path
                            fill="#fff"
                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                          ></path>
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSApplication0)"
                      ></path>
                    </svg>
                  }
                  className="w-[270px] bg-[#D9D9D9] text-black outline-none rounded-lg px-4 py-2"
                />
              </div>
              <h1 className="text-pink-600 text-xs font-light font-poppins mt-4">
                Event time zone: America/Tijuana GMT-07:00
              </h1>
              <Input
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                id="name"
                placeholder="Tu nombre"
              />
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Tu correo electrónico"
              />
              <Input
                type="phone"
                id="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Tu número de teléfono"
                maxLength={10}
              />
              <button
                type="submit"
                className="bg-pink-600 text-white mt-8 rounded-3xl py-2 px-8 text-lg font-normal font-poppins hover:bg-pink-800"
              >
                AGENDA AHORA{" "}
              </button>
            </div>
          </div>
        </form>
        <Toaster position="top-right" />
      </div>
    </main>
  );
};

export default Booking;
