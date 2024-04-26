import React from "react";

type ButtonProps = {
  className: string;
  name: string;
  type?: "submit";
};

const Button: React.FC<ButtonProps> = ({ className, name, type }) => {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  );
};

export default Button;
