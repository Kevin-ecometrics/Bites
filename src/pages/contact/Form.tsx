import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ContactForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center my-16 text-[#6BBAE9] mb-8 font-poppins font-normal text-2xl">
        Contacte con nosotros
      </h1>
      <h1 className="text-center mb-8 font-pompiere font-normal text-6xl">
        ¿AÚN TIENE ALGUNA PREGUNTA?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email Address" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input type="text" placeholder="Phone Number" />
        <Input type="text" placeholder="Subject" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
        <textarea
          placeholder="Write Message"
          className="bg-[#D9D9D9] outline-none shadow-none w-[675px] mt-4 border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          required
        ></textarea>
      </div>
      <Button
        name="Send Message"
        className="bg-[#FE81BD] text-white py-2 px-6 mb-8 rounded-3xl hover:bg-[#fc6fb3]"
      />
    </div>
  );
};

export default ContactForm;
