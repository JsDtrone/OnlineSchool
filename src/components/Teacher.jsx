import React from "react";

function Teacher(props) {
  return (
    <div className="flex flex-col items-center  text-center ">
      <img
        alt=""
        src={props.src}
        className="w-9/12 rounded-full mb-4 shadow-md"
      />
      <div className="">
        <h3 className="text-lg lg:text-xl mb-3">{props.name}</h3>
        <p className="mb-2 text-sm lg:text-lg">{props.lesson}</p>

        <p className=" text-sm lg:text-lg ">{props.text}</p>
      </div>
    </div>
  );
}

export default Teacher;
