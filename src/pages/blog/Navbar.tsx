import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const { t, i18n } = useTranslation();

  const itemLinks: ItemLink[] = [
    { name: t("Nosotros"), link: "/nosotros" },
    { name: t("Galeria"), link: "/galeria" },
    { name: t("Servicios"), link: "/servicios" },
    { name: t("Contacto"), link: "/contacto" },
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white z-50 px-16 py-2 flex justify-evenly items-center transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {" "}
      <button
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
      </button>
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src={logo}
          className="w-[250px] h-[150px]"
          alt="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite"
          title="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite"
        />
      </Link>
      <ul className="md:flex space-x-8 hidden font-bold">
        {itemLinks.map((itemLink) => (
          <li key={itemLink.name}>
            <Link
              to={itemLink.link}
              className="text-2xl text-gray-800 hover:text-blue-500"
            >
              {itemLink.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-black"
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
      {isMenuOpen && (
        <aside
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4">
            <button
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
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
            </button>
            <ul className="mt-4 space-y-2">
              {itemLinks.map((itemLink) => (
                <li key={itemLink.name}>
                  <Link
                    to={itemLink.link}
                    className="text-xl text-gray-800 hover:text-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {itemLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </nav>
  );
});

export default Navbar;
