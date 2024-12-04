import React, { useState } from "react";
import { contentMap } from "./contentMap";
import Form from "./Form";

const Blog: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>(
    "Carillas de Porcelana"
  );
  const [selectedContent, setSelectedContent] = useState<string>(
    contentMap["Carillas de Porcelana"].text
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const handleItemClick = (title: string) => {
    setSelectedTitle(title);
    setSelectedContent(contentMap[title].text);
    setCurrentPage(1); // Resetear a la primera página cuando se cambia de tema
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalItems = Object.keys(contentMap[selectedTitle].gridContent2).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Object.keys(
    contentMap[selectedTitle].gridContent2
  ).slice(startIndex, endIndex);

  return (
    <div className="mt-48 px-8 md:px-0">
      <section className="mx-auto container">
        <strong className="text-3xl">
          Explora nuestros blogs y aprende más sobre nuestros servicios
        </strong>
        {/* <strong className="text-3xl">
          {contentMap[selectedTitle].extendedTitle}
        </strong>
        <ul className="flex mt-8">
          {Object.keys(contentMap).map((title) => (
            <li
              key={title}
              className={`mr-4 hover:underline ${selectedTitle === title ? "font-bold" : ""} cursor-pointer`}
              onClick={() => handleItemClick(title)}
            >
              {title}
            </li>
          ))}
        </ul> */}
        <div className="mt-8">
          <a className="cursor-pointer " href={contentMap[selectedTitle].link}>
            <img src={contentMap[selectedTitle].image} alt={selectedTitle} />
          </a>
          <h2 className="text-4xl py-4">{selectedContent}</h2>
          <p className="text-2xl mb-8">
            {contentMap[selectedTitle].description}
          </p>
          <p className="text-2xl mb-4">
            {contentMap[selectedTitle].extendedTitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(contentMap[selectedTitle].gridContent).map(
              (colKey) => {
                const colContent =
                  contentMap[selectedTitle].gridContent[
                    colKey as keyof (typeof contentMap)["Carillas de Porcelana"]["gridContent"]
                  ];
                return (
                  <div key={colKey}>
                    <div className="w-full bg-cover overflow-hidden cursor-pointer">
                      <a href={colContent?.link}>
                        <img
                          src={colContent?.image}
                          alt={colContent?.title}
                          className="transform w-full
                        transition duration-500 
                        hover:scale-110"
                        />
                      </a>
                    </div>

                    <h3 className="text-2xl font-bold">{colContent?.title}</h3>
                    <p className="text-lg">{colContent?.description}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <Form />
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentItems.map((colKey) => {
            const colContent =
              contentMap[selectedTitle].gridContent2[
                colKey as keyof (typeof contentMap)["How To"]["gridContent2"]
              ];
            return (
              <div key={colKey}>
                <div className=" overflow-hidden cursor-pointer">
                  <a href={colContent?.link}>
                    <img
                      src={colContent?.image}
                      alt={colContent?.title}
                      className="transform w-full transition duration-500 hover:scale-110"
                    />
                  </a>
                </div>
                <h3 className="text-2xl font-bold">{colContent?.title}</h3>
                <p className="text-lg">{colContent?.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <div className="flex justify-center items-center py-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 border ${currentPage === index + 1 ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>{" "}
    </div>
  );
};

export default Blog;
