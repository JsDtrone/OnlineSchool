import React from "react";
import { motion } from "framer-motion";

function Video() {
  const textAnim = {
    hidden: {
      scale: 0.9,
      // x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "anticipate", duration: 0.6 },
    }),
  };
  const vidAnim = {
    hidden: {
      // y: 200,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "anticipate", duration: 0.6 },
    }),
  };
  return (
    <motion.div
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
      className="bg-rich-black bg-img-text text-slate-200 px-10 xl:px-0"
    >
      <div className=" mx-auto max-w-5xl py-10 ">
        <div className="row py-16   ">
          <motion.div
            custom={1}
            variants={textAnim}
            className="mb-6 sm:mb-20  text-4xl sm:text-6xl text-center font-bold play"
          >
            Видео о нас
          </motion.div>
          <motion.div
            custom={2}
            variants={vidAnim}
            className="flex justify-center videos"
          >
            <video
              poster="/img/poster.webp"
              className="rounded-2xl shadow-video"
              controls
              loading="lazy"
              src="/video/lomonosovites.mp4"
            ></video>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Video;
