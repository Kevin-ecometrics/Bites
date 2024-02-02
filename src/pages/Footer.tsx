import React from "react";
import Logo from "../assets/logo.png";
import Instagram from "../assets/icons/ig.svg";
import Facebook from "../assets/icons/fb.svg";

const Footer: React.FC = () => {
  return (
    <main>
      <footer className="bg-pink-600 rounded-lg shadow dark:bg-pink-600">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="w-56 h-32" alt="Bites Logo" />
            </a>
            <ul className="flex flex-wrap gap-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="https://www.instagram.com/bitescreadoresdesonrisas/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline me-4 md:me-6">
                  <img
                    className="size-7"
                    src={Instagram}
                    alt="Instagram Logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/BITES.ESTETICADENTAL/?locale=es_LA"
                                target="_blank"
                                rel="noopener noreferrer" className="hover:underline me-4 md:me-6">
                  <img className="size-7" src={Facebook} alt="Facebook Logo" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
          <span className="block font-normal font-poppins text-md text-white text-center dark:text-white">
            All rights reserved by Bites Creadores de Sonrisas 2024 ©.
            <a
              href="https://bitescreadoresdesonrisas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {" "}
              Bitescreadoresdesonrisas.com
            </a>{" "}
            is powered by
            <a
              href="https://ecommetrica.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {" "}
              ecommetrica.com
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
