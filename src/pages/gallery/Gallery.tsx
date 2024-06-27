import React from "react";
import BentoGrid from "../../components/Bento";
import { Helmet } from "react-helmet-async";
const Gallery: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Galeria</title>
        <meta
          name="description"
          content="Discover the art of cosmetic dentistry. From whitening to oral rehabilitation, create a healthy, dazzling smile with our oral care experts in aesthetic dentistry."
        />
        <meta
          name="keywords"
          content="cosmeticdsadsa, bestdasdsadsa, top rated,das near me, family"
        />
      </Helmet>
      <BentoGrid />
    </div>
  );
};

export default Gallery;
