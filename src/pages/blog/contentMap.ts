interface GridContent {
  image: string;
  title: string;
  description: string;
  link?: string;
}

interface Content {
  text: string;
  image: string;
  description: string;
  extendedTitle: string;
  link: string;
  gridContent: {
    col1?: GridContent;
    col2?: GridContent;
    col3?: GridContent;
    col4?: GridContent;
  };
  gridContent2: {
    col1?: GridContent;
    col2?: GridContent;
    col3?: GridContent;
    col4?: GridContent;
    col5?: GridContent;
    col6?: GridContent;
  };
}

export const contentMap: { [key: string]: Content } = {
  "Carillas de Porcelana": {
    text: "Contenido de nuestros blogs",
    image:
      "https://girlboss.com/cdn/shop/articles/GB_Editorial_Nov_Gifting_Etiquette_1056x640.webp?v=1672812010",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    link: "/blog/Descubre-como-trasformamos-una-sonrisa-juvenil-a-una-sonrisa-sofisticada-La-Sonrisa-de-ensueno-disenada-para-armonizar-tu-rostro",

    extendedTitle:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    gridContent: {
      col1: {
        image:
          "https://girlboss.com/cdn/shop/articles/Politics_Web_Article_672x416.png?v=1729673082",
        title: "Renueva tu sonrisa sin cirugía con carillas de porcelana",
        description:
          "En Este blog te presentamos el “behind the scenes” de una paciente cuya personalidad deseaba que se manifestara en una sonrisa resplandeciente llena de seguridad y felicidad.",
        link: "/blog/Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural",
      },
      col2: {
        image:
          "https://girlboss.com/cdn/shop/articles/Semrush_Academy_672x416.png?v=1727131914",
        title:
          "Remodela tus encías luce unos dientes más grandes y bellos, te presentamos la gingivoplastia.",
        description:
          "Te compartimos el cambio increíble y natural de nuestra paciente con ayuda de una gingivoplastia combinada con un blanqueamiento dental y resinas para corregir detalles mínimos.",
        link: "/blog/Remodela-tus-encias-luce-unos-dientes-mas-grandes-y-bellos-te-presentamos-la-gingivoplastia",
      },
      // col3: {
      //   image:
      //     "https://girlboss.com/cdn/shop/articles/GB_Editorial_April13_TarotandCareer_Feature_672x416.jpg?v=1649867671",
      //   title: "Título 3",
      //   description: "Descripción 3",
      // },
      // col4: {
      //   image:
      //     "https://girlboss.com/cdn/shop/articles/gb_editorial_nowwhat_feature-1_672x416.jpg?v=1682364037",
      //   title: "Título 4",
      //   description: "Descripción 4",
      // },
    },
    gridContent2: {
      col1: {
        image:
          "/Dental implants the ambulatory procedure that guarantees a good-looking and healthy smile.png",
        title:
          "No solo recuperes tu sonrisa; con el implante dental, elévala al siguiente nivel.",
        description:
          "Una sonrisa completa refleja nuestra salud. No solo es importante sentirnos bien, sino que funcione a la perfección.",

        link: "/blog/Con-el-implante-dental-elevala-al-siguiente-nivel",
      },
      col2: {
        image:
          "/Improve your self-confidence enjoy your smile with the top-rated dentist in Tijuana Bites Creadores de Sonrisas.png",
        title:
          "Descubre cómo obtener una sonrisa deslumbrante con blanqueamiento dental. Siéntete seguro de mostrarle a todos esa gran sonrisa",
        description:
          "El blanqueamiento dental es uno de los tratamientos dentales estéticos con los resultados más visibles de forma inmediata.",
        link: "/blog/Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental",
      },
      col3: {
        image:
          "/Composite veneers enhance your smile without shaving teeth.png",
        title:
          "Las carillas dentales de composite: La solución para una sonrisa ideal",
        description:
          "Una sonrisa espectacular está al alcance de todos. En Bites creadores de sonrisas somos fieles creyentes que mereces disfrutar cuando sonríes, y que esa misma sonrisa sea funcional al comer y hablar. Creemos que la estética y funcionalidad son esenciales para una calidad de vida digna.",
        link: "/blog/La-solucion-para-una-sonrisa-ideal",
      },
      // col4: {
      //   image:
      //     "https://girlboss.com/cdn/shop/articles/gb_editorial_adobe_express_web_article_448x288.png?v=1713388996",
      //   title: "Título 4",
      //   description: "Descripción 4",
      // },
      // col5: {
      //   image:
      //     "https://girlboss.com/cdn/shop/articles/gb_editorial_8mar2024_general_assembly_story_448x288.png?v=1709851312",
      //   title: "Título 5",
      //   description: "Descripción 5",
      // },
      // col6: {
      //   image:
      //     "https://girlboss.com/cdn/shop/articles/gb_editorial_teal_hq_448x288.jpg?v=1708978508",
      //   title: "Título 6",
      //   description: "Descripción 6",
      // },
    },
  },
  "Carillas de Composite": {
    text: "Contenido de Trends",
    image: "trends.jpg",
    description: "Descripción de Trends",
    link: "",

    extendedTitle: "Últimas tendencias en el mundo",
    gridContent: {
      col1: {
        image: "https://example.com/image1.jpg",
        title: "Título 1",
        description: "Descripción 1",
      },
      col2: {
        image: "https://example.com/image2.jpg",
        title: "Título 2",
        description: "Descripción 2",
      },
      col3: {
        image: "https://example.com/image3.jpg",
        title: "Título 3",
        description: "Descripción 3",
      },
      col4: {
        image: "https://example.com/image4.jpg",
        title: "Título 4",
        description: "Descripción 4",
      },
    },
    gridContent2: {
      col1: {
        image: "https://example.com/image1.jpg",
        title: "Título 1",
        description: "Descripción 1",
      },
      col2: {
        image: "https://example.com/image2.jpg",
        title: "Título 2",
        description: "Descripción 2",
      },
      col3: {
        image: "https://example.com/image3.jpg",
        title: "Título 3",
        description: "Descripción 3",
      },
      col4: {
        image: "https://example.com/image4.jpg",
        title: "Título 4",
        description: "Descripción 4",
      },
      col5: {
        image: "https://example.com/image5.jpg",
        title: "Título 5",
        description: "Descripción 5",
      },
      col6: {
        image: "https://example.com/image6.jpg",
        title: "Título 6",
        description: "Descripción 6",
      },
    },
  },
  "Implante dental": {
    text: "Contenido de Wellness",
    image: "wellness.jpg",
    description: "Descripción de Wellness",
    link: "",

    extendedTitle: "Bienestar y salud para una vida mejor",
    gridContent: {
      col1: {
        image: "https://example.com/image1.jpg",
        title: "Título 1",
        description: "Descripción 1",
      },
      col2: {
        image: "https://example.com/image2.jpg",
        title: "Título 2",
        description: "Descripción 2",
      },
      col3: {
        image: "https://example.com/image3.jpg",
        title: "Título 3",
        description: "Descripción 3",
      },
      col4: {
        image: "https://example.com/image4.jpg",
        title: "Título 4",
        description: "Descripción 4",
      },
    },
    gridContent2: {
      col1: {
        image: "https://example.com/image1.jpg",
        title: "Título 1",
        description: "Descripción 1",
      },
      col2: {
        image: "https://example.com/image2.jpg",
        title: "Título 2",
        description: "Descripción 2",
      },
      col3: {
        image: "https://example.com/image3.jpg",
        title: "Título 3",
        description: "Descripción 3",
      },
      col4: {
        image: "https://example.com/image4.jpg",
        title: "Título 4",
        description: "Descripción 4",
      },
      col5: {
        image: "https://example.com/image5.jpg",
        title: "Título 5",
        description: "Descripción 5",
      },
      col6: {
        image: "https://example.com/image6.jpg",
        title: "Título 6",
        description: "Descripción 6",
      },
    },
  },
  Gingivoplastia: {
    text: "Contenido de Success Stories",
    image: "success-stories.jpg",
    description: "Descripción de Success Stories",
    link: "",

    extendedTitle: "Historias de éxito inspiradoras",
    gridContent: {
      col1: {
        image: "https://example.com/image1.jpg",
        title: "Título 1",
        description: "Descripción 1",
      },
      col2: {
        image: "https://example.com/image2.jpg",
        title: "Título 2",
        description: "Descripción 2",
      },
      col3: {
        image: "https://example.com/image3.jpg",
        title: "Título 3",
        description: "Descripción 3",
      },
      col4: {
        image: "https://example.com/image4.jpg",
        title: "Título 4",
        description: "Descripción 4",
      },
    },
    gridContent2: {
      col1: {
        image: "https://example.com/image1.jpg",
        title: "Título 1",
        description: "Descripción 1",
      },
      col2: {
        image: "https://example.com/image2.jpg",
        title: "Título 2",
        description: "Descripción 2",
      },
      col3: {
        image: "https://example.com/image3.jpg",
        title: "Título 3",
        description: "Descripción 3",
      },
      col4: {
        image: "https://example.com/image4.jpg",
        title: "Título 4",
        description: "Descripción 4",
      },
      col5: {
        image: "https://example.com/image5.jpg",
        title: "Título 5",
        description: "Descripción 5",
      },
      col6: {
        image: "https://example.com/image6.jpg",
        title: "Título 6",
        description: "Descripción 6",
      },
    },
  },
};
