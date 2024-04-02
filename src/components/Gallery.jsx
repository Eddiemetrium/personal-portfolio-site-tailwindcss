import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Html from "../assets/pngwing.com.png";
import Css from "../assets/pngegg.png";
import JS from "../assets/javascript-39400.png";
import ReactJs from "../assets/react.png";
import NextJs from "../assets/Next.js.png";
import Tailwind from "../assets/Tailwind_CSS_Logo.svg";
import Git from "../assets/ba8u9otcvrpidtbd94kvclvgb2.png";
import TypeScript from "../assets/TypeScript.png";
import NodeJS from "../assets/NodeJS.png";
import MongoDb from "../assets/MongoDB.png";

const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault();

  const items = [
    <div className="image-container" key={1}>
      <div className="image-wrapper">
        <img
          src={Html}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="HTML"
        />
      </div>
    </div>,
    <div className="image-container" key={2}>
      <div className="image-wrapper">
        <img
          src={Css}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="CSS"
        />
      </div>
    </div>,
    <div className="image-container" key={3}>
      <div className="image-wrapper">
        <img
          src={JS}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="JavaScript"
        />
      </div>
    </div>,
    <div className="image-container" key={4}>
      <div className="image-wrapper">
        <img
          src={ReactJs}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="React"
        />
      </div>
    </div>,
    <div className="image-container" key={5}>
      <div className="image-wrapper">
        <img
          src={NextJs}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="Next.js"
        />
      </div>
    </div>,
    <div className="image-container" key={6}>
      <div className="image-wrapper">
        <img
          src={Git}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="Git"
        />
      </div>
    </div>,
    <div className="image-container" key={7}>
      <div className="image-wrapper">
        <img
          src={Tailwind}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="Tailwind CSS"
        />
      </div>
    </div>,
    <div className="image-container" key={8}>
      <div className="image-wrapper">
        <img
          src={TypeScript}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="TypeScript"
        />
      </div>
    </div>,
    <div className="image-container" key={9}>
      <div className="image-wrapper">
        <img
          src={MongoDb}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="MongoDB"
        />
      </div>
    </div>,
    <div className="image-container" key={10}>
      <div className="image-wrapper">
        <img
          src={NodeJS}
          onDragStart={handleOnDragStart}
          className="carousel-image"
          alt="Node.js"
        />
      </div>
    </div>,
  ];

  return (
    <div className="carousel-container">
      <AliceCarousel
        className="centered-carousel"
        responsive={{
          0: { items: 1 },
          768: { items: 3 },
          1024: { items: 5 },
        }}
        infinite
        autoPlay
        autoPlayInterval={1000} // Adjust this value to control the speed of the loop
        fadeOutAnimation
        disableDotsControls
        disableSlideInfo
        disableButtonsControls
        items={items}
      />
    </div>
  );
};

export default Gallery;
