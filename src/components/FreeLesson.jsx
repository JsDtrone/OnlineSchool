import React, { useState } from "react";
import { motion } from "framer-motion";

import { Dialog } from "@headlessui/react";
import Price from "./Price";

function FreeLesson() {
  let [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("0");

  function chengeValue() {
    setValue(event.target.value);
  }
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
  return (
    <motion.div
      viewport={{ amount: 0.05, once: true }}
      whileInView="visible"
      initial="hidden"
      className="@container"
    >
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
      <div className="bg-amber-50  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-fit mx-auto">
            {/* <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center text-3xl play font-bold mb-16"
            >
              Набор в летнюю школу открыт до{" "}
              <span className="text-amber-500">1&nbsp;августа </span>
            </motion.div>{" "} */}
            {/* <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center text-3xl play font-bold mb-10 "
            >
              Набор на новый учебный год 2025-2026 открыт до{" "}
              <span className="text-amber-500">30&nbsp;ноября </span>
            </motion.div>{" "} */}
            <motion.div
              custom={2}
              variants={textXAnim}
              className="flex items-center justify-center"
            >
              <a
                href="/test"
                className="bg-amber-400 btn-test w-full max-w-5xl lg:max-w-6xl text-center rounded-xl py-6 px-12 lg:px-24 text-3xl play font-bold hover:scale-105 ease-in-out duration-300"
              >
                Пройти пробное онлайн тестирование бесплатно
              </a>
            </motion.div>{" "}
            <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center text-3xl play font-bold mt-8  "
            >
              Набор на экспресс курс открыт до{" "}
              <span className="text-amber-500">15&nbsp;января </span>
            </motion.div>{" "}
            <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center hidden sm:block text-2xl font-SrirachaRU  mt-4 mb-6 "
            >
              <span className="text-amber-500">Экспресс-курс</span> позволит
              пройти полную программу за&nbsp;4,5&nbsp;месяца.&nbsp;
              <br className="md:inline hidden" />
              Сбалансированная методика, современный
              формат&nbsp;и&nbsp;персональное{" "}
              <br className="md:inline hidden" />
              сопровождение преподавателей
              помогут&nbsp;быстро&nbsp;достичь&nbsp;цели.
            </motion.div>{" "}
            <motion.div
              custom={2}
              variants={textAnim}
              className="text-slate-950 text-center text-lg max-[435px]:text-base sm:hidden font-SrirachaRU  mt-4 mb-5 "
            >
              <span className="text-amber-500">Экспресс-курс</span> позволит
              пройти полную программу&nbsp;4,5&nbsp;месяца. Сбалансированная
              методика, современный формат и персональное сопровождение
              преподавателей помогут быстро&nbsp;достичь&nbsp;цели.
            </motion.div>{" "}
            <motion.div
              custom={2}
              variants={textXAnim}
              className="flex items-center justify-center"
            >
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
                className="w-full bg-amber-400 btn-test max-w-5xl lg:max-w-6xl text-center rounded-xl py-6 px-12 lg:px-24 text-3xl play font-bold hover:scale-105 ease-in-out duration-300"
              >
                Записаться на экспресс курс
              </button>
            </motion.div>{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FreeLesson;
