import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Html from "../assets/pngwing.com.png";
import Css from "../assets/pngegg.png";
import JS from "../assets/javascript-39400.png";
import ReactJs from "../assets/react.svg";
import NextJs from "../assets/Next.js.png";
import Tailwind from "../assets/Tailwind_CSS_Logo.svg";
import Git from "../assets/ba8u9otcvrpidtbd94kvclvgb2.png";
import TypeScript from "../assets/TypeScript.png";
import NodeJS from "../assets/NodeJS.png";
import MongoDb from "../assets/MongoDB.png";

const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <div className="gallery">
      <AliceCarousel
        responsive
        infinite
        autoPlay
        fadeOutAnimation
        disableDotsControls
        disableSlideInfo
        disableButtonsControls
        itemsFit
      >
        <img
          src={Html}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={Css}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={JS}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={ReactJs}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={NextJs}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={Git}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={Tailwind}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={TypeScript}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={MongoDb}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src={NodeJS}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </AliceCarousel>
    </div>
  );
};
export default Gallery;
