import {  useEffect, useRef } from "react";
import gsap from "gsap";
import Typed from "react-typed";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImg from "../assets/photo_2023-03-27_20-50-09.jpg";

const Landing = ({ setSelectedPage }) => {
const logoRef = useRef(null);
  useEffect(() => {
    const el = logoRef.current;
    gsap.from(el, { rotation: 0, duration: 6});
    gsap.to(el, { rotation: 360, duration: 6, ease: "elastic" });
  }, []);
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full border-3"
              src={ProfileImg}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[250px] md:max-w-[400px] height-[75px] "
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
            className="glow text-5xl font-playfair z-10 text-center md:text-start "
          >
            Edwin~
            <span
              className="xs:relative xs: xs:font-semibold z-20 
              before:absolute before:-left-[20px] before:-top-[70px] before:z-[-1]"
            >
              Munene.
            </span>
          </p>

          <p className="mt-12 mb-5 text-sm text-center md:text-start xs:text-start">
            <Typed
              className="text-xl text-bold"
              strings={[
                "JavaScript",
                "ReactJS",
                "NextJS",
                "Api Integration",
                "Git",
                "CSS3",
                "TailwindCSS",
                "GSAP Animations",
              ]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
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
