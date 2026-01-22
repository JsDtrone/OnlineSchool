import React, { useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import { Dialog } from "@headlessui/react";
import Teld from "./Teld";
function FreeLesson() {
  let [isOpen, setIsOpen] = useState(false);
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
  const textSAnim = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.2 },
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
  const [value, setValue] = useState("0");

  function chengeValue() {
    setValue(event.target.value);
    console.log(value);
  }

  let [lesson, setLesson] = useState([
    "Русский язык",
    "Обществознание",
    "Английский",
    "Математика",
    "Биология",
    "Химия",
    "Информатика",
    "История",
    "Физика",
    "География",
    "Python программирование", 
    "Разговорный Английский"
  ]);
  return (
    <motion.div
      viewport={{ amount: 0.05, once: true }}
      whileInView="visible"
      initial="hidden"
    >
      <div className="bg-amber-100 py-8  md:py-32  ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center ">
          <div className="flex flex-col items-center  justify-center ">
            <div className="flex flex-col max-w-fit sm:flex-row items-start sm:items-center sm:justify-between row-span-3">
              <div className="">
                {" "}
                <motion.div
                  custom={2}
                  variants={textAnim}
                  className="text-slate-950 text-start  play font-bold mb-3 sm:mb-2 md:mb-5"
                >
                  <h3 className=" text-4xl  md:text-6xl ">
                    Ле
                    <span className="">
                      <img
                        src="./img/umbrella.webp"
                        alt="Т"
                        className="inline w-6 md:h-10 h-6 md:w-10"
                      />
                    </span>
                    няя школа
                  </h3>
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textAnim}
                  className="text-slate-950 text-start  text-xl  sm:text-2xl md:text-3xl play font-bold mb-3 sm:mb-2 md:mb-5 ps-1"
                >
                  Для обучающихся 5-11 классов
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textAnim}
                  className="text-slate-950 text-start text-lg sm:text-base md:text-xl play font-bold mb-3 sm:mb-2 md:mb-5 ps-1"
                >
                  Сроки проведения: июнь-август 2025
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textAnim}
                  className="text-slate-950 text-start text-lg sm:text-base md:text-xl play font-bold mb-3 sm:mb-2 md:mb-5 ps-1"
                >
                  Начало уже 1 июня!
                </motion.div>
                <motion.div custom={2} variants={textAnim}>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="text-xl md:text-2xl text-slate-800 w-full-bt  btn-test  px-12 py-3 ms-1 hover:scale-110 ease-in-out duration-300 bg-amber-400 rounded-xl play"
                  >
                    Записаться
                  </button>
                </motion.div>
              </div>
              <motion.div
                custom={2}
                variants={textAnim}
                className="flex items-center justify-end   mt-6 sm:mt-0"
              >
                <div className=" sm:ms-12 w-full sm:w-80 md:w-96">
                  {" "}
                  <img
                    src="/img/newLomoPalm.webp"
                    className="  rounded-2xl"
                    alt="Ломоносов под пальмой"
                  />
                </div>
              </motion.div>
            </div>
            {/* <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center text-3xl play font-bold mt-16"
            >
              Набор на 2024-2025 учебный год открыт до{" "}
              <span className="text-amber-500">1 июня 2024</span>
            </motion.div> */}

            {/* <motion.a
              href="/test"
              custom={2}
              variants={textXAnim}
              className="block mt-10 w-full bg-amber-200 text-slate-800 btn-test   text-center rounded-xl py-3 px-4 md:py-6 md:px-12  text-xl md:text-2xl play font-bold hover:bg-amber-300 duration-200"
            >
              Пройти пробное онлайн тестирование бесплатно
            </motion.a> */}
          </div>
        </div>
      </div>
      {/* <div className=" mt-10 mb-6"> */}
      <div className="">
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          {/* Full-screen scrollable container */}
          <div className="fixed inset-0 w-screen bg-blur  overflow-y-auto">
            {/* Container to center the panel */}
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                variants={textSAnim}
                viewport={{ amount: 0.05, once: true }}
                whileInView="visible"
                initial="hidden"
                className=" inset-0 flex w-screen max-h-dvh  items-center justify-center "
              >
                <Dialog.Panel className="   rounded-xl bg-amber-50  p-5 flex items-center justify-center">
                  <div className="hidden w-80 mx-10 md:py-20 lg:flex items-center justify-center">
                    <img src="/img/palmd.webp" className="" alt="Пальма" />
                  </div>
                  <div className="">
                    <div className=" w-full duration-200 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="text-gray-400 bg-transparent hover:scale-125 duration-200 hover:bg-gray-200  hover:text-gray-400  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                        data-modal-hide="default-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <form
                      name="form"
                      method="post"
                      action="https://lomonosovites.ru/mailSummerNew.php"
                      className="p-5  pt-0  "
                    >
                      <div className="w-full md:me-4 ">
                        <label
                          for="name"
                          className="block mb-2 font-medium   text-xl"
                        >
                          Ваше имя
                        </label>
                        <input
                          name="name"
                          type="text"
                          className=" border text-md mb-5  border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200  text-gray-700   placeholder-gray-500 "
                          placeholder="Иванов Иван"
                          required
                        />
                      </div>
                      <div className="w-full md:me-4 ">
                        <label
                          for="phone"
                          className="block mb-2 font-medium   text-xl"
                        >
                          Ваш номер телефона
                        </label>
                        <input
                          name="phone"
                          type="number"
                          className=" border text-md border-gray-300 mb-5  px-3 py-3  text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200     placeholder-gray-500 "
                          placeholder="8 999 999 99 99"
                          required
                        />
                      </div>
                      <label
                        for="class"
                        className="block mb-2 font-medium   text-xl"
                      >
                        В какой класс переходите
                      </label>

                      <div className="flex  flex-col sm:items-center sm:flex-row">
                        <div className=" flex items-center">
                          <input
                            type="radio"
                            name="class-5"
                            value="5"
                            checked={value == "5" ? true : false}
                            onChange={chengeValue}
                            className="w-4 h-4 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 me-5 ">
                            5
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="class-6"
                            value="6"
                            checked={value == "6" ? true : false}
                            onChange={chengeValue}
                            className="w-4 h-4 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 me-5">
                            6
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="class-7"
                            value="7"
                            checked={value == "7" ? true : false}
                            onChange={chengeValue}
                            className="w-4 h-4 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 me-5">
                            7
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="class-8"
                            value="8"
                            checked={value == "8" ? true : false}
                            onChange={chengeValue}
                            className="w-4 h-4 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 me-5">
                            8
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="class-9"
                            value="9"
                            checked={value == "9" ? true : false}
                            onChange={chengeValue}
                            className="w-4 h-4 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 me-5">
                            9
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="class-10"
                            value="10"
                            checked={value == "10" ? true : false}
                            onChange={chengeValue}
                            className="w-4 h-4 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 me-5">
                            10
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="class-11"
                            value="11"
                            checked={value == "11" ? true : false}
                            onChange={chengeValue}
                            className="w-4 h-4 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 me-5">
                            11
                          </label>
                        </div>
                      </div>
                      <label
                        for="countries"
                        className="block my-2 font-medium   text-xl"
                      >
                        Какие предметы хотите изучать
                      </label>
                      
                        <div className="grid sm:grid-cols-2 my-5">
                          {lesson.map((e) => (
                            <div className="flex items-center mb-4">
                              <input
                                name={`lesson-${lesson.indexOf(e)}`}
                                id="link-checkbox"
                                type="checkbox"
                                value={e}
                                className="w-6 md:w-4 h-6 md:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 "
                              />
                              <label className="ms-2 text-md font-medium text-slate-800 ">
                                {e}
                              </label>
                            </div>
                          ))}
                        </div>
                      

                      <div className="w-full flex items-end md:justify-center">
                        <button
                          type="submit"
                          className=" font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-amber-300  "
                        >
                          Отправить
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </div>
        </Dialog>
      </div>
    </motion.div>
  );
}

export default FreeLesson;
