import React, { useState, useEffect } from "react";

function TestIS(props) {
  let [arr, setArr] = useState(props.arr[0]);

  let [curNum, setCurNum] = useState(0);

  function numColor(n, hasA) {
    if (
      curNum == n &&
      n != arr.length - 3 &&
      n != arr.length - 2 &&
      n != arr.length - 1
    ) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-slate-300 duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        >
          {n + 1}
        </div>
      );
    } else if (curNum == n && n == arr.length - 3) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-red-500 duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        ></div>
      );
    } else if (curNum == n && n == arr.length - 2) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-yellow-500 duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        ></div>
      );
    } else if (curNum == n && n == arr.length - 1) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-green-700 duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        ></div>
      );
    } else if (
      arrsu[n] != "" &&
      n != arr.length - 3 &&
      n != arr.length - 2 &&
      n != arr.length - 1
    ) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-white duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        >
          {n + 1}
        </div>
      );
    } else if (n == arr.length - 3) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-red-400 duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        ></div>
      );
    } else if (n == arr.length - 2) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-yellow-300 duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        ></div>
      );
    } else if (n == arr.length - 1) {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black bg-green-400 duration-200 cursor-pointer text-sm lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        ></div>
      );
    } else {
      return (
        <div
          key={n}
          // onClick={setCurNum(n)}
          className="rounded-full aspect-square robotoMono hover:bg-slate-400 hover:text-black text-white duration-200 cursor-pointer text-sm sm:text-lg lg:text-xl flex items-center justify-center w-full sm:w-9 sm:h-9 lg:w-11 lg:h-11 font-medium text-center  border-2 border-white me-2 mb-2 lg:mb-4 lg:me-4"
        >
          {n + 1}
        </div>
      );
    }
  }
  let [anw0, setAnw0] = useState("");
  let [anw1, setAnw1] = useState("");
  let [anw2, setAnw2] = useState("");
  let [anw3, setAnw3] = useState("");
  let [anw4, setAnw4] = useState("");
  let [anw5, setAnw5] = useState("");
  let [anw6, setAnw6] = useState("");
  let [anw7, setAnw7] = useState("");
  let [anw8, setAnw8] = useState("");
  let [anw9, setAnw9] = useState("");
  let [anw10, setAnw10] = useState("");
  let [anw11, setAnw11] = useState("");
  let [anw12, setAnw12] = useState("");
  let [anw13, setAnw13] = useState("");
  let [anw14, setAnw14] = useState("");
  let [anw15, setAnw15] = useState("");

  let arrsu = [
    anw0,
    anw1,
    anw2,
    anw3,
    anw4,
    anw5,
    anw6,
    anw7,
    anw8,
    anw9,
    anw10,
    anw11,
    anw12,
    anw13,
    anw14,
    anw15,
  ];
  let arrdsu = [
    setAnw0,
    setAnw1,
    setAnw2,
    setAnw3,
    setAnw4,
    setAnw5,
    setAnw6,
    setAnw7,
    setAnw8,
    setAnw9,
    setAnw10,
    setAnw11,
    setAnw12,
    setAnw13,
    setAnw14,
    setAnw15,
  ];
  let [valName, setValName] = useState("Далее →");
  let [valPhone, setValPhone] = useState("Далее →");

  let isVal = function () {
    if (!anw13) {
      setValName("Заполните поле!");
    } else {
      setValName("Далее →");
    }
  };

  let isValP = function () {
    if (!anw14) {
      setValPhone("Заполните поле!");
    } else {
      setValPhone("Далее →");
    }
  };
  let [fnVal, setFnVal] = useState("");
  let stringS;
  let lesson = props.lesson;
  useEffect(() => {
    let c = 0;
    for (let i = 0; i < 13; i++) {
      arrsu[i] = arrsu[i].trim();
      arrsu[i] = arrsu[i].replace(",", ".");
      if (arrsu[i] == arr[i].RightAnswer) {
        stringS = `${stringS}_${i + 1}${"+"}`;
      } else {
        stringS = `${stringS}_${i + 1}${"-"}`;
      }
    }
    for (let i = 0; i < 13; i++) {
      arrsu[i] = arrsu[i].trim();
      arrsu[i] = arrsu[i].replace(",", ".");
      if (arrsu[i] == arr[i].RightAnswer) {
        c++;
      }
    }
    stringS = stringS + " ";
    stringS = stringS.slice(9, -1);

    stringS = `${lesson};_Имя ${anw13},_Телефон ${anw14},_Решено верно: ${c},_${stringS}`;
    setFnVal(stringS);
  });

  let bnts;
  if (curNum == 0) {
    bnts = (
      <div key="fs" className="btns flex items-center justify-center">
        <button
          onClick={() => {
            setCurNum(curNum + 1);
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl  md:text-xl border-2 border-white text-white flex items-center justify-center pr-8 pl-10 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          Далее &#8594;
        </button>{" "}
      </div>
    );
  } else if (curNum == arr.length - 1) {
    bnts = (
      <form
        key="sc"
        action="https://lomonosovites.ru/test.php"
        method="post"
        className="btns w-full flex lg:ms-4 lg:w-full lg:justify-end justify-center "
      >
        {/* <input
          name="data"
          type="text"
          className=" border text-md mb-5 md:mb-0 border-gray-300  px-3 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700  placeholder-gray-400 "
          placeholder="Иванов Иван"
          required
        /> */}
        <input type="text" className="hidden" value={fnVal} name="data"></input>
        <button
          onClick={() => {
            setCurNum(curNum - 1);
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl me-2 sm:me-6  md:text-xl border-2 border-white text-white flex items-center justify-center pl-3 sm:pl-8 pr-5 sm:pr-10 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          &#8592; Назад
        </button>
        <button
          onClick={() => {}}
          className="cursor-pointer min-w-20 h-13 rounded-2xl  md:text-xl border-2 border-white text-white flex items-center justify-center pr-8 pl-10 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          Завершить ✔
        </button>{" "}
      </form>
    );
  } else if (curNum == arr.length - 3) {
    bnts = (
      <div
        key="tr"
        className="btns flex items-center lg:ms-4 lg:w-full lg:justify-end justify-center"
      >
        <button
          onClick={() => {
            setCurNum(curNum - 1);
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl me-2 sm:me-6  md:text-xl border-2 border-white text-white flex items-center justify-center pl-3 sm:pl-8 pr-5 sm:pr-10 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          &#8592; Назад
        </button>
        <button
          onClick={() => {
            if (anw13) {
              setCurNum(curNum + 1);
            } else {
              isVal();
            }
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl  md:text-xl border-2 border-white text-white flex items-center justify-center pr-8 pl-10 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          {valName}
        </button>
      </div>
    );
  } else if (curNum == arr.length - 2) {
    bnts = (
      <div
        key="tr"
        className="btns flex items-center lg:ms-4 lg:w-full lg:justify-end justify-center"
      >
        <button
          onClick={() => {
            setCurNum(curNum - 1);
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl me-2 sm:me-6  md:text-xl border-2 border-white text-white flex items-center justify-center pl-3 sm:pl-8 pr-5 sm:pr-10 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          &#8592; Назад
        </button>
        <button
          onClick={() => {
            if (anw14) {
              setCurNum(curNum + 1);
            } else {
              isValP();
            }
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl  md:text-xl border-2 border-white text-white flex items-center justify-center pl-5 sm:pl-10 pr-3 sm:pr-8 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          {valPhone}
        </button>{" "}
      </div>
    );
  } else {
    bnts = (
      <div
        key="tr"
        className="btns flex items-center lg:ms-4 lg:w-full lg:justify-end justify-center"
      >
        <button
          onClick={() => {
            setCurNum(curNum - 1);
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl me-2 sm:me-6  md:text-xl border-2 border-white text-white flex items-center justify-center pl-3 sm:pl-8 pr-5 sm:pr-10 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          &#8592; Назад
        </button>
        <button
          onClick={() => {
            setCurNum(curNum + 1);
          }}
          className="cursor-pointer min-w-20 h-13 rounded-2xl  md:text-xl border-2 border-white text-white flex items-center justify-center pl-5 sm:pl-10 pr-3 sm:pr-8 duration-200 hover:bg-white hover:text-black hover:font-medium"
        >
          Далее &#8594;
        </button>{" "}
      </div>
    );
  }

  return (
    <div className="min-h-screen py-5 lg:w-dvw flex items-center  px-2 xs-px-5">
      <div className="max-w-5xl xl:max-w-6xl  mx-auto">
        <div className="flex sm:justify-start justify-center">
          <div className="rNums grid  grid-cols-8 max-w-lg gap-3 sm:gap-0 sm:max-w-6xl px938JsCenter sm:flex sm:flex-wrap">
            {arr.map((e) => numColor(arr.indexOf(e), arr.indexOf(e).answer))}
          </div>
        </div>
        <div className="question sm:text-start robotoMono text-white md:mt-16 md:mb-16 mb-8  mt-10 md:text-2xl lg:text-3xl ">
          {arr[curNum].question}
        </div>
        {arr[curNum].src && (
          <div className="flex justify-center">
            <img
              src={arr[curNum].src}
              className="md:max-h-80 rounded-xl"
              alt=""
            />
          </div>
        )}
        {arr[curNum].inner && arr[curNum].inner}

        <div className="robotoMono flex max-w-full mt-8 md:mt-16  mdDtflex-row justify-center lg:justify-between ">
          <div className="flex w-auto items-center justify-center lg:justify-start">
            {curNum < 15 && (
              <div className="flex items-center ps-2 sm:ps-5 md:max-w-max max-w-min rounded-2xl border-2 border-white Dme-10">
                <div className=""></div>
                <div className="text-white sm:text-xl  sm:me-6 ">Ответ:</div>
                <input
                  type="text"
                  placeholder="введите ответ"
                  value={arrsu[curNum]}
                  onChange={(e) => {
                    arrdsu[curNum](e.target.value);

                    if (curNum == 13) {
                      isVal();
                    } else if (curNum == 14) {
                      isValP();
                    }
                  }}
                  className="bg-transparent min-w-20  h-12 rounded-2xl   sm:text-xl text-white ps-3 sm:ps-5"
                ></input>
              </div>
            )}
          </div>
          {bnts}
        </div>
      </div>
    </div>
  );
}

export default TestIS;
