import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";

function FreeLesson() {
  const textAnim = {
    hidden: {
      // x: 200,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      scale: 1,
      transition: { ease: "anticipate", duration: 1 },
    }),
  };
  const textXAnim = {
    hidden: {
      scale: 0.9,
      // x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      scale: 1,
      transition: { ease: "anticipate", duration: 1 },
    }),
  };
  return (
    <motion.div
      viewport={{ amount: 0.05, once: true }}
      whileInView="visible"
      initial="hidden"
    >
      <div className="bg-slate-100  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="">
            <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center text-3xl play font-bold mb-16"
            >
              Запись на экспресс курсы открыта до{" "}
              <span className="text-emerald-400">1 апреля 2024</span>
            </motion.div>
            <motion.div
              custom={2}
              variants={textXAnim}
              className="flex items-center justify-center"
            >
              <a
                href="/test"
                className="bg-teal-400 btn-test max-w-5xl text-center rounded-xl py-6 px-12 text-3xl play font-bold hover:scale-105 ease-in-out duration-300"
              >
                Пройти пробное онлайн тестирование бесплатно
              </a>
            </motion.div>{" "}
            <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center text-3xl play font-bold mt-16"
            >
              Набор на 2024-2025 учебный год открыт до{" "}
              <span className="text-emerald-400">1 мая 2024</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FreeLesson;
