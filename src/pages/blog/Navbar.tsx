import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Bites Creadores de Sonrisas transforma y cuida de tu salud dental.png";
import { useTranslation } from "react-i18next";
import Mexico from "../../assets/icons/mx.svg";
import USA from "../../assets/icons/usa.svg";

interface ItemLink {
  name: string;
  link: string;
}

const Navbar: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAsideOpen, setIsAsideOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const closeMenu = () => {
    setIsAsideOpen(false);
  };

  const { t, i18n } = useTranslation();

  const itemLinks: ItemLink[] = [
    { name: t("Nosotros"), link: "/nosotros" },
    { name: t("Galeria"), link: "/galeria" },
    { name: t("Servicios"), link: "/servicios" },
    { name: t("Contacto"), link: "/contacto" },
    { name: t("Blog"), link: "/blog" },
  ];

  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    changeLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (location.pathname === "/blog") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const isBlogRoute = location.pathname === "/blog";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 md:px-16 flex justify-evenly items-center transition-shadow duration-300 ${
        isScrolled
          ? "shadow-2xlxl bg-[#6BBAE9] md:rounded-b-full "
          : " bg-white"
      } ${isBlogRoute ? "" : ""}`}
    >
      {" "}
      {/* <button
        className="md:hidden block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="h-6 w-6 text-gray-800 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button> */}
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src={logo}
          className="md:w-[250px] md:h-[150px] h-32 w-48"
          alt="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite"
          title="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite"
        />
      </Link>
      <ul className="md:flex space-x-8 hidden ">
        {itemLinks.map((itemLink) => (
          <li key={itemLink.name}>
            <Link
              to={itemLink.link}
              className={`text-2xl hover:text-[#E72381] ${isBlogRoute ? "text- " : ""} ${isScrolled ? "text-white" : "text-black"} `}
            >
              {itemLink.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="md:block hidden">
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-black`}
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              {selectedLanguage === "en" ? (
                <>
                  <img
                    src={USA}
                    alt="USA"
                    className="h-5 w-5 inline-block mr-2"
                  />
                  English
                </>
              ) : (
                <>
                  <img
                    src={Mexico}
                    alt="Mexico"
                    className="h-5 w-5 inline-block mr-2"
                  />
                  Español
                </>
              )}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  onClick={() => handleLanguageChange("es")}
                  className="block px-4 py-2 text-sm text-gray  00 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <img
                    src={Mexico}
                    alt="Mexico"
                    className="h-5 w-5 inline-block mr-4"
                  />
                  Español
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <img
                    src={USA}
                    alt="USA"
                    className="h-5 w-5 inline-block mr-4"
                  />
                  English
                </button>
              </div>
            </div>
          )}
        </div>
      </ul>
      <div className="block md:hidden">
        <button
          onClick={() => setIsAsideOpen(!isAsideOpen)}
          className="p-2 rounded-md"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isAsideOpen && (
          <aside
            className={`fixed inset-y-0 right-0 z-50 flex transform transition-transform duration-300 ease-in-out`}
          >
            <div className="w-64 bg-white p-4 rounded-l-lg shadow-lg">
              <div className="flex justify-end">
                <svg
                  onClick={closeMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <ul className="space-y-4 py-8">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/nosotros"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    {t("Nosotros")}
                  </a>
                </li>
                <li>
                  <a
                    href="/galeria"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    {t("Galeria")}
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    {t("Servicios")}
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    {t("Contacto")}
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Blog
                  </a>
                </li>
                <li className="flex justify-start items-center gap-4">
                  <a
                    href="https://www.facebook.com/BitesCreadoresdeSonrisas?paipv=0&eav=AfbFN_EmLnHWZqpgQdEcdbdfT7IPGoRkKChsOE6vEE-FfKTDfAY_00giyhfeu0M9wFE&_rdr"
                    target="_blank"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#FE81BD"
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/bitescreadoresdesonrisas/"
                    target="_blank"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#FE81BD"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="py-8">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {selectedLanguage === "en" ? (
                    <>
                      <img
                        src={USA}
                        alt="USA"
                        className="h-5 w-5 inline-block mr-2 text-black"
                      />
                      English
                    </>
                  ) : (
                    <>
                      <img
                        src={Mexico}
                        alt="Mexico"
                        className="h-5 w-5 inline-block mr-2 text-black"
                      />
                      Español
                    </>
                  )}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-5 text-center px-2">
                All rights reserved by Bites Creadores de Sonrisas 2024 ©.
                Bitescreadoresdesonrisas.com is powered by &nbsp;
                <a
                  href="https://ecommetrica.com/"
                  className="font-bold hover:underline hover:text-[#FE81BD]"
                >
                  ecommetrica.com
                </a>
              </div>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={() => handleLanguageChange("es")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      <img
                        src={Mexico}
                        alt="Mexico"
                        className="h-5 w-5 inline-block mr-4"
                      />
                      Español
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      <img
                        src={USA}
                        alt="USA"
                        className="h-5 w-5 inline-block mr-4"
                      />
                      English
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={closeMenu}
            ></div>
          </aside>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
