import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import EdLogo from "../assets/20210723_144041-min.png"; // Large screen logo
import MobileLogo from "../assets/20210723_144041-min.png"; // Mobile screen logo

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const logoRef = useRef(null);
    const logoRefMobile = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const el = logoRef.current;
    gsap.from(el, { x: 350, rotation: 360, opacity: 0.5, duration: 2 });
    gsap.to(el, {
      x: -20,
      rotation: 0,
      opacity: 1,
      duration: 4,
      ease: "bounce({ strength: 4})",
    });
  }, []);
  useEffect(() => {
    const erl = logoRefMobile.current;
    gsap.from(erl, { x: 350, rotation: 360, opacity: 0.5, duration: 2 });
    gsap.to(erl, {
      x: 130,
      rotation: 0,
      opacity: 1,
      duration: 4,
      ease: "bounce({ strength: 4})",
    });
  }, []);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-deep-blue";

  useEffect(() => {
    setIsMobile(!isDesktop);
  }, [isDesktop]);

  return (
    <div>
      <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          <h4 className="font-playfair text-3xl font-bold">
            <img
              ref={logoRef}
              className={`nav-logo w-5 ${isMobile ? "hidden" : ""}`}
              alt="ed-logo"
              src={EdLogo} // Large screen logo
            />
            <img
              ref={logoRefMobile}
              className={`nav-logo w-5 ${isMobile ? "" : "hidden"}`}
              alt="ed-logo"
              src={MobileLogo} // Mobile screen logo
            />
          </h4>
          {/* DESKTOP NAV */}
          {isDesktop && (
            <div className="flex justify-between gap-16 font-opensans text-md font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
