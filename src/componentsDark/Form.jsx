import React from "react";

function Form(props) {
  return (
    <div
      id={props.proId}
      className=" bg-glaucous rounded-3xl py-4 sm:py-8 px-4 md:px-6 lg:px-10"
    >
      <h3 className="text-xl sm:text-3xl mb-6 play ">{props.title}</h3>
      <form
        name="form"
        method="post"
        action="https://lomonosovites.ru/mail.php"
        className="  md:flex    "
      >
        <div className="w-full md:me-4 ">
          <label
            for="name"
            className="block mb-2 font-medium  text-white text-xl"
          >
            Ваше имя
          </label>
          <input
            name="name"
            type="text"
            className=" border text-md mb-5 md:mb-0 border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700  placeholder-gray-400 "
            placeholder="Иванов Иван"
            required
          />
        </div>
        <div className="w-full md:me-4 ">
          <label
            for="phone"
            className="block mb-2 font-medium  text-white text-xl"
          >
            Ваш номер телефона
          </label>
          <input
            name="phone"
            type="number"
            maxlength={11}
            className=" border text-md border-gray-300 text-white mb-5 md:mb-0 px-3 py-3  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700  placeholder-gray-400 "
            placeholder="8 999 999 99 99"
            required
          />
        </div>
        <div className="w-full flex items-end md:justify-center">
          <button
            type="submit"
            className="text-white  font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-emerald "
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
