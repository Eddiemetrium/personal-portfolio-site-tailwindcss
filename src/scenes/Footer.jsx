import {  useEffect, useRef } from "react";
import { gsap } from "gsap";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    gsap.fromTo(
      el,
      { y: -200, duration: 3, opacity:.5 },
      { y: -10, duration: 4,opacity:1, ease: "elastic", scrollTrigger: { trigger: el }})}, []);

  return (
    <footer className="h-20 bg-deep-blue py-6 ">
      <div ref={scrollRef} className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Edwin Munene
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 Munene. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
