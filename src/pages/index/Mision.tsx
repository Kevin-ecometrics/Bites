import Card from "../../components/Card";
import { useCardData } from "../../datas/CardInformation";
function Mision() {
  const dataCard = useCardData();

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto mb-16 px-8">
        {dataCard.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            alt={card.alt}
            // paragraph={card.paragraph}
          />
        ))}
      </div>
    </main>
  );
}

export default Mision;
