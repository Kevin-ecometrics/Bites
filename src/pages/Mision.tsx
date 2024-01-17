import Card from "../components/Card";
import dataCard from "../datas/CardInformation";
import poligono from "../assets/poligon.svg";
import poligono2 from "../assets/Polygon 2.svg";
function Mision() {
  return (
    <main className="bg-pink-600 bg-opacity-5">
      <section className=" my-12 h-screen">
        {/* Div de Titulo y subtitulo */}
        <div className="flex flex-col py-16 items-center justify-center">
          <h1 className="text-base font-normal font-poppins text-pink-500">
            Lorem ipsum dolor sit.
          </h1>
          <p className="mt-3 text-black text-5xl font-normal font-poorstory">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic.
          </p>
        </div>
        {/* Div de las cards en 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-[1240px] h-auto mx-auto">
          {dataCard.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-blue-400 h-32 w-[500px] text-white items-center flex justify-center relative">
          <h1 className="w-96 text-center font-poorstory text-4xl">Lorem ipsum dolor sit amet</h1>
          <img
            src={poligono}
            className="transform translate-y-[85px] absolute"
            alt={`Poligon from CardView element: ${poligono}`}
          />
        </div>
        <div className="bg-pink-600 h-32 w-[500px] text-white items-center flex justify-center relative">
        <h1 className="w-96 text-center font-poorstory text-4xl">Lorem ipsum dolor sit amet</h1>
        <img
            src={poligono2}
            className="transform translate-y-[85px] absolute"
            alt={`Poligon from CardView element: ${poligono2}`}
          />
        </div>
      </div>
    </main>
  );
}

export default Mision;
