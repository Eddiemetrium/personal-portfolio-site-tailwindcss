import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items visible at a time
    slidesToScroll: 1, // Number of items to scroll at a time
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    pauseOnHover: true,
  };

  const items = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" },
  ];

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} style={{ padding: "10px", textAlign: "center" }}>
            <div
              style={{
                padding: "20px",
                background: "#f5f5f5",
                borderRadius: "5px",
              }}
            >
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
