import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import Html from "../assets/pngwing.com.png";
import Css from "../assets/pngegg.png";
import JS from "../assets/javascript-39400.png";
import ReactJs from "../assets/react.png";
import NextJs from "../assets/Next.js.png";
import Tailwind from "../assets/Tailwind_CSS_Logo.png";
import Git from "../assets/ba8u9otcvrpidtbd94kvclvgb2.png";
import TypeScript from "../assets/TypeScript.png";
import NodeJS from "../assets/NodeJS.png";
import MongoDb from "../assets/MongoDB.png";
import Linux from "../assets/linux-22618.png";
import Gimp from "../assets/gimp_circle_icon.png";
// import Solidity from "../assets/";


export default function SimpleSlider() {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Image data
  const images = [
    { src: Html, alt: "HTML" },
    { src: Css, alt: "CSS" },
    { src: JS, alt: "JavaScript" },
    { src: ReactJs, alt: "ReactJS" },
    { src: NextJs, alt: "NextJS" },
    { src: Tailwind, alt: "TailwindCSS" },
    { src: Git, alt: "Git" },
    { src: TypeScript, alt: "TypeScript" },
    { src: NodeJS, alt: "NodeJS" },
    { src: MongoDb, alt: "MongoDB" },
    { src: Linux, alt: "Linux" },
    { src: Gimp, alt: "Gimp" },
    // { src: Solidity, alt: "Solidity"},

  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10 sm:py-5">
      <div className="max-w-[100vw] mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-20 h-20 object-contain sm:w-24 sm:h-24 md:w-28 md:h-28"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
