import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import GetInTouch from "../assets/Get in touch-amico.png";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl text-center">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex justify-center my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="gap-16 mt-5  mx-auto w-full flex-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center items-center mx-auto w-full lg:w-1/2"
        >
          <img
            className="shake w-full lg:w-1/2"
            src={GetInTouch}
            alt="contact"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 lg:mt-0 w-full lg:w-1/3"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/5fcff513f13c7c3157dc8b88be03b41c"
            method="POST"
            className="flex flex-col items-center w-full lg:w-1/2 mx-auto"
          >
            <input
              className="w-full sm:w-3/4 lg:w-1/2 bg-white font-semibold text-black p-3 mt-5 contact-input"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1 contact-input">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full sm:w-3/4 lg:w-1/2 bg-white font-semibold text-black p-3 mt-5 contact-input"
              type="text"
              placeholder="SUBJECT"
              {...register("subject", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.subject && (
              <p className="text-red mt-1 contact-input">
                {errors.subject.type === "required" &&
                  "This field is required."}
                {errors.subject.type === "maxLength" &&
                  "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full sm:w-3/4 lg:w-1/2 bg-white font-semibold text-black p-3 mt-5 contact-input"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1 contact-input">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <textarea
              className="w-full sm:w-3/4 lg:w-1/2 bg-white font-semibold text-black p-3 mt-5 contact-input"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1 contact-input">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <div className="flex justify-center items-center w-full mt-5">
              <button
                className="bg-blue text-white rounded-sm py-3 px-7 font-semibold transition duration-500"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
