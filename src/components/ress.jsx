import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Teacher from "./Teacher";
function SliderTeacher() {
  const textAnim = {
    hidden: {
      // y: -200,
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom) => ({
      // y: 0,
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  const textYAnim = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,

      transition: { type: "easyOut", duration: 0.6 },
    }),
  };
  let [teachers4, setTeachers4] = useState([
    {
      src: "/img/teachers/1.webp",
      name: "Миров Юрий Алексеевич",
      lesson: "Химия",
      text: "Научный сотрудник МГУ, президент ассоциации психологов в сфере онкологических заболеваний",
    },
    {
      alt: "img 1",
      src: "/img/teachers/4.webp",
      name: "Ябчанка Юлия Сергеевна ",
      lesson: "Обществознание ",
      text: "Победитель Всероссийской Олимпиады школьников, преподаватель ВШЭ",
    },
    {
      alt: "img 1",
      src: "/img/teachers/10.webp",
      name: "Павлова Елена Анатольевна",
      lesson: "Математика",
      text: "Эксперт ЕГЭ. Преподаватель ВШЭ",
    },
    {
      alt: "img 1",
      src: "/img/teachers/9.webp",
      name: "Кашапов Раиль Наилевич",
      lesson: "Математика, Обществознание",
      text: "Эксперт ЕГЭ, составитель заданий ЕГЭ, основатель образовательного центра, создатель собственной методики преподавания",
    },

    {
      src: "/img/teachers/6.webp",
      name: "Кузнецов Дмитрий Владимирович ",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Преподаватель Филологического факультета МГУ",
    },
    {
      alt: "img 1",
      src: "/img/teachers/14.webp",
      name: "Калинин Александр Владимирович ",
      lesson: "Математика, Физика",
      text: "ВМК МГУ, 40-летний стаж преподавания, подготовка к олимпиадам любого уровня",
    },
    {
      src: "/img/teachers/3.webp",
      name: "Коваль Светлана Николаевна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Преподаватель филологического факультета СПбГУ",
    },
    {
      alt: "img 1",
      src: "/img/teachers/13.webp",
      name: "Вахромова Яна Игоревна ",
      lesson: "Русский язык, Английский язык, Литература ",
      text: "Филологический факультет МГУ, победитель многочисленных Ломоносовских олимпиад",
    },

    {
      alt: "img 1",
      src: "/img/teachers/12.webp",
      name: "Тенякова Анна Михайловна",
      lesson: "Русский язык ",
      text: "РГГУ филология, стаж преподавания 5 лет",
    },
    {
      alt: "img 1",
      src: "/img/teachers/7.webp",
      name: "Погребенкова Анна Юрьевна ",
      lesson: "Английский язык",
      text: "Преподаватель Высшей школы переводов МГУ",
    },
    {
      alt: "img 1",
      src: "/img/teachers/18.webp",
      name: "Валова Анна Александровна",
      lesson: "Русский Язык, Литература ",
      text: "Разработчик собственных методик преподавания , научное сотрудник вуза",
    },

    {
      src: "/img/teachers/11.webp",
      name: "София Волкова",
      lesson: "Обществознание",
      text: "МГУ, Юридический факультет",
    },
    {
      alt: "img 1",
      src: "/img/teachers/16.webp",
      name: "Соловьев Петр Алексеевич ",
      lesson: "Информатика",
      text: "Факультет вычислительной математики и кибернетики МГУ",
    },
    {
      alt: "img 1",
      src: "/img/teachers/19.webp",
      name: "Максим Евгеньевич",
      lesson: "Математика, Физика",
      text: "Главный методист по олимпиадной математике",
    },

    {
      alt: "img 1",
      src: "/img/teachers/5.webp",
      name: "Макаров Алексей Николаевич ",
      lesson: "Биология, История ",
      text: "Кандидат Биологических наук, преподаватель МГУ, кафедра прикладной биотехнологии",
    },
    {
      alt: "img 1",
      src: "/img/teachers/2.webp",
      name: "Марвин Артур Радикович ",
      lesson: "Математика ",
      text: "Преподаватель высшей математики механико-математического факультета МГУ",
    },
    {
      alt: "img 1",
      src: "/img/teachers/15.webp",
      name: "Арзигуль Александровна Шах",
      lesson: "Математика, Информатика",
      text: "Кандидат физико-математических наук, имеет более 300+ положительных отзывов",
    },
    {
      alt: "img 1",
      src: "/img/teachers/17.webp",
      name: "Шишаков Виталий Владимирович",
      lesson: "Физика",
      text: "Преподаватель физического факультета МГУ с 2005-го года",
    },
  ]);

  let currentArrCourses4 = [];

  for (let i = 0; i < Math.floor(teachers4.length / 4) * 4; i += 4) {
    let arrCursesStack4 = teachers4.slice(i, i + 4);
    currentArrCourses4.push(arrCursesStack4);
  }
  const last4 = [];
  if (teachers4.length % 4 == 1) {
    last4.push([]);
    last4[0].push(teachers4[teachers4.length - 1]);
    teachers4.pop();
  } else if (teachers4.length % 4 == 2) {
    last4.push([]);
    last4[0].push(teachers4[teachers4.length - 2]);
    last4[0].push(teachers4[teachers4.length - 1]);
    teachers4.pop();
    teachers4.pop();
  } else if (teachers4.length % 4 == 3) {
    last4.push([]);
    last4[0].push(teachers4[teachers4.length - 3]);
    last4[0].push(teachers4[teachers4.length - 2]);
    last4[0].push(teachers4[teachers4.length - 1]);
    teachers4.pop();
    teachers4.pop();
    teachers4.pop();
  }
  let [finalCourses4, setFinalCourses4] = useState(
    currentArrCourses4.concat(last4)
  );
  return (
    <div className="bg-amber-100 border-b-2 border-white text-slate-900  py-20">
      <motion.div
        custom={3}
        variants={textYAnim}
        className="flex items-center  justify-center px-3  2xl:px-40"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper py-10    "
        >
          {finalCourses4.map((feed) => (
            <SwiperSlide
              key={finalCourses4.indexOf(feed)}
              className="grid grid-cols-2  grid-rows-2 place-items-center"
            >
              {feed.map((e) => (
                <div className="flex  align-top h-full">
                  <Teacher
                    name={e.name}
                    text={e.text}
                    lesson={e.lesson}
                    src={e.src}
                  />
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default SliderTeacher;
