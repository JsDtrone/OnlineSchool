import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function PricePyEng() {
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

  const [PeoplePhone, setPeoplePhone] = useState("");
  const [PeopleName, setPeopleName] = useState("");
  function changePhone() {
    setPeoplePhone(event.target.value);
  }
  function changeName() {
    setPeopleName(event.target.value);
  }
  const [currentPrice, setCurrentPrice] = useState(0);
  const arrCourse = {
    1: {
      19250: " 3 месяца 1 предмет",
      36600: " 3 месяца 2 предмета",
      51900: " 3 месяца 3 предмета",
      65450: " 3 месяца 4 предмета",
    },
    2: {
      36600: " 6 месяцев 1 предмет",
      65450: " 6 месяцев 2 предмета",
      95860: " 6 месяцев 3 предмета",
      126280: " 6 месяцев 4 предмета",
    },
    3: {
      51900: " 9 месяцев 1 предмет",
      95860: " 9 месяцев 2 предмета",
      140300: " 9 месяцев 3 предмета",
      184800: " 9 месяцев 4 предмета",
    },
    4: {
      51900: " 4.5 месяца Экспресс 1 предмет",
      129360: " 4.5 месяца Экспресс 2 предмета",
      189420: " 4.5 месяца Экспресс 3 предмета",
      246400: " 4.5 месяца Экспресс 4 предмета",
    },
  };

  function chengeValue() {
    setValue(event.target.value);
    // console.log(value);
  }

  const widget = new cp.CloudPayments();
  const launchWidget = () => {
    const intentParams = {
      publicTerminalId: "hide",

      paymentSchema: "Single",
      description: `Курсы lomonosovites.ru${arrCourse[month][currentPrice]} Клиент ${PeopleName} ${PeoplePhone}`,

      amount: currentPrice,
      currency: "RUB",
      receiptEmail: "",
      emailBehavior: "Required",
      skin: "minimal",
      cryptogramMode: false,
    };
    widget
      .start(intentParams)
      .then(function (widgetResult) {
        if (widgetResult.status == "success") {
          window.location.replace(
            "https://lomonosovites.ru/successful-payment",
          );
        } else if (widgetResult.status == "fail") {
          window.location.replace("https://lomonosovites.ru/failed-payment");
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  function PayFunc() {
    launchWidget();
  }

  function calcPrice(m) {
    if (m == 1) {
      setCurrentPrice(19250);
    } else if (m == 2) {
      setCurrentPrice(36600);
    } else if (m == 3) {
      setCurrentPrice(51900);
    } else if (m == 4) {
      setCurrentPrice(51900);
    }
  }
  return (
    <div className="bg-amber-50 ">
      {" "}
      <div className=" mt-10 mb-6">
        <Dialog
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            setCurrentPrice(0);
            setPeopleName("");
            setPeoplePhone("");
          }}
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
                          setCurrentPrice(0);
                          setPeopleName("");
                          setPeoplePhone("");
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
                          onChange={() => {
                            ssd();
                            changeName();
                          }}
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
                            changePhone();
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

                      {/* <div className="w-full flex items-end md:justify-center">
                        <button
                          type="submit"
                          className=" font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-amber-300  "
                        >
                          Отправить
                        </button>
                      </div> */}
                      <div className="w-full flex flex-col items-end md:justify-center">
                        {PeoplePhone.length == 11 && PeopleName.length > 1 ? (
                          <button
                            type="submit"
                            className=" font-medium rounded-lg  w-full mb-4  px-5 py-2.5 text-center play text-xl bg-amber-300  "
                          >
                            Отправить заявку
                          </button>
                        ) : (
                          <button className=" font-medium rounded-lg  w-full mb-4  px-5 py-2.5 text-center play text-xl bg-amber-200 text-zinc-500 cursor-not-allowed ">
                            Отправить заявку
                          </button>
                        )}
                        {currentPrice != 0 &&
                        PeoplePhone.length == 11 &&
                        PeopleName.length > 1 ? (
                          <div
                            onClick={() => PayFunc()}
                            className="cursor-pointer font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-amber-300  "
                          >
                            Оплатить
                          </div>
                        ) : (
                          ""
                        )}
                        {currentPrice != 0 &&
                        (PeoplePhone.length < 11 || PeopleName.length < 1) ? (
                          <button className="  font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-amber-200 text-zinc-500 cursor-not-allowed">
                            Оплатить
                          </button>
                        ) : (
                          ""
                        )}
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
                4.5&ensp;месяца
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
                4.5&ensp;месяца
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
                4.5&ensp;месяца
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
                4.5&ensp;месяца
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
        {/* <div
          custom={2}
          onClick={() => {
            setIsOpen(true);
            setCurrentPrice(0);
          }}
          className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center "
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
        </div>{" "} */}
        {month == 1 ? (
          <div
            custom={3.5}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(19250);
            }}
            className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center "
          >
            <div className="text-8xl  "> 14</div>
            <div className="text-base pb-2.5">
              {" "}
              {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
              {month == 3 ? "занятия" : ""}&#47;предмет
            </div>
          </div>
        ) : (
          ""
        )}
        {month == 2 ? (
          <div
            custom={3.5}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(36600);
            }}
            className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center "
          >
            <div className="text-8xl  "> 28</div>
            <div className="text-base pb-2.5">
              {" "}
              {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
              {month == 3 ? "занятия" : ""}&#47;предмет
            </div>
          </div>
        ) : (
          ""
        )}
        {month == 3 ? (
          <div
            custom={3.5}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(51900);
            }}
            className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center "
          >
            <div className="text-8xl  "> 42</div>
            <div className="text-base pb-2.5">
              {" "}
              {month == 1 || month == 2 ? "занятий" : ""}
              {month == 3 || month == 4 ? "занятия" : ""}&#47;предмет
            </div>
          </div>
        ) : (
          ""
        )}
        {month == 4 ? (
          <div
            custom={3.5}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(51900);
            }}
            className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center "
          >
            <div className="text-8xl  ">42</div>
            <div className="text-base pb-2.5">
              {" "}
              {month == 1 || month == 2 ? "занятий" : ""}
              {month == 3 || month == 4 ? "занятия" : ""}&#47;предмет
            </div>
          </div>
        ) : (
          ""
        )}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(19250);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(36600);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5 text-center flex items-center pt-2.5 "
                >
                  51900 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
            {month == 3 ? (
              <>
                <div
                  custom={1}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
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
            {month == 2 ? (
              <>
                <div custom={3} className="text-sm sm:text-xl  pb-5 sm:pb-7">
                  скидка
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(36600);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5  flex items-center pt-2.5 "
                >
                  10%
                </div>
              </>
            ) : (
              ""
            )}
            {month == 4 ? (
              <>
                <div custom={3} className="text-sm sm:text-xl  pb-5 sm:pb-7">
                  скидка
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5  flex items-center pt-2.5 "
                >
                  10%{" "}
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
            {month == 2 ? (
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(36600);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl   mb-3.5 flex items-center pt-2.5  "
                >
                  5850 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
            {month == 4 ? (
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl   mb-3.5 flex items-center pt-2.5  "
                >
                  5850 <span className="text-base ms-1.5"> руб</span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          {/* <div
            custom={3.5}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(0);
            }}
            className=" hidden xl:flex  flex-col pt-8 pb-6 rounded-3xl  px-10 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center ms-6"
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
          </div>{" "} */}
          {month == 1 ? (
            <div
              custom={3.5}
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(19250);
              }}
              className=" hidden xl:flex  flex-col pt-8 pb-6 rounded-3xl  px-10 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center ms-6"
            >
              <div className="text-3xl  "> 14</div>
              <div className="text-base pb-2.5">
                {" "}
                {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
                {month == 3 ? "занятия" : ""}&#47;предмет
              </div>
            </div>
          ) : (
            ""
          )}
          {month == 2 ? (
            <div
              custom={3.5}
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(36600);
              }}
              className=" hidden xl:flex  flex-col pt-8 pb-6 rounded-3xl  px-10 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center ms-6"
            >
              <div className="text-3xl  "> 28</div>
              <div className="text-base pb-2.5">
                {" "}
                {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
                {month == 3 ? "занятия" : ""}&#47;предмет
              </div>
            </div>
          ) : (
            ""
          )}
          {month == 3 ? (
            <div
              custom={3.5}
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(51900);
              }}
              className=" hidden xl:flex  flex-col pt-8 pb-6 rounded-3xl  px-10 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center ms-6"
            >
              <div className="text-3xl  "> 42</div>
              <div className="text-base pb-2.5">
                {" "}
                {month == 1 || month == 2 ? "занятий" : ""}
                {month == 3 || month == 4 ? "занятия" : ""}&#47;предмет
              </div>
            </div>
          ) : (
            ""
          )}
          {month == 4 ? (
            <div
              custom={3.5}
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(51900);
              }}
              className=" hidden xl:flex  flex-col pt-8 pb-6 rounded-3xl  px-10 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center ms-6"
            >
              <div className="text-3xl  ">42</div>
              <div className="text-base pb-2.5">
                {" "}
                {month == 1 || month == 2 ? "занятий" : ""}
                {month == 3 || month == 4 ? "занятия" : ""}&#47;предмет
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          custom={2}
          onClick={() => {
            setIsOpen(true);
            setCurrentPrice(0);
          }}
          className="cursor-pointer sm:text-start text-center hover:scale-105 duration-200 mb-6 bg-amber-400 px-12 py-8 rounded-2xl tex-lg lg:text-2xl"
        >
          Индивидуальные занятия от&nbsp;2500&nbsp;руб
        </div>
      </div>
    </div>
  );
}
