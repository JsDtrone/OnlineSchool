import React from "react";
import { motion } from "framer-motion";
function AboutSummer() {
  const textAnim = {
    hidden: {
      // y: -100,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  const textYAnim = {
    hidden: {
      // y: 100,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  const textXAnim = {
    hidden: {
      // x: -100,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  const textXSAnim = {
    hidden: {
      // x: 100,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  return (
    <motion.div className="bg-amber-50 py-24  sm:py-24  px-5 text-center xl:px-0 bg-img-summer-big">
      <motion.div
        viewport={{ amount: 0.1, once: true }}
        whileInView="visible"
        initial="hidden"
        custom={1}
        variants={textAnim}
        className="text-center text-slate-800 text-4xl font-bold play "
      >
        О летней школе
      </motion.div>
      <div className="mx-auto max-w-5xl bg-amber-50 shadow-lg shadow-neutral-200 pt-6 pb-4  px-8 rounded-6xl mt-6">
        <div className="row  text-xl text-slate-800  text-start ">
          <motion.p
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textXAnim}
            className="text-lg sm:text-xl md:text-2xl lg:text-center"
          >
            <div className=" mb-2 sm:mb-4">
              Раскрой свой потенциал этим летом в образовательном центре
              "Ломоносовцы"! Готовься к ЕГЭ и ОГЭ, покоряй олимпиады, прокачивай
              знания по школьным предметам, осваивай Python или совершенствуй
              разговорный английский – выбери то, что нужно именно тебе!
            </div>
            <div className=" mb-2 sm:mb-4">
              Увлекательные программы, опытные преподаватели и новые друзья ждут
              тебя в нашей летней школе. Зажигательные мастер-классы,
              интеллектуальные игры и творческие проекты помогут тебе провести
              каникулы с пользой и получить яркие впечатления.
            </div>
            Присоединяйся к "Ломоносовцам" и открой для себя мир знаний и
            возможностей!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSummer;
