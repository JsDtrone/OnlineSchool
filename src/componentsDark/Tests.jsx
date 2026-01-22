import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Price, { PriceOnline } from "./Price";
import { motion } from "framer-motion";

export default function Tests() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let [isOpenType, setIsOpenType] = useState(false);

  let [isOpenOchnoe, setIsOpenOchnoe] = useState(false);
  let [isOpenOnline, setIsOpenOnline] = useState(false);
  let [buttons, setbuttons] = useState(true);
  const textAnim = {
    hidden: {
      // x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
  const textXAnim = {
    hidden: {
      // x: 200,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };

  const textYAnim = {
    hidden: {
      // y: 200,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
  return (
    <motion.div
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
      className="bg-rich-black"
    >
      <div className="bg-gray-800 text-slate-200 rounded-6xl px-10 xl:px-0">
        <div className=" mx-auto max-w-5xl pt-10 pb-16  ">
          <div className="row py-16 flex flex-col items-center">
            <div className="flex flex-col justify-center ">
              <div className="mb-9">
                <motion.a
                  custom={5}
                  variants={textYAnim}
                  href="../"
                  className="text-gray-900 m-0  text-center bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   w-60   hover:border-gray-600 "
                >
                  Вернутся на главную страницу
                </motion.a>
              </div>
            </div>
            <motion.div
              custom={2}
              variants={textYAnim}
              className="text-5xl font-bold mb-20 text-center"
            >
              {" "}
              Онлайн тестирование
            </motion.div>
            <div className="grid grid-cols-2 row-auto gap-y-8 gap-x-7 w-full ">
              <motion.div
                custom={3}
                variants={textXAnim}
                className="rounded-6xl py-10 px-12 w-full bg-ash-gray col-span-3 flex flex-col justify-center lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-black">
                  ОГЭ
                </div>
                <a href="/test/oge-rus">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl cursor-pointer ease-in-out duration-300 hover:scale-110   bg-gray-800 p-2 rounded-xl mb-5 text-center play font-bold "
                  >
                    Русский язык
                  </div>
                </a>
                <a href="/test/oge-soc">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                  >
                    Обществознание{" "}
                  </div>
                </a>{" "}
                <a href="/test/oge-eng">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                  >
                    Английский{" "}
                  </div>
                </a>{" "}
                <a href="/test/oge-math">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl  text-center play font-bold "
                  >
                    Математика{" "}
                  </div>
                </a>
              </motion.div>
              <motion.div
                custom={3}
                variants={textAnim}
                className="rounded-6xl py-10 px-12 w-full bg-ash-gray col-span-3 lg:col-span-1"
              >
                <div className="text-6xl mb-10 text-center play font-bold text-black">
                  ЕГЭ
                </div>
                <a href="/test/ege-rus-base">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl cursor-pointer ease-in-out duration-300 hover:scale-110   bg-gray-800 p-2 rounded-xl mb-5 text-center play font-bold "
                  >
                    Русский язык
                  </div>
                </a>
                <a href="/test/ege-soc">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                  >
                    Обществознание{" "}
                  </div>
                </a>{" "}
                <a href="/test/ege-eng">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl mb-4 text-center play font-bold "
                  >
                    Английский{" "}
                  </div>
                </a>{" "}
                <a href="/test/ege-math-base">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl mb-4  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl  text-center play font-bold "
                  >
                    Математика база{" "}
                  </div>
                </a>
                <a href="/test/ege-math-prof">
                  <div
                    onClick={() => {
                      setIsOpenType(true);
                    }}
                    className="text-xl  cursor-pointer ease-in-out duration-300 hover:scale-110  bg-gray-800 p-2 rounded-xl  text-center play font-bold "
                  >
                    Математика профиль{" "}
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
