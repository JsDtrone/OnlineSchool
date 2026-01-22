import React, { useState } from "react";
import { motion } from "framer-motion";

function Timetable() {
  let [isOpenOchnoe, setIsOpenOchnoe] = useState(false);
  let [isOpenOnline, setIsOpenOnline] = useState(false);
  let [buttons, setbuttons] = useState(true);
  const textAnim = {
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
  const textXSAnim = {
    hidden: {
      // x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
  const textXEAnim = {
    hidden: {
      // x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      // x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
  return (
    <motion.div whileInView="visible" className=" ">
      {buttons && (
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="text-center  duration-200  text-3xl font-bold play text-white ">
            <div className="flex flex-col justify-center ">
              <div className="mb-7">
                <motion.a
                  custom={5}
                  variants={textAnim}
                  href="./"
                  className="text-gray-900 m-0  text-center bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   w-60   hover:border-gray-600 "
                >
                  Вернутся на главную страницу
                </motion.a>
              </div>
              <motion.span custom={2} variants={textAnim}>
                {" "}
                Выберете тип занятий
              </motion.span>
            </div>
            <div className="flex justify-around mt-8">
              <motion.button
                custom={3}
                variants={textXSAnim}
                onClick={() => {
                  setbuttons(false);
                  setIsOpenOchnoe(true);
                  setIsOpenOnline(false);
                }}
                className="mb-6 py-4 cursor-pointer drop-shadow-xl  px-12 m-2 hover:scale-110 duration-200 ease-in rounded-lg bg-slate-400"
              >
                Очные
              </motion.button>
              <motion.button
                custom={4}
                variants={textXEAnim}
                onClick={() => {
                  setbuttons(false);
                  setIsOpenOchnoe(false);
                  setIsOpenOnline(true);
                }}
                className="mb-6 py-4  cursor-pointer  drop-shadow-xl      px-12 m-2 hover:scale-110 duration-200 ease-in rounded-lg bg-slate-400"
              >
                Онлайн
              </motion.button>
            </div>
          </div>
        </div>
      )}
      {(isOpenOchnoe || isOpenOnline) && (
        <motion.div
          viewport={{ amount: 0.1, once: true }}
          whileInView="visible"
          initial="hidden"
          className=" w-full flex justify-center"
        >
          <motion.button
            custom={2}
            variants={textXSAnim}
            onClick={() => {
              setbuttons(true);
              setIsOpenOchnoe(false);
              setIsOpenOnline(false);
            }}
            type="button"
            className="text-gray-900 m-0 mt-20 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   w-60   hover:border-gray-600 "
          >
            Назад к выбору
          </motion.button>
          <motion.a
            custom={3}
            variants={textXEAnim}
            href="./"
            className="text-gray-900 m-0 mt-20 text-center bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   w-60   hover:border-gray-600 "
          >
            Вернутся на главную страницу
          </motion.a>
        </motion.div>
      )}
      {isOpenOchnoe && (
        <>
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            className="flex flex-col  pt-10    w-screen max-h-screen  items-center  justify-center text-white "
          >
            <motion.div
              custom={1}
              variants={textAnim}
              className="text-center  duration-200  text-3xl font-bold play mb-8 "
            >
              Расписание очных занятий
            </motion.div>
            <div className="  rounded-2xl mx-1 border">
              <table className=" table-auto   xl:hidden">
                <tr>
                  <td className="text-center border-b border-e  px-10 py-4 border-slate-400 ">
                    Понедельник - Пятница
                  </td>
                  <td className="text-center  border-b  px-10 py-4 border-slate-400 ">
                    Суббота -Воскресенье
                  </td>
                </tr>
                <tr>
                  <td className="text-center  border-e border-b px-10 py-4 border-slate-400 ">
                    1. 15:00-16:00
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    1. 09:00-10:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center  border-e border-b px-10 py-4 border-slate-400 ">
                    2. 16:10-17:40
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    2. 10:40-12:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center  border-e border-b px-10 py-4 border-slate-400 min-w-48">
                    3. 17:50-19:20
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    3. 12:20-13:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e border-b  px-10 py-4 border-slate-400 ">
                    4. 19:30-21:00
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    4. 14:00-15:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e   px-10 py-4 border-slate-400 "></td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    5. 15:40-17:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e  px-10 py-4 border-slate-400 "></td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    6. 17:20-18:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e  px-10 py-4 border-slate-400 "></td>
                  <td className="text-center  px-10 py-4 border-slate-400 ">
                    7. 19:00-21:00
                  </td>
                </tr>
              </table>

              <table className="hidden xl:block table-auto w-full">
                <tr>
                  <td className="text-center border-e px-10 py-4 border-slate-400 min-w-48">
                    Понедельник
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Вторник
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Среда
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Четверг
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Пятница
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Суббота
                  </td>
                  <td className="text-center border-s px-10 py-4 border-slate-400 min-w-48">
                    Воскресенье
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    1. 15:00-16:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:00-16:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:00-16:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:00-16:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:00-16:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    1. 09:00-10:30
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    1. 09:00-10:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    2. 16:10-17:40
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:10-17:40
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:10-17:40
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:10-17:40
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:10-17:40
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    2. 10:40-12:10
                  </td>

                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    2. 10:40-12:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    3. 17:50-19:20
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 17:50-19:20
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 17:50-19:20
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 17:50-19:20
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 17:50-19:20
                  </td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    3. 12:20-13:50
                  </td>

                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    3. 12:20-13:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    4. 19:30-21:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    4. 19:30-21:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    4. 19:30-21:00
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    4. 19:30-21:00
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    4. 19:30-21:00
                  </td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    4. 14:00-15:30
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    4. 14:00-15:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    5. 15:40-17:10
                  </td>

                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    5. 15:40-17:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    6. 17:20-18:50
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    6. 17:20-18:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center  border-e px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>

                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48">
                    7. 19:00-21:00
                  </td>
                  <td className="text-center border-s px-10 py-4 border-slate-400 min-w-48">
                    7. 19:00-21:00
                  </td>
                </tr>
              </table>
            </div>
          </motion.div>
        </>
      )}
      {isOpenOnline && (
        <>
          <motion.div
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            initial="hidden"
            className="flex flex-col  pt-10    w-screen max-h-screen  items-center  justify-center text-white "
          >
            <motion.div
              custom={1}
              variants={textAnim}
              className="text-center  duration-200  text-3xl font-bold play   mb-8"
            >
              Расписание онлайн занятий
            </motion.div>
            <div className="  rounded-2xl mx-1 border">
              <table className=" table-auto   xl:hidden">
                <tr>
                  <td className="text-center border-b border-e  px-10 py-4 border-slate-400 ">
                    Понедельник - Пятница
                  </td>
                  <td className="text-center  border-b  px-10 py-4 border-slate-400 ">
                    Суббота -Воскресенье
                  </td>
                </tr>
                <tr>
                  <td className="text-center  border-e border-b px-10 py-4 border-slate-400 ">
                    1. 15:30-16:30
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    1. 09:00-10:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center  border-e border-b px-10 py-4 border-slate-400 ">
                    2. 16:40-18:10
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    2. 10:40-12:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center  border-e border-b px-10 py-4 border-slate-400 min-w-48">
                    3. 18:20-19:50
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    3. 12:20-13:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e border-b  px-10 py-4 border-slate-400 ">
                    4. 20:00-21:30
                  </td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    4. 14:00-15:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e   px-10 py-4 border-slate-400 "></td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    5. 15:40-17:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e  px-10 py-4 border-slate-400 "></td>
                  <td className="text-center border-b   px-10 py-4 border-slate-400 ">
                    6. 17:20-18:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-e  px-10 py-4 border-slate-400 "></td>
                  <td className="text-center border-b  px-10 py-4 border-slate-400 ">
                    7. 19:00-20:30
                  </td>
                </tr>{" "}
                <tr>
                  <td className="text-center border-e  px-10 py-4 border-slate-400 "></td>
                  <td className="text-center  px-10 py-4 border-slate-400 ">
                    8. 20:40-21:40
                  </td>
                </tr>
              </table>
              <table className="hidden xl:block table-auto w-full">
                <tr>
                  <td className="text-center border-e px-10 py-4 border-slate-400 min-w-48">
                    Понедельник
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Вторник
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Среда
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Четверг
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Пятница
                  </td>
                  <td className="text-center border-x border-b px-10 py-4 border-slate-400 min-w-48">
                    Суббота
                  </td>
                  <td className="text-center border-s px-10 py-4 border-slate-400 min-w-48">
                    Воскресенье
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    1. 15:30-16:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:30-16:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:30-16:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:30-16:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    1. 15:30-16:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    1. 09:00-10:30
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    1. 09:00-10:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    2. 16:40-18:10
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:40-18:10
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:40-18:10
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:40-18:10
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    2. 16:40-18:10
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    2. 10:40-12:10
                  </td>

                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    2. 10:40-12:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    3. 18:20-19:50
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 18:20-19:50
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 18:20-19:50
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 18:20-19:50
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    3. 18:20-19:50
                  </td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    3. 12:20-13:50
                  </td>

                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    3. 12:20-13:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48">
                    4. 20:00-21:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    4. 20:00-21:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    4. 20:00-21:30
                  </td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    4. 20:00-21:30
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    4. 20:00-21:30
                  </td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    4. 14:00-15:30
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    4. 14:00-15:30
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    5. 15:40-17:10
                  </td>

                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    {" "}
                    5. 15:40-17:10
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-s-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48"></td>

                  <td className="text-center border px-10 py-4 border-slate-400 min-w-48">
                    6. 17:20-18:50
                  </td>
                  <td className="text-center border border-e-0 px-10 py-4 border-slate-400 min-w-48">
                    6. 17:20-18:50
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-b  border-e px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>

                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48">
                    7. 19:00-21:00
                  </td>
                  <td className="text-center border-s px-10 py-4 border-slate-400 min-w-48">
                    7. 19:00-21:00
                  </td>
                </tr>{" "}
                <tr>
                  <td className="text-center  border-e px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>
                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48"></td>

                  <td className="text-center border border-b-0 px-10 py-4 border-slate-400 min-w-48">
                    8. 20:40-21:40
                  </td>
                  <td className="text-center  border-t px-10 py-4 border-slate-400 min-w-48">
                    8. 20:40-21:40
                  </td>
                </tr>
              </table>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default Timetable;
