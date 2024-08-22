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
import Linux from "../assets/linux-22618.png";
import Gimp from "../assets/gimp_circle_icon.png";
import Poster1 from "../assets/Eddiemetrium Website Creation Services Poster.jpg";
import Poster2 from "../assets/Blue and Yellow Minimalist Web Development Instagram Post A4.jpg";




const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault();

  const items = [
    <div className="image-container pt-5 mt-5" key={1}>
      <div className="image-wrapper image-resize">
        <img
          src={Html}
          onDragStart={handleOnDragStart}
          className="carousel-image image-resize"
          style={{ height: "10rem", width: "10rem" }}
          alt="HTML"
        />
      </div>
    </div>,
    <div className="image-container" key={2}>
      <div className="image-wrapper image-resize">
        <img
          src={Css}
          onDragStart={handleOnDragStart}
          style={{ height: "8rem", width: "10rem" }}
          className="carousel-image image-resize"
          alt="CSS"
        />
      </div>
    </div>,
    <div className="image-container" key={3}>
      <div className="image-wrapper image-resize">
        <img
          src={JS}
          onDragStart={handleOnDragStart}
          style={{ height: "10rem", width: "10rem" }}
          className="carousel-image image-resize"
          alt="JavaScript"
        />
      </div>
    </div>,
    <div className="image-container" key={4}>
      <div className="image-wrapper image-resize">
        <img
          src={ReactJs}
          onDragStart={handleOnDragStart}
          style={{ height: "10rem", width: "10rem" }}
          className="carousel-image image-resize"
          alt="React"
        />
      </div>
    </div>,
    <div className="image-container" key={5}>
      <div className="image-wrapper image-resize">
        <img
          src={NextJs}
          onDragStart={handleOnDragStart}
          style={{ height: "10rem", width: "10rem" }}
          className="carousel-image image-resize"
          alt="Next.js"
        />
      </div>
    </div>,
    <div className="image-container" key={6}>
      <div className="image-wrapper image-resize">
        <img
          src={Git}
          onDragStart={handleOnDragStart}
          style={{ height: "10rem", width: "10rem" }}
          className="carousel-image"
          alt="Git"
        />
      </div>
    </div>,
    <div className="image-container" key={7}>
      <div className="image-wrapper image-resize">
        <img
          src={Tailwind}
          onDragStart={handleOnDragStart}
          style={{ height: "10rem", width: "10rem" }}
          className="carousel-image image-resize"
          alt="Tailwind CSS"
        />
      </div>
    </div>,
    <div className="image-container" key={8}>
      <div className="image-wrapper image-resize">
        <img
          src={TypeScript}
          onDragStart={handleOnDragStart}
          style={{ height: "8rem", width: "10rem" }}
          className="carousel-image image-resize"
          alt="TypeScript"
        />
      </div>
    </div>,
    <div className="image-container" key={9}>
      <div className="image-wrapper image-resize">
        <img
          src={MongoDb}
          onDragStart={handleOnDragStart}
          style={{ height: "10rem", width: "10rem" }}
          className="carousel-image image-resize"
          alt="MongoDB"
        />
      </div>
    </div>,
    <div className="image-container" key={10}>
      <div className="image-wrapper image-resize">
        <img
          src={NodeJS}
          onDragStart={handleOnDragStart}
          style={{
            height: "10rem",
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="carousel-image image-resize"
          alt="Node.js"
        />
      </div>
    </div>,
    <div className="image-container" key={11}>
      <div className="image-wrapper image-resize">
        <img
          src={Linux}
          onDragStart={handleOnDragStart}
          style={{
            height: "10rem",
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="carousel-image image-resize"
          alt="Node.js"
        />
      </div>
    </div>,
    <div className="image-container" key={12}>
      <div className="image-wrapper image-resize">
        <img
          src={Gimp}
          onDragStart={handleOnDragStart}
          style={{
            height: "10rem",
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="carousel-image image-resize"
          alt="Node.js"
        />
      </div>
    </div>,
    <div className="image-container" key={13}>
      <div className="image-wrapper image-resize">
        <img
          src={Poster1}
          onDragStart={handleOnDragStart}
          style={{
            height: "15rem",
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="carousel-image image-resize"
          alt="Poster 1"
        />
      </div>
    </div>,
    <div className="image-container" key={14}>
      <div className="image-wrapper image-resize">
        <img
          src={Poster2}
          onDragStart={handleOnDragStart}
          style={{
            height: "15rem",
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="carousel-image image-resize"
          alt="poster 2"
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
