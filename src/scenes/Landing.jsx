import {  useEffect, useRef } from "react";
import gsap from "gsap";
// import Typed from "react-typed";
import React from "react";
import Typed from "typed.js";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImg from "../assets/photo_2023-03-27_20-50-09.jpg";

const Landing = ({ setSelectedPage }) => {
  // Create reference to store the DOM element containing the animation
  const ty = useRef(null);

  useEffect(() => {
   const typed = new Typed(ty.current, {
     strings: ["Web Development", "React Js", "API", "Animations"],
     loop: true,
     loopCount: Infinity,
     startDelay: 300,
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 100,
   });

   return () => {
     // Destroy Typed instance during cleanup to stop animation
     typed.destroy();
   };
 }, []);

  const logoRef = useRef(null);
  useEffect(() => {
    const el = logoRef.current;
    gsap.from(el, { rotation: 0, duration: 8 });
    gsap.to(el, { rotation: 360, duration: 9, ease: "elastic" });
  }, []);
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-20 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="main-img  hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[250px] md:max-w-[350px] rounded-full border-3"
              src={ProfileImg}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[100px] md:max-w-[2500px] height-[50px] "
            src={ProfileImg}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 ">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            ref={logoRef}
            className="glow text-base sm:text-3xl lg:text-5xl font-playfair z-10 text-center md:text-start w-6"
          >
            Edwin
            <span className="relative font-semibold z-20 xs:absolute xs:-left-[-20px] xs:-top-[-70px] xs:z-[-1]">
              Munene()Dev
            </span>
          </p>

          <p className="mt-12 mb-5 text-sm text-center md:text-start xs:text-start">

            <span className="text-xl text-bold" ref={ty} />
            
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="resume bg-yellow text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="https://drive.google.com/file/d/1Hx66zdUCLVoVhmdc9-aOi3NPR6kJ4u3p/view?usp=sharing"
          >
            <span class="shine-line"></span>
            <span class="shine-right"></span>
            Resume
            <span class="shine-left"></span>
            <span class="shine"></span>
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue  hover:bg-blue hover:text-white transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair ">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
