import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Navigate } from "react-router-dom";

export default function PriceDvi() {
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

  function chengeValue() {
    setValue(event.target.value);
  }

  const widget = new cp.CloudPayments();
  const launchWidget = () => {
    const intentParams = {
      publicTerminalId: "hide",

      paymentSchema: "Single",
      description: `Курсы ДВИ lomonosovites.ru  Клиент ${PeopleName} ${PeoplePhone}`,

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
