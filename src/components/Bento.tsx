import "photoswipe/dist/photoswipe.css";
import foto1 from "../assets/foto.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.png";
import foto5 from "../assets/hero_background.png";
import foto6 from "../assets/info2.png";
import foto7 from "../assets/info1.png";
import foto8 from "../assets/parallax.webp";
import foto9 from "../assets/foto9.jpg";
import foto10 from "../assets/foto10.jpg";
import foto11 from "../assets/foto11.jpg";
import foto12 from "../assets/foto12.webp";
import { Gallery, Item } from "react-photoswipe-gallery";

const BentoGrid: React.FC = () => {
  const photos = [
    {
      src: foto1,
      width: 512,
      height: 512,
      id: "first-pic",
    },
    {
      src: foto2,
      width: 512,
      height: 512,
      id: "second-pic",
    },
    {
      src: foto3,
      width: 512,
      height: 512,
      id: "third-pic",
    },
    {
      src: foto4,
      width: 512,
      height: 512,
      id: "fourth-pic",
    },
    {
      src: foto5,
      width: 728,
      height: 568,
      id: "fifth-pic",
    },
    {
      src: foto7,
      width: 728,
      height: 568,
      id: "seventh-pic",
    },
    {
      src: foto8,
      width: 728,
      height: 568,
      id: "eighth-pic",
    },
    {
      src: foto6,
      width: 728,
      height: 568,
      id: "sixth-pic",
    },
    {
      src: foto12,
      width: 728,
      height: 568,
      id: "sixth-pic",
    },
    {
      src: foto10,
      width: 728,
      height: 568,
      id: "sixth-pic",
    },
    {
      src: foto11,
      width: 728,
      height: 568,
      id: "sixth-pic",
    },
    {
      src: foto9,
      width: 728,
      height: 568,
      id: "sixth-pic",
    },
  ];

  return (
    <div
      className="flex items-center justify-center"
      style={{ backgroundColor: "rgba(231, 35, 129, 0.7)" }}
    >
      <div className="mx-48 my-32 z-10">
        <div className="grid grid-cols-3 gap-4">
          <Gallery id="my-gallery" withCaption>
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`rounded-xl ${
                  i === 0
                    ? "row-span-2"
                    : i === 1
                      ? "row-span-2"
                      : i === 2
                        ? "row-span-1"
                        : i === 3
                          ? "row-span-1"
                          : i === 4
                            ? "row-span-1"
                            : i === 5
                              ? "row-span-2"
                              : i === 6
                                ? "row-span-1"
                                : i === 7
                                  ? "row-span-2"
                                  : i === 8
                                    ? "row-span-2"
                                    : i === 9
                                      ? "row-span-2"
                                      : i === 10
                                        ? "row-span-2"
                                        : i === 11
                                          ? "row-span-2"
                                          : ""
                }`}
              >
                <Item
                  original={photo.src}
                  thumbnail={photo.src}
                  width={photo.width}
                  height={photo.height}
                  id={photo.id}
                  caption={photo.src}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={photo.src}
                      className="size-full object-cover rounded-xl p-1 transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  )}
                </Item>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
