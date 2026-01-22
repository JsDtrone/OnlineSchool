import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Price, { PriceOnline } from "./Price";
import { motion } from "framer-motion";

export default function FirstPage() {
  const navigation = [
    { name: "О нас", href: "#aboutUs", click: () => setMobileMenuOpen(false) },
    {
      name: "Почему мы?",
      href: "#benefits",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Курсы",
      href: "#services",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Цены",
      href: "#prices",
      click: () => {
        setMobileMenuOpen(false);
        setIsOpenType(true);
      },
    },
    { name: "Отзывы", href: "#reviews", click: () => setMobileMenuOpen(false) },
    { name: "FAQ", href: "#FAQ", click: () => setMobileMenuOpen(false) },
    {
      name: "Адрес",
      href: "#addresses",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Контакты",
      href: "#contacts",
      click: () => setMobileMenuOpen(false),
    },
    {
      name: "Расписание",
      href: "/timetable",
      click: () => setMobileMenuOpen(false),
    },
  ];
  const textAnim = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.6, duration: 0.2 },
    }),
  };
  const ImgAnim = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: 0.6, duration: 0.2 },
    }),
  };
  const TAnim = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const NaviAni = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
  const NavAni = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let [isOpenType, setIsOpenType] = useState(false);

  let [isOpenOchnoe, setIsOpenOchnoe] = useState(false);
  let [isOpenOnline, setIsOpenOnline] = useState(false);
  let [buttons, setbuttons] = useState(true);

  return (
    <div className="bg-ash-gray ">
      <header
        viewport={{ amount: 0.1, once: true }}
        whileInView="visible"
        initial="hidden"
        className="fixed w-full bg-platinum inset-x-0 top-0 z-30 shadow-lg"
      >
        <nav
          className="flex items-center justify-between px-6 p-3 lg:px-8"
          aria-label="Global"
        >
          <div custom={1} variants={NaviAni} className="flex lg:flex-1 me-4">
            <a href="#" className="-m-1.5 px-1.5 pt-1.5 ms-3">
              <div className="flex flex-col ">
                <span className="naming">Ломоносовцы</span>
                <span className="-mt-2 text-sm text-end mb-2">
                  Твое поступление-наша забота
                </span>
              </div>
            </a>
          </div>
          <div className="flex 2xl:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden 2xl:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                custom={navigation.indexOf(item) + 1}
                variants={NavAni}
                onClick={item.click}
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 duration-150 hover:text-zinc-500"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden 2xl:flex flex-col 2xl:flex-1 2xl:justify-end ms-4">
            <a
              custom={11}
              variants={NaviAni}
              href="tel:84954813825"
              className=" leading-6 mb-2 font-bold  text-gray-900 text-end text-lg hover:text-gray-600  ease-in-out duration-200 cursor-pointer "
            >
              <div className="">8 495 481 38 25</div>
            </a>
            <a
              custom={11}
              variants={NaviAni}
              href="tel:89173766364"
              className="  leading-6 font-bold text-gray-900 text-end text-lg hover:text-gray-600 ease-in-out duration-200 cursor-pointer "
            >
              <div className="mb-1">8 917 376 63 64</div>
            </a>
          </div>
        </nav>

        <Dialog
          as="div"
          className="2xl:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed    inset-y-0 right-0 z-50  w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex h-full flex-col">
              <div className="">
                {" "}
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="naming">Ломоносовцы</span>
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div
                  viewport={{ amount: 0.1, once: true }}
                  whileInView="visible"
                  initial="hidden"
                  className="mt-6 flow-root"
                >
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          custom={navigation.indexOf(item) + 1}
                          variants={TAnim}
                          onClick={item.click}
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-full   justify-end flex-col">
                <div className="">
                  <a
                    custom={11}
                    variants={NaviAni}
                    href="tel:84954813825"
                    className=" leading-6  font-bold text-start   text-gray-900  text-lg hover:text-gray-600  ease-in-out duration-200 cursor-pointer "
                  >
                    <div className="mb-2">8 495 481 38 25</div>
                  </a>
                  <a
                    custom={11}
                    variants={NaviAni}
                    href="tel:89173766364"
                    className="  leading-6 font-bold text-start text-gray-900  text-lg hover:text-gray-600 ease-in-out duration-200 cursor-pointer "
                  >
                    <div className="mb-1">8 917 376 63 64</div>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Dialog
        open={isOpenType}
        onClose={() => {
          setIsOpenType(false);
          setMobileMenuOpen(false);
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className=" inset-0 flex w-screen max-h-dvh bg-blur  items-center justify-center ">
              <Dialog.Panel className="   rounded-xl bg-slate-200 px-4 sm:p-5">
                <div className=" w-full duration-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpenType(false);
                    }}
                    className="text-gray-400 bg-transparent hover:scale-125 duration-200  mt-4 hover:bg-gray-200   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 "
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
                  {buttons && (
                    <div className="text-center  duration-200  text-3xl font-bold play  ">
                      Выберете тип занятий
                      <div className="flex justify-around mt-8">
                        <button
                          onClick={() => {
                            setbuttons(false);
                            setMobileMenuOpen(false);
                            setIsOpenOchnoe(true);
                            setIsOpenOnline(false);
                          }}
                          className="mb-6 py-4 cursor-pointer drop-shadow-xl btn-tp px-6 m-2 hover:scale-110 duration-200 ease-in rounded-lg bg-slate-400"
                        >
                          Очные
                        </button>
                        <button
                          onClick={() => {
                            setbuttons(false);
                            setMobileMenuOpen(false);
                            setIsOpenOchnoe(false);
                            setIsOpenOnline(true);
                          }}
                          className="mb-6 py-4  cursor-pointer  drop-shadow-xl   btn-tp   px-6 m-2 hover:scale-110 duration-200 ease-in rounded-lg bg-slate-400"
                        >
                          Онлайн
                        </button>
                      </div>
                    </div>
                  )}
                  {isOpenOchnoe && (
                    <>
                      <Price />
                    </>
                  )}
                  {isOpenOnline && (
                    <>
                      <PriceOnline />
                    </>
                  )}
                  {(isOpenOchnoe || isOpenOnline) && (
                    <div className=" w-full flex justify-end">
                      <button
                        onClick={() => {
                          setbuttons(true);
                          setIsOpenOchnoe(false);
                          setMobileMenuOpen(false);
                          setIsOpenOnline(false);
                        }}
                        type="button"
                        className="text-gray-900 m-0 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        Назад к выбору
                      </button>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
      <div
        viewport={{ amount: 0.1, once: true }}
        whileInVi
        text-centerew="visible"
        initial="hidden"
        className="w-full   "
      >
        <div className="text-white flex  min-h-screen bg-mgu py-16 justify-center flex-col items-center pt-36  px-8  ">
          <div className="">
            <h1 className="naming text-4xl md:text-5xl text-center mb-10">
              {" "}
              Очные и онлайн курсы подготовки к ОГЭ{" "}
              <br className=" hidden lg:block" />и ЕГЭ при МГУ имени М.В.
              Ломоносова
            </h1>
          </div>
          <div className="pb-8">
            <h2 className="naming text-3xl text-center">
              Ломоносовцы : от выбора университета до результата
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div
viewport={{ amount: 0.1, once: true }}
whileInView="visible"
initial="hidden"
className="w-full  "
>
<div className=" pt-10    xl:ps-0 flex flex-col justify-center xl:flex-row">
  <div className="flex  xl:w-1/2 items-center justify-center  xl:justify-end  ">
    <div className="xl:w-2/3 pt-20 pb-10 ps-6 pe-12">
      <div className="mb-10">
        {" "}
        <h1
          variants={textAnim}
          custom={1}
          className="text-6xl text-center md:text-left  naming mb-4 "
        >
          Подготовка <br /> к ЕГЭ/ОГЭ
        </h1>
        <h3
          variants={textAnim}
          custom={1.2}
          className="text-2xl text-center md:text-left naming"
        >
          Ломоносовцы: от выбора
          <br /> университета до результата
        </h3>
      </div>
    </div>
  </div>
  <div className=" xl:w-1/2">
    <img className="img-rep w-full" src="img/mguBg.jpg" alt="" />
  </div>
</div>
</div> */
}
