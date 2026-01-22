import React from "react";

function FeedVid(props) {
  let lazy;
  if (props.lazy == true) {
    lazy = "lazy";
  }

  // if (props.ya == true) {
  //   return (
  //     <div className=" w-full   flex justify-center  ">
  //       <div className="link-map-rev-ww rounded-3xl shadow-xl">
  //         <iframe
  //           src="https://yandex.ru/maps-reviews-widget/21499712436?comments"
  //           className="link-map-rev-i rounded-3xl   "
  //         ></iframe>
  //         <a
  //           href="https://yandex.ru/maps/org/lomonosovtsy/21499712436/"
  //           target="_blank"
  //           className="link-map-rev"
  //         >
  //           Ломоносовцы на карте Москвы — Яндекс Карты
  //         </a>
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className=" w-full  flex justify-center  ">
      <video
        poster={props.srcPs}
        loading={lazy}
        className="h-vid lg:h-full rounded-3xl shadow-xl"
        src={props.src}
        controls
      />
    </div>
  );
}

export default FeedVid;
