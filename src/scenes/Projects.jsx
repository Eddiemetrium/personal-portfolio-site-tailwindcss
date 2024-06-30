import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";
import Project6 from "../assets/Screenshot from 2023-11-06 06-39-09.png";
import Project7 from "../assets/screenshot-1.jpeg";
import ProjectBoom from "../assets/Screenshot 2024-06-28 161109.png";

import UpperHand from "../assets/trap-1.png";
import LowerHand from "../assets/trap-2.png";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-8 text-deep-blue `;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7"></p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
 
  return (
    <section id="projects" className="pt-30 pb-40 projects">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img
          class="w-full h-auto sm:h-full border-b border-solid border-[#6f9ce061] focus:outline-none focus:border-b-[#7393c361] "
          src={UpperHand}
          // style={{width:"50rem"}}
          alt="Space exploration site"
        />
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="lg:grid lg:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Project 1 */}
          <div class="rounded overflow-hidden shadow-lg mt-5 flex flex-col  justify-between items-center">
            <div class="w-2/3 sm:w-full ">
              <img
                class="w-full h-auto sm:h-full border-b border-solid border-[#6f9ce061] focus:outline-none focus:border-b-[#7393c361] "
                src={Project7}
                alt="Space exploration site"
              />
            </div>
            <div class="w-2/3 file:w-full flex flex-col justify-evenly">
              <div class="px-6 py-4">
                <div class="font-bold text-center text-xl mb-2">
                  Space Explore Website
                </div>
              </div>
              <p class="text-gray-700 text-center">
                Space explore website that has responsive design from the
                frontend mentor challenge site. All device responsive.
              </p>
              <div class="px-6 pt-4 pb-2">
                <div class="flex justify-between py-4">
                  <a
                    href="https://space-exploration-frontend-mentor.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      class="bg-red text-white rounded-sm py-3 px-7 font-semibold
  hover:bg-red hover:text-white transition duration-500"
                    >
                      Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/Eddiemetrium/space-exploration-frontend-mentor"
                    rel="noreferrer"
                  >
                    <p
                      class="bg-blue rounded-sm py-3 px-7 font-semibold
   hover:text-black transition duration-500"
                    >
                      Github
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* Project 2 */}
          <div class="rounded overflow-hidden shadow-lg mt-7 flex flex-col  justify-between items-center">
            <div class="w-2/3 sm:w-full ">
              <img
                class="w-full h-auto sm:h-full border-b border-solid border-[#6f9ce061] focus:outline-none focus:border-b-[#7393c361] "
                src={Project1}
                alt="Evo Gym"
              />
            </div>
            <div class="w-2/3 file:w-full flex flex-col justify-evenly">
              <div class="px-6 py-4">
                <div class="font-bold text-center text-xl mb-2">Evo Gym</div>
              </div>
              <p class="text-gray-700 text-center">
                Gym website built with TypeScript, Framer Motion animation, form
                submit email working in real-time, and Tailwind CSS. Mobile
                responsive.
              </p>
              <div class="px-6 pt-4 pb-2">
                <div class="flex justify-between py-4">
                  <a
                    href="https://typescript-react-fitness-application.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      class="bg-red text-white rounded-sm py-3 px-7 font-semibold
  hover:text-white transition duration-500"
                    >
                      Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/Eddiemetrium/typescript-react-fitness-application"
                    rel="noreferrer"
                  >
                    <p
                      class="bg-blue rounded-sm py-3 px-7 font-semibold
   hover:text-black transition duration-500"
                    >
                      Github
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          {/* Project 3 */}
          <div class="rounded overflow-hidden shadow-lg mt-5 flex flex-col  justify-between items-center">
            <div class="w-2/3 sm:w-full ">
              <img
                class="w-full rounded-md"
                src={Project6}
                alt="blue laundry"
              />
            </div>
            <div class="w-2/3 file:w-full flex flex-col justify-evenly">
              <div class="px-6 py-4">
                <div class="font-bold text-center text-xl mb-2">
                  Blue Laundry Website
                </div>
              </div>
              <p class="text-gray-700 text-center">
                A website for the laundry business Blue Laundry Situated in
                Kilifi County. Logo and Brochure by yours truly. Domain from google work space.
              </p>
              <div class="px-6 pt-4 pb-2">
                <div class="flex justify-between py-4">
                  <a
                    href="https://bluelaundrykilifi.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      class="bg-red text-white rounded-sm py-3 px-7 font-semibold
   hover:text-white transition duration-500"
                    >
                      Site
                    </button>
                  </a>
                  <a href="https://github.com/Eddiemetrium/" rel="noreferrer">
                    <p
                      class="bg-blue rounded-sm py-3 px-7 font-semibold
 hover:text-black transition duration-500"
                    >
                      Github
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div class="rounded overflow-hidden shadow-lg mt-5 flex flex-col  justify-between items-center">
            <div class="w-2/3 sm:w-full ">
              <img
                class="w-full rounded-md"
                src={ProjectBoom}
                alt="doctor booking"
              />
            </div>
            <div class="w-2/3 file:w-full flex flex-col justify-evenly">
              <div class="px-6 py-4">
                <div class="font-bold text-center text-xl mb-2">
                  Krypt Etherium 
                </div>
              </div>
              <p class="text-gray-700 text-center">
                A web3 project that uses Vite, Solidity, and Ethers.js to help you do teansactions on the Etherium blockchain.
              </p>
              <div class="px-6 pt-4 pb-2">
                <div class="flex justify-between py-4">
                  <a
                    href="https://web3-vite-solidity.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      class="bg-red text-white rounded-sm py-3 px-7 font-semibold
   hover:text-white transition duration-500"
                    >
                      Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/Eddiemetrium/Web3ViteSolidity"
                    rel="noreferrer"
                  >
                    <p
                      class="bg-blue rounded-sm py-3 px-7 font-semibold
 hover:text-black transition duration-500"
                    >
                      Github
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            class="lower-hand mx-auto h-auto sm:h-full border-b border-solid border-[#6f9ce061] focus:outline-none focus:border-b-[#7393c361] "
            src={LowerHand}
            style={{ width: "28rem", height: "12rem" }}
            alt="Space exploration site"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
