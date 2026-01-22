import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Form from "./Form";

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
  let [teachers, setTeachers] = useState([
    {
      alt: "img 25",
      src: "/img/teachers/25.webp",
      name: "Михаил Владимирович  ",
      lesson: "История, обществознание ",
      text: "Исторический факультет МГУ, кандидат исторических наук",
    },
    {
      alt: "img 27",
      src: "/img/teachers/27.webp",
      name: "Зарубин Юрий Дмитриевич ",
      lesson: "Физика",
      text: "Механико-Математический факультет МГУ. Старший преподаватель, методист",
    },
    {
      alt: "img 34",
      src: "/img/teachers/34.webp",
      name: "Харитонов Матвей Ильич",
      lesson: "Информатика",
      text: "Автор научных статей, публикуемых в Scopus и ВАК",
    },
    {
      alt: "img 28",
      src: "/img/teachers/28.webp",
      name: "Николай Николаевич",
      lesson: "Математика ",
      text: "Эксперт ЕГЭ. ВМК МГУ. Старший преподаватель, методист",
    },

    {
      alt: "img 33",
      src: "/img/teachers/33.webp",
      name: "Марианна Михайловна Товмасян",
      lesson: "Английский язык",
      text: "Мотивационный спикер в США в West Colorado University, Победитель #1 в России в Международном конкурсе речей на английском в Toastmasters International",
    },

    {
      alt: "img 1",
      src: "/img/teachers/1.webp",
      name: "Миров Юрий Алексеевич",
      lesson: "Химия",
      text: "Научный сотрудник МГУ. Президент ассоциации психологов в сфере онкологических заболеваний",
    },

    {
      alt: "img 9",
      src: "/img/teachers/9.webp",
      name: "Кашапов Раиль Наилевич",
      lesson: "Математика, Обществознание",
      text: "Эксперт ЕГЭ. Составитель заданий ЕГЭ, экономический факультет МГУ, основатель образовательного центра, создатель собственной методики преподавания",
    },
    {
      alt: "img 14",
      src: "/img/teachers/14.webp",
      name: "Калинин Александр Владимирович ",
      lesson: "Математика, Физика",
      text: "ВМК МГУ, 40-летний стаж преподавания, подготовка к олимпиадам любого уровня",
    },
    {
      alt: "img 10",
      src: "/img/teachers/10.webp",
      name: "Павлова Елена Анатольевна",
      lesson: "Математика",
      text: "Эксперт ЕГЭ. Высшая школа экономики",
    },
    {
      alt: "img 24",
      src: "/img/teachers/24.webp",
      name: "Воронкова Диана Вадимовна",
      lesson: "Русский язык, Литература",
      text: "Филологический факультет МГУ. 100 баллов ЕГЭ по литературе",
    },

    {
      alt: "img 18",
      src: "/img/teachers/18.webp",
      name: "Валова Анна Александровна",
      lesson: "Русский Язык, Литература ",
      text: "Разработчик собственных методик преподавания, методист",
    },
    {
      alt: "img 7",
      src: "/img/teachers/7.webp",
      name: "Погребенкова Анна Юрьевна ",
      lesson: "Английский язык",
      text: "Высшая школа переводов МГУ",
    },
    {
      alt: "img 20",
      src: "/img/teachers/20.webp",
      name: "Ирина Викторовна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Филологический факультет МГУ",
    },
    {
      alt: "img 3",
      src: "/img/teachers/3.webp",
      name: "Коваль Светлана Николаевна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Филологический факультет СПбГУ",
    },

    {
      alt: "img 29",
      src: "/img/teachers/29.webp",
      name: "Амирханян Роман Аркадиевич",
      lesson: "Обществознание ",
      text: "Юридический факультет МГУ. Тренер по подготовке к ВСОШ по праву",
    },
    {
      alt: "img 31",
      src: "/img/teachers/31.webp",
      name: "Пирогова Елена Сергеевна",
      lesson: "География",
      text: "Эксперт ОГЭ и ЕГЭ",
    },

    {
      alt: "img 5",
      src: "/img/teachers/5.webp",
      name: "Макаров Алексей Николаевич ",
      lesson: "Биология, История ",
      text: "Кандидат Биологических наук, кафедра прикладной биотехнологии МГУ",
    },
    {
      alt: "img 6",
      src: "/img/teachers/6.webp",
      name: "Кузнецов Дмитрий Владимирович ",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Филологическеский факультет МГУ",
    },

    {
      alt: "img 15",
      src: "/img/teachers/15.webp",
      name: "Арзигуль Александровна Шах",
      lesson: "Математика, Информатика",
      text: "Кандидат физико-математических наук, имеет более 300 положительных отзывов",
    },
    {
      alt: "img 17",
      src: "/img/teachers/17.webp",
      name: "Шишаков Виталий Владимирович",
      lesson: "Физика",
      text: "Физический факультет МГУ с 2005-го года",
    },
    {
      alt: "img 16",
      src: "/img/teachers/16.webp",
      name: "Соловьев Петр Алексеевич ",
      lesson: "Информатика, Химия",
      text: "Факультет вычислительной математики и кибернетики МГУ",
    },
    {
      alt: "img 19",
      src: "/img/teachers/19.webp",
      name: "Максим Евгеньевич",
      lesson: "Математика, Физика",
      text: "Главный методист по олимпиадной математике",
    },

    {
      alt: "img 23",
      src: "/img/teachers/23.webp",
      name: "Денисов Александр Юрьевич ",
      lesson: "Литература",
      text: "Филологический факультет МГУ. Научный сотрудник отдела «Дом-музей А.П. Чехова»",
    },
    {
      alt: "img 2",
      src: "/img/teachers/2.webp",
      name: "Маврин Артур Радикович ",
      lesson: "Математика ",
      text: "Высшая математика механико-математического факультета МГУ. Победитель международных студенческих Олимпиад",
    },
    {
      alt: "img 22",
      src: "/img/teachers/22.webp",
      name: "Мария Михайловна ",
      lesson: "Химия",
      text: "Факультет биоинженерии МГУ. Призёр очного и заочного туров олимпиады «ЯПрофессионал» по направлениям «неорганическая химия», «физическая химия», «биотехнология»",
    },

    {
      alt: "img 30",
      src: "/img/teachers/30.webp",
      name: "Омельчук Даниил Давидович",
      lesson: "Химия, Биология ",
      text: "Факультет Лечебное дело РНИМУ им. Н.И. Пирогова. Ординатура в НМИЦ Эндокринологии Минздрава. Врач-эндокринолог",
    },
    {
      alt: "img 13",
      src: "/img/teachers/13.webp",
      name: "Вахромова Яна Игоревна ",
      lesson: "Русский язык, Английский язык, Литература ",
      text: "Филологический факультет МГУ. победитель многочисленных Ломоносовских олимпиад",
    },

    {
      alt: "img 32",
      src: "/img/teachers/32.webp",
      name: "Афанасьев Максим Сергеевич",
      lesson: "Математика, Физика",
      text: "Факультет фундаментальных  наук МГТУ им. Н.Э. Баумана. Имеет научные статьи в области физики высокотемпературных процессов",
    },

    {
      alt: "img 38",
      src: "/img/teachers/38.webp",
      name: "Василевич Ирина Анатольевна",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Подготовка к IELTS, TOELF, BEC",
    },

    {
      alt: "img 42",
      src: "/img/teachers/42.webp",
      name: "Олег Дмитриевич",
      lesson: "География",
      text: "Географический факультет МГУ",
    },
    {
      alt: "img 39",
      src: "/img/teachers/39.webp",
      name: "Иван Михайлович",
      lesson: "ДВИ Химия",
      text: "Химический факультет МГУ",
    },
    {
      alt: "img 37",
      src: "/img/teachers/37.webp",
      name: "Журавлев Никита Алексеевич",
      lesson: "ДВИ Журналистика",
      text: "Факультет журналистики МГУ. Победитель олимпиады 'Ломоносов'",
    },

    {
      alt: "img 40",
      src: "/img/teachers/40.webp",
      name: "Андрей Скороходов",
      lesson: "История, Обществознание ",
      text: "Философский факультет МГУ, более 13 лет преподавания и авторства. Эксперт в СМИ и на конференциях.",
    },
    {
      alt: "img 36",
      src: "/img/teachers/36.webp",
      name: "Горбачева Карина Ирековна",
      lesson: "Русский язык",
      text: "Факультет политологии МГУ. Специалист-эксперт в сфере общего образования",
    },
    {
      alt: "img 35",
      src: "/img/teachers/35.webp",
      name: "Анна Львовна",
      lesson:
        "Английский язык, репетитор основных школьных предметов для начальных классов",
      text: "Педагогический факультет МГЛУ, более 18 лет преподавания",
    },

    {
      alt: "img 41",
      src: "/img/teachers/41.webp",
      name: "Евдошенко Алексей Александрович",
      lesson: "Информатика",
      text: "Эксперт ЕГЭ, более 14 лет преподавания",
    },
  ]);
  const rew = teachers;
  let currentArrCourses = [];

  for (let i = 0; i < Math.floor(teachers.length / 4) * 4; i += 4) {
    let arrCursesStack = teachers.slice(i, i + 4);
    currentArrCourses.push(arrCursesStack);
  }
  const last = [];
  if (teachers.length % 4 == 1) {
    last.push([]);
    last[0].push(teachers[teachers.length - 1]);
    teachers.pop();
  } else if (teachers.length % 4 == 2) {
    last.push([]);
    last[0].push(teachers[teachers.length - 2]);
    last[0].push(teachers[teachers.length - 1]);
    teachers.pop();
    teachers.pop();
  } else if (teachers.length % 4 == 3) {
    last.push([]);
    last[0].push(teachers[teachers.length - 3]);
    last[0].push(teachers[teachers.length - 2]);
    last[0].push(teachers[teachers.length - 1]);
    teachers.pop();
    teachers.pop();
    teachers.pop();
  }
  let [finalCourses, setFinalCourses] = useState(
    currentArrCourses.concat(last)
  );
  // сетка 3

  let [teachers3, setTeachers3] = useState([
    {
      alt: "img 27",
      src: "/img/teachers/27.webp",
      name: "Зарубин Юрий Дмитриевич ",
      lesson: "Физика",
      text: "Механико-Математический факультет МГУ. Старший преподаватель, методист",
    },
    {
      alt: "img 29",
      src: "/img/teachers/29.webp",
      name: "Амирханян Роман Аркадиевич",
      lesson: "Обществознание ",
      text: "Юридический факультет МГУ. Тренер по подготовке к ВСОШ по праву",
    },
    {
      alt: "img 28",
      src: "/img/teachers/28.webp",
      name: "Николай Николаевич",
      lesson: "Математика ",
      text: "Эксперт ЕГЭ. ВМК МГУ. Старший преподаватель, методист",
    },

    {
      alt: "img 33",
      src: "/img/teachers/33.webp",
      name: "Марианна Михайловна Товмасян",
      lesson: "Английский язык",
      text: "Мотивационный спикер в США в West Colorado University, Победитель #1 в России в Международном конкурсе речей на английском в Toastmasters International",
    },
    {
      alt: "img 1",
      src: "/img/teachers/1.webp",
      name: "Миров Юрий Алексеевич",
      lesson: "Химия",
      text: "Научный сотрудник МГУ. Президент ассоциации психологов в сфере онкологических заболеваний",
    },

    {
      alt: "img 9",
      src: "/img/teachers/9.webp",
      name: "Кашапов Раиль Наилевич",
      lesson: "Математика, Обществознание",
      text: "Эксперт ЕГЭ. Составитель заданий ЕГЭ, экономический факультет МГУ, основатель образовательного центра, создатель собственной методики преподавания",
    },
    {
      alt: "img 24",
      src: "/img/teachers/24.webp",
      name: "Воронкова Диана Вадимовна",
      lesson: "Русский язык, Литература",
      text: "Филологический факультет МГУ. 100 баллов ЕГЭ по литературе",
    },
    {
      alt: "img 18",
      src: "/img/teachers/18.webp",
      name: "Валова Анна Александровна",
      lesson: "Русский Язык, Литература ",
      text: "Разработчик собственных методик преподавания, методист",
    },
    {
      alt: "img 14",
      src: "/img/teachers/14.webp",
      name: "Калинин Александр Владимирович ",
      lesson: "Математика, Физика",
      text: "ВМК МГУ, 40-летний стаж преподавания, подготовка к олимпиадам любого уровня",
    },

    {
      alt: "img 22",
      src: "/img/teachers/22.webp",
      name: "Мария Михайловна ",
      lesson: "Химия",
      text: "Факультет биоинженерии МГУ. Призёр очного и заочного туров олимпиады «ЯПрофессионал» по направлениям «неорганическая химия», «физическая химия», «биотехнология»",
    },
    {
      alt: "img 30",
      src: "/img/teachers/30.webp",
      name: "Омельчук Даниил Давидович",
      lesson: "Химия, Биология ",
      text: "Факультет Лечебное дело РНИМУ им. Н.И. Пирогова. Ординатура в НМИЦ Эндокринологии Минздрава. Врач-эндокринолог",
    },
    {
      alt: "img 13",
      src: "/img/teachers/13.webp",
      name: "Вахромова Яна Игоревна ",
      lesson: "Русский язык, Английский язык, Литература ",
      text: "Филологический факультет МГУ. победитель многочисленных Ломоносовских олимпиад",
    },

    {
      alt: "img 20",
      src: "/img/teachers/20.webp",
      name: "Ирина Викторовна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Филологический факультет МГУ",
    },
    {
      alt: "img 3",
      src: "/img/teachers/3.webp",
      name: "Коваль Светлана Николаевна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Филологический факультет СПбГУ",
    },

    {
      alt: "img 7",
      src: "/img/teachers/7.webp",
      name: "Погребенкова Анна Юрьевна ",
      lesson: "Английский язык",
      text: "Высшая школа переводов МГУ",
    },
    {
      alt: "img 5",
      src: "/img/teachers/5.webp",
      name: "Макаров Алексей Николаевич ",
      lesson: "Биология, История ",
      text: "Кандидат Биологических наук, кафедра прикладной биотехнологии МГУ",
    },

    {
      alt: "img 15",
      src: "/img/teachers/15.webp",
      name: "Арзигуль Александровна Шах",
      lesson: "Математика, Информатика",
      text: "Кандидат физико-математических наук, имеет более 300 положительных отзывов",
    },
    {
      alt: "img 6",
      src: "/img/teachers/6.webp",
      name: "Кузнецов Дмитрий Владимирович ",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Филологическеский факультет МГУ",
    },
    {
      alt: "img 16",
      src: "/img/teachers/16.webp",
      name: "Соловьев Петр Алексеевич ",
      lesson: "Информатика, Химия",
      text: "Факультет вычислительной математики и кибернетики МГУ",
    },
    {
      alt: "img 19",
      src: "/img/teachers/19.webp",
      name: "Максим Евгеньевич",
      lesson: "Математика, Физика",
      text: "Главный методист по олимпиадной математике",
    },

    {
      alt: "img 17",
      src: "/img/teachers/17.webp",
      name: "Шишаков Виталий Владимирович",
      lesson: "Физика",
      text: "Физический факультет МГУ с 2005-го года",
    },
    {
      alt: "img 25",
      src: "/img/teachers/25.webp",
      name: "Михаил Владимирович  ",
      lesson: "История, обществознание ",
      text: "Исторический факультет МГУ, кандидат исторических наук",
    },
    {
      alt: "img 23",
      src: "/img/teachers/23.webp",
      name: "Денисов Александр Юрьевич ",
      lesson: "Литература",
      text: "Филологический факультет МГУ. Научный сотрудник отдела «Дом-музей А.П. Чехова»",
    },

    {
      alt: "img 2",
      src: "/img/teachers/2.webp",
      name: "Маврин Артур Радикович ",
      lesson: "Математика ",
      text: "Высшая математика механико-математического факультета МГУ. Победитель международных студенческих Олимпиад",
    },
    {
      alt: "img 10",
      src: "/img/teachers/10.webp",
      name: "Павлова Елена Анатольевна",
      lesson: "Математика",
      text: "Эксперт ЕГЭ. Высшая школа экономики",
    },
    {
      alt: "img 34",
      src: "/img/teachers/34.webp",
      name: "Харитонов Матвей Ильич",
      lesson: "Информатика",
      text: "Автор научных статей, публикуемых в Scopus и ВАК",
    },
    {
      alt: "img 31",
      src: "/img/teachers/31.webp",
      name: "Пирогова Елена Сергеевна",
      lesson: "География",
      text: "Эксперт ОГЭ и ЕГЭ",
    },
    {
      alt: "img 35",
      src: "/img/teachers/35.webp",
      name: "Анна Львовна",
      lesson:
        "Английский язык, репетитор основных школьных предметов для начальных классов",
      text: "Педагогический факультет МГЛУ, более 18 лет преподавания",
    },

    {
      alt: "img 36",
      src: "/img/teachers/36.webp",
      name: "Горбачева Карина Ирековна",
      lesson: "Русский язык",
      text: "Факультет политологии МГУ. Специалист-эксперт в сфере общего образования",
    },
    {
      alt: "img 32",
      src: "/img/teachers/32.webp",
      name: "Афанасьев Максим Сергеевич",
      lesson: "Математика, Физика",
      text: "Факультет фундаментальных  наук МГТУ им. Н.Э. Баумана. Имеет научные статьи в области физики высокотемпературных процессов",
    },
    {
      alt: "img 40",
      src: "/img/teachers/40.webp",
      name: "Андрей Скороходов",
      lesson: "История, Обществознание ",
      text: "Философский факультет МГУ, более 13 лет преподавания и авторства. Эксперт в СМИ и на конференциях.",
    },
    {
      alt: "img 38",
      src: "/img/teachers/38.webp",
      name: "Василевич Ирина Анатольевна",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Подготовка к IELTS, TOELF, BEC",
    },

    {
      alt: "img 37",
      src: "/img/teachers/37.webp",
      name: "Журавлев Никита Алексеевич",
      lesson: "ДВИ Журналистика",
      text: "Факультет журналистики МГУ. Победитель олимпиады 'Ломоносов'",
    },
    {
      alt: "img 42",
      src: "/img/teachers/42.webp",
      name: "Олег Дмитриевич",
      lesson: "География",
      text: "Географический факультет МГУ",
    },

    {
      alt: "img 41",
      src: "/img/teachers/41.webp",
      name: "Евдошенко Алексей Александрович",
      lesson: "Информатика",
      text: "Эксперт ЕГЭ, более 14 лет преподавания",
    },
    {
      alt: "img 39",
      src: "/img/teachers/39.webp",
      name: "Иван Михайлович",
      lesson: "ДВИ Химия",
      text: "Химический факультет МГУ",
    },
  ]);

  let currentArrCourses3 = [];

  for (let i = 0; i < Math.floor(teachers3.length / 3) * 3; i += 3) {
    let arrCursesStack3 = teachers3.slice(i, i + 3);
    currentArrCourses3.push(arrCursesStack3);
  }
  const last3 = [];
  if (teachers3.length % 3 == 1) {
    last3.push([]);
    last3[0].push(teachers3[teachers3.length - 1]);
    teachers3.pop();
  } else if (teachers3.length % 3 == 2) {
    last3.push([]);
    last3[0].push(teachers3[teachers3.length - 2]);
    last3[0].push(teachers3[teachers3.length - 1]);
    teachers3.pop();
    teachers3.pop();
  }
  let [finalCourses3, setFinalCourses3] = useState(
    currentArrCourses3.concat(last3)
  );

  // сетка 4
  let [teachers4, setTeachers4] = useState([
    {
      alt: "img 10",
      src: "/img/teachers/10.webp",
      name: "Павлова Елена Анатольевна",
      lesson: "Математика",
      text: "Эксперт ЕГЭ. Высшая школа экономики",
    },
    {
      alt: "img 29",
      src: "/img/teachers/29.webp",
      name: "Амирханян Роман Аркадиевич",
      lesson: "Обществознание ",
      text: "Юридический факультет МГУ. Тренер по подготовке к ВСОШ по праву",
    },

    {
      alt: "img 28",
      src: "/img/teachers/28.webp",
      name: "Николай Николаевич",
      lesson: "Математика ",
      text: "Эксперт ЕГЭ. ВМК МГУ. Старший преподаватель, методист",
    },
    {
      alt: "img 26",
      src: "/img/teachers/26.webp",
      name: "Михаил Владимирович  ",
      lesson: "История, обществознание ",
      text: "Исторический факультет МГУ, кандидат исторических наук",
    },
    {
      alt: "img 33",
      src: "/img/teachers/33.webp",
      name: "Марианна Михайловна Товмасян",
      lesson: "Английский язык",
      text: "Мотивационный спикер в США в West Colorado University, Победитель #1 в России в Международном конкурсе речей на английском в Toastmasters International",
    },
    {
      alt: "img 9",
      src: "/img/teachers/9.webp",
      name: "Кашапов Раиль Наилевич",
      lesson: "Математика, Обществознание",
      text: "Эксперт ЕГЭ. Составитель заданий ЕГЭ, экономический факультет МГУ, основатель образовательного центра, создатель собственной методики преподавания",
    },

    {
      alt: "img 24",
      src: "/img/teachers/24.webp",
      name: "Воронкова Диана Вадимовна",
      lesson: "Русский язык, Литература",
      text: "Филологический факультет МГУ. 100 баллов ЕГЭ по литературе",
    },
    {
      alt: "img 1",
      src: "/img/teachers/1.webp",
      name: "Миров Юрий Алексеевич",
      lesson: "Химия",
      text: "Научный сотрудник МГУ. Президент ассоциации психологов в сфере онкологических заболеваний",
    },
    {
      alt: "img 27",
      src: "/img/teachers/27.webp",
      name: "Зарубин Юрий Дмитриевич ",
      lesson: "Физика",
      text: "Механико-Математический факультет МГУ. Старший преподаватель, методист",
    },

    {
      alt: "img 14",
      src: "/img/teachers/14.webp",
      name: "Калинин Александр Владимирович ",
      lesson: "Математика, Физика",
      text: "ВМК МГУ, 40-летний стаж преподавания, подготовка к олимпиадам любого уровня",
    },

    {
      alt: "img 22",
      src: "/img/teachers/22.webp",
      name: "Мария Михайловна ",
      lesson: "Химия",
      text: "Факультет биоинженерии МГУ. Призёр очного и заочного туров олимпиады «ЯПрофессионал» по направлениям «неорганическая химия», «физическая химия», «биотехнология»",
    },

    {
      alt: "img 30",
      src: "/img/teachers/30.webp",
      name: "Омельчук Даниил Давидович",
      lesson: "Химия, Биология ",
      text: "Факультет Лечебное дело РНИМУ им. Н.И. Пирогова. Ординатура в НМИЦ Эндокринологии Минздрава. Врач-эндокринолог",
    },
    {
      alt: "img 3",
      src: "/img/teachers/3.webp",
      name: "Коваль Светлана Николаевна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Филологический факультет СПбГУ",
    },
    {
      alt: "img 17",
      src: "/img/teachers/17.webp",
      name: "Шишаков Виталий Владимирович",
      lesson: "Физика",
      text: "Физический факультет МГУ с 2005-го года",
    },

    {
      alt: "img 18",
      src: "/img/teachers/18.webp",
      name: "Валова Анна Александровна",
      lesson: "Русский Язык, Литература ",
      text: "Разработчик собственных методик преподавания, методист",
    },

    {
      alt: "img 13",
      src: "/img/teachers/13.webp",
      name: "Вахромова Яна Игоревна ",
      lesson: "Русский язык, Английский язык, Литература ",
      text: "Филологический факультет МГУ. победитель многочисленных Ломоносовских олимпиад",
    },
    {
      alt: "img 20",
      src: "/img/teachers/20.webp",
      name: "Ирина Викторовна",
      lesson: "Русский язык",
      text: "Эксперт ЕГЭ. Филологический факультет МГУ",
    },
    {
      alt: "img 6",
      src: "/img/teachers/6.webp",
      name: "Кузнецов Дмитрий Владимирович ",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Филологическеский факультет МГУ",
    },
    {
      alt: "img 5",
      src: "/img/teachers/5.webp",
      name: "Макаров Алексей Николаевич ",
      lesson: "Биология, История ",
      text: "Кандидат Биологических наук, кафедра прикладной биотехнологии МГУ",
    },

    {
      alt: "img 23",
      src: "/img/teachers/23.webp",
      name: "Денисов Александр Юрьевич ",
      lesson: "Литература",
      text: "Филологический факультет МГУ. Научный сотрудник отдела «Дом-музей А.П. Чехова»",
    },
    {
      alt: "img 15",
      src: "/img/teachers/15.webp",
      name: "Арзигуль Александровна Шах",
      lesson: "Математика, Информатика",
      text: "Кандидат физико-математических наук, имеет более 300 положительных отзывов",
    },

    {
      alt: "img 2",
      src: "/img/teachers/2.webp",
      name: "Маврин Артур Радикович ",
      lesson: "Математика ",
      text: "Высшая математика механико-математического факультета МГУ. Победитель международных студенческих Олимпиад",
    },

    {
      alt: "img 39",
      src: "/img/teachers/39.webp",
      name: "Иван Михайлович",
      lesson: "ДВИ Химия",
      text: "Химический факультет МГУ",
    },
    {
      alt: "img 19",
      src: "/img/teachers/19.webp",
      name: "Максим Евгеньевич",
      lesson: "Математика, Физика",
      text: "Главный методист по олимпиадной математике",
    },

    {
      alt: "img 31",
      src: "/img/teachers/31.webp",
      name: "Пирогова Елена Сергеевна",
      lesson: "География",
      text: "Эксперт ОГЭ и ЕГЭ",
    },
    {
      alt: "img 7",
      src: "/img/teachers/7.webp",
      name: "Погребенкова Анна Юрьевна ",
      lesson: "Английский язык",
      text: "Высшая школа переводов МГУ",
    },
    {
      alt: "img 34",
      src: "/img/teachers/34.webp",
      name: "Харитонов Матвей Ильич",
      lesson: "Информатика",
      text: "Автор научных статей, публикуемых в Scopus и ВАК",
    },
    {
      alt: "img 37",
      src: "/img/teachers/37.webp",
      name: "Журавлев Никита Алексеевич",
      lesson: "ДВИ Журналистика",
      text: "Факультет журналистики МГУ. Победитель олимпиады 'Ломоносов'",
    },

    {
      alt: "img 38",
      src: "/img/teachers/38.webp",
      name: "Василевич Ирина Анатольевна",
      lesson: "Английский язык",
      text: "Эксперт ЕГЭ. Подготовка к IELTS, TOELF, BEC",
    },
    {
      alt: "img 36",
      src: "/img/teachers/36.webp",
      name: "Горбачева Карина Ирековна",
      lesson: "Русский язык",
      text: "Факультет политологии МГУ. Специалист-эксперт в сфере общего образования",
    },

    {
      alt: "img 35",
      src: "/img/teachers/35.webp",
      name: "Анна Львовна",
      lesson:
        "Английский язык, репетитор основных школьных предметов для начальных классов",
      text: "Педагогический факультет МГЛУ, более 18 лет преподавания",
    },

    {
      alt: "img 32",
      src: "/img/teachers/32.webp",
      name: "Афанасьев Максим Сергеевич",
      lesson: "Математика, Физика",
      text: "Факультет фундаментальных  наук МГТУ им. Н.Э. Баумана. Имеет научные статьи в области физики высокотемпературных процессов",
    },
    {
      alt: "img 40",
      src: "/img/teachers/40.webp",
      name: "Андрей Скороходов",
      lesson: "История, Обществознание ",
      text: "Философский факультет МГУ, более 13 лет преподавания и авторства. Эксперт в СМИ и на конференциях.",
    },
    {
      alt: "img 16",
      src: "/img/teachers/16.webp",
      name: "Соловьев Петр Алексеевич ",
      lesson: "Информатика, Химия",
      text: "Факультет вычислительной математики и кибернетики МГУ",
    },
    {
      alt: "img 42",
      src: "/img/teachers/42.webp",
      name: "Олег Дмитриевич",
      lesson: "География",
      text: "Географический факультет МГУ",
    },
    {
      alt: "img 41",
      src: "/img/teachers/41.webp",
      name: "Евдошенко Алексей Александрович",
      lesson: "Информатика",
      text: "Эксперт ЕГЭ, более 14 лет преподавания",
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
        viewport={{ amount: 0.05, once: true }}
        whileInView="visible"
        initial="hidden"
        custom={1}
        variants={textAnim}
        className=" text-3xl md:text-4xl sm:text-5xl font-bold play text-center mb-16"
      >
        Наши преподаватели
      </motion.div>
      <motion.div
        viewport={{ amount: 0.05, once: true }}
        whileInView="visible"
        initial="hidden"
        className="hidden xl:flex   justify-center px-3  2xl:px-40"
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper py-10 hidden xl:block max-w-screen-2xl  align-center"
        >
          {finalCourses.map((feed) => (
            <SwiperSlide
              key={finalCourses.indexOf(feed)}
              className="px-16 xl:grid grid-cols-4 place-items-center"
            >
              {feed.map((e) => (
                <motion.div
                  custom={1}
                  variants={textAnim}
                  className="flex  align-top h-full"
                >
                  <Teacher
                    name={e.name}
                    text={e.text}
                    lesson={e.lesson}
                    src={e.src}
                  />
                </motion.div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div
        viewport={{ amount: 0.05, once: true }}
        whileInView="visible"
        initial="hidden"
        className="hidden md:flex  xl:hidden   justify-center px-3  2xl:px-40"
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper py-10 hidden sm:block  align-center"
        >
          {finalCourses3.map((feed) => (
            <SwiperSlide
              key={finalCourses3.indexOf(feed)}
              className="px-16 grid grid-cols-3 place-items-center"
            >
              {feed.map((e) => (
                <motion.div
                  custom={3}
                  variants={textYAnim}
                  className="flex  align-top h-full"
                >
                  <Teacher
                    name={e.name}
                    text={e.text}
                    lesson={e.lesson}
                    src={e.src}
                  />
                </motion.div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>{" "}
      <motion.div
        viewport={{ amount: 0.05, once: true }}
        whileInView="visible"
        initial="hidden"
        className="flex md:hidden items-center  justify-center px-3  2xl:px-40"
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
                <motion.div
                  custom={3}
                  variants={textYAnim}
                  className="flex  align-top h-full"
                >
                  <Teacher
                    name={e.name}
                    text={e.text}
                    lesson={e.lesson}
                    src={e.src}
                  />
                </motion.div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="max-w-screen-2xl px-5 mx-auto mt-14">
        <motion.div
          viewport={{ amount: 0.05, once: true }}
          whileInView="visible"
          initial="hidden"
          custom={1}
          variants={textAnim}
          className=" "
        >
          <Form title="Оставить заявку на первое бесплатное занятие" />
          <motion.div
            viewport={{ amount: 0.05, once: true }}
            whileInView="visible"
            initial="hidden"
            custom={1}
            variants={textAnim}
            className="mt-8 text-3xl xl:text-4xl play "
          >
            Позвонить и задать вопрос: <br className="inline lg:hidden" />
            <a href="tel:84954813825">
              <div className="sm:inline mt-3 sm:m-0">8 495 481 38 25</div>
            </a>{" "}
            <span className="hidden sm:inline ">/ </span>{" "}
            <a href="tel:89032960885">
              <div className="sm:inline mt-3 sm:m-0">8 903 296 08 85</div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SliderTeacher;
