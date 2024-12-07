import React from "react";

interface MenuProps {
  URL: {
    pathname: string;
  };
}

const Menu: React.FC<MenuProps> = ({ URL }) => {
  return (
    <div>
      {/* Verificar el valor de la URL y mostrar el menú correspondiente */}
      {URL.pathname ===
      "/blog/Descubre-como-trasformamos-una-sonrisa-juvenil-a-una-sonrisa-sofisticada-La-Sonrisa-de-ensueno-disenada-para-armonizar-tu-rostro" ? (
        <div>
          <strong className="text-2xl mb-6">Nuestros blogs </strong>
          {/* Primer Menú */}
          <div className="flex gap-4 border-t border-gray-300 py-8">
            <img
              src="https://imgix.bustle.com/uploads/image/2024/11/22/9a1ce370/464139536_1242095683792698_686201517551108879_n.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3119"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-xl mb-4 font-semibold">Title</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi
              </p>
            </div>
          </div>
        </div>
      ) : URL.pathname === "/blog/La-solucion-para-una-sonrisa-ideal" ? (
        <div>
          <strong className="text-2xl mb-6">Nuestros blogs </strong>
          {/* Segundo Menú */}
          <div className="flex gap-4 border-t border-gray-300 py-8">
            <img
              src="https://imgix.bustle.com/uploads/image/2024/11/22/9a1ce370/464139536_1242095683792698_686201517551108879_n.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3119"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-xl mb-4 font-semibold">Title 2</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi
              </p>
            </div>
          </div>
        </div>
      ) : URL.pathname ===
        "/blog/Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental" ? (
        <div>
          <strong className="text-2xl mb-6">Nuestros blogs </strong>
          {/* Tercer Menú */}
          <div className="flex gap-4 border-t border-gray-300 py-8">
            <img
              src="https://imgix.bustle.com/uploads/image/2024/11/14/2dab5afb/459312207_392932597184609_1904214669238524394_n-1.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.5329&fp-y=0.1047"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-xl mb-4 font-semibold">Title 3</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi
              </p>
            </div>
          </div>
        </div>
      ) : URL.pathname ===
        "/blog/Con-el-implante-dental-elevala-al-siguiente-nivel" ? (
        <div>
          <strong className="text-2xl mb-6">Nuestros blogs </strong>
          {/* Cuarto Menú */}
          <div className="flex gap-4 border-t border-gray-300 py-8">
            <img
              src="https://imgix.bustle.com/uploads/image/2024/11/19/c8010d91/20241101_samimiro_img_0198.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.4141&fp-y=0.3714"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-xl mb-4 font-semibold">Title 4</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi
              </p>
            </div>
          </div>
        </div>
      ) : URL.pathname ===
        "/blog/Remodela-tus-encias-luce-unos-dientes-mas-grandes-y-bellos-te-presentamos-la-gingivoplastia" ? (
        <div>
          <strong className="text-2xl mb-6">Nuestros blogs </strong>
          {/* Quinto Menú */}
          <div className="flex gap-4 border-t border-gray-300 py-8">
            <img
              src="https://imgix.bustle.com/uploads/image/2024/11/12/6be48854/productroundup_template-4001.jpeg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.4571&fp-y=0.4959"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-xl mb-4 font-semibold">Title 5</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi
              </p>
            </div>
          </div>
        </div>
      ) : URL.pathname ===
        "/blog/Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural" ? (
        <div>
          <strong className="text-2xl mb-6">Nuestros blogs </strong>
          {/* Sexto Menú */}
          <div className="flex gap-4 border-t border-gray-300 py-8">
            <img
              src="https://imgix.bustle.com/uploads/image/2024/11/22/9a1ce370/464139536_1242095683792698_686201517551108879_n.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3119"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-xl mb-4 font-semibold">Title 6</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
