import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function Price() {
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
    "Литература",
    "Информатика",
    "История",
    "Физика",
    "География",
  ]);
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
  return (
    <div className="bg-amber-50 ">
      {" "}
      {/* <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-[60]"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container 
        <div className="fixed inset-0 w-screen xl:overflow-y-auto bg-blur overflow-y-scroll">
          {/* Container to center the panel *
          <div className="flex min-h-full items-center justify-center p-4">
            <div className=" inset-0 flex w-screen max-h-lvh   items-center justify-center ">
              <Dialog.Panel className="   rounded-xl bg-amber-50 p-5">
                <div className=" w-full duration-100 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-100   hover:bg-gray-200   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
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
            </div>
          </div>
        </div>
      </Dialog> */}
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
                variants={textYAnim}
                viewport={{ amount: 0.05, once: true }}
                whileInView="visible"
                initial="hidden"
                className=" inset-0 flex w-screen max-h-lvh  items-center justify-center "
              >
                <Dialog.Panel className="   rounded-xl bg-amber-50   flex items-center justify-center">
                  {/* <div className="hidden w-80 mx-10 md:py-20 lg:flex items-center justify-center">
                    <img src="/img/mggu.jpg" className="" alt="Пальма" />
                  </div> */}
                  <div className="  p-5">
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
                      action="https://lomonosovites.ru/mailSummer.php"
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
                        />{" "}
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
                          pattern="[0-9]{11}"
                          maxLength={11}
                          onChange={() => {
                            ssd();
                          }}
                          className=" border text-md border-gray-300 mb-5  px-3 py-3  text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200     placeholder-gray-500 "
                          placeholder="8 999 999 99 99"
                          required
                        />
                      </div>
                      <label
                        for="class"
                        className="block mb-2 font-medium   text-xl"
                      >
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
                  </div>{" "}
                  <div className="hidden lg:block  ">
                    <img
                      src="/img/lomosov.webp"
                      className=" rounded-r-xl max-h-lvh  max-w-md  mr-0 pr-0"
                      alt="Ломоносов"
                    />
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="mx-auto max-w-7xl px-2  lg:px-16 robotoMonoRegular">
        <div
          custom={1}
          className=" text-4xl ps-2 sm:ps-0 sm:text-5xl   font-bold play  mb-5 "
        >
          Стоимость занятий
        </div>
        <div
          custom={1}
          className="text-base sm:text-xl  ps-2 sm:ps-0 md:text-2xl mb-5"
        >
          1 академический час - 640&nbsp;руб <br />
          (все занятия длятся по 2 академических часа)
        </div>
        <div
          custom={2}
          className="w-full mb-7 rounded-full grid grid-cols-3 gap-1 bg-white border  lg:border-2 border-black"
        >
          {month == 1 ? (
            <div
              onClick={() => {
                setMonth(1);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300 duration-100 cursor-pointer bg-amber-400"
            >
              3&nbsp;месяца
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(1);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200 duration-100 cursor-pointer "
            >
              3&nbsp;месяца
            </div>
          )}
          {month == 2 ? (
            <div
              onClick={() => {
                setMonth(2);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300  duration-100 cursor-pointer bg-amber-400"
            >
              6&nbsp;месяцев
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(2);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200  duration-100 cursor-pointer "
            >
              6&nbsp;месяцев
            </div>
          )}
          {month == 3 ? (
            <div
              onClick={() => {
                setMonth(3);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300  duration-100 cursor-pointer bg-amber-400"
            >
              9&nbsp;месяцев
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(3);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200  duration-100 cursor-pointer "
            >
              9&nbsp;месяцев
            </div>
          )}
        </div>
        {month == 4 ? (
          <div
            className=""
            onClick={() => {
              setMonth(4);
            }}
          >
            <div className="hidden lg:grid w-full  grid-cols-3 gap-1  btn-test   hover:bg-amber-300   bg-amber-400  rounded-full text-black sm:pt-5 sm:pb-4 px-3 md:px-7 xl:px-10   mb-7   border  lg:border-2 border-black    duration-100 cursor-pointer">
              <div className=" flex items-center justify-center font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                <img
                  src="/img/rk.webp"
                  alt=""
                  className="w-8 lg:w-10 xl:w-12 md:me-2 xl:me-3"
                />
                2 месяца
              </div>
              <div className="font-SrirachaRU col-span-2 lg:px-5 lg:ms-5  md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8 w-full flex items-center justify-center  ">
                <div className="text-start">
                  {" "}
                  экспресс курс – самый эффективный формат{" "}
                </div>
              </div>
            </div>
            <div className="block lg:hidden w-full text-center   btn-test   hover:bg-amber-300   bg-amber-400  rounded-full text-black pt-2.5 pb-2  px-8    mb-7   border  lg:border-2 border-black    duration-100 cursor-pointer">
              <img
                src="/img/rk.webp"
                alt=""
                className="w-8.5 h-11 me-1 sm:me-3  inline pb-2"
              />
              <span className="  cs-font-size-md font-semibold text-xl sm:text-2xl me-2">
                2 месяца
              </span>
              <span className="font-SrirachaRU  text-base   md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8  ">
                {" "}
                <br className="cs-inline-price" />
                экспресс курс
                <br className="hidden sm:inline" />– самый
                эффективный&nbsp;формат
              </span>
            </div>
          </div>
        ) : (
          <div
            className=""
            onClick={() => {
              setMonth(4);
            }}
          >
            <div className="hidden lg:grid w-full  grid-cols-3 gap-1  btn-test   bg-white  rounded-full text-black sm:pt-5 sm:pb-4 px-3 md:px-7 xl:px-10   mb-7   border  lg:border-2 border-black   hover:bg-slate-200  duration-100 cursor-pointer">
              <div className=" flex items-center justify-center font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                <img
                  src="/img/rk.webp"
                  alt=""
                  className="w-8 lg:w-10 xl:w-12 md:me-2 xl:me-3"
                />
                2 месяца
              </div>
              <div className="font-SrirachaRU lg:px-5 col-span-2 lg:ms-5  md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8 w-full flex items-center justify-center  ">
                <div className="text-start">
                  {" "}
                  экспресс курс – самый эффективный формат{" "}
                </div>
              </div>
            </div>
            <div className="block lg:hidden w-full text-center   btn-test   bg-white  rounded-full text-black pt-2.5 pb-2  px-8    mb-7   border  lg:border-2 border-black   hover:bg-slate-200  duration-100 cursor-pointer">
              <img
                src="/img/rk.webp"
                alt=""
                className="w-8.5 h-11 me-1 sm:me-3  inline pb-2"
              />
              <span className="  cs-font-size-md font-semibold text-xl sm:text-2xl me-2">
                2 месяца
              </span>
              <span className="font-SrirachaRU text-base   md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8  ">
                {" "}
                <br className="cs-inline-price" />
                экспресс курс
                <br className="hidden sm:inline" />– самый
                эффективный&nbsp;формат
              </span>
            </div>
          </div>
        )}
        <div
          custom={2}
          onClick={() => setIsOpen(true)}
          className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300 bg-amber-400  w-full justify-center text-center items-center "
        >
          <div className="text-8xl  ">
            {" "}
            {month == 1 ? "14" : ""}
            {month == 2 ? "28" : ""}
            {month == 3 ? "42" : ""}
            {month == 4 ? "18" : ""}
          </div>
          <div className="text-base pb-2.5">
            {" "}
            {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
            {month == 3 ? "занятия" : ""}&#47;предмет
          </div>
        </div>{" "}
        <div className="flex flex-row justify-center">
          <div className="flex flex-col me-5-sp  sm:me-10 items-center">
            <div custom={2} className="text-sm sm:text-xl mb-4 ">
              количество
              <br /> предметов
            </div>
            <div
              custom={2.5}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  text-3xl wd-nums-serv wd-nums-serv bg-amber-400 rounded-xl mb-3.5 text-center flex items-center justify-center"
            >
              1
            </div>
            <div
              custom={3}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  text-3xl wd-nums-serv wd-nums-serv bg-amber-400 rounded-xl mb-3.5 text-center flex items-center justify-center"
            >
              2
            </div>
            <div
              custom={3.5}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  text-3xl wd-nums-serv wd-nums-serv bg-amber-400 rounded-xl mb-3.5 text-center flex items-center justify-center"
            >
              3
            </div>
            <div
              custom={4}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  text-3xl wd-nums-serv wd-nums-serv bg-amber-400 rounded-xl mb-3.5 text-center flex items-center justify-center"
            >
              4
            </div>
          </div>
          <div className="flex flex-col sm:justify-center">
            <div custom={2.5} className="text-sm sm:text-xl mb-4">
              стоимость
              <br /> занятий
            </div>

            {month == 1 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 me-2 sm:me-4 pe-0.5"
                >
                  19250<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  36600<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  51900<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  65450<span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
            {month == 2 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 "
                >
                  36600 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  "
                >
                  65450 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  "
                >
                  95860 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  "
                >
                  126280 <span className="text-base ms-1.5"> руб</span>
                </div>{" "}
              </>
            ) : (
              ""
            )}
            {month == 3 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 "
                >
                  51900 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  "
                >
                  95860 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  "
                >
                  140300 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  "
                >
                  184800 <span className="text-base ms-1.5"> руб</span>
                </div>{" "}
              </>
            ) : (
              ""
            )}
            {month == 4 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 me-2 sm:me-4 pe-0.5"
                >
                  24400<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  43700<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  63900<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  79900<span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="flex flex-col me-6-sp lg:me-10 items-center md:ms-6 lg:ms-10
          "
          >
            <div custom={3} className="text-sm sm:text-xl mb-4 pb-5 sm:pb-7">
              скидка
            </div>
            {month == 1 ? (
              <>
                <div className="text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5 "></div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5   "
                >
                  5%
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5   "
                >
                  10%
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5   "
                >
                  15%
                </div>
              </>
            ) : (
              ""
            )}{" "}
            {month == 2 || month == 4 ? (
              <>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5 "
                >
                  5%{" "}
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  15%
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  17%
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5  "
                >
                  18%
                </div>
              </>
            ) : (
              ""
            )}
            {month == 3 ? (
              <>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5 "
                >
                  10%
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  17%
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  19%
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5  "
                >
                  20%
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col md:me-10 items-start  md:ms-8 lg:ms-14">
            <div
              custom={3.5}
              className="text-sm w-full sm:text-xl mb-4  pb-5 sm:pb-7 sms-text-end"
            >
              выгода
            </div>
            {month == 1 ? (
              <>
                <div className="text-3xl hg-nums-serv  mb-3.5   pt-2.5 "></div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  1900 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  5850<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5  "
                >
                  11550<span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}{" "}
            {month == 2 || month == 4 ? (
              <>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  1900 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  11550 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  19640<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5  "
                >
                  27720<span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}{" "}
            {month == 3 ? (
              <>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  5850 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  19640 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  32950<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5  "
                >
                  46200<span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            custom={3.5}
            onClick={() => setIsOpen(true)}
            className=" hidden xl:flex flex-col pt-40 pb-36 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300 bg-amber-400  w-full justify-center text-center items-center ms-6"
          >
            <div className="text-8xl  ">
              {" "}
              {month == 1 ? "14" : ""}
              {month == 2 ? "28" : ""}
              {month == 3 ? "42" : ""}
              {month == 4 ? "18" : ""}
            </div>
            <div className="text-base pb-2.5">
              {" "}
              {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
              {month == 3 ? "занятия" : ""}&#47;предмет
            </div>
          </div>{" "}
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="flex no-bg-400 cursor-pointer bg-gradient-to-l from-90% to-90% from-amber-400 rounded-xl  justify-center  "
        >
          <div className=" flex bg-gradient-to-l from-50% to-50% from-amber-400  no-bg-400   flex-col max-w-fit items-center justify-center me-5-sp  sm:me-10  ">
            <div className=" text-sm sm:text-xl  h-0  -z-50 select-none text-transparent  ">
              {" "}
              количество
              <br /> предметов
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer   duration-200   text-3xl  wd-nums-serv bg-amber-400 rounded-xl  text-center flex items-center justify-center"
            ></div>
          </div>
          <div className="w-fit flex flex-col  justify-center">
            <div className="text-base sm:text-xl lg:text-2xl lg:pt-2px">
              Индивидуальные занятия
              <br className="block md:hidden" />{" "}
              <span className="">
                от 2500
                <span className="text-base ms-1.5">руб</span>
              </span>
            </div>
            <div className="text-2xl max-w-max ">
              <div className=" flex  relative endst -z-[99999]  h-0  select-none   ">
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  "
                >
                  140300 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={3}
                  className="text-sm sm:text-xl me-6-sp lg:me-10 items-center md:ms-6 lg:ms-10  "
                >
                  скидка
                </div>{" "}
                <div
                  custom={2.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer md:me-10   md:ms-8 lg:ms-14 hover:scale-110 duration-200 text-sm sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5  "
                >
                  46200<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={3.5}
                  onClick={() => setIsOpen(true)}
                  className=" hidden xl:flex flex-col h-5  rounded-3xl  px-14  cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300 bg-amber-400  w-full justify-center text-center items-center ms-6"
                >
                  <div className="text-base">
                    {" "}
                    {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
                    {month == 3 ? "занятия" : ""}&#47;предмет
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>{" "}
          {month == 1 ? <div className="sm:w-0 w-1"></div> : ""}
          {month == 2 || month == 3 || month == 4 ? (
            <div className="sm:w-0 w-1.5"></div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <div className="mx-auto xl:max-w-5xl px-4 md:px-12 ">
        <div
          custom={1}
         
          className=" text-5xl font-bold play  mb-5"
        >
          Цены на занятия
        </div>

        <div
          custom={1}
         
          className="text-center  text-2xl   mb-8"
        >
          1 академический час - 640 руб (все занятия длятся по 2 академических
          часа)
        </div>

        <div className=" w-full   ">
          <div
            custom={3}
           
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-amber-50 xl:mb-0 flex-col border-zinc-600  duration-300 hover:scale-105 hover:shadow-lg shadow border rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              13 часов
            </div>
            <div className="text-2xl text-center  px-8 pt-6">11 500 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 3 000</div>
          </div>
          <div
            custom={4}
           
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-amber-50 xl:mb-0 flex-col border-zinc-600  duration-300 hover:scale-105 hover:shadow-lg shadow border rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              26 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6">23 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 4 500</div>
          </div>
          <div
            custom={5}
           
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-amber-50 xl:mb-0 flex-col border-zinc-600  duration-300 hover:scale-105 hover:shadow-lg shadow border rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              39 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6"> 34 500 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 6 000</div>
          </div>
          <div
            custom={6}
           
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-amber-50 xl:mb-0 flex-col border-zinc-600  duration-300 hover:scale-105 hover:shadow-lg shadow border rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              78 часов
            </div>
            <div className="text-2xl text-center px-8 pt-6">69 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 10 500</div>
          </div>
          <div
            custom={7}
           
            onClick={() => setIsOpen(true)}
            className="flex mb-6 bg-amber-50 xl:mb-0 flex-col border-zinc-600  duration-300 hover:scale-105 hover:shadow-lg shadow border rounded-2xl p-6"
          >
            <div className="text-3xl  flex-col flex items-center font-bold play">
              117 часов <br />
              <span className="text-xl"> годовой абонемент</span>
            </div>
            <div className="text-2xl text-center px-8 pt-6">95 000 руб</div>
            <div className="text-xl text-center px-8 pt-2">выгода 23 000</div>
          </div>
          <div
            custom={8}
           
            className="bg-amber-50 col-span-3 flex mb-6 bg-amber-50 xl:mb-0 flex-col border-zinc-600 hover:rotate-3 duration-300 hover:scale-105 hover:shadow-lg shadow border rounded-2xl p-6"
          >
            <div className="text-3xl text-center lg:text-start  flex-col flex items-center font-bold play">
              Индивидуальные занятия <br className="lg:hidden" /> от 3 000 руб
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export function PriceDvi() {
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
  const [value, setValue] = useState("0");

  function chengeValue() {
    setValue(event.target.value);
    // console.log(value);
  }

  let [lesson, setLesson] = useState([
    "Обществознание",
    "Английский",
    "Математика",
    "Биология",
    "Химия",
    "Литература",
    "Журналистика",
    "История",
    "Физика",
    "География",
  ]);

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
  return (
    <div viewport={{ amount: 0.1, once: true }} className="bg-amber-50  py-8">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen xl:overflow-y-auto bg-blur overflow-y-scroll">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className=" inset-0 flex w-screen max-h-lvh   items-center justify-center ">
              <Dialog.Panel className="   rounded-xl bg-amber-50   flex items-center justify-center">
                {/* <div className="hidden w-80 mx-10 md:py-20 lg:flex items-center justify-center">
                    <img src="/img/mggu.jpg" className="" alt="Пальма" />
                  </div> */}
                <div className="  p-5">
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
                    action="https://lomonosovites.ru/mailSummer.php"
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
                        maxLength={11}
                        onChange={() => {
                          ssd();
                        }}
                        className=" border text-md border-gray-300 mb-5  px-3 py-3  text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200     placeholder-gray-500 "
                        placeholder="8 999 999 99 99"
                        required
                      />
                    </div>
                    <label
                      for="class"
                      className="block mb-2 font-medium   text-xl"
                    >
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
                </div>{" "}
                <div className="hidden lg:block  ">
                  <img
                    src="/img/lomosov.webp"
                    className=" rounded-r-xl max-h-lvh  max-w-md  mr-0 pr-0"
                    alt="Ломоносов"
                  />
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
      <div className="mx-auto xl:max-w-5xl px-4 md:px-12 robotoMonoRegular">
        <div custom={1} className="text-center  text-5xl font-bold play  mb-8">
          Стоимость занятий
        </div>
        <div className="grid grid-rows-5  md:grid-rows-3 grid-cols-1 md:grid-cols-2 gap-5">
          <div
            custom={2}
            onClick={() => setIsOpen(true)}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">12</div> часов
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="  text-3xl hg-nums-serv  mb-3.5 items-end flex  pt-2.5 ms-4 lg:ms-16"
            >
              15600<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>
          <div
            custom={3}
            onClick={() => setIsOpen(true)}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">24</div> часа
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="  text-3xl hg-nums-serv  mb-3.5 text-center flex items-end pt-2.5 ms-4 lg:ms-16"
            >
              30000<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>{" "}
          <div
            custom={4}
            onClick={() => setIsOpen(true)}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">36</div> часов
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="  text-3xl hg-nums-serv  mb-3.5 text-center flex items-end pt-2.5 ms-4 lg:ms-16"
            >
              58000<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>{" "}
          <div
            custom={5}
            onClick={() => setIsOpen(true)}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">72</div> часа
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="  text-3xl hg-nums-serv  mb-3.5 text-center flex items-end pt-2.5 ms-4 lg:ms-16"
            >
              80000<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>{" "}
          <div
            custom={6}
            onClick={() => setIsOpen(true)}
            className="flex justify-center items-center flex-col md:flex-row md:col-span-2   border px-5 md:py-4 rounded-xl bg-amber-400 border-gray-300 cursor-pointer hover:scale-105 duration-200 text-center text-xl md:text-2xl lg:text-3xl"
          >
            Индивидуальные занятия
            <div className="">
              &nbsp;от 3500
              <span className="text-base ms-1.5"> руб</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricePyEng() {
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
    "Литература",
    "Информатика",
    "История",
    "Физика",
    "География",
  ]);
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
  return (
    <div className="bg-amber-50 ">
      {" "}
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
                variants={textYAnim}
                viewport={{ amount: 0.05, once: true }}
                whileInView="visible"
                initial="hidden"
                className=" inset-0 flex w-screen max-h-lvh  items-center justify-center "
              >
                <Dialog.Panel className="   rounded-xl bg-amber-50   flex items-center justify-center">
                  {/* <div className="hidden w-80 mx-10 md:py-20 lg:flex items-center justify-center">
                    <img src="/img/mggu.jpg" className="" alt="Пальма" />
                  </div> */}
                  <div className="  p-5">
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
                      action="https://lomonosovites.ru/mailPy.php"
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
                          pattern="[0-9]{11}"
                          onChange={() => {
                            ssd();
                          }}
                          maxLength={11}
                          className=" border text-md border-gray-300 mb-5  px-3 py-3  text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200     placeholder-gray-500 "
                          placeholder="8 999 999 99 99"
                          required
                        />
                      </div>

                      <label
                        for="countries"
                        className="block my-2 font-medium   text-xl"
                      >
                        Что вы хотите изучать ?
                      </label>

                      <div className="grid sm:grid-cols-2 my-5">
                        <div className="flex items-center mb-4 me-5">
                          <input
                            name="lesson-4"
                            value="Python программирование"
                            id="link-checkbox"
                            type="checkbox"
                            className="w-6 md:w-4 h-6 md:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 ">
                            Python программирование
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            name="lesson-3"
                            value="Разговорный Английский"
                            id="link-checkbox"
                            type="checkbox"
                            className="w-6 md:w-4 h-6 md:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 "
                          />
                          <label className="ms-2 text-md font-medium text-slate-800 ">
                            Разговорный Английский
                          </label>
                        </div>
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
                  </div>{" "}
                  <div className="hidden lg:block  ">
                    <img
                      src="/img/lomosov.webp"
                      className=" rounded-r-xl max-h-lvh  max-w-md  mr-0 pr-0"
                      alt="Ломоносов"
                    />
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="mx-auto max-w-7xl px-2  lg:px-16 robotoMonoRegular">
        <div
          custom={1}
          className=" text-4xl ps-2 sm:ps-0 sm:text-5xl   font-bold play  mb-5 "
        >
          Стоимость занятий
        </div>
        <div
          custom={1}
          className="text-base sm:text-xl  ps-2 sm:ps-0 md:text-2xl mb-5"
        >
          1 академический час - 640&nbsp;руб <br />
          (все занятия длятся по 2 академических часа)
        </div>
        <div
          custom={2}
          className="w-full mb-7 rounded-full grid grid-cols-3 gap-1 bg-white border  lg:border-2 border-black"
        >
          {month == 1 ? (
            <div
              onClick={() => {
                setMonth(1);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300 duration-100 cursor-pointer bg-amber-400"
            >
              3&nbsp;месяца
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(1);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200 duration-100 cursor-pointer "
            >
              3&nbsp;месяца
            </div>
          )}
          {month == 2 ? (
            <div
              onClick={() => {
                setMonth(2);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300  duration-100 cursor-pointer bg-amber-400"
            >
              6&nbsp;месяцев
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(2);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200  duration-100 cursor-pointer "
            >
              6&nbsp;месяцев
            </div>
          )}
          {month == 3 ? (
            <div
              onClick={() => {
                setMonth(3);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-amber-300  duration-100 cursor-pointer bg-amber-400"
            >
              9&nbsp;месяцев
            </div>
          ) : (
            <div
              onClick={() => {
                setMonth(3);
              }}
              className="w-full text-center rounded-full sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-4 px-2 hover:bg-slate-200  duration-100 cursor-pointer "
            >
              9&nbsp;месяцев
            </div>
          )}
        </div>
        {month == 4 ? (
          <div
            className=""
            onClick={() => {
              setMonth(4);
            }}
          >
            <div className="hidden lg:grid w-full  grid-cols-3 gap-1  btn-test   hover:bg-amber-300   bg-amber-400  rounded-full text-black sm:pt-5 sm:pb-4 px-3 md:px-7 xl:px-10   mb-7   border  lg:border-2 border-black    duration-100 cursor-pointer">
              <div className=" flex items-center justify-center font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                <img
                  src="/img/rk.webp"
                  alt=""
                  className="w-8 lg:w-10 xl:w-12 md:me-2 xl:me-3"
                />
                2 месяца
              </div>
              <div className="font-SrirachaRU lg:px-5 col-span-2 lg:ms-5  md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8 w-full flex items-center justify-center  ">
                <div className="text-start">
                  {" "}
                  экспресс курс – самый эффективный формат{" "}
                </div>
              </div>
            </div>
            <div className="block lg:hidden w-full text-center   btn-test   hover:bg-amber-300   bg-amber-400  rounded-full text-black pt-2.5 pb-2  px-8    mb-7   border  lg:border-2 border-black    duration-100 cursor-pointer">
              <img
                src="/img/rk.webp"
                alt=""
                className="w-8.5 h-11 me-1 sm:me-3  inline pb-2"
              />
              <span className="  cs-font-size-md font-semibold text-xl sm:text-2xl me-2">
                2 месяца
              </span>
              <span className="font-SrirachaRU text-base   md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8  ">
                {" "}
                <br className="cs-inline-price" />
                экспресс курс
                <br className="hidden sm:inline" />– самый
                эффективный&nbsp;формат
              </span>
            </div>
          </div>
        ) : (
          <div
            className=""
            onClick={() => {
              setMonth(4);
            }}
          >
            <div className="hidden lg:grid w-full  grid-cols-3 gap-1  btn-test   bg-white  rounded-full text-black sm:pt-5 sm:pb-4 px-3 md:px-7 xl:px-10   mb-7   border  lg:border-2 border-black   hover:bg-slate-200  duration-100 cursor-pointer">
              <div className=" flex items-center justify-center font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                <img
                  src="/img/rk.webp"
                  alt=""
                  className="w-8 lg:w-10 xl:w-12 md:me-2 xl:me-3"
                />
                2 месяца
              </div>
              <div className="font-SrirachaRU lg:px-5 col-span-2 lg:ms-5  md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8 w-full flex items-center justify-center  ">
                <div className="text-start">
                  {" "}
                  экспресс курс – самый эффективный формат{" "}
                </div>
              </div>
            </div>
            <div className="block lg:hidden w-full text-center   btn-test   bg-white  rounded-full text-black pt-2.5 pb-2  px-8    mb-7   border  lg:border-2 border-black   hover:bg-slate-200  duration-100 cursor-pointer">
              <img
                src="/img/rk.webp"
                alt=""
                className="w-8.5 h-11 me-1 sm:me-3  inline pb-2"
              />
              <span className="  cs-font-size-md font-semibold text-xl sm:text-2xl me-2">
                2 месяца
              </span>
              <span className="font-SrirachaRU text-base   md:text-lg lg:text-xl xl:text-2xl  md:ps-3 xl:ps-6 xl:pe-8  ">
                {" "}
                <br className="cs-inline-price" />
                экспресс курс
                <br className="hidden sm:inline" />– самый
                эффективный&nbsp;формат
              </span>
            </div>
          </div>
        )}
        <div
          custom={2}
          onClick={() => setIsOpen(true)}
          className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300 bg-amber-400  w-full justify-center text-center items-center "
        >
          <div className="text-8xl  ">
            {" "}
            {month == 1 ? "14" : ""}
            {month == 2 ? "28" : ""}
            {month == 3 ? "42" : ""}
            {month == 4 ? "18" : ""}
          </div>
          <div className="text-base pb-2.5">
            {" "}
            {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
            {month == 3 ? "занятия" : ""}&#47;предмет
          </div>
        </div>{" "}
        <div className="flex flex-row ps-5 pe-5 xl:pe-0 justify-between mb-4">
          <div className="flex flex-col ">
            <div custom={2.5} className="text-sm sm:text-xl ">
              стоимость
              <br /> занятий
            </div>
            {month == 1 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl  mb-3.5 text-center flex items-center pt-2.5 me-2 sm:me-4 pe-0.5"
                >
                  19250<span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
            {month == 2 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5 text-center flex items-center pt-2.5 "
                >
                  36600 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}{" "}
            {month == 4 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5 text-center flex items-center pt-2.5 "
                >
                  24400 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
            {month == 3 ? (
              <>
                <div
                  custom={1}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5 text-center flex items-center pt-2.5 "
                >
                  51900 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="flex flex-col me-6-sp lg:me-10 items-center md:ms-6 lg:ms-10
          "
          >
            {month == 1 ? <></> : ""}{" "}
            {month == 2 || month == 4 ? (
              <>
                <div custom={3} className="text-sm sm:text-xl  pb-5 sm:pb-7">
                  скидка
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5  flex items-center pt-2.5 "
                >
                  5%{" "}
                </div>
              </>
            ) : (
              ""
            )}
            {month == 3 ? (
              <>
                <div custom={3} className="text-sm sm:text-xl  pb-5 sm:pb-7">
                  скидка
                </div>
                <div
                  custom={1.5}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5  flex items-center pt-2.5 "
                >
                  10%
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col md:me-10 items-start  md:ms-8 lg:ms-14">
            {month == 1 ? (
              <>
                <div className="text-3xl   mb-3.5   pt-2.5 "></div>
              </>
            ) : (
              ""
            )}{" "}
            {month == 2 || month == 4 ? (
              <>
                {" "}
                <div
                  custom={3.5}
                  className="text-sm w-full sm:text-xl   pb-5 sm:pb-7 sms-text-end"
                >
                  выгода
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl   mb-3.5 flex items-center pt-2.5  "
                >
                  1900 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}{" "}
            {month == 3 ? (
              <>
                {" "}
                <div
                  custom={3.5}
                  className="text-sm w-full sm:text-xl  pb-5 sm:pb-7 sms-text-end"
                >
                  выгода
                </div>
                <div
                  custom={2}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl   mb-3.5 flex items-center pt-2.5  "
                >
                  5850 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            custom={3.5}
            onClick={() => setIsOpen(true)}
            className=" hidden xl:flex  flex-col pt-8 pb-6 rounded-3xl  px-10 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300 bg-amber-400  w-full justify-center text-center items-center ms-6"
          >
            <div className="text-3xl  ">
              {" "}
              {month == 1 ? "14" : ""}
              {month == 2 ? "28" : ""}
              {month == 3 ? "42" : ""}
              {month == 4 ? "18" : ""}
            </div>
            <div className="text-base pb-2.5">
              {" "}
              {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
              {month == 3 ? "занятия" : ""}&#47;предмет
            </div>
          </div>{" "}
        </div>
        <div
          custom={2}
          onClick={() => setIsOpen(true)}
          className="cursor-pointer sm:text-start text-center hover:scale-105 duration-200 mb-6 bg-amber-400 px-12 py-8 rounded-2xl tex-lg lg:text-2xl"
        >
          Индивидуальные занятия от&nbsp;2500&nbsp;руб
        </div>
      </div>
    </div>
  );
}
