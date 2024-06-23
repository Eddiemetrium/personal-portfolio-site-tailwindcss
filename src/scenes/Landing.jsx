import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";
import Typed from "typed.js";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SvgLamp from "../assets/chromelamp.svg";

const Landing = ({ setSelectedPage }) => {
  const ty = useRef(null);

  useEffect(() => {
    const typed = new Typed(ty.current, {
      strings: [
        "JavaScript",
        "React Native",
        "ReactJs",
        "NextJs",
        "NodeJs",
        "MongoDB",
        "Tailwind CSS",
      ],
      loop: true,
      loopCount: Infinity,
      startDelay: 200,
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
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="background-img z-10 mt-16 md:mt-20 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div>
            <img
              alt="profile"
              style={{ width: "28rem", height: "25rem" }}
              className="main-img  hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[180px] md:max-w-[180px] rounded-full border-3"
              src={SvgLamp}
            />
          </div>
        ) : (
          <img
            alt="profile"
            style={{ width: "10rem", height: "10rem" }}
            className=" z-10 w-full max-w-[90px] md:max-w-[180px] height-[50px] 
             rounded-full"
            src={SvgLamp}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 w-full lg:w-2/3 mt-12 md:mt-32 md:w-1/2">
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
          <p className=" glow text-base sm:text-xl lg:text-3xl font-playfair z-10 text-center md:text-start w-10 ">
            Edwin
            <span className="relative font-semibold z-20 xs:absolute xs:-left-[-10px] xs:-top-[-90px] xs:z-[-1]">
              Munene ()
            </span>
            <span> Dev</span>
          </p>

          <p className="mt-12 mb-5 text-sm text-center md:text-start xs:text-start">
            <span className="text-xl text-bold" ref={ty} />
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-between "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-red text-white rounded-sm py-3 px-7 font-semibold 
  hover:bg-yellow transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="https://drive.google.com/file/d/1ZozZlyoJRDUJrjPflDLShuTCfXXjEWqS/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
          <AnchorLink
            className="rounded-r-sm  py-0.5 pr-0.5 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className=" bg-blue text-white rounded-sm py-3 px-7 font-semibold
   hover:text-white transition duration-500"
            >
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
