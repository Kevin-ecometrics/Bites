import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
import { useTranslation } from "react-i18next";
const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const initialState = {
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "telefono") {
      const re = /^[0-9\b]+$/;
      if (
        (e.target.value === "" || re.test(e.target.value)) &&
        e.target.value.length <= 10
      ) {
        setFormState({
          ...formState,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState) {
      toast.error("Por favor, llene todos los campos");
    } else {
      axios
        .post("https://bitescreadoresdesonrisas.com/contact/form", formState)
        .then((res) => {
          console.log(res);
        });
      setFormState(initialState);
      toast.success("Mensaje enviado correctamente");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col px-4">
      <Toaster position="top-right" />
      <h1 className="text-center my-16 mb-8 font-pompiere font-normal text-6xl">
        {t("contact.contactText1")}
      </h1>
      <h3 className="text-center text-[#6BBAE9] mb-8 font-poppins font-normal text-2xl">
        {t("contact.contactText2")}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col border px-4 rounded-lg border-gray-400 mb-4 shadow-lg shadow-gray-400"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Input
            name="nombre"
            value={formState.nombre}
            onChange={handleChange}
            type="text"
            placeholder="Nombre"
          />
          <Input
            name="email"
            value={formState.email}
            onChange={handleChange}
            type="email"
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Input
            name="telefono"
            value={formState.telefono}
            onChange={handleChange}
            type="text"
            placeholder="Número de teléfono"
          />
          <Input
            name="asunto"
            value={formState.asunto}
            onChange={handleChange}
            type="text"
            placeholder="Asunto"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-8 mb-8">
          <textarea
            name="mensaje"
            value={formState.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
            className="bg-[#D9D9D9] outline-none shadow-none w-[325px] md:w-[675px] mt-4 border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
            required
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <Button
            name="Enviar mensaje"
            type="submit"
            className="bg-[#FE81BD] text-white py-2 px-6 mb-8 rounded-3xl hover:bg-[#fc6fb3] focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
