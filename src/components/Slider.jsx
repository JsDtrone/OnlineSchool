import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Slider() {
  let [ArrLink, setArrLink] = useState([
    { link: "/img/slider/1.webp" },
    { link: "/img/slider/3.webp" },
    { link: "/img/slider/4.webp" },
    { link: "/img/slider/5.webp" },
    { link: "/img/slider/6.webp" },
    { link: "/img/slider/7.webp" },
  ]);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="max-w-5xl mySwiper  pt-10 pb-20"
    >
      {ArrLink.map((e) => (
        <SwiperSlide className="px-8 ">
          <img
            src={e.link}
            className="	mx-auto w-11/12 md:w-9/12  rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
