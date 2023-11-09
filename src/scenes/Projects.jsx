import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";
import Project6 from "../assets/Screenshot from 2023-11-06 06-39-09.png";
import Project7 from "../assets/screenshot-1.jpeg";

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
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();

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
  //  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  //   bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <section id="projects" className="pt-60 pb-48  projects">
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
                    <button class="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700 site-go">
                      Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/Eddiemetrium/space-exploration-frontend-mentor"
                    rel="noreferrer"
                  >
                    <p class="text-blue px-4 pl-2 underline github-link">
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
                    <button class="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700 site-go">
                      Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/Eddiemetrium/typescript-react-fitness-application"
                    rel="noreferrer"
                  >
                    <p class="text-blue px-4 pl-2 underline github-link">
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
                alt="doctor booking"
              />
            </div>
            <div class="w-2/3 file:w-full flex flex-col justify-evenly">
              <div class="px-6 py-4">
                <div class="font-bold text-center text-xl mb-2">
                  Doctor Booking App
                </div>
              </div>
              <p class="text-gray-700 text-center">
                Fullstack doctor booking app. Build using nextjs, tailwind,
                nodejs & mongodb. Checkout with stripe.
              </p>
              <div class="px-6 pt-4 pb-2">
                <div class="flex justify-between py-4">
                  <a
                    href="https://doctor-booking-delta.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button class="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700 site-go">
                      Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/Eddiemetrium/doctor-booking"
                    rel="noreferrer"
                  >
                    <p class="text-blue px-4 pl-2 underline github-link">
                      Github
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
