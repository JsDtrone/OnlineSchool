import React, { useState } from "react";
import Form from "./Form";
import { motion } from "framer-motion";

function Teachers() {
  let [teachers, setTeachers] = useState([
    {
      src: "/img/teachers/1.webp",
      name: "Миров Юрий Алексеевич",
      lesson: "Химия",
      text: "Научный сотрудник МГУ, президент ассоциации психологов в сфере онкологических заболеваний",
    },

    {
      src: "/img/teachers/3.webp",
      name: "Коваль Светлана Николаевна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Преподаватель филологического факультета СПбГУ",
    },
    {
      src: "/img/teachers/2.webp",
      name: "Марвин Артур Радикович ",
      lesson: "Математика ",
      text: "Преподаватель высшей математики механико-математического факультета МГУ",
    },
    {
      src: "/img/teachers/4.webp",
      name: "Ябчанка Юлия Сергеевна ",
      lesson: "Обществознание ",
      text: "Победитель Всероссийской Олимпиады школьников, преподаватель ВШЭ",
    },
    {
      src: "/img/teachers/5.webp",
      name: "Макаров Алексей Николаевич ",
      lesson: "Биология, История ",
      text: "Кандидат Биологических наук, преподаватель МГУ, кафедра прикладной биотехнологии",
    },
    {
      src: "/img/teachers/6.webp",
      name: "Кузнецов Дмитрий Владимирович ",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Преподаватель Филологического факультета МГУ",
    },
    {
      src: "/img/teachers/7.webp",
      name: "Погребенкова Анна Юрьевна ",
      lesson: "Английский язык",
      text: "Преподаватель Высшей школы переводов МГУ",
    },
    {
      src: "/img/teachers/9.webp",
      name: "Кашапов Раиль Наилевич",
      lesson: "Математика, Обществознание",
      text: "Эксперт ЕГЭ, составитель заданий ЕГЭ",
    },
    {
      src: "/img/teachers/8.webp",
      name: "Колпакова Инна Викторовна ",
      lesson: "Русский и Английский язык ",
      text: "Эксперт ЕГЭ",
    },

    {
      src: "/img/teachers/10.webp",
      name: "Павлова Елена Анатольевна",
      lesson: "Математика",
      text: "Эксперт ЕГЭ. Преподаватель ВШЭ",
    },
    {
      src: "/img/teachers/12.webp",
      name: "Тенякова Анна Михайловна",
      lesson: "Русский язык ",
      text: "РГГУ филология, стаж преподавания 5 лет",
    },
    {
      src: "/img/teachers/11.webp",
      name: "София Волкова",
      lesson: "Обществознание",
      text: "МГУ, Юридический факультет",
    },
  ]);

  const textAnim = {
    hidden: {
      // y: -100,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  return (
    <div className="bg-cyan-100 border-b-2 border-white text-slate-900  py-20">
      <motion.div
        viewport={{ amount: 0.05, once: true }}
        whileInView="visible"
        initial="hidden"
        custom={1}
        variants={textAnim}
        className=" text-3xl md:text-4xl sm:text-5xl font-bold play text-center mb-16"
      >
        Наши преподаватели
      </motion.div>
      <div className="flex   justify-center">
        <div className="grid px-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4  grid-flow-row gap-x-4 gap-y-8 max-w-6xl">
          {teachers.map((e) => (
            <motion.div
              viewport={{ amount: 0.05, once: true }}
              whileInView="visible"
              initial="hidden"
              custom={1}
              variants={textAnim}
              key={e.src}
              className="flex flex-col items-center text-center"
            >
              <img src={e.src} alt="" className="w-9/12 rounded-full mb-4" />
              <div className="">
                <h3 className="text-xl mb-3">{e.name}</h3>
                <p className="mb-2">{e.lesson}</p>

                <p>{e.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl px-5 mx-auto mt-14">
        <motion.div
          viewport={{ amount: 0.05, once: true }}
          whileInView="visible"
          initial="hidden"
          custom={1}
          variants={textAnim}
          className=" "
        >
          <Form title="Оставить заявку на первое бесплатное занятие" />
          <motion.div
            viewport={{ amount: 0.05, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            className="mt-8 text-3xl xl:text-4xl play "
          >
            Позвонить и задать вопрос:{" "}
            <a href="tel:84954813825">
              <div className="lg:inline mt-3 lg:m-0">8 495 481 38 25</div>
            </a>{" "}
            <span className="hidden lg:inline ">/ </span>{" "}
            <a href="tel:89173766364">
              <div className="lg:inline mt-3 lg:m-0">8 917 376 63 64</div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Teachers;
