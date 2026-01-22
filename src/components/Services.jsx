import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Price from "./Price";
import PriceDvi from "./PriceDVI";
import PricePyEng from "./PricePyEng";

import { motion } from "framer-motion";
import Form from "./Form";

function Services() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenDvi, setIsOpenDvi] = useState(false);
  let [isOpenPyEng, setIsOpenPyEng] = useState(false);

  const [value, setValue] = useState("0");

  function chengeValue() {
    setValue(event.target.value);
  }

  // const textAnim = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     opacity: 1,
  //     transition: { type: "easyOut", delay: custom * 0.2, duration: 0.6 },
  //   }),
  // };
  // const textXAnim = {
  //   hidden: {
  //     x: 100,
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     x: 0,
  //     opacity: 1,
  //     transition: { type: "easyOut", delay: custom * 0.2, duration: 0.6 },
  //   }),
  // };
  let zsta;
  let currentUrl;

  function ssd() {
    let date = new Date();
    let avs = "wezsxrdctfrmbmhgvyhbujiksdfghoukjrhtdshewtrdegvhj";
    const zas =
      `${date.getUTCHours()}` +
      `${date.getFullYear()}` +
      `${date.getDate() + (date.getMinutes() - (date.getMinutes() % 10)) / 10}`;
    let arrf1 = [];

    for (let i = 0; i < zas.length; i++) {
      arrf1.push(avs[Number(zas[i])]);
    }
    currentUrl = window.location.href.substring(32, 39);
    zsta = arrf1.join("");
  }
  ssd();

  const textYBAnim = {
    hidden: {
      scale: 0.9,
      // y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  // const textYTAnim = {
  //   hidden: {
  //     y: -100,
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     y: 0,
  //     opacity: 1,
  //     transition: { type: "easyOut", delay: custom * 0.2, duration: 0.6 },
  //   }),
  // };
  // const textXSAnim = {
  //   hidden: {
  //     x: -100,
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     x: 0,
  //     opacity: 1,
  //     transition: { type: "easyOut", delay: custom * 0.2, duration: 0.6 },
  //   }),
  // };

  let [lesson, setLesson] = useState([
    "Русский язык",
    "Обществознание",
    "Английский",
    "Математика",
    "Биология",
    "Химия",
    "Литература",
    "История",
    "Физика",
    "География",
    "Информатика",
  ]);

  let [DVE, setDVE] = useState([
    "Журналистика",
    "Обществознание",
    "Английский",
    "Математика",
    "Биология",
    "Химия",
    "Литература",
    "История",
    "Физика",
    "География",
  ]);
  return (
    <motion.div id="services" className="bg-white-to-amber-50">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 " aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-x-hidden overflow-y-auto bg-blur ">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className=" inset-0 flex w-screen max-h-lvh   items-center justify-center ">
              <Dialog.Panel className="   rounded-xl bg-amber-50 pb-10 sm:pb-16  px-4 sm:p-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-200   mt-4 md:mt-0 hover:bg-gray-200   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
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
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="px-0 sm:px-8 ">
                  <Price />
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={isOpenDvi}
        onClose={() => setIsOpenDvi(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 " aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen  overflow-y-auto bg-blur ">
          {/* Container to center the panel */}
          <div className="flex min-h-full  items-center justify-center p-4">
            <div className=" inset-0 flex w-screen max-h-lvh   items-center justify-center ">
              <Dialog.Panel className="   rounded-xl bg-amber-50 px-4 sm:p-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpenDvi(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-200   mt-4 md:mt-0 hover:bg-gray-200   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
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
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="px-0 sm:px-8 ">
                  <PriceDvi />
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={isOpenPyEng}
        onClose={() => setIsOpenPyEng(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 " aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen  overflow-y-auto bg-blur ">
          {/* Container to center the panel */}
          <div className="flex min-h-full  items-center justify-center p-4">
            <div className=" inset-0 flex w-screen max-h-lvh   items-center justify-center ">
              <Dialog.Panel className="   rounded-xl bg-amber-50 px-4 sm:p-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpenPyEng(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-200   mt-4 md:mt-0 hover:bg-gray-200   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
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
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="px-0 sm:px-8 ">
                  <PricePyEng />
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
      <div className="bg-amber-100   text-slate-800 rounded-b-6xl px-10 xl:px-0">
        <div className=" mx-auto max-w-5xl pt-10 pb-16  ">
          <div className="row py-16 flex flex-col items-center">
            <div className="text-5xl font-bold mb-20"> Курсы</div>
            <div className="grid grid-cols-3 row-auto gap-y-8 gap-x-7 w-full ">
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={2}
                variants={textYBAnim}
                className="rounded-6xl py-10 px-12 w-full bg-amber-400 col-span-3 flex flex-col justify-center lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-slate-800">
                  ОГЭ
                </div>
                {lesson.map((e) => (
                  <div
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110 bg-amber-100 text-slate-800  p-2 rounded-xl mb-4 text-center play font-bold "
                  >
                    {e}
                  </div>
                ))}
              </motion.div>
              <motion.div
                variants={textYBAnim}
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={2.33}
                className="rounded-6xl py-10 px-12 w-full bg-amber-400 col-span-3 lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-slate-800">
                  ЕГЭ
                </div>
                {lesson.map((e) => (
                  <div
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110 bg-amber-100 text-slate-800  p-2 rounded-xl mb-4 text-center play font-bold "
                  >
                    {e}
                  </div>
                ))}
              </motion.div>

              <motion.div
                custom={2.7}
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textYBAnim}
                className="rounded-6xl py-10 px-12 w-full bg-amber-400 col-span-3 lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-slate-800">
                  ДВИ
                </div>
                {DVE.map((e) => (
                  <div
                    onClick={() => {
                      setIsOpenDvi(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110 bg-amber-100 text-slate-800  p-2 rounded-xl mb-4 text-center play font-bold "
                  >
                    {e}
                  </div>
                ))}
              </motion.div>

              <div className="col-span-3  md:grid w-full  grid-cols-2 lg:grid-cols-3  grid-rows-3 xl:grid-rows-5 gap-y-5 xl:gap-y-7 gap-x-7     text-slate-800">
                <motion.div
                  viewport={{ amount: 0.1, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={1}
                  onClick={() => {
                    setIsOpenPyEng(true);
                  }}
                  variants={textYBAnim}
                  className="col-span-1 cursor-pointer hidden md:block row-span-3   xl:row-span-5  rounded-4xl py-8 pl-9 pr-11 w-full bg-slate-300 text-slate-800"
                >
                  <div className="text-2xl flex flex-col h-full justify-between play font-bold  ">
                    <div className="">
                      <div className="xl:ps-2.5 ps-0.5  mt-1">
                        Python программирование
                      </div>
                    </div>
                    <div className="">
                      <img src="/img/python.webp" alt="" className="mt-6 " />
                    </div>
                  </div>
                </motion.div>
                <div className="row-span-3 hidden  md:grid lg:hidden grid-rows-2 h-full gap-y-5  ">
                  {" "}
                  <motion.div
                    viewport={{ amount: 0.1, once: true }}
                    whileInView="visible"
                    initial="hidden"
                    custom={1}
                    variants={textYBAnim}
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className=" col-span-1 cursor-pointer xl:col-span-2 mb-8 md:mb-0 row-span-1 xl:row-span-1 flex items-center justify-center rounded-4xl py-3 px-12 w-full bg-amber-400 text-slate-800"
                  >
                    <div className="text-2_6xl text-2xl text-center play font-bold  ">
                      Повышение успеваемости <br /> для 5-8 классов
                    </div>
                  </motion.div>
                  <motion.div
                    viewport={{ amount: 0.1, once: true }}
                    whileInView="visible"
                    initial="hidden"
                    custom={1}
                    variants={textYBAnim}
                    onClick={() => {
                      setIsOpenDvi(true);
                    }}
                    className=" mb-8 md:mb-0  cursor-pointer col-span-1 xl:col-span-2 row-span-1 xl:row-span-1 rounded-4xl flex items-center justify-center py-3 px-12 w-full bg-amber-400 text-slate-800"
                  >
                    <div className="text-2_6xl text-2xl text-center play font-bold  ">
                      Подготовка к олимпиадам
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  viewport={{ amount: 0.1, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={1}
                  variants={textYBAnim}
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className=" md:hidden lg:flex col-span-1 cursor-pointer xl:col-span-2 mb-8 md:mb-0 row-span-1 xl:row-span-1 flex items-center justify-center rounded-4xl py-10 md:py-3 px-12 w-full bg-amber-400 text-slate-800"
                >
                  <div className="text-2_6xl text-2xl text-center play font-bold  ">
                    Повышение успеваемости <br /> для 5-8 классов
                  </div>
                </motion.div>
                <motion.div
                  viewport={{ amount: 0.1, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={1}
                  variants={textYBAnim}
                  onClick={() => {
                    setIsOpenDvi(true);
                  }}
                  className=" md:hidden lg:flex mb-8 md:mb-0  cursor-pointer col-span-1 xl:col-span-2 row-span-1 xl:row-span-1 rounded-4xl flex items-center justify-center py-10 md:py-3 px-12 w-full bg-amber-400 text-slate-800"
                >
                  <div className="text-2_6xl text-2xl text-center play font-bold  ">
                    Подготовка к олимпиадам
                  </div>
                </motion.div>
                <motion.div
                  viewport={{ amount: 0.1, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={1}
                  variants={textYBAnim}
                  onClick={() => {
                    setIsOpenPyEng(true);
                  }}
                  className=" md:hidden cursor-pointer mb-8 md:mb-0 block    rounded-4xl py-8 pl-9 pr-11 w-full bg-slate-300 text-slate-800"
                >
                  <div className="text-2xl text-center flex flex-col play items-center font-bold  ">
                    <span className="xl:ps-2.5 ps-0.5 pl-2 mt-1">
                      {" "}
                      Python программирование
                    </span>
                    <img
                      src="/img/python.webp"
                      alt=""
                      className="mt-6 sm:w-80"
                    />
                  </div>
                </motion.div>{" "}
                <motion.div
                  viewport={{ amount: 0.1, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={1}
                  variants={textYBAnim}
                  className="col-span-2  xl:col-span-2 row-span-2 xl:row-span-3 rounded-4xl flex flex-col sm:flex-row justify-between   w-full bg-slate-300 text-slate-800"
                >
                  <div
                    className="play text-3xl cursor-pointer py-8 ps-11 w-full"
                    onClick={() => {
                      setIsOpenPyEng(true);
                    }}
                  >
                    {" "}
                    Разговорный <br /> Английский
                    <br />
                    язык
                  </div>
                  <div className="sm:flex items-end h-full  cursor-default ">
                    <div className="hidden sm:block play text-start text-7xl pb-2 pr-0 leading-[0.7] text-white vertical-text  ">
                      SPEAKING
                    </div>

                    <div className="sm:h-96 aspect-3/4   h-full w-full sm:w-72 rounded-4xl">
                      <video
                        poster="/img/engposter.webp"
                        className="rounded-2xl shadow-2xl aspect-3/4"
                        controls
                        loading="lazy"
                        src="/video/conversationalEnglish.mp4"
                      ></video>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <motion.div
              viewport={{ amount: 0.1, once: true }}
              whileInView="visible"
              initial="hidden"
              className=""
            >
              <motion.div
                custom={2}
                variants={textYBAnim}
                className=" text-slate-800 text-2xl sm:text-3xl font-bold play "
              >
                В любой момент вернём деньги
              </motion.div>
              <motion.div
                custom={2.3}
                variants={textYBAnim}
                className="row pb-4 pt-2  text-xl    text-slate-800 "
              >
                <p className="">
                  Ты всегда сможешь вернуть деньги за оставшуюся часть
                  программы.
                </p>
              </motion.div>
              <motion.div
                custom={2.6}
                variants={textYBAnim}
                className=" text-slate-800 text-2xl sm:text-3xl font-bold play "
              >
                Маткапитал
              </motion.div>
              <motion.div
                custom={3}
                variants={textYBAnim}
                className="row pb-4 pt-2  text-xl    text-slate-800 "
              >
                <p className="">
                  Маткапиталом можно полностью оплатить обучение ребёнка
                </p>
              </motion.div>{" "}
              <motion.div
                custom={3.3}
                variants={textYBAnim}
                className=" text-slate-800 text-2xl sm:text-3xl font-bold play "
              >
                Налоговый вычет
              </motion.div>
              <motion.div
                custom={3.6}
                variants={textYBAnim}
                className="row pb-4 pt-2  text-xl    text-slate-800 "
              >
                <p className=" mb-10">
                  13% вернёт налоговая за обучение ребёнка
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              viewport={{ amount: 0.1, once: true }}
              whileInView="visible"
              initial="hidden"
              custom={1.5}
              variants={textYBAnim}
              className="img  lg:w-1/3 flex items-center justify-end mb-10 lg:mb-0 w-4/10"
            >
              <img src="/img/saleWarm.webp" alt="" />
            </motion.div>
          </div>
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={2}
            variants={textYBAnim}
            className="mb-2"
          >
            {/* <Form
              proId="form"
              title="Запишись в отряды Ломоносовцев. Так мы победим ЕГЭ! Оставь заявку на первое бесплатное занятие :"
            /> */}
            <div className="bg-amber-400 rounded-3xl py-4 sm:py-8 px-4 md:px-6 lg:px-10 shadow-md">
              <h3 className="text-xl sm:text-3xl mb-6 play ">
                Запишись в отряды Ломоносовцев. Так мы победим ЕГЭ! Оставь
                заявку на первое бесплатное занятие :
              </h3>
              <form
                name="form"
                method="post"
                action="https://lomonosovites.ru/mailSummer.php"
                className="  "
              >
                <div className="flex flex-col md:flex-row">
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
                      className=" border text-md mb-5  border-gray-300  px-3 py-3 rounded-lg   block w-full p-2.5 bg-amber-100  text-gray-700   placeholder-gray-500 "
                      placeholder="Иванов Иван"
                      required
                    />
                    <input type="hidden" name="zf" value={zsta} />
                    <input type="hidden" name="data1Id" value={currentUrl} />
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
                      type="text"
                      pattern="[0-9]{11}"
                      onChange={() => {
                        ssd();
                      }}
                      maxLength={11}
                      className=" border text-md border-gray-300 mb-5  px-3 py-3  text-gray-700   rounded-lg   block w-full p-2.5 bg-amber-100     placeholder-gray-500 "
                      placeholder="8 999 999 99 99"
                      required
                    />
                  </div>
                </div>
                <label for="class" className="block mb-2 font-medium   text-xl">
                  В каком классе вы учитесь
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
                        className="w-6 md:w-4 h-6 md:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl  "
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
                    className=" font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-amber-100  "
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </motion.div>{" "}
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
