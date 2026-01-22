import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Feed from "./Feed";
import FeedVid from "./FeedVid";

function Feedback() {
  let [courses, setCourses] = useState([
    {
      img: "/img/peoples/1.jpg",
      name: "Диана Диомидова ",
      text: "Я благодарна образовательному центру 'Ломоносовцы' за подготовку к ЕГЭ. Благодаря курсам проведенным специалистами, у меня подросли результаты, и я была готова к экзаменам на 100%. Теперь я обучаюсь в МГУ на экономическом факультете на бюджете!",
      link: "https://vk.com/ddi1996",
      alt: "отзыв 1",
    },
    {
      img: "/img/peoples/2.jpg",
      name: "Виталий Юшкин",
      text: "Обучение в 'Ломоносовцах' помогло мне не только успешно сдать ОГЭ и ЕГЭ, но и полюбить предметы, которые казались сложными. Великолепные преподаватели и атмосфера поддержки.",
      link: "https://vk.com/talikaryad",
      alt: "отзыв 2",
    },
    {
      img: "/img/peoples/3.jpg",
      name: "Геннадий Газизов",
      text: "Я студент 3-го  курса авиационного университета. Результаты, которые я получил на ЕГЭ, превзошли мои ожидания. 'Ломоносовцы' безусловно заслуживают благодарности за то, что помогли мне достигнуть успеха в учебе  поступить на бюджет ,куда я давно хотел",
      link: "https://vk.com/genagazizov",
      alt: "отзыв 3",
    },
    {
      img: "/img/peoples/4.jpg",
      name: "Павел Пархимчик",
      text: "Образовательный центр 'Ломоносовцы' не просто помог мне сдать ЕГЭ по русскому языку и профильной математике, но и дал мне уверенность в своих силах. Очень благодарен за профессионализм преподавателей. Теперь я студент МГУ!",
      link: "https://vk.com/pashaparkhimchyk",
      alt: "отзыв 4",
    },

    {
      img: "/img/peoples/5.jpg",
      name: "Денис Снегирев",
      text: "Я пришел сюда с чувством неуверенности, а ушел с уверенностью в своих силах. 'Ломоносовцы' предоставили не только знания, но и веру в себя. Математика тут очень сильная",
      link: "https://vk.com/id44945186",
      alt: "отзыв 5",
    },
    {
      img: "/img/peoples/6.jpg",
      name: "Ляйсан Ихсанова",
      text: "С первого дня я почувствовала, что место, где я учусь, действительно заботится о моем будущем. Особенно понравилась подача информации от Дмитрия Владимировича👍👍👍",
      link: "https://vk.com/lyhsnva",
      alt: "отзыв 6",
    },
    {
      img: "/img/peoples/7.jpg",
      name: "Лариса Васильева",
      text: "Преподаватели 'Ломоносовцев' - это истинные профессионалы своего дела. Благодаря их терпению и поддержке, мой сын добился отличных результатов на экзаменах.      (Отзыв Родителя)",
      link: "https://vk.com/larochka3044777",
      alt: "отзыв 7",
    },
    {
      img: "/img/peoples/8.jpg",
      name: "Рамис Шарафутдинов",
      text: "Я выбрал 'Ломоносовцы' для подготовки к ОГЭ, и ни разу не пожалел о своем выборе. Здесь я нашел настоящих наставников, которые помогли мне освоить материал и успешно сдать экзамены. Все экзамены сданы на «отлично»",
      link: "https://vk.com/ramis_sharafutdinov",
      alt: "отзыв 8",
    },
    {
      img: "/img/peoples/no.jpg",
      name: "Рафик Тоноян",
      text: " 'Ломоносовцы' дали мне нереальный буст в знаниях и мотивацию». Я студент, теперь, Юридического факультета МГУ. Это место стало для меня не просто школой подготовки к экзаменам, а настоящим источником знаний и понимания.",
      link: "https://vk.com/id30721964",
      alt: "отзыв 9",
    },
  ]);
  const rew = courses;
  let currentArrCourses = [];

  for (let i = 0; i < Math.floor(courses.length / 3) * 3; i += 3) {
    let arrCursesStack = courses.slice(i, i + 3);
    currentArrCourses.push(arrCursesStack);
  }
  const last = [];
  if (courses.length % 3 == 1) {
    last.push([]);
    last[0].push(courses[courses.length - 1]);
    courses.pop();
  } else if (courses.length % 3 == 2) {
    last.push([]);
    last[0].push(courses[courses.length - 2]);
    last[0].push(courses[courses.length - 1]);
    courses.pop();
    courses.pop();
  }
  let [finalCourses, setFinalCourses] = useState(
    currentArrCourses.concat(last)
  );
  let [coursesVid, setCoursesVid] = useState([
    { src: "/video/5.MP4", lazy: false, srcPs: "/video/post/5.webp" },
    { src: "/video/1.MP4", lazy: false, srcPs: "/video/post/1.webp" },
    { src: "/video/2.mp4", lazy: false, srcPs: "/video/post/2.webp" },
    { src: "/video/3.MOV", lazy: false, srcPs: "/video/post/3.webp" },
    { src: "/video/4.MP4", lazy: false, srcPs: "/video/post/4.webp" },
    { src: "/video/7.mp4", lazy: false, srcPs: "/video/post/7.webp" },
  ]);
  const vidRew = [
    { src: "/video/5.MP4", lazy: false, srcPs: "/video/post/5.webp" },
    { src: "/video/1.MP4", lazy: false, srcPs: "/video/post/1.webp" },
    { src: "/video/2.mp4", lazy: false, srcPs: "/video/post/2.webp" },
    { src: "/video/3.MOV", lazy: false, srcPs: "/video/post/3.webp" },
    { src: "/video/4.MP4", lazy: false, srcPs: "/video/post/4.webp" },
    { src: "/video/7.mp4", lazy: false, srcPs: "/video/post/7.webp" },
  ];
  let currentArrCoursesVid = [];
  for (let i = 0; i < Math.floor(coursesVid.length / 3) * 3; i += 3) {
    let arrCursesStack = coursesVid.slice(i, i + 3);
    currentArrCoursesVid.push(arrCursesStack);
  }
  const lastVid = [];
  if (coursesVid.length % 3 == 1) {
    lastVid.push([]);
    lastVid[0].push(coursesVid[coursesVid.length - 1]);
    coursesVid.pop();
  } else if (coursesVid.length % 3 == 2) {
    lastVid.push([]);
    lastVid[0].push(coursesVid[coursesVid.length - 2]);
    lastVid[0].push(coursesVid[coursesVid.length - 1]);
    coursesVid.pop();
    coursesVid.pop();
  }
  let [finalCoursesVid, setFinalCoursesVid] = useState(
    currentArrCoursesVid.concat(lastVid)
  );
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
  return (
    <div id="reviews">
      <div className="bg-rich-black-to-platinum ">
        <motion.div
          viewport={{ amount: 0.1, once: true }}
          whileInView="visible"
          initial="hidden"
          className="bg-rich-black rounded-4xl pb-10"
        >
          <div className=" mx-auto max-w-5xl pt-10 ">
            <motion.div
              custom={2}
              variants={textAnim}
              className="text-4xl mb-6 sm:mb-0 sm:text-5xl text-center text-slate-50 font-bold play py-6"
            >
              Отзывы наших выпускников
            </motion.div>
          </div>
          <motion.div custom={3} variants={textYAnim} className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper py-10 hidden xl:block"
            >
              {finalCourses.map((feed) => (
                <SwiperSlide
                  key={finalCourses.indexOf(feed)}
                  className="px-16 xl:grid"
                >
                  {feed.map((e) => (
                    <Feed
                      name={e.name}
                      text={e.text}
                      link={e.link}
                      img={e.img}
                    />
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <motion.div custom={3} variants={textYAnim} className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper row block xl:hidden "
            >
              {rew.map((e) => (
                <SwiperSlide className="px-8 ">
                  <Feed
                    key={e.name}
                    name={e.name}
                    text={e.text}
                    link={e.link}
                    img={e.img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        viewport={{ amount: 0.1, once: true }}
        whileInView="visible"
        initial="hidden"
        className=""
      >
        <div className="bg-platinum ">
          <motion.div
            custom={3}
            variants={textYAnim}
            className="bg-platinum py-20 max-w-6xl mx-auto"
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper py-10 rounded-3xl hidden lg:block"
            >
              {finalCoursesVid.map((feed) => (
                <SwiperSlide className="px-16 grid ">
                  {feed.map((e) => (
                    <FeedVid
                      ya={e.ya}
                      key={e.name}
                      src={e.src}
                      srcPs={e.srcPs}
                      lazy={e.lazy}
                    />
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper py-10 rounded-3xl  block lg:hidden"
            >
              {vidRew.map((feed) => (
                <SwiperSlide key={feed.name} className="px-16   ">
                  <FeedVid
                    ya={feed.ya}
                    src={feed.src}
                    srcPs={feed.srcPs}
                    lazy={feed.lazy}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Feedback;
