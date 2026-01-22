import React from "react";
import { motion } from "framer-motion";

function AboutLessons() {
  const textAnim = {
    hidden: {
      // x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
      className="bg-rich-black py-24 sm:pt-24 sm:pb-16"
    >
      <div className="mx-auto px-5  sm:max-w-6xl sm:px-12 ">
        <motion.div
          custom={2}
          variants={textAnim}
          className="lg:text-center text-slate-50 text-3xl sm:text-5xl font-bold play "
        >
          Занятия и в очном и <br className="lg:hidden" /> в онлайн формате
        </motion.div>
        <div className="row pt-10 pb-6 sm:py-16 text-xl text-slate-50 ">
          <motion.p custom={3} variants={textAnim} className="mb-5">
            Ведут уроки сильнейшие репетиторы, закончившие МГУ им. Ломоносова,
            НИУ ВШЭ, МГТУ им. Баумана, МГИМО
          </motion.p>
          <motion.p custom={4} variants={textAnim} className="mb-5">
            Индивидуальная программа, включающая систему задач под конкретного
            студента нашего центра
          </motion.p>
          <motion.p
            custom={2}
            variants={textAnim}
            className="text-3xl font-bold play mb-10 mt-10 lg:text-center"
          >
            Учим думать, а не решать{" "}
            <br className="hidden sm:block lg:hidden" /> задачи по шаблону.
          </motion.p>
          <motion.p custom={3} variants={textAnim} className="mb-5 ">
            Собственная методика образования, разработанная Раилем Кашаповым,
            которая эффективно используется на рынке более 3-х лет.
          </motion.p>
          <motion.p custom={4} variants={textAnim} className="mb-5">
            Работаем только с актуальными учебными материалами, соответствующими
            подготовке к экзамену ЕГЭ, в электронном и печатном виде. Наши
            преподаватели являются составителями заданий ОГЭ и ЕГЭ
          </motion.p>
          <motion.p custom={5} variants={textAnim} className="mb-5">
            Домашнее задание после каждого урока с проверкой до следующего урока
          </motion.p>
          <motion.p custom={6} variants={textAnim} className="mb-5">
            Полное сопровождение выпускников до зачисления в университет
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutLessons;
