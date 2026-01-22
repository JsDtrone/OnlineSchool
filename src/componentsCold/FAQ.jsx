import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  let [firstH, setfirstH] = useState([
    {
      question:
        "Какие предметы для подготовки к экзаменам доступны в вашем центре?",
      answer:
        "В нашем образовательном центре предоставляется подготовка по математике (базовая, профильная), русскому языку, английскому  языку, обществознанию, физике, химии, биологии, литературе, информатике, истории и географии.",
    },
    {
      question:
        "Какие методики обучения используются в центре для подготовки к математике?",
      answer:
        "      Наш центр использует индивидуальный подход к каждому ученику, адаптируя методики в зависимости от потребностей. Мы акцентируем внимание на понимании концепций, решении задач различной сложности, и подготовке к типовым экзаменационным ситуациям.",
    },
    {
      question:
        "Какие результаты достигают ваши ученики после прохождения подготовки в центре?",
      answer:
        "    Многие наши ученики достигают высоких баллов на экзаменах, а также успешно выступают олимпиадах. Мы гордимся их достижениями, и наша команда постоянно работает над совершенствованием подходов к обучению. ",
    },
  ]);
  let [secondH, setsecondH] = useState([
    {
      question: "Какая квалификация у ваших преподавателей?",
      answer:
        "Наши преподаватели - профессионалы со степенями в области математики и других научных дисциплин. Они имеют богатый опыт работы с учащимися и глубокие знания в области подготовки к экзаменам и олимпиадам. Каждый из них обладает педагогическим мастерством и страстью к обучению.",
    },
    {
      question:
        "Предоставляете ли вы индивидуальные занятия для подготовки к ЕГЭ, ОГЭ и олимпиадам по математике?",
      answer:
        "Да, мы предлагаем как групповые, так и индивидуальные занятия с опытными преподавателями. Мы стремимся адаптировать программу обучения под индивидуальные потребности каждого ученика, чтобы обеспечить максимально эффективную подготовку.",
    },
    {
      question:
        "Почему стоимость подготовки в вашем центре ниже, чем на рынке?",
      answer:
        "Мы считаем, что качественная подготовка к ЕГЭ, ОГЭ и олимпиадам по математике, а также к дополнительным вступительным испытаниям должна быть доступной для всех учащихся. Мы стремимся обеспечить высокий профессиональный уровень обучения по доступной цене, чтобы максимальное количество учеников могли получить качественные знания и подготовку к успешной сдаче экзаменов. Для нас важно, чтобы финансовые возможности не стали барьером на пути к образованию и успеху на экзаменах. Мы вам гарантируем качественную и эффективную подготовку и индивидуальный подход к любому учащемуся!",
    },
  ]);
  const textAnim = {
    hidden: {
      // y: -100,
      opacity: 0,
      scale: 0.9,
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
      opacity: 0,
      scale: 0.9,
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
      opacity: 0,
      scale: 0.9,
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
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  return (
    <motion.div id="FAQ" className="bg-cyan-100 ">
      <section className="relative rounded-6xl z-20 overflow-hidden bg-slate-100 pb-12 pt-20 bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <motion.span
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={3}
                  variants={textAnim}
                  className="mb-2 block text-lg font-semibold text-primary text-slate-800"
                >
                  Есть вопросы? Смотрите здесь
                </motion.span>
                <motion.h2
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={2}
                  variants={textYAnim}
                  className="mb-4 text-3xl font-bold text-dark text-slate-800 sm:text-[40px]/[48px]"
                >
                  Часто задаваемые вопросы
                </motion.h2>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap px-5 lg:px-0">
            <div className="w-full px-3 lg:w-1/2 ">
              {firstH.map((e) => (
                <motion.div
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  key={firstH.indexOf(e)}
                  custom={firstH.indexOf(e) + 1}
                  variants={textXSAnim}
                  className=" "
                >
                  <AccordionItem header={e.question} text={e.answer} />
                </motion.div>
              ))}
            </div>
            <div className="w-full px-4 lg:w-1/2">
              {secondH.map((e) => (
                <motion.div
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  key={secondH.indexOf(e)}
                  custom={secondH.indexOf(e) + 1}
                  variants={textXAnim}
                  className=" "
                >
                  <AccordionItem header={e.question} text={e.answer} />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.span
            custom={4}
            viewport={{ amount: 0.05, once: true }}
            whileInView="visible"
            initial="hidden"
            variants={textAnim}
            className="mb-2 block text-2xl font-semibold text-primary text-center text-slate-800 mt-10"
          >
            Остались еще вопросы?
            <br className="block md:hidden" /> Напиши нам в{" "}
            <a
              href="https://wa.me/79173766364"
              className="text-3xl text-green-400 hover:text-4xl ease-in-out duration-300 cursor-pointer hover:text-emerald-400"
            >
              Whatsapp
            </a>
          </motion.span>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-3xl bg-emerald-200 p-4 border-d-b sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left `}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary bg-white/5">
          <svg
            className={` stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="#9fb8ad"
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark text-slate-800">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out text-slate-800 ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed  text-dark-6">{text}</p>
      </div>
    </div>
  );
};
