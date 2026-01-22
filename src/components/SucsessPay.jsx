import React from "react";

function SucsessPay() {
  return (
    <main className="grid min-h-screen place-items-center bg-green-200 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Оплата прошла успешно
        </h1>
        <p className="mt-3 sm:mt-6 text-base leading-7 text-gray-600">
          Наш менеджер свяжется с вами в&nbsp;ближайшее&nbsp;время
        </p>
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-x-6">
          <a
            href="../"
            className="rounded-md bg-green-400  px-3.5 py-2.5  font-semibold text-slate-800 shadow-md  hover:bg-green-300 duration-200 hover:scale-105 "
          >
            Вернуться на главную страницу
          </a>
        </div>
      </div>
    </main>
  );
}

export default SucsessPay;
