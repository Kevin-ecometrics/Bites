import { useState } from "react";
import logo from "../assets/Bites Creadores de Sonrisas transforma y cuida de tu salud dental.png";
import phone from "../assets/icons/Book an appointment with the top aesthetic dentist in Tijuana.svg";
import facebook from "../assets/icons/Find us in Facebook as Bites Creadores de Sonrisas.svg";
import instagram from "../assets/icons/Unete a la familia Bites Síguenos en Instagram para más contenido.svg";
import { useTranslation } from "react-i18next";
import Mexico from "../assets/icons/mx.svg";
import USA from "../assets/icons/usa.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const closeMenu = () => {
    setIsAsideOpen(false);
  };

  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="w-[250px] h-[150px]"
            alt="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite "
            title="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite "
          />
        </a>
        <div className="hidden w-screen md:block md:w-auto text-2xl font-poppins font-medium">
          <ul className="flex flex-col p-4 md:p-0 items-center border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {/* <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Inicio
              </a>
            </li> */}
            <li>
              <a
                href="/nosotros"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {t("Nosotros")}
              </a>
            </li>
            <li>
              <a
                href="/galeria"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {t("Galeria")}
              </a>
            </li>
            <li>
              <a
                href="/servicios"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {t("Servicios")}
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {t("Contacto")}
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/BitesCreadoresdeSonrisas"
                target="_blank"
              >
                <img
                  src={facebook}
                  alt="Give us a like on our Facebook page, we are the best option for dental design  "
                  title="Give us a like on our Facebook page, we are the best option for dental design  "
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bitescreadoresdesonrisas/"
                target="_blank"
              >
                <img
                  src={instagram}
                  alt="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
                  title="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
                />
              </a>
            </li>
            <li className="hidden lg:block gap-4">
              <div className="flex gap-4">
                <a
                  target="_blank"
                  href="https://wa.me/+526633249611/?text=Quiero obtener mas información sobre sus servicios."
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <img
                    src={phone}
                    className=""
                    alt="Call 663 324 9611 to transform your smile  "
                    title="Call 663 324 9611 to transform your smile  "
                  />
                </a>
              </div>
            </li>
            <li>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            </li>
          </ul>
        </div>
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
              stroke="white"
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
                </ul>
                <div className="py-8">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      </div>
    </nav>
  );
}

export default Navbar;
