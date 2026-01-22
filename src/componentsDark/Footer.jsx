import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Footer() {
  const textAnim = {
    hidden: {
      // y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
  const textYsAnim = {
    hidden: {
      // y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
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

  const textXsAnim = {
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
  return (
    <footer
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
      id="contacts"
      className="bg-rich-black "
    >
      <div className="mx-auto px-6 p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between">
          <div className="grid  grid-rows-4 gridl  md:grid-cols-2 md:grid-rows-2 gap-4 lg:gap-6 lg:grid-cols-3">
            <div className="me-0 col-span-3 md:col-span-1">
              <h2
                custom={1}
                variants={textAnim}
                className="mb-8 text-sm font-semibold  uppercase text-white"
              >
                Контакты
              </h2>
              <a href="tel:84954813825" custom={2} variants={textAnim}>
                <FontAwesomeIcon
                  className="hover:scale-125 duration-200 text-4xl me-2 p-2  text-white "
                  icon={faPhone}
                />
              </a>{" "}
              <a href="https://t.me/MSU_2024" custom={3} variants={textAnim}>
                <FontAwesomeIcon
                  className="hover:scale-125 duration-200 text-4xl me-2 p-2  text-white  "
                  icon={faTelegram}
                />
              </a>{" "}
              <a
                href="https://wa.me/79173766364"
                custom={4}
                variants={textAnim}
              >
                <FontAwesomeIcon
                  className="hover:scale-125 duration-200 text-4xl me-2 p-2  text-white "
                  icon={faWhatsapp}
                />
              </a>
              <a
                href="mailto:olomonosovtsy@mail.ru"
                custom={4}
                variants={textAnim}
              >
                <FontAwesomeIcon
                  className=" hover:scale-125 duration-200 text-4xl me-2 p-2  text-white  "
                  icon={faEnvelope}
                />
              </a>
            </div>
            <div className="col-span-3 md:col-span-1">
              <h2
                custom={2.5}
                variants={textAnim}
                className="mb-6  text-sm font-semibold  uppercase text-white"
              >
                Реквизиты
              </h2>
              <ul className="text-gray-400 font-medium">
                <li custom={3.5} variants={textAnim} className="mb-4">
                  <span>ИНН 022503946016</span>
                </li>
                <li custom={4.5} variants={textAnim}>
                  <span>ОГРНИП 323028000209330</span>
                </li>
              </ul>
            </div>
            <div className="lg:ms-4 col-span-3 md:col-span-1 hidden md:block">
              <h2
                custom={3}
                variants={textAnim}
                className="mb-6 text-sm font-semibold  uppercase text-white"
              >
                Доп. ссылки
              </h2>
              <ul className="text-gray-400 font-medium">
                <li custom={4} variants={textAnim} className="mb-4">
                  <a
                    href="https://t.me/+fqM5SKYoeNQwZDEy"
                    className="hover:underline "
                  >
                    Наш телеграмм канал{" "}
                  </a>
                </li>
                <li custom={5} variants={textAnim}>
                  <a
                    href="https://vk.com/lomonosovites"
                    className="hover:underline"
                  >
                    Группа в VK
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-3 hid-par ">
              <h2
                custom={3}
                variants={textXsAnim}
                className="mb-6 text-sm font-semibold  uppercase text-white"
              >
                Партнеры
              </h2>
              <div className="flex flex-sk">
                <div custom={4} variants={textYsAnim} className="h-14 me-6">
                  <img
                    className="h-14 hover:scale-110 duration-200 rounded-full bg-white p-1"
                    src="/img/university/mgu.webp"
                    alt="МГУ"
                  />
                </div>
                <div custom={5} variants={textYsAnim} className="h-14 me-6">
                  <img
                    className="h-14 hover:scale-110 duration-200"
                    src="/img/icons/sk.webp"
                    alt="Сколково"
                  />
                </div>
                <div custom={6} variants={textYsAnim} className="h-14 me-6">
                  <img
                    className="h-14 hover:scale-110 duration-200 rounded-full"
                    src="/img/icons/resh.webp"
                    alt="Решу ЕГЭ"
                  />
                </div>
                <div custom={7} variants={textYsAnim} className="h-14 me-6">
                  <img
                    className="h-14 hover:scale-110 duration-200 rounded-full"
                    src="/img/icons/veh.webp"
                    alt="Высшая школа экономики"
                  />
                </div>
                <div custom={8} variants={textYsAnim} className="h-14 me-6">
                  <img
                    className="h-14 hover:scale-110 duration-200"
                    src="/img/icons/ec.webp"
                    alt="Экономический факультет"
                  />
                </div>
              </div>
            </div>

            {/* <div className="lg:ms-4 col-span-3 md:col-span-1  md:hidden">
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Каналы
              </h2>
              <div className="text-gray-400  font-medium  ">
                <div className="">
                  <a className="hover:underline ">
                    Наш телеграмм канал Ломоносовцы
                  </a>
                </div>
              </div>
            </div> */}
            <div className="lg:ms-4 col-span-3 md:col-span-1  md:hidden">
              <h2
                custom={3}
                variants={textAnim}
                className="mb-6 text-sm font-semibold  uppercase text-white"
              >
                Доп. ссылки
              </h2>
              <ul className="text-gray-400 font-medium">
                <li custom={4} variants={textAnim} className="mb-4">
                  <a
                    href="https://t.me/+fqM5SKYoeNQwZDEy"
                    className="hover:underline "
                  >
                    Наш телеграмм канал{" "}
                  </a>
                </li>
                <li custom={5} variants={textAnim}>
                  <a
                    href="https://vk.com/lomonosovites"
                    className="hover:underline"
                  >
                    Группа в VK
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0 ">
            <a
              custom={2}
              variants={textXAnim}
              href="https://3dweb-studio.ru"
              className="text-decoration-none"
            >
              <div className="d-flex align-items-center justify-content-center ">
                <span className=" mb-md-0  text-gray-200  pb-2 play">
                  <h5 className="text-footer duration-300 lg:text-center mt-5 ps-3 lg:mt-0 lg:ps-0.5 hover:scale-110 duration-200">
                    <b>Разработано в </b>
                  </h5>
                </span>
              </div>
              <img
                src="./img/3Dweb.webp"
                className="myweb hover:scale-110 duration-200 duration-300 mt-3"
                alt="3dWeb"
              />
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span
            variants={textXsAnim}
            custom={9}
            className="text-sm text-gray-400 sm:text-center  "
          >
            © 2018 - 2024 <span className="play">Ломоносовцы</span>
          </span>
          <div
            variants={textXAnim}
            custom={9}
            className="flex mt-4 sm:justify-center  text-gray-400 sm:mt-0"
          >
            <a href="tel:84954813825" className="play  hover:underline">
              8 495 481 38 25
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
