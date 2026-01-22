import React from "react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const AboutUs = lazy(() => import("./AboutUs"));
function BestUniversity() {
  const textAnim = {
    hidden: {
      // x: -200,
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom) => ({
      // x: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  const textXAnim = {
    hidden: {
      // x: 200,
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom) => ({
      // x: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  const textYAnim = {
    hidden: {
      // y: 200,
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom) => ({
      // y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  return (
    <motion.div className="bg-rich-black">
      <div className="bg-gray-800 text-slate-200 rounded-6xl">
        <div className=" mx-auto max-w-5xl pt-10 pb-16  px-5">
          <div className="row py-16 flex flex-col items-center">
            <motion.div
              custom={1}
              viewport={{ amount: 0.05, once: true }}
              whileInView="visible"
              initial="hidden"
              variants={textAnim}
              className="text-4xl text-center sm:text-5xl font-bold mb-8"
            >
              {" "}
              Лучшие ВУЗы страны
            </motion.div>
            <motion.div
              custom={1}
              viewport={{ amount: 0.05, once: true }}
              whileInView="visible"
              initial="hidden"
              variants={textXAnim}
              className="text-2xl font-bold text-center"
            >
              Куда поступают наши выпускники
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 row-auto gap-5 mt-10">
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/mgu.webp"
                    alt="МГУ"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/mifi.webp"
                    alt="МИФИ"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/hselogo.webp"
                    alt="Высшая школа экономики"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/itmo.webp"
                    alt="ИТМО"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/mfti.webp"
                    alt="МФТИ"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/vuz.webp"
                    alt=""
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/sech.webp"
                    alt="Сеченовский Университет"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/mgtu.webp"
                    alt="МГТУ"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/kaz.webp"
                    alt="Казанский Федеральный университет"
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textYAnim}
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="bg-teal-50 shadow-vuz rounded-3xl p-5 flex items-center justify-center "
                >
                  <img
                    loading="lazy"
                    className="vuz-block"
                    src="img/university/mgimo.webp"
                    alt="МГИМО"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BestUniversity;
