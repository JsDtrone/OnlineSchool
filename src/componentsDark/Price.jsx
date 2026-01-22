import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function Price() {
  let [isOpen, setIsOpen] = useState(false);

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
  return (
    <motion.div
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
      className="bg-slate-200 py-8"
    >
      {" "}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen xl:overflow-y-auto overflow-y-scroll">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              variants={textYAnim}
              viewport={{ amount: 0.05, once: true }}
              whileInView="visible"
              initial="hidden"
              className=" inset-0 flex w-screen max-h-dvh bg-blur  items-center justify-center "
            >
              <Dialog.Panel className="   rounded-xl bg-slate-200 p-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-200 hover:bg-gray-200  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 "
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
                  action="https://lomonosovites.ru/mail.php"
                  className="p-5   "
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
                      className=" border text-md mb-5  border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700  text-gray-300   placeholder-gray-400 "
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
                      type="text"
                      className=" border text-md border-gray-300 mb-5  px-3 py-3   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700  text-gray-300   placeholder-gray-400 "
                      placeholder="8 999 999 99 99"
                      required
                    />
                  </div>
                  <div className="w-full flex items-end md:justify-center">
                    <button
                      type="submit"
                      className=" font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-emerald "
                    >
                      Отправить
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </motion.div>
          </div>
        </div>
      </Dialog>
      <div className="mx-auto xl:max-w-5xl px-4 md:px-12 ">
        <motion.div
          custom={1}
          variants={textYAnim}
          className="text-center  text-5xl font-bold play  mb-8"
        >
          Цены на очные занятия
        </motion.div>

        <div className="xl:grid w-full  grid-cols-1 grid-cols-3   gap-4">
          <motion.div
            custom={2}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-xl justify-center text-center flex items-center font-bold play mb-1">
              Академический час
            </div>
            <div className="text-2xl text-center text-center px-8 pt-6">
              633 руб
            </div>
          </motion.div>
          <motion.div
            custom={3}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              13 часов
            </div>
            <div className="text-2xl text-center  px-8 pt-6">11 500 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 3 000</div>
          </motion.div>
          <motion.div
            custom={4}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              26 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6">23 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 4 500</div>
          </motion.div>
          <motion.div
            custom={5}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              39 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6"> 34 500 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 6 000</div>
          </motion.div>
          <motion.div
            custom={6}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              78 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6">69 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 10 500</div>
          </motion.div>
          <motion.div
            custom={7}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              117 часов <br />
              <span className="text-xl"> годовой абонемент</span>
            </div>
            <div className="text-2xl text-center px-8 pt-6">95 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 23 000</div>
          </motion.div>
          <motion.div
            custom={8}
            variants={textYAnim}
            className="bg-slate-200 col-span-3 flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-3 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl text-center lg:text-start  flex-col flex items-center font-bold play">
              Индивидуальные занятия <br className="lg:hidden" /> от 3 000 руб
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function PriceOnline() {
  let [isOpen, setIsOpen] = useState(false);

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
  return (
    <motion.div
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
      className="bg-slate-200  py-8"
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen xl:overflow-y-auto overflow-y-scroll">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              variants={textYAnim}
              viewport={{ amount: 0.05, once: true }}
              whileInView="visible"
              initial="hidden"
              className=" inset-0 flex w-screen max-h-dvh bg-blur  items-center justify-center "
            >
              <Dialog.Panel className="   rounded-xl bg-slate-200 p-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-200 hover:bg-gray-200  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 "
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
                  action="https://lomonosovites.ru/mail.php"
                  className="p-5   "
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
                      className=" border text-md mb-5  border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700  text-gray-300   placeholder-gray-400 "
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
                      type="text"
                      className=" border text-md border-gray-300 mb-5  px-3 py-3   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700  text-gray-300   placeholder-gray-400 "
                      placeholder="8 999 999 99 99"
                      required
                    />
                  </div>
                  <div className="w-full flex items-end md:justify-center">
                    <button
                      type="submit"
                      className=" font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-emerald "
                    >
                      Отправить
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </motion.div>
          </div>
        </div>
      </Dialog>
      <div className="mx-auto xl:max-w-5xl px-4 md:px-12 ">
        <motion.div
          custom={1}
          variants={textYAnim}
          className="text-center  text-5xl font-bold play  mb-8"
        >
          Цены на онлайн занятия
        </motion.div>

        <div className="xl:grid w-full  grid-cols-1 grid-cols-3   gap-4">
          <motion.div
            custom={2}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-xl justify-center text-center flex items-center font-bold play mb-1">
              Академический час
            </div>
            <div className="text-2xl text-center text-center px-8 pt-6">
              461 руб
            </div>
          </motion.div>
          <motion.div
            custom={3}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              13 часов
            </div>
            <div className="text-2xl text-center  px-8 pt-6">8 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 6 000</div>
          </motion.div>
          <motion.div
            custom={4}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              26 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6">16 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 11 700</div>
          </motion.div>
          <motion.div
            custom={5}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              39 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6"> 24 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 16 800</div>
          </motion.div>
          <motion.div
            custom={6}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              78 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6">48 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 32 100</div>
          </motion.div>
          <motion.div
            custom={7}
            variants={textYAnim}
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-6 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              117 часов <br />
              <span className="text-xl"> годовой абонемент</span>
            </div>
            <div className="text-2xl text-center px-8 pt-6">72 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 46 500</div>
          </motion.div>
          <motion.div
            custom={8}
            variants={textYAnim}
            className="bg-slate-200 col-span-3 flex mb-6 bg-slate-200 xl:mb-0 flex-col border-zinc-600 hover:rotate-3 duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 rounded-2xl p-6"
          >
            <div className="text-3xl text-center lg:text-start  flex-col flex items-center font-bold play">
              Индивидуальные занятия <br className="lg:hidden" /> от 3 000 руб
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
