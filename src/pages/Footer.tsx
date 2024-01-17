import React from "react";
import Logo from "../assets/logo.png";
import Instagram from "../assets/icons/ig.svg";
import Facebook from "../assets/icons/fb.svg";

const Footer: React.FC = () => {
  return (
    <main>
      <footer className="bg-pink-600 rounded-lg shadow dark:bg-pink-600">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="w-56 h-32" alt="Bites Logo" />
            </a>
            <ul className="flex flex-wrap gap-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  <img src={Instagram} alt="Instagram Logo" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  <img src={Facebook} alt="Facebook Logo" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
          <span className="block font-normal font-poppins text-2xl text-white sm:text-center dark:text-white">
            © 2024{" "}
            <a
              href="https://e-commetrics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-2xl font-normal font-poppins hover:text-blue-500"
            >
              Ecommetrics
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
