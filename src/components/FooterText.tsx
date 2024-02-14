import React from "react";

type FooterTextProps = {
  className: string;
  hoverColor: string;
};
const FooterText: React.FC<FooterTextProps> = ({ className, hoverColor }) => {
  return (
    <div className={`${className}`}>
      <hr />
      <h1 className="text-center text-white py-8 text-lg">
        All rights reserved by Bites Creadores de Sonrisas 2024 ©.
        Bitescreadoresdesonrisas.com is powered by{" "}
        <a
          href="https://ecommetrica.com/"
          className={`${hoverColor} hover:underline`}
          target="_blank"
        >
          ecommetrica.com
        </a>
      </h1>
    </div>
  );
};

export default FooterText;
