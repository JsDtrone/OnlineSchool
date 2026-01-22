import React from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";

const stats = [
  { id: 1, name: "Опыт преподавания", value: "10 лет" },
  { id: 3, value: "84 балла", name: "Средний балл выпускников" },
  { id: 2, value: "МГУ", name: "основной преподавательский состав " },
];

const stats1 = [
  { id: 2, value: "более 2 тыс", name: "выпускников ежегодно" },
  { id: 2, value: "+27 баллов", name: "минимальный прогресс к концу курса " },
];

{
  /* <div className="absolute  pb-40 -ms-120">
<img className="plane" src="img/plane.svg" alt="" />
</div>
<div className="absolute  -mt-80 ps-100">
<img className="pen" src="img/pen.svg" alt="" />
</div>
<div className="absolute  -mb-60 -ms-80">
<img className="star" src="img/star.svg" alt="" />
</div>
<div className="absolute  pt-100 ps-100">
<img className="click" src="img/click.svg" alt="" />
</div> */
}
export default function Achievements() {
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
    <div id="aboutUs" className="">
      <motion.div className="bg-rich-black pt-24 sm:pt-24 sm:pb-8 px-5 text-center xl:px-0">
        <div className="mx-auto max-w-5xl ">
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            className="text-center text-slate-50 text-5xl font-bold play "
          >
            О нашей школе
          </motion.div>
          <div className="row pt-16 text-xl text-slate-50 ">
            <motion.p
              viewport={{ amount: 0.1, once: true }}
              whileInView="visible"
              initial="hidden"
              custom={1}
              variants={textXAnim}
              className="mb-5"
            >
              Образовательный центр "Ломоносовцы" был основан в 2018 году.
              Изначально мы работали как онлайн-платформа по подготовке к ЕГЭ и
              ОГЭ. Уже на старте нашей деятельности мы ответственно подошли к
              выбору преподавателей, так как, на наш взгляд, грамотный педагог
              играет важную роль - формирует у ребенка желание учиться. Нам было
              важно, чтобы ребята не только чувствовали себя комфортно на
              занятиях и с интересом изучали материал, но и за короткий интервал
              могли получить высокий результат. Именно поэтому все преподаватели
              «подкованы» технически. Многие из них участвуют в составлении
              экзаменационных вариантов ЕГЭ и ОГЭ, а также работают в таких
              вузах как МГУ, ВШЭ, МФТИ, МГИМО.
            </motion.p>
            <motion.p
              viewport={{ amount: 0.1, once: true }}
              whileInView="visible"
              initial="hidden"
              custom={1}
              variants={textXAnim}
              className="mb-5"
            >
              С каждым годом количество учащихся систематически возрастало. И в
              настоящее время наша деятельность стала охватывать более 10
              образовательных направлений по 7 предметам. Значительный рост
              спроса со стороны клиентуры привел к существенному увеличению
              численности нашего преподавательского состава. И вскоре мы приняли
              решение об открытии офлайн-курсов в центре Москвы. После первого
              такого опыта мы заметили, что успеваемость учеников многократно
              выросла. Офлайн занятия показали более быстрый и высокий
              результат, ребята более сосредоточены на занятиях. Кроме того наши
              преподаватели придумывают «игры» в конце каждого занятия, это
              способствует лучшему запоминанию материала и адаптации студента в
              группе.
            </motion.p>

            <motion.p
              viewport={{ amount: 0.1, once: true }}
              whileInView="visible"
              initial="hidden"
              custom={1}
              variants={textXAnim}
              className="mb-5"
            >
              В этом году уровень образовательного сопровождения, оказываемого
              нашим центром, достиг самых высоких показателей в Москве. Средний
              балл по результатам сдачи ОГЭ составляет 4,8, средний балл по ЕГЭ
              – 86, а по результатам сдачи ДВИ в Московском университете – 80.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        custom={1}
        variants={textYAnim}
        className=""
      >
        <Slider />
      </motion.div>
      <motion.div className="bg-platinum py-24 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
            {stats.map((stat) => (
              <motion.div
                viewport={{ amount: 0.05, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={1}
                variants={textYAnim}
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-black-800 sm:text-5xl">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
          <dl className="text-center grid grid-cols-1 gap-x-8 gap-y-16 mt-16  lg:flex lg:justify-around lg:px-20 lg:mt-8 ">
            {stats1.map((stat) => (
              <motion.div
                viewport={{ amount: 0.05, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={1}
                variants={textYAnim}
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-black-800 sm:text-5xl">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.div>
      <div id="benefits" className="bg-platinum-to-rich-black">
        <div className="bg-gray-800 pb-10  lg:py-24   sm:pt-26 rounded-6xl">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center text-slate-50 text-5xl font-bold play pt-10 mb-20">
              <h2 custom={2} variants={textAnim}>
                {" "}
                Почему мы ?
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-sky lg:col-span-3 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Эффективный формат обучения (очный формат, живое общение с
                профессиональными преподавателями)
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXSAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-purple lg:col-span-2 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Локации наших аудиторий очень удобны для всех районов Москвы
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-green  lg:col-span-2 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Высокий уровень преподавателей, которые являются экспертами ЕГЭ
                и составителями заданий ЕГЭ
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXSAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-cyan lg:col-span-3 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Полное сопровождение выпускников до поступления (мы поможем со
                сбором документов, расскажем обо всех тонкостях). Никого не
                оставим без внимания
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-pink lg:col-span-4 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Индивидуальный подход к ученикам (группы формируются исходя из
                уровня подготовки студентов нашего центра, с каждым учеником мы
                находимся на связи 24/7, помогаем при проделывании домашнего
                задания, консультируем по всем вопросам)
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXSAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-yellow lg:col-span-1 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Возврат средств при расторжении договора
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-orange lg:col-span-2 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Скидки при долгосрочных занятиях, также первое занятие всегда
                бесплатное
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXSAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start hover:scale-105 duration-200  row-span-1 bg-d-sky lg:col-span-3 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Собственная методика образования! (Нет, это не просто слова, мы
                обучаем только по собственной методике образования, которая
                эффективно используется многими преподавателями уже более 5 лет)
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-purple lg:col-span-5 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Преподаватели с многолетним опытом, у которых более 50+ только
                положительных отзывов в различных агентствах (со всеми анкетами
                мы можете подробно ознакомиться на нашем сайте)
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-cyan lg:col-span-2 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Великолепная атмосфера занятий с зонами отдыха и угощениями
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXSAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-pink lg:col-span-3 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Занятия длятся 1 час, 1.5 либо 2 часа
              </motion.div>

              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-green lg:col-span-3 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Цены ниже рыночной стоимости, поэтому у нас всегда большой
                наплыв клиентов (даже летом)
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textXSAnim}
                custom={1}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
                className="text-center lg:text-start   row-span-1 bg-d-yellow lg:col-span-2 border-d-b p-8  text-xl font-bold play rounded-4xl flex justify-center items-center"
              >
                Возможность онлайн наблюдения за учебным процессом
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
