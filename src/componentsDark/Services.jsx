import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Price, { PriceOnline } from "./Price";
import { motion } from "framer-motion";
import Form from "./Form";

function Services() {
  let [isOpenType, setIsOpenType] = useState(false);

  let [isOpenOchnoe, setIsOpenOchnoe] = useState(false);
  let [isOpenOnline, setIsOpenOnline] = useState(false);

  let [buttons, setbuttons] = useState(true);
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
  return (
    <motion.div id="services" className="bg-rich-black">
      <Dialog
        open={isOpenType}
        onClose={() => setIsOpenType(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className=" inset-0 flex w-screen max-h-dvh bg-blur  items-center justify-center ">
              <Dialog.Panel className="   rounded-xl bg-slate-200 px-4 sm:p-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpenType(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-200  mt-4 hover:bg-gray-200   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 "
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
                  {buttons && (
                    <div className="text-center  duration-200  text-3xl font-bold play  ">
                      Выберете тип занятий
                      <div className="flex justify-around mt-8">
                        <button
                          onClick={() => {
                            setbuttons(false);
                            setIsOpenOchnoe(true);
                            setIsOpenOnline(false);
                          }}
                          className="mb-6 py-4 cursor-pointer drop-shadow-xl btn-tp px-6 m-2 hover:scale-110 duration-200 ease-in rounded-lg bg-slate-400"
                        >
                          Очные
                        </button>
                        <button
                          onClick={() => {
                            setbuttons(false);
                            setIsOpenOchnoe(false);
                            setIsOpenOnline(true);
                          }}
                          className="mb-6 py-4  cursor-pointer  drop-shadow-xl   btn-tp   px-6 m-2 hover:scale-110 duration-200 ease-in rounded-lg bg-slate-400"
                        >
                          Онлайн
                        </button>
                      </div>
                    </div>
                  )}
                  {isOpenOchnoe && (
                    <>
                      <Price />
                    </>
                  )}
                  {isOpenOnline && (
                    <>
                      <PriceOnline />
                    </>
                  )}
                  {(isOpenOchnoe || isOpenOnline) && (
                    <div className=" w-full flex justify-end">
                      <button
                        onClick={() => {
                          setbuttons(true);
                          setIsOpenOchnoe(false);
                          setIsOpenOnline(false);
                        }}
                        type="button"
                        className="text-gray-900 m-0 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        Назад к выбору
                      </button>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
      <div className="bg-gray-800 text-slate-200 rounded-6xl px-10 xl:px-0">
        <div className=" mx-auto max-w-5xl pt-10 pb-16  ">
          <div className="row py-16 flex flex-col items-center">
            <div className="text-5xl font-bold mb-20"> Курсы</div>
            <div className="grid grid-cols-3 row-auto gap-y-8 gap-x-7 w-full ">
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={1}
                variants={textYBAnim}
                className="col-span-3 rounded-4xl py-8 px-12 w-full bg-ash-gray text-black"
              >
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-3xl text-center play font-bold cursor-pointer "
                >
                  Курсы для 5-8 классов (математика)
                </div>
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={2}
                variants={textYBAnim}
                className="rounded-6xl py-10 px-12 w-full bg-ash-gray col-span-3 flex flex-col justify-center lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-black">
                  ОГЭ
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl cursor-pointer ease-in-out duration-300 hover:scale-110   bg-gray-800 p-2 rounded-xl mb-5 text-center play font-bold "
                >
                  Русский язык
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Обществознание
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Английский
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Математика
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Биология
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Химия
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Информатика
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  История
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Литература
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Физика
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl  text-center play font-bold "
                >
                  География
                </div>
              </motion.div>
              <motion.div
                variants={textYBAnim}
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={2.33}
                className="rounded-6xl py-10 px-12 w-full bg-ash-gray col-span-3 lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-black">
                  ЕГЭ
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Русский язык
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Обществознание
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Английский
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Математика
                </div>{" "}
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Биология
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Химия
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Информатика
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  История
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Литература
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Физика
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl  text-center play font-bold "
                >
                  География
                </div>
              </motion.div>

              <motion.div
                custom={2.7}
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                variants={textYBAnim}
                className="rounded-6xl py-10 px-12 w-full bg-ash-gray col-span-3 lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-black">
                  ДВИ
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Математика
                </div>
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                >
                  Обществознание
                </div>
              </motion.div>
              <motion.div
                viewport={{ amount: 0.1, once: true }}
                whileInView="visible"
                initial="hidden"
                custom={1}
                variants={textYBAnim}
                className="col-span-3 rounded-4xl py-8 px-12 w-full bg-ash-gray text-black"
              >
                <div
                  onClick={() => {
                    setIsOpenType(true);
                  }}
                  className="text-3xl text-center play font-bold cursor-pointer"
                >
                  Подготовка к олимпиадам (математика)
                </div>
              </motion.div>
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
                className=" text-slate-50 text-2xl sm:text-3xl font-bold play "
              >
                В любой момент вернём деньги
              </motion.div>
              <motion.div
                custom={2.3}
                variants={textYBAnim}
                className="row pb-4 pt-2  text-xl    text-slate-50 "
              >
                <p className="">
                  Ты всегда сможешь вернуть деньги за оставшуюся часть
                  программы.
                </p>
              </motion.div>
              <motion.div
                custom={2.6}
                variants={textYBAnim}
                className=" text-slate-50 text-2xl sm:text-3xl font-bold play "
              >
                Маткапитал
              </motion.div>
              <motion.div
                custom={3}
                variants={textYBAnim}
                className="row pb-4 pt-2  text-xl    text-slate-50 "
              >
                <p className="">
                  Маткапиталом можно полностью оплатить обучение ребёнка
                </p>
              </motion.div>{" "}
              <motion.div
                custom={3.3}
                variants={textYBAnim}
                className=" text-slate-50 text-2xl sm:text-3xl font-bold play "
              >
                Налоговый вычет
              </motion.div>
              <motion.div
                custom={3.6}
                variants={textYBAnim}
                className="row pb-4 pt-2  text-xl    text-slate-50 "
              >
                <p className=" mb-10">
                  13 000 руб. вернёт налоговая за обучение ребёнка
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
              <img src="/img/sale.webp" alt="" />
            </motion.div>
          </div>
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={2}
            variants={textYBAnim}
          >
            <Form
              proId="form"
              title="Запишись в отряды Ломоносовцев. Так мы победим ЕГЭ! Оставь заявку на первое бесплатное занятие :"
            />
          </motion.div>{" "}
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
