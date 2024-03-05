import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="md:flex justify-around gap-2 p-4 mt-32 my-4" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: [null, 1.3, 1.4] }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],

          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="md:w-1/2 md:order-2 "
      >
        <Lottie animationData={animation} className="h-96"></Lottie>
      </motion.div>
      <motion.div
        animate={{ x: -20 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="md:w-1/2 w-full md:order-1"
      >
        <p className="text-3xl  md:text-7xl font-bold   bg-gradient-to-r from-[#1e6162] to-[#5cc4a8] bg-clip-text text-transparent leading-1">
          Elevate Your Experience: AI Magic in Every Click
        </p>
        <p className="text-gray-500 leading-8 text-xl md:text-2xl font-bold mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ut
          nisi voluptatem saepe excepturi voluptatem saepe excepturi.
        </p>
      </motion.div>
    </div>
  );
};

export default Banner;
