import { FC } from "react";
import { useParams } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tema1 from "./blogs/tema1";
import Tema2 from "./blogs/tema2";
import Tema3 from "./blogs/tema3";
import Footer from "./components/Footer";

interface BlogContent {
  [key: string]: FC;
}

const BLOG_CONTENT: BlogContent = {
  tema1: Tema1,
  tema2: Tema2,
  tema3: Tema3,
};

const BlogPost: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();

  if (!Object.keys(BLOG_CONTENT).includes(id)) {
    return <div>Error 404: Página no encontrada</div>;
  }

  const Content =
    BLOG_CONTENT[id] || (() => <div>No se encontró el contenido del blog</div>);

  return (
    <main>
      <Navbar />
      <Hero title={id} />
      <section className="w-[80%] mx-auto md:py-16 py-8">
        <Content />
      </section>{" "}
      <Footer />
    </main>
  );
};

export default BlogPost;
