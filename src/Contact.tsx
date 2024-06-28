import React from "react";
import Navbar from "./components/Navbar";
import HeroContact from "./components/Hero";
import Form from "./pages/contact/Form";
import Map from "./components/Map";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Helmet>
        <title>
          This is how to contact your favorite aesthetic dentistry in tijuana{" "}
        </title>
        <meta
          name="description"
          content="to contact our nearest and best-rated dental office in Tijuana, use the number +526633249611 or find us on Instagram and facebook. We design your smile"
        />
      </Helmet>
      <Navbar />
      <HeroContact title={t("contact.contact")} />
      <Form />
      <Map />
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </main>
  );
};

export default ContactPage;
