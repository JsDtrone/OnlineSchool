import React from "react";

export default function Program() {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <div className="text-center  duration-200  text-2xl sm:text-3xl font-bold play text-black  ">
        <div className="flex  flex-col justify-center ">
          <div className="pb-10 px-5 text-4xl sm:text-5xl mt-10">
            Учебные программы
          </div>
          <a href="/docs/Calendar_Thematic_plan_Russian_EGE.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              Русский язык ЕГЭ
            </div>
          </a>
          <a href="/docs/Calendar_Thematic_plan_Mathematics_EGE.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              Математика ЕГЭ
            </div>
          </a>
          <a href="/docs/Calendar_Thematic_plan_Informatics_EGE.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              Информатика ЕГЭ
            </div>
          </a>
          <a href="/docs/Program_Social_Studies_EGE.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              Обществознание ЕГЭ
            </div>
          </a>
          <a href="/docs/Program_English_2024.docx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6 mx-5">
              Английский ЕГЭ
            </div>
          </a>
          <a href="/docs/Program_Exercises_EGE_biology_Omelchuk_D_D_.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6 mx-5">
              Биология ЕГЭ
            </div>
          </a>
          <a href="/docs/Program_History_EGE.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              История ЕГЭ
            </div>
          </a>
          <a href="/docs/Program_Social_Studies_OGE.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              Обществознание ОГЭ
            </div>
          </a>
          <a href="/docs/Russian_Language_OGE.docx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              Русский язык ОГЭ
            </div>
          </a>
          <a href="/docs/Program_History_OGE.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              История ОГЭ
            </div>
          </a>
          <a href="/docs/Chemistry_program_9th_grade.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-6  mx-5">
              Химия ОГЭ
            </div>
          </a>{" "}
          <a href="/docs/OlympiadMathematics5-6-7.xlsx">
            <div className="px-8 py-5 rounded-2xl bg-amber-400  cursor-pointer ease-in-out duration-300 hover:scale-105 mb-10  mx-5">
              Олимпиадная математика <br className="sm:hidden" /> 5-6-7 класс
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
