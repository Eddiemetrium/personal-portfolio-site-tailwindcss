import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    gsap.fromTo(
      el,
      { y: -200, duration: 3, opacity: 0.5 },
      {
        y: -10,
        duration: 4,
        opacity: 1,
        ease: "elastic",
        scrollTrigger: { trigger: el },
      }
    );
  }, []);

  return (
    <footer
      className="footer-background w-full sticky bottom-0 right-0 py-2 px-2 p-5 sm:py-0 "
      style={{ width: "100%" }}
    >
      <div ref={scrollRef} className="w-full mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center mb-8">
          <p className="font-playfair font-semibold text-2xl text-blue">
            Edwin Munene
          </p>
          <p className="font-playfair text-md text-blue">
            © {year} Munene. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
