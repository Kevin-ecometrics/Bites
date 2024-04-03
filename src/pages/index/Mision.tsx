import Card from "../../components/Card";
import dataCard from "../../datas/CardInformation";
function Mision() {
  return (
    <main>
      <div className="flex flex-col py-0 lg:py-16 items-center justify-center">
        <h1 className="text-7xl font-semibold font-pompiere text-pink-500 text-center">
          2,000
        </h1>
        <p className="mt-3 text-black text-lg md:text-3xl font-light font-poppins mb-16 text-center">
          Pacientes con una sonrisa brillante{" "}
        </p>
        <h1 className="text-base font-normal text-center font-poppins text-pink-500">
          Contamos con servicios altamente especializados para que obtengas la
          sonrisa que deseas{" "}
        </h1>
        <p className="mt-3 text-black text-lg md:text-5xl font-normal font-poorstory">
          Estética Dental Personalizada
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto mb-16 px-8 ">
        {dataCard.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            // paragraph={card.paragraph}
          />
        ))}
      </div>
    </main>
  );
}

export default Mision;
