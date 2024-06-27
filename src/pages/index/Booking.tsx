import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import BookingImage from "../../assets/Anyi Manchola best cosmetic dentist founder of Bites Creadores de Sonrisas.webp";
import Map from "../../assets/icons/Nos ubicamos cerca de ti en Tijuana Baja California.svg";
import CalendarReact from "../../components/Calendar";
import { useTranslation } from "react-i18next";
const Booking: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main id="Booking">
      <div className="flex justify-center flex-col items-center mt-12 px-8 pb-16">
        <h1 className="text-black text-4xl font-bold font-poppins mb-8">
          {t("agenda")}
        </h1>
        <h2 className="text-pink-600 font-pompiere text-4xl font-normal">
          {t("seleccionaDia")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
          <div>
            <img
              src={BookingImage}
              alt="Anyi Manchola Is a colombian dentist Providing a high end service in Tijuana, Founder of Bites Creadores de Sonrisas, "
              title="Anyi Manchola Is a colombian dentist Providing a high end service in Tijuana, Founder of Bites Creadores de Sonrisas, "
              className="w-auto h-[550px] rounded-xl"
            />
          </div>
          <div className="w-[320px]">
            <h1 className="text-black text-xl font-medium font-poppins">
              {t("crearCita")}
            </h1>
            <div className="flex gap-4 mt-2">
              <img
                src={Map}
                className="w-9 h-9 relative"
                alt="Nos ubicamos en Tijuana,22010 calle Frida Kahlo 10410-404"
                title="Nos ubicamos en Tijuana,22010 calle Frida Kahlo 10410-404"
              />
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
