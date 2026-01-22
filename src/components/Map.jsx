import React, { useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";

import { Dialog } from "@headlessui/react";

function Map() {
  let [isOpen, setIsOpen] = useState(false);

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
    <div id="addresses" className="bg-amber-100 text-slate-800">
      <div className="mx-0   lg:px-0 lg:mx-auto max-w-5xl py-10 ">
        <div className="text-center text-slate-800 text-5xl font-bold play mt-10 mb-16">
          <motion.h3
            viewport={{ amount: 0.05, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={2}
            variants={textAnim}
          >
            {" "}
            Адрес{" "}
          </motion.h3>
        </div>
        <div className="row   flex  justify-center">
          <div className="flex  items-center  ">
            <div className="lg:me-6 mb-5 grid grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-cols-2  lg:pe-10 lg:ps-10 ps-10 pe-10 text-center">
              <div className="flex  flex-col items-center justify-center lg:me-5 px-6">
                {" "}
                <motion.h3
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={2.4}
                  variants={textAnim}
                  className="text-3xl naming mb-6"
                >
                  Учебные корпуса
                </motion.h3>
                <ul className="list-none text-center">
                  <motion.li
                    viewport={{ amount: 0.05, once: true }}
                    whileInView="visible"
                    initial="hidden"
                    custom={2}
                    variants={textAnim}
                    className="text-xl naming mb-4  "
                  >
                    Милютинский переулок 3 ( 2-3 минуты от метро Лубянка, 3
                    выход )
                  </motion.li>{" "}
                  <motion.li
                    viewport={{ amount: 0.05, once: true }}
                    whileInView="visible"
                    initial="hidden"
                    custom={2}
                    variants={textAnim}
                    className="text-xl naming mb-12  "
                  >
                    Улица Московская, дом 1
                  </motion.li>
                </ul>
              </div>
              <div className="">
                <motion.h3
                  viewport={{ amount: 0.05, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  custom={3.4}
                  variants={textAnim}
                  className="text-3xl  naming mb-3 "
                >
                  Контакты
                </motion.h3>
                <ul className="list-none">
                  <li custom={3} className="text-xl naming mb-3">
                    <a className="text-3xl" href="tel:84954813825">
                      <motion.div
                        viewport={{ amount: 0.05, once: true }}
                        whileInView="visible"
                        initial="hidden"
                        custom={11}
                        variants={textAnim}
                        className=""
                      >
                        8 495 481 38 25
                      </motion.div>
                    </a>
                  </li>{" "}
                  <li custom={3} className="text-xl naming mb-6">
                    <a className="text-3xl" href="tel:89032960885">
                      <motion.div
                        viewport={{ amount: 0.05, once: true }}
                        whileInView="visible"
                        initial="hidden"
                        custom={11}
                        variants={textAnim}
                        className="mb-1"
                      >
                        8 903 296 08 85
                      </motion.div>
                    </a>
                  </li>
                  <motion.li
                    viewport={{ amount: 0.05, once: true }}
                    whileInView="visible"
                    initial="hidden"
                    custom={3}
                    variants={textAnim}
                    className="text-xl naming mb-6"
                  >
                    <button
                      onClick={() => setIsOpen(true)}
                      className="text-3xl text-white  px-6 py-3 bg-amber-500 rounded-2xl"
                    >
                      Перезвоните мне{" "}
                    </button>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 text-center md:text-start md:px-0 lg:flex-row ">
          <div className=" w-full mb-10 lg:mb-0  lg:me-5 flex justify-center ">
            <motion.div
              viewport={{ amount: 0.05, once: true }}
              whileInView="visible"
              initial="hidden"
              custom={3}
              variants={textSAnim}
              className="rel-rew  "
            >
              <iframe
                className="rel-rewss rounded-3xl "
                src="https://yandex.ru/maps-reviews-widget/21499712436?comments"
              ></iframe>
              <a
                className="rel-link-s"
                href="https://yandex.ru/maps/org/lomonosovtsy/21499712436/"
                target="_blank"
              >
                Ломоносовцы на карте Москвы — Яндекс Карты
              </a>
            </motion.div>
          </div>
          <motion.div
            viewport={{ amount: 0.05, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={3}
            variants={textSAnim}
            className="flex justify-center mb-20 lg:mb-0"
          >
            <iframe
              title="Где нахордятся учебные корпуса"
              loading="lazy"
              className="rounded-3xl shadow-2xl"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac059bebd587141666ea43decb856095943fbf5261b56e1cd259a3cbbe379fbc3&amp;source=constructor"
              width="500"
              height="550"
              frameborder="0"
            ></iframe>
          </motion.div>
        </div>
        <div className=" mt-10 mb-6">
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
                  className=" inset-0 flex w-screen max-h-lvh  items-center justify-center "
                >
                  <Dialog.Panel className="   rounded-xl bg-amber-50 p-5">
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
                          className=" border text-md mb-5  border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200  text-gray-700   placeholder-gray-500 "
                          placeholder="Иванов Иван"
                          required
                        />
                        <input type="hidden" name="zf" value={zsta} />
                        <input
                          type="hidden"
                          name="data1Id"
                          value={currentUrl}
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
                          onChange={() => {
                            ssd();
                          }}
                          pattern="[0-9]{11}"
                          maxLength={11}
                          className=" border text-md border-gray-300 mb-5  px-3 py-3  text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200     placeholder-gray-500 "
                          placeholder="8 999 999 99 99"
                          required
                        />
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
                  </Dialog.Panel>
                </motion.div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Map;
