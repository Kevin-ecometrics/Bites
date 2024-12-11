import React, { useState } from "react";
import { contentMap } from "./contentMap";
import Form from "../contact/Form";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const Blog: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>("Todos los blogs");
  const [selectedContent, setSelectedContent] = useState<string>(
    contentMap["Todos los blogs"].text
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
    <div className="mt-48 px-8 font-poppins">
      <section className="mx-auto container">
        <strong className="text-3xl">
          {contentMap[selectedTitle].extendedTitle}
        </strong>
        <ul className="md:flex mt-8 hidden">
          {Object.keys(contentMap).map((title) => (
            <li
              key={title}
              className={`mr-4 hover:underline ${selectedTitle === title ? "font-bold" : ""} cursor-pointer`}
              onClick={() => handleItemClick(title)}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="md:hidden block">
          <select
            value={selectedTitle}
            onChange={(e) => handleItemClick(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {Object.keys(contentMap).map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-8">
          <div className="w-full bg-cover overflow-hidden cursor-pointer">
            <a
              className="cursor-pointer "
              href={contentMap[selectedTitle].link}
            >
              <img
                src={contentMap[selectedTitle].image}
                alt={selectedTitle}
                className="transform w-[900px]
                        transition duration-500 
                        hover:scale-110   "
              />
            </a>
          </div>
          <h2 className="text-3xl py-4 font-bold text-[#E72381]">
            {selectedContent}
          </h2>
          <p className="text-xl mb-8">
            {contentMap[selectedTitle].description}
          </p>
          <p className="text-xl mb-4">
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

                    <h3 className="text-2xl font-bold text-[#E72381]">
                      {colContent?.title}
                    </h3>
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
                <h3 className="text-2xl font-bold text-[#E72381]">
                  {colContent?.title}
                </h3>
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
      <FloatingWhatsApp
        phoneNumber="526633249611"
        accountName="Bites Creadores de Sonrisas"
        avatar="https://bitescreadoresdesonrisas.com/wp-content/uploads/2021/09/Logo-Bites-Creadores-de-Sonrisas.png"
        chatMessage="Hola, ¿en qué puedo ayudarte?"
        allowClickAway
      />
    </div>
  );
};

export default Blog;
