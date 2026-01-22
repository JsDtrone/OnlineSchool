import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Navigate } from "react-router-dom";

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

  const [resoult, setResolt] = useState("");
  const [PeoplePhone, setPeoplePhone] = useState("");
  const [PeopleName, setPeopleName] = useState("");
  function changePhone() {
    setPeoplePhone(event.target.value);
  }
  function changeName() {
    setPeopleName(event.target.value);
  }

  const [currentPrice, setCurrentPrice] = useState(0);

  // const arrCourse = {
  //     1: {
  //       19250: " 3 месяца 1 предмет 14 занятий",
  //       36600: " 3 месяца 2 предмета 28 занятий",
  //       51900: " 3 месяца 3 предмета 42 занятий",
  //       65450: " 3 месяца 4 предмета 56 занятий",
  //     },
  //     2: {
  //       36600: " 6 месяцев 1 предмет 28 занятий",
  //       65450: " 6 месяцев 2 предмета 56 занятий",
  //       95860: " 6 месяцев 3 предмета 84 занятия",
  //       126280: " 6 месяцев 4 предмета 112 занятий",
  //     },
  //     3: {
  //       51900: " 9 месяцев 1 предмет 42 занятия",
  //       95860: " 9 месяцев 2 предмета 84 занятия",
  //       140300: " 9 месяцев 3 предмета 126 занятий",
  //       184800: " 9 месяцев 4 предмета 168 занятий",
  //     },
  //     4: {
  //       24400: " 2 месяца 1 предмет 18 занятий",
  //       43700: " 2 месяца 2 предмета 36 занятий",
  //       63900: " 2 месяца 3 предмета 54 занятия",
  //       79900: " 2 месяца 4 предмета 72 занятия",
  //     },
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
      24400: " 2 месяца 1 предмет",
      43700: " 2 месяца 2 предмета",
      63900: " 2 месяца 3 предмета",
      79900: " 2 месяца 4 предмета",
    },
  };

  function chengeValue() {
    setValue(event.target.value);
    // console.log(value);
  }
  function PayFunc() {
    let externalIdInMySystem = `${new Date().getUTCFullYear()}.${new Date().getUTCMonth()}.${new Date().getUTCDate()};${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;

    console.log(externalIdInMySystem);
    console.log(currentPrice);

    console.log(arrCourse[month][currentPrice], month, currentPrice);

    var payments = new cp.CloudPayments({
      email: "",
      cryptogramMode: false,
      yandexPaySupport: false,
      applePaySupport: false,
      googlePaySupport: false,
      masterPassSupport: false,
      tinkoffInstallmentSupport: false,
    });

    payments.oncomplete = (result) => {
      setResolt(result.status);
      console.log("result", resoult);
      if (resoult == "success") {
        console.log("SUCCESS");
      } else {
        console.log("False");
      }
    };

    payments
      .pay("charge", {
        // options
        publicId: "test_api_00000000000000000000002",
        paymentSchema: "Single",
        description: `Курсы lomonosovites.ru${arrCourse[month][currentPrice]} Клиент ${PeopleName} ${PeoplePhone}`,
        restrictedPaymentMethods: [
          // список отключенных для данной оплаты методов
        ],
        externalId: externalIdInMySystem,

        amount: currentPrice,
        currency: "RUB",

        receiptEmail: "a.d.nagornyy@gmail.com",
        emailBehavior: "Required",
        skin: "minimal",
        userInfo: {
          customField: {
            name: "Курс",
            value: "arrCourse[month][currentPrice]",
          },
          firstName: PeopleName,
          phone: PeoplePhone,
        },
        successRedirectUrl: "<https://lomonosovites.ru/successful-payment>",
        failRedirectUrl: "<https://lomonosovites.ru/failed-payment>",

        receipt: {
          items: [
            //товарные позиции
            {
              label: `Курс ${arrCourse[month][currentPrice]}`, //наименование товара
              price: currentPrice, //цена
              quantity: 1.0, //количество
              amount: currentPrice, //сумма
              vat: 0, //ставка НДС
              method: 0, // тег-1214 признак способа расчета - признак способа расчета
              object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
              measurementUnit: "шт", //единица измерения
            },
          ],
        },
        cryptogramMode: false,
      })
      .then((result) => {
        // Объект типа WidgetResult
        console.log("result", result);
      });
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

  function calcPriceByCount(m, count) {
    if (m == 1) {
      if (count == 1) {
        setCurrentPrice(19250);
      } else if (count == 2) {
        setCurrentPrice(36600);
      } else if (count == 3) {
        setCurrentPrice(51900);
      } else if (count == 4) {
        setCurrentPrice(65450);
      }
    } else if (m == 2) {
      if (count == 1) {
        setCurrentPrice(36600);
      } else if (count == 2) {
        setCurrentPrice(65450);
      } else if (count == 3) {
        setCurrentPrice(95860);
      } else if (count == 4) {
        setCurrentPrice(126280);
      }
    } else if (m == 3) {
      if (count == 1) {
        setCurrentPrice(51900);
      } else if (count == 2) {
        setCurrentPrice(95860);
      } else if (count == 3) {
        setCurrentPrice(140300);
      } else if (count == 4) {
        setCurrentPrice(184800);
      }
    } else if (m == 4) {
      if (count == 1) {
        setCurrentPrice(24400);
      } else if (count == 2) {
        setCurrentPrice(43700);
      } else if (count == 3) {
        setCurrentPrice(63900);
      } else if (count == 4) {
        setCurrentPrice(79900);
      }
    }
  }

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
          <div className="fixed inset-0 w-screen bg-blur   overflow-y-auto ">
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
                      action="https://lomonosovites.ru/mailSummer.php"
                      className="px-2.5 pb-2.5 "
                    >
                      <div className="w-full md:me-3 ">
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
                          className=" border text-md mb-1  border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200  text-gray-700   placeholder-gray-500 "
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
                      <div className="w-full md:me-3 ">
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
                            changePhone();
                          }}
                          className=" border text-md border-gray-300 mb-2  px-3 py-3  text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200     placeholder-gray-500 "
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

                      <div className="grid sm:grid-cols-2 my-3">
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
          onClick={() => {
            setIsOpen(true);
            setCurrentPrice(0);
          }}
          className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full  cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center "
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
              onClick={() => {
                setIsOpen(true);
                calcPriceByCount(month, 1);
              }}
              className="cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  text-3xl wd-nums-serv wd-nums-serv bg-amber-400 rounded-xl mb-3.5 text-center flex items-center justify-center"
            >
              1
            </div>
            <div
              custom={3}
              onClick={() => {
                setIsOpen(true);
                calcPriceByCount(month, 2);
              }}
              className="cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  text-3xl wd-nums-serv wd-nums-serv bg-amber-400 rounded-xl mb-3.5 text-center flex items-center justify-center"
            >
              2
            </div>
            <div
              custom={3.5}
              onClick={() => {
                setIsOpen(true);
                calcPriceByCount(month, 3);
              }}
              className="cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  text-3xl wd-nums-serv wd-nums-serv bg-amber-400 rounded-xl mb-3.5 text-center flex items-center justify-center"
            >
              3
            </div>
            <div
              custom={4}
              onClick={() => {
                setIsOpen(true);
                calcPriceByCount(month, 4);
              }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(5);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 me-2 sm:me-4 pe-0.5"
                >
                  19250<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(36600);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  36600<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  51900<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(65450);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(36600);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 "
                >
                  36600 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(65450);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  "
                >
                  65450 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(95860);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  "
                >
                  95860 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(126280);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(51900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 "
                >
                  51900 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(95860);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  "
                >
                  95860 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(140300);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  "
                >
                  140300 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(184800);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(24400);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5 me-2 sm:me-4 pe-0.5"
                >
                  24400<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(43700);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  43700<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(63900);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5 text-center flex items-center pt-2.5  me-2 sm:me-4 pe-0.5"
                >
                  63900<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(79900);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 2);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5   "
                >
                  5%
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 3);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5   "
                >
                  10%
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 4);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 1);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5 "
                >
                  5%{" "}
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 2);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  15%
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 3);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  17%
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 4);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 1);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5 "
                >
                  10%
                </div>
                <div
                  custom={1.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 2);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  17%
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 3);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  19%
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 4);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 2);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  1900 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 3);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  5850<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 4);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 1);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  1900 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 2);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  11550 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 3);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  19640<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 4);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 1);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  5850 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 2);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv  mb-3.5 flex items-center pt-2.5  "
                >
                  19640 <span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 3);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl hg-nums-serv mb-3.5  flex items-center pt-2.5  "
                >
                  32950<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={2.5}
                  onClick={() => {
                    setIsOpen(true);
                    calcPriceByCount(month, 4);
                  }}
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
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(0);
            }}
            className=" hidden xl:flex flex-col pt-40 pb-36 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300   bg-amber-400  w-full justify-center text-center items-center ms-6"
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
          onClick={() => {
            setIsOpen(true);
            setCurrentPrice(0);
          }}
          className="flex no-bg-400 cursor-pointer bg-gradient-to-l from-80% to-80% md:from-90% md:to-90% from-amber-400 rounded-xl  justify-center  "
        >
          <div className=" flex bg-gradient-to-l from-60% to-60% md:from-50% md:to-50% from-amber-400  no-bg-400   flex-col max-w-fit items-center justify-center me-5-sp  sm:me-10  ">
            <div className=" text-sm sm:text-xl  h-0  -z-50 select-none text-transparent  ">
              {" "}
              количество
              <br /> предметов
            </div>
            <div
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(0);
              }}
              className="cursor-pointer   duration-200   text-3xl  wd-nums-serv bg-amber-400 rounded-xl  text-center flex items-center justify-center"
            ></div>
          </div>
          <div className="w-fit flex flex-col  justify-center">
            <div
              className="text-base sm:text-xl lg:text-2xl lg:pt-2px "
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(0);
              }}
            >
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(140300);
                  }}
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
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentPrice(46200);
                  }}
                  className="cursor-pointer md:me-10   md:ms-8 lg:ms-14 hover:scale-110 duration-200 text-sm sm:text-3xl hg-nums-serv  mb-3.5  flex items-center pt-2.5  "
                >
                  46200<span className="text-base ms-1.5"> руб</span>
                </div>
                <div
                  custom={3.5}
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
      24400: " 2 месяца 1 предмет",
      43700: " 2 месяца 2 предмета",
      63900: " 2 месяца 3 предмета",
      79900: " 2 месяца 4 предмета",
    },
  };

  function chengeValue() {
    setValue(event.target.value);
    // console.log(value);
  }
  function PayFunc() {
    let externalIdInMySystem = `${new Date().getUTCFullYear()}.${new Date().getUTCMonth()}.${new Date().getUTCDate()};${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;
    console.log(externalIdInMySystem);
    console.log(currentPrice);

    console.log(arrCourse[month][currentPrice]);
    var payments = new cp.CloudPayments({
      email: "",
      cryptogramMode: false,
      yandexPaySupport: false,
      applePaySupport: false,
      googlePaySupport: false,
      masterPassSupport: false,
      tinkoffInstallmentSupport: false,
    });

    payments.oncomplete = (result) => {
      console.log("result", result);
    };

    payments
      .pay("charge", {
        // options
        publicId: "pk_1e7fa51c02677380a7397ba078f3b",
        paymentSchema: "Single",
        description: `Курсы lomonosovites.ru${arrCourse[month][currentPrice]} Клиент ${PeopleName} ${PeoplePhone}`,
        restrictedPaymentMethods: [
          // список отключенных для данной оплаты методов
        ],
        externalId: externalIdInMySystem,

        amount: currentPrice,
        currency: "RUB",

        receiptEmail: "a.d.nagornyy@gmail.com",
        emailBehavior: "Required",
        skin: "minimal",
        userInfo: {
          customField: {
            name: "Курс",
            value: "arrCourse[month][currentPrice]",
          },
          firstName: PeopleName,
          phone: PeoplePhone,
        },
        successRedirectUrl: "https://lomonosovites.ru/successful-payment>",
        failRedirectUrl: "https://lomonosovites.ru/failed-payment",

        receipt: {
          items: [
            //товарные позиции
            {
              label: `Курс ${arrCourse[month][currentPrice]}`, //наименование товара
              price: currentPrice, //цена
              quantity: 1.0, //количество
              amount: currentPrice, //сумма
              vat: 0, //ставка НДС
              method: 0, // тег-1214 признак способа расчета - признак способа расчета
              object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
              measurementUnit: "шт", //единица измерения
            },
          ],
        },
        cryptogramMode: false,
      })
      .then((result) => {
        // Объект типа WidgetResult
        console.log("result", result);
      });
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
                    action="https://lomonosovites.ru/mailSummer.php"
                    className="px-2.5 pb-2.5 "
                  >
                    <div className="w-full md:me-3 ">
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
                        className=" border text-md mb-1  border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200  text-gray-700   placeholder-gray-500 "
                        placeholder="Иванов Иван"
                        required
                      />{" "}
                      <input type="hidden" name="zf" value={zsta} />
                      <input type="hidden" name="data1Id" value={currentUrl} />
                    </div>
                    <div className="w-full md:me-3 ">
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
                          changePhone();
                        }}
                        className=" border text-md border-gray-300 mb-2  px-3 py-3  text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-200     placeholder-gray-500 "
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

                    <div className="grid sm:grid-cols-2 my-3">
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
      <div className="mx-auto xl:max-w-5xl px-4 md:px-12 robotoMonoRegular">
        <div custom={1} className="text-center  text-5xl font-bold play  mb-8">
          Стоимость занятий
        </div>
        <div className="grid grid-rows-5  md:grid-rows-3 grid-cols-1 md:grid-cols-2 gap-5">
          <div
            custom={2}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(15600);
            }}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">12</div> часов
            </div>
            <div
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(15600);
              }}
              className="  text-3xl hg-nums-serv  mb-3.5 items-end flex  pt-2.5 ms-4 lg:ms-16"
            >
              15600<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>
          <div
            custom={3}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(30000);
            }}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">24</div> часа
            </div>
            <div
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(30000);
              }}
              className="  text-3xl hg-nums-serv  mb-3.5 text-center flex items-end pt-2.5 ms-4 lg:ms-16"
            >
              30000<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>{" "}
          <div
            custom={4}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(58000);
            }}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">36</div> часов
            </div>
            <div
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(58000);
              }}
              className="  text-3xl hg-nums-serv  mb-3.5 text-center flex items-end pt-2.5 ms-4 lg:ms-16"
            >
              58000<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>{" "}
          <div
            custom={5}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(80000);
            }}
            className="flex items-end justify-between  border pe-5 rounded-xl border-gray-300 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="w-28 h-28 bg-amber-400  rounded-xl text-center flex flex-col items-center justify-center">
              <div className="text-5xl">72</div> часа
            </div>
            <div
              onClick={() => {
                setIsOpen(true);
                setCurrentPrice(80000);
              }}
              className="  text-3xl hg-nums-serv  mb-3.5 text-center flex items-end pt-2.5 ms-4 lg:ms-16"
            >
              80000<span className="text-base ms-1.5"> руб</span>
            </div>
          </div>{" "}
          <div
            custom={6}
            onClick={() => {
              setIsOpen(true);
              setCurrentPrice(0);
            }}
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
      24400: " 2 месяца 1 предмет",
      43700: " 2 месяца 2 предмета",
      63900: " 2 месяца 3 предмета",
      79900: " 2 месяца 4 предмета",
    },
  };

  function chengeValue() {
    setValue(event.target.value);
    // console.log(value);
  }
  function PayFunc() {
    let externalIdInMySystem = `${new Date().getUTCFullYear()}.${new Date().getUTCMonth()}.${new Date().getUTCDate()};${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;
    console.log(externalIdInMySystem);
    console.log(currentPrice);

    console.log(arrCourse[month][currentPrice]);
    var payments = new cp.CloudPayments({
      email: "",
      cryptogramMode: false,
      yandexPaySupport: false,
      applePaySupport: false,
      googlePaySupport: false,
      masterPassSupport: false,
      tinkoffInstallmentSupport: false,
    });

    payments.oncomplete = (result) => {
      console.log("result", result);
    };

    payments
      .pay("charge", {
        // options
        publicId: "pk_1e7fa51c02677380a7397ba078f3b",
        paymentSchema: "Single",
        description: `Курсы lomonosovites.ru${arrCourse[month][currentPrice]} Клиент ${PeopleName} ${PeoplePhone}`,
        restrictedPaymentMethods: [
          TinkoffPay,
          Dolyame,
          // список отключенных для данной оплаты методов
        ],
        externalId: externalIdInMySystem,

        amount: currentPrice,
        currency: "RUB",

        receiptEmail: "a.d.nagornyy@gmail.com",
        emailBehavior: "Required",
        skin: "minimal",
        userInfo: {
          customField: {
            name: "Курс",
            value: "arrCourse[month][currentPrice]",
          },
          firstName: PeopleName,
          phone: PeoplePhone,
        },
        successRedirectUrl: "https://lomonosovites.ru/successful-payment>",
        failRedirectUrl: "https://lomonosovites.ru/failed-payment",

        receipt: {
          items: [
            //товарные позиции
            {
              label: `Курс ${arrCourse[month][currentPrice]}`, //наименование товара
              price: currentPrice, //цена
              quantity: 1.0, //количество
              amount: currentPrice, //сумма
              vat: 0, //ставка НДС
              method: 0, // тег-1214 признак способа расчета - признак способа расчета
              object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
              measurementUnit: "шт", //единица измерения
            },
          ],
        },
        cryptogramMode: false,
      })
      .then((result) => {
        // Объект типа WidgetResult
        console.log("result", result);
      });
  }

  function calcPrice(m) {
    if (m == 1) {
      setCurrentPrice(19250);
    } else if (m == 2) {
      setCurrentPrice(36600);
    } else if (m == 3) {
      setCurrentPrice(51900);
    } else if (m == 4) {
      setCurrentPrice(24400);
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
              {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
              {month == 3 ? "занятия" : ""}&#47;предмет
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
              setCurrentPrice(24400);
            }}
            className="xl:hidden flex flex-col pt-10 pb-6 mb-6 rounded-3xl  px-14 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center "
          >
            <div className="text-8xl  ">18</div>
            <div className="text-base pb-2.5">
              {" "}
              {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
              {month == 3 ? "занятия" : ""}&#47;предмет
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
                    setCurrentPrice(24400);
                  }}
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
                    setCurrentPrice(24400);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200 text-xl sm:text-3xl   mb-3.5  flex items-center pt-2.5 "
                >
                  5%{" "}
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
                    setCurrentPrice(24400);
                  }}
                  className="cursor-pointer hover:scale-110 duration-200  sm:text-3xl   mb-3.5 flex items-center pt-2.5  "
                >
                  1900 <span className="text-base ms-1.5"> руб</span>
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
                {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
                {month == 3 ? "занятия" : ""}&#47;предмет
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
                setCurrentPrice(24400);
              }}
              className=" hidden xl:flex  flex-col pt-8 pb-6 rounded-3xl  px-10 h-full cursor-pointer hover:scale-105 duration-200 hover:bg-amber-300  bg-amber-400  w-full justify-center text-center items-center ms-6"
            >
              <div className="text-3xl  ">18</div>
              <div className="text-base pb-2.5">
                {" "}
                {month == 1 || month == 2 || month == 4 ? "занятий" : ""}
                {month == 3 ? "занятия" : ""}&#47;предмет
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
