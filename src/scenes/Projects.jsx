import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project4.png";


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
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-deep-blue"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <div className="relative">
            <div>
              <img src={Project1} alt={Project} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex flex-col  items-center justify-between">
                <p className="text-white text-sm mt-5 text-center">
                  Gym website built with typescript, framer motion animation,
                  form submit email and tailwind css all mobile responsive.
                </p>
                <div className="flex justify-between  mb-5">
                  <a href="https://typescript-react-fitness-application.vercel.app/">
                    <button className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                      Go to Site
                    </button>
                  </a>

                  <a href="https://github.com/Eddiemetrium/typescript-react-fitness-application">
                    <p className="text-blue px-4 pl-2 underline">Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <img src={Project2} alt={Project} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex flex-col  items-center justify-between">
                <p className="text-white text-sm mt-5 text-center">
                  Simple JavaScript tic tac toe game. Pure Vanila JavaScript.
                </p>
                <div className="flex justify-between  mb-5">
                  <a href="https://tic-tac-toe-js-three.vercel.app/">
                    <button className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                      Go to Site
                    </button>
                  </a>

                  <a href="https://github.com/Eddiemetrium/tic-tac-toe-js">
                    <p className="text-blue px-4 pl-2 underline">Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 */}

          <div className="relative">
            <div>
              <img src={Project3} alt={Project} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex flex-col  items-center justify-between">
                <p className="text-white text-sm mt-5 text-center">
                  Hangman game written in typescript and vanila CSS. Try it and
                  have fun.
                </p>
                <div className="flex justify-between  mb-5">
                  <a href="https://eddiemetrium.github.io/hangman-typescript-web-game">
                    <button className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                      Go to Site
                    </button>
                  </a>

                  <a href="https://github.com/Eddiemetrium/hangman-typescript-web-game">
                    <p className="text-blue px-4 pl-2 underline">Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={"../assets/project-1.jpeg"} alt={Project} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex flex-col  items-center justify-between">
                <p className="text-white text-sm mt-5 text-center">
                  Three line description
                </p>
                <div className="flex justify-between  mb-5">
                  <a href="#">
                    <button className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                      Go to Site
                    </button>
                  </a>

                  <a href="#">
                    <p className="text-blue px-4 pl-2 underline">Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={"../assets/project-1.jpeg"} alt={Project} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex flex-col  items-center justify-between">
                <p className="text-white text-sm mt-5 text-center">
                  Three line description
                </p>
                <div className="flex justify-between  mb-5">
                  <a href="#">
                    <button className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                      Go to Site
                    </button>
                  </a>

                  <a href="#">
                    <p className="text-blue px-4 pl-2 underline">Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ROW 3 */}
          <div className="relative">
            <div>
              <img src={"../assets/project-1.jpeg"} alt={Project} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex flex-col  items-center justify-between">
                <p className="text-white text-sm mt-5 text-center">
                  Three line description
                </p>
                <div className="flex justify-between  mb-5">
                  <a href="#">
                    <button className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                      Go to Site
                    </button>
                  </a>

                  <a href="#">
                    <p className="text-blue px-4 pl-2 underline">Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={"../assets/project-1.jpeg"} alt={Project} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex flex-col  items-center justify-between">
                <p className="text-white text-sm mt-5 text-center">
                  Three line description
                </p>
                <div className="flex justify-between  mb-5">
                  <a href="#">
                    <button className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                      Go to Site
                    </button>
                  </a>

                  <a href="#">
                    <p className="text-blue px-4 pl-2 underline">Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
