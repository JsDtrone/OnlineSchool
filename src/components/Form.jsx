import React from "react";

function Form(props) {
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
    <div
      id={props.proId}
      className=" bg-amber-400 rounded-3xl py-4 sm:py-8 px-4 md:px-6 lg:px-10 shadow-md"
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
            className="block mb-2 font-medium  text-slate-800 text-xl"
          >
            Ваше имя
          </label>
          <input
            name="name"
            type="text"
            className=" border text-md mb-5 md:mb-0 border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-50 placeholder-gray-600 "
            placeholder="Иванов Иван"
            required
          />
          <input type="hidden" name="zf" value={zsta} />
          <input type="hidden" name="data1Id" value={currentUrl} />
        </div>
        <div className="w-full md:me-4 ">
          <label
            for="phone"
            className="block mb-2 font-medium  text-slate-800 text-xl"
          >
            Ваш номер телефона
          </label>
          <input
            name="phone"
            type="text"
            onChange={() => {
              ssd();
            }}
            pattern="[0-9]{11}"
            maxLength={11}
            className=" border text-md border-gray-300  mb-5 md:mb-0 px-3 py-3  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-amber-50 placeholder-gray-600 "
            placeholder="8 999 999 99 99"
            required
          />
        </div>
        <div className="w-full flex items-end md:justify-center">
          <button
            type="submit"
            className="text-state-800 font-medium rounded-lg  w-full  px-5 py-2.5 text-center play text-xl bg-amber-50 "
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
