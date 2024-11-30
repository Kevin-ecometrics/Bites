import { Helmet } from "react-helmet-async";
import Blog from "./pages/blog/Index";
import Footer from "./components/Footer";
import Navbar from "./pages/blog/Navbar";
function BlogPage() {
  return (
    <main>
      <Helmet>
        <title>Pagina de Blog - Bites Creadores de Sonrisas</title>
        <meta
          name="description"
          content="Descubre el arte de la odontología estética en Bites Creadores de Sonrisas. Desde blanqueamiento hasta rehabilitación oral, crea una sonrisa saludable y deslumbrante con nuestros expertos en cuidado bucal."
        />
      </Helmet>
      <Navbar />
      <Blog />
      <Footer />
    </main>
  );
}

export default BlogPage;
