import React from "react";
import { motion } from "framer-motion";

export default function PriceSummer() {
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
  return (
    <div className="bg-img-summer bg-slate-50 play  text-slate-800  px-10 xl:px-0">
      <div className=" mx-auto max-w-5xl pt-8  ">
        <div className="text-4xl  flex justify-center ">
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            className=" text-center py-2 px-4 rounded-xl bg-white"
          >
            Цены на летние курсы
          </motion.div>
        </div>
        <div className="row pt-10 pb-16 grid lg:grid-flow-col gap-3">
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            className="bg-amber-200 shadow-md sm:text-center w-full px-3 py-3 mb-3 rounded-[18px] border-2 border-amber-400"
          >
            <h2 className=" text-2xl  pt-2  ps-2 sm:ps-0">
              Месячная программа
            </h2>
            <div className="mb-3 mt-1  ps-2 sm:ps-0">
              Первый поток с 15&nbsp;июля по&nbsp;15&nbsp;августа
              <br />
              Второй поток с 1&nbsp;августа по&nbsp;31&nbsp;августа
              <br />
              8&nbsp;занятий /&nbsp;предмет
            </div>
            <div className="flex  flex-wrap ">
              <div className="basis-1/2 sm:basis-1/4 w-full border-y-2 border-s-2 text-center rounded-tl-md sm:rounded-none sm:rounded-l-md py-2 px-2 border-amber-400 leading-8 ">
                1 предмет <br /> 11 000 руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full border-y-2 border-x-2 sm:border-s-2 rounded-tr-md sm:rounded-none text-center py-2 px-2 border-amber-400 leading-8 ">
                2 предмета <br /> 21 500 руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full border-b-2 sm:border-y-2 border-s-2 rounded-bl-md sm:rounded-none sm:border-s-0 text-center py-2 px-2 border-amber-400 leading-8 ">
                3 предмета <br /> 32 000 руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full border-b-2 sm:border-y-2 border-x-2 rounded-br-md sm:rounded-none sm:rounded-r-md text-center py-2 px-2 border-amber-400 leading-8 ">
                4 предмета <br /> 41 500 руб
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            className="bg-amber-200 shadow-md sm:text-center w-full px-3 py-3 mb-3 rounded-[18px] border-2 border-amber-400"
          >
            <h2 className=" text-2xl  pt-2 ps-2 sm:ps-0">
              {" "}
              2-х месячная программа
            </h2>
            <div className="mb-3 mt-1  ps-2 sm:ps-0">
              Первый поток с 1&nbsp;июня по&nbsp;31&nbsp;июля
              <br />
              Второй поток с 1&nbsp;июля по&nbsp;31&nbsp;августа
              <br />
              8&nbsp;занятий /&nbsp;предмет
            </div>
            <div className="flex flex-wrap ">
              <div className="basis-1/2 sm:basis-1/4 w-full border-y-2 border-s-2 text-center rounded-tl-md sm:rounded-none sm:rounded-l-md py-2 px-2 border-amber-400 leading-8 ">
                1 предмет <br /> 11 000 руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full border-y-2 border-x-2 sm:border-s-2 rounded-tr-md sm:rounded-none text-center py-2 px-2 border-amber-400 leading-8 ">
                2 предмета <br /> 21 500 руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full border-b-2 sm:border-y-2 border-s-2 rounded-bl-md sm:rounded-none sm:border-s-0 text-center py-2 px-2 border-amber-400 leading-8 ">
                3 предмета <br /> 32 000 руб
              </div>
              <div className="basis-1/2 sm:basis-1/4 w-full border-b-2 sm:border-y-2 border-x-2 rounded-br-md sm:rounded-none sm:rounded-r-md text-center py-2 px-2 border-amber-400 leading-8 ">
                4 предмета <br /> 41 500 руб
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
