import React from 'react';

interface InputProps {
    type: string;
    id?: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, id, placeholder }) => {
    return (
        <div>
            <input 
                type={type} 
                id={id} 
                placeholder={placeholder} 
                className="bg-[#D9D9D9] outline-none shadow-none w-80 mt-4 border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" 
                required
            />
        </div>
    );
};

export default Input;