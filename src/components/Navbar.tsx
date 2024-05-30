import logo from "../assets/Bites Creadores de Sonrisas transforma y cuida de tu salud dental.png";
import phone from "../assets/icons/Book an appointment with the top aesthetic dentist in Tijuana.svg";
import facebook from "../assets/icons/Find us in Facebook as Bites Creadores de Sonrisas.svg";
import instagram from "../assets/icons/Unete a la familia Bites Síguenos en Instagram para más contenido.svg";
function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4 gap-24">
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
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/galeria"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Galería
              </a>
            </li>
            <li>
              <a
                href="/servicios"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contacto
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
                <img
                  src={phone}
                  className=""
                  alt="Call 663 324 9611 to transform your smile  "
                  title="Call 663 324 9611 to transform your smile  "
                />
                <a
                  target="_blank"
                  href="https://wa.me/+526633249611/?text=Quiero obtener mas información sobre sus servicios."
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  663 324 9611
                </a>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
