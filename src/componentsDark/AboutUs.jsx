import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
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
  const textYAnim = {
    hidden: {
      // x: 200,
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
      className="bg-rich-bg-black-to-white"
    >
      <div className="bg-ash-gray  font-medium">
        <div className=" mx-auto max-w-5xl   ">
          <div className="flex items-center justify-center flex-col-reverse lg:flex-row">
            <div className="row py-12 text-xl px-8 xl:px-0  sm:px-0 sm:w-5/6 lg:w-3/5 flex flex-col items-center ">
              <div className="">
                <motion.p custom={2} variants={textAnim} className="mb-6">
                  Раиль Кашапов - основатель образовательного центра . Выпускник
                  одного из лучших вузов страны МГУ им. М.В. Ломоносова. «В
                  школьные и студенческие годы я участвовал в многочисленных
                  олимпиадах и стал победителем Всероссийской олимпиады
                  школьников. Тема преподавания меня заинтересовала очень давно,
                  мне нравилось не только помогать будущим студентам в изучении
                  материала, но и способствовать преодолению их психологических
                  барьеров при поступлении. Именно поэтому я разработал
                  собственную методику преподавания, которая пользуется спросом
                  на рынке более 5 лет, я изучил все нюансы ЕГЭ и ОГЭ изнутри -
                  я был одним из составителей экзаменационных заданий по
                  математике. Занимаясь этим более 7 лет, я все равно не
                  останавливаюсь на достигнутом, а постоянно ищу способы
                  улучшить свои методики»
                </motion.p>
                <motion.p custom={3} variants={textAnim}>
                  Дополнительные отзывы можете посмотреть на{" "}
                  <a
                    href="https://profi.ru/profile/KashapovRN2"
                    className="text-green-700  duration-300 hover:text-green-500"
                  >
                    Профи.ру
                  </a>
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={textYAnim}
              custom={2}
              className=" w-100 pt-8 lg:mt-0 px-5 sm:px-0 sm:w-4/6 md:w-5/12 flex items-center justify-center"
            >
              <img className="img-rep rounded-xl" src="img/rail.webp" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
