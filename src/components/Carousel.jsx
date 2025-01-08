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

export default function SimpleSlider() {
  // Slider settings
  const settings = {
    dots: false, // Turn off dots for continuous movement
    infinite: true, // Infinite scrolling
    speed: 2000, // Animation speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // For continuous movement
    cssEase: "linear", // Smooth continuous motion
    slidesToShow: 5, // Number of images visible (default)
    slidesToScroll: 1, // Images to scroll at a time
    pauseOnHover: false, // Disable pause on hover
    responsive: [
      {
        breakpoint: 1024, // For screens below 1024px
        settings: {
          slidesToShow: 4, // Show 4 slides
        },
      },
      {
        breakpoint: 768, // For screens below 768px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 480, // For screens below 480px
        settings: {
          slidesToShow: 2, // Show 2 slides
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
  ];

  return (
    <div className="w-full bg-gray-100 py-10 sm:py-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-24 px-4 h-24 object-contain sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
