import React, { useState } from "react";

import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

function PriceSummerNew() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenPrice, setIsOpenPrice] = useState(false);

  let [month, setMonth] = useState(1);

  const textYAnim = {
    hidden: {
      // y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  const [value, setValue] = useState("0");

  function chengeValue() {
    setValue(event.target.value);
    // console.log(value);
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
    "Разговорный Английский",
  ]);
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
  return (
    <div className="bg-ab">
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

      <div className=" mx-auto max-w-5xl pt-10 px-3 sm:px-8 ">
        <motion.div
          viewport={{ amount: 0.1, once: true }}
          whileInView="visible"
          initial="hidden"
          custom={1}
          variants={textAnim}
          className="text-center mb-8  text-3xl text-slate-800 font-bold play"
        >
          {" "}
          Цены на летнюю школу{" "}
        </motion.div>
        <motion.div
          viewport={{ amount: 0.1, once: true }}
          whileInView="visible"
          initial="hidden"
          custom={1}
          variants={textAnim}
          className="w-full shadow-sm rounded-full grid grid-cols-3 gap-1 bg-white border  lg:border-2 border-gray-200"
        >
          {month == 1 ? (
            <div
              onClick={() => {
                setMonth(1);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300 duration-100 cursor-pointer bg-amber-200"
            >
              1&nbsp;месяц
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(1);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200 duration-100 cursor-pointer "
            >
              1&nbsp;месяц
            </div>
          )}
          {month == 2 ? (
            <div
              onClick={() => {
                setMonth(2);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300  duration-100 cursor-pointer bg-amber-200"
            >
              2&nbsp;месяца
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(2);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200  duration-100 cursor-pointer "
            >
              2&nbsp;месяца
            </div>
          )}
          {month == 3 ? (
            <div
              onClick={() => {
                setMonth(3);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300  duration-100 cursor-pointer bg-amber-200"
            >
              3&nbsp;месяца
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(3);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200  duration-100 cursor-pointer "
            >
              3&nbsp;месяца
            </div>
          )}
        </motion.div>
        <motion.div
          viewport={{ amount: 0.1, once: true }}
          whileInView="visible"
          initial="hidden"
          custom={1}
          variants={textAnim}
          className="sm:text-xl sm:text-center bg-amber-200 rounded-xl py-3 my-4 shadow px-5"
        >
          Cроки проведения:{" "}
          {month == 1 ? (
            <span>
              {" "}
              <br className="hidden-465 " /> 1&nbsp;июня - 30&nbsp;июня;
              <br className=" md:hidden" /> 15&nbsp;июня - 15&nbsp;июля;
              <br className="hidden-465" />
              <br className="hidden md:inline lg:hidden" /> 1&nbsp;июля -
              31&nbsp;июля;
              <br className=" md:hidden" />
              <br className="hidden lg:inline" /> 15&nbsp;июля -
              15&nbsp;августа;
              <br className="hidden-465" /> 1&nbsp;августа - 31&nbsp;августа
            </span>
          ) : (
            ""
          )}
          {month == 2 ? (
            <span>
              <br className="hidden-465" />
              1&nbsp;июня -31&nbsp;июля;
              <br className=" lg:hidden" /> 15&nbsp;июня - 15&nbsp;августа;
              <br className="hidden-465" /> 1&nbsp;июля - 31&nbsp;августа
            </span>
          ) : (
            ""
          )}
          {month == 3 ? (
            <span>
              <br className="hidden-465" />
              1&nbsp;июня - 30&nbsp;августа
            </span>
          ) : (
            ""
          )}
        </motion.div>
        <div className="row  pb-16 grid lg:grid-flow-col gap-3.5    ">
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            onClick={() => setIsOpen(true)}
            className="bg-amber-200 cursor-pointer shadow-md sm:text-center w-full px-3 py-3 mb-1 sm:mb-3  rounded-[18px] "
          >
            <h2 className=" text-2xl  pt-2  ps-2 sm:ps-0">
              Стандартная программа
            </h2>
            <div className="mb-3 mt-1  ps-2 sm:ps-0">
              1 занятие - 2 академических часа
              <br />
              {month == 1 ? <span> 5&nbsp;занятий /&nbsp;предмет</span> : ""}
              {month == 2 ? <span>9&nbsp;занятий /&nbsp;предмет</span> : ""}
              {month == 3 ? <span>14&nbsp;занятий /&nbsp;предмет</span> : ""}
            </div>
            <div className="flex  flex-wrap ">
              <div className="basis-1/2 sm:basis-1/4 w-full  border-b-2 sm:border-b-0   text-center rounded-tl-md sm:rounded-none sm:rounded-l-md py-2 px-2  bg-amber-100 leading-8 ">
                1 предмет <br />
                {month == 1 ? <span>6800</span> : ""}
                {month == 2 ? <span>12 300</span> : ""}
                {month == 3 ? <span>19 250</span> : ""} руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full border-b-2 sm:border-b-0   border-x-2 sm:border-s-2 rounded-tr-md sm:rounded-none text-center py-2 px-2  bg-amber-100 leading-8 ">
                2 предмета <br />
                {month == 1 ? <span>13 500</span> : ""}
                {month == 2 ? <span>24 100</span> : ""}
                {month == 3 ? <span>36 600</span> : ""} руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full  border-s-2 rounded-bl-md sm:rounded-none sm:border-s-0 text-center py-2 px-2  bg-amber-100 leading-8 ">
                3 предмета <br />
                {month == 1 ? <span>19 800</span> : ""}
                {month == 2 ? <span>35 900</span> : ""}
                {month == 3 ? <span>51 900</span> : ""} руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full  border-s-2 rounded-br-md sm:rounded-none sm:rounded-r-md text-center py-2 px-2  bg-amber-100 leading-8 ">
                4 предмета <br />
                {month == 1 ? <span>24 500</span> : ""}
                {month == 2 ? <span>47 200</span> : ""}
                {month == 3 ? <span>65 450</span> : ""} руб
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            onClick={() => setIsOpen(true)}
            className="bg-amber-200 cursor-pointer shadow-md sm:text-center w-full px-3 py-3 mb-3 rounded-[18px] "
          >
            <h2 className=" text-2xl  pt-2  ps-2 sm:ps-0">
              Интенсивная программа
            </h2>
            <div className="mb-3 mt-1  ps-2 sm:ps-0">
              1 занятие - 2 академических часа
              <br />
              {month == 1 ? <span> 14&nbsp;занятий /&nbsp;предмет</span> : ""}
              {month == 2 ? <span>18 &nbsp;занятий /&nbsp;предмет</span> : ""}
              {month == 3 ? <span>28 &nbsp;занятий /&nbsp;предмет</span> : ""}
            </div>
            <div className="flex  flex-wrap ">
              <div className="basis-1/2 sm:basis-1/4 w-full  border-b-2 sm:border-b-0   text-center rounded-tl-md sm:rounded-none sm:rounded-l-md py-2 px-2  bg-amber-100 leading-8 ">
                1 предмет <br />
                {month == 1 ? <span>19 250</span> : ""}
                {month == 2 ? <span>24 750</span> : ""}
                {month == 3 ? <span>36 600</span> : ""} руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full  border-b-2 sm:border-b-0   border-x-2 sm:border-s-2 rounded-tr-md sm:rounded-none text-center py-2 px-2  bg-amber-100 leading-8 ">
                2 предмета <br />
                {month == 1 ? <span>36 600</span> : ""}
                {month == 2 ? <span>47 500</span> : ""}
                {month == 3 ? <span>65 450</span> : ""} руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full  border-s-2 rounded-bl-md sm:rounded-none sm:border-s-0 text-center py-2 px-2  bg-amber-100 leading-8 ">
                3 предмета <br />
                {month == 1 ? <span>51 900</span> : ""}
                {month == 2 ? <span>71 250</span> : ""}
                {month == 3 ? <span>95 860</span> : ""} руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full  border-s-2 rounded-br-md sm:rounded-none sm:rounded-r-md text-center py-2 px-2  bg-amber-100 leading-8 ">
                4 предмета <br />
                {month == 1 ? <span>65 450</span> : ""}
                {month == 2 ? <span>95 450</span> : ""}
                {month == 3 ? <span>126 280</span> : ""} руб
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PriceSummerNew;
