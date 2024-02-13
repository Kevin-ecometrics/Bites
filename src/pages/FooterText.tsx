import React from "react";

const FooterText: React.FC = () => {
  return (
    <div className=" bg-[#FE81BD]">
      <hr />
      <h1 className="text-center text-white py-8 text-lg">
        All rights reserved by Bites Creadores de Sonrisas 2024 ©.
        Bitescreadoresdesonrisas.com is powered by{" "}
        <a
          href="https://ecommetrica.com/"
          className="hover:text-blue-500 hover:underline"
          target="_blank"
        >
          ecommetrica.com
        </a>
      </h1>
    </div>
  );
};

export default FooterText;
