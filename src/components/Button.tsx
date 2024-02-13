import React from 'react';

type ButtonProps = {
    className: string;
    name: string;
};

const Button: React.FC<ButtonProps> = ({ className, name }) => {
    return (
        <button className={className}>
            {name}
        </button>
    );
};

export default Button;