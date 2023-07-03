import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";
import Project7 from 
"../assets/screenshot-1.jpeg";

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
        <p className="mt-7">
          
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  //  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  //   bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <section id="projects" className="pt-48 pb-48">
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
        <p className="mt-10 mb-10">
          Here are a few projects that I done. They are hosted the links are
          available on hover. Check them out and give me a feedback.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow mb-2
              max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold text-deep-blue "
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={Project1} alt="evo gym" />
            <div class="px-6 py-4">
              <div class="font-bold text-center text-xl mb-2">Evo Gym</div>
              <p class="text-gray-700 text-base">
                Gym website built with typescript, framer motion animation, form
                submit email working in real time and tailwind css. Mobile
                responsive.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <div className="flex justify-between  mt-2">
                <a
                  href="https://typescript-react-fitness-application.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700">
                    Go to Site
                  </button>
                </a>

                <a
                  href="https://github.com/Eddiemetrium/typescript-react-fitness-application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-blue px-4 pl-2 underline">Github Link</p>
                </a>
              </div>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={Project2} alt="evo gym" />
            <div class="px-6 py-4">
              <div class="font-bold text-center text-xl mb-2">Tic Tac Toe</div>
              <p class="text-gray-700 text-base py-4">
                Simple JavaScript tic tac toe game. Pure Vanila JavaScript.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <div className="flex justify-between  mt-2">
                <a
                  href="https://tic-tac-toe-js-three.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700">
                    Go to Site
                  </button>
                </a>

                <a
                  href="https://github.com/Eddiemetrium/tic-tac-toe-js"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-blue px-4 pl-2 underline">Github Link</p>
                </a>
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={Project3} alt="evo gym" />
            <div class="px-6 py-4">
              <div class="font-bold text-center text-xl mb-2">
                {" "}
                Hangman Game
              </div>
              <p class="text-gray-700 text-base">
                Hangman game written in typescript and vanila CSS. Try it and
                have fun.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <div className="flex justify-between  mt-2">
                <a
                  href="https://eddiemetrium.github.io/hangman-typescript-web-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700">
                    Go to Site
                  </button>
                </a>

                <a
                  href="https://github.com/Eddiemetrium/hangman-typescript-web-game"
                  rel="noreferrer"
                >
                  <p className="text-blue px-4 pl-2 underline">Github Link</p>
                </a>
              </div>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={Project5} alt="evo gym" />
            <div class="px-6 py-4">
              <div class="font-bold text-center text-xl mb-2">
                Admin Dashboard
              </div>
              <p class="text-gray-700 text-base">
                Simple ReactJs admin dashboard, in NEXTJS and tailwind. Dark
                theme though
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <div className="flex justify-between  mt-2">
                <a
                  href="https://nextjs-dashboard-tailwind-alpha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700">
                    Go to Site
                  </button>
                </a>

                <a
                  href="https://github.com/Eddiemetrium/nextjs-dashboard-tailwind"
                  rel="noreferrer"
                >
                  <p className="text-blue px-4 pl-2 underline">Github Link</p>
                </a>
              </div>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={Project6} alt="Metaverse website" />
            <div class="px-6 py-4">
              <div class="font-bold text-center text-xl mb-2">
                Metaverse Website
              </div>
              <p class="text-gray-700 text-base">
                Metaverse website with framer motion animation. Styled with
                tailwind css. Best scroll ever.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <div className="flex justify-between  mt-2">
                <a
                  href="https://project-metaverse-khaki.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700">
                    Go to Site
                  </button>
                </a>

                <a
                  href="https://github.com/Eddiemetrium/project_metaverse"
                  rel="noreferrer"
                >
                  <p className="text-blue px-4 pl-2 underline">Github Link</p>
                </a>
              </div>
            </div>
          </div>
          {/* ROW 3 */}
      
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={Project7} alt="Space exploration site" />
            <div class="px-6 py-4">
              <div class="font-bold text-center text-xl mb-2">
                Space Explorae Website
              </div>
              <p class="text-gray-700 text-base">
                Space explore website that has responsive design from the
                frontend mentor challenge site. All device responsive.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <div className="flex justify-between  mt-2">
                <a
                  href="https://space-exploration-frontend-mentor.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white underline text-black px-4 py-2 rounded-lg inline-block hover:text-orange-700">
                    Go to Site
                  </button>
                </a>

                <a
                  href="https://github.com/Eddiemetrium/space-exploration-frontend-mentor"
                  rel="noreferrer"
                >
                  <p className="text-blue px-4 pl-2 underline">Github Link</p>
                </a>
              </div>
            </div>
          </div>
       

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
