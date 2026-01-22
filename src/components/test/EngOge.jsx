import React from "react";
import TestIS from "./TestIS";

function EngOge() {
  let in5 = (
    <div className="text-slate-800 md:text-2xl lg:text-3xl  mt-10  robotoMono">
      1. Where can we see the best Gzhel collection and see how it is made?
      <br />
      2. Who can become a Gzhel artist?
      <br />
      3. What do we call Gzhel?
      <br />
      4. What is the technique of Gzhel painting?
      <br />
      5. What is the traditional Gzhel ceramics design?
      <br />
      6. What is the origin of the word Gzhel?
      <br />
      7. How were the first Gzhel products used?
      <br />
      <div className="mt-6">
        A. Gzhel is a famous type of Russian ceramics. It comes from the region
        with the same name, which is situated about sixty kilometers away from
        Moscow. Gzhel is not one place, to be exact. There are about 27 villages
        in the area which are involved in Gzhel ceramic production. The place
        can be easily reached by railroad and it is often visited by tourists.
        <br />
        B. It is believed that the place where Gzhel ceramics is produced was
        named after the river Gzhelka, a small river flowing through the area.
        However, linguists still argue about where the word comes from. Some of
        them say it has Baltic roots. Others claim that the name is connected
        with the technological process. The word Gzhel is similar to an old
        Russian word which means burn. Indeed, the clay should be burnt to
        become hard before it is good enough for pottery.
        <br />
        C. The clay production in Gzhel started to develop in the 17th century
        when the Russian monarch ordered the delivery of different sorts of clay
        to Moscow. Gzhel clay was found to be the best for making pots and
        containers for pharmacies. The doctors and pharmacists valued it a lot.
        They preferred to keep most of the medicine and herbs in ceramic pots to
        keep them fresh and effective for a long time.
        <br />
        D. Gzhel ceramics can be easily identified by its beautiful white and
        blue coloured decoration. White means pure snow and moonlight. Light and
        dark blue symbolize the calm sky and rivers. Though the images on
        ceramics are usually flowers, they are all unique. Every item is a
        handmade picture with a unique combination of lines. Blue and white
        Gzhel ceramics are well-known all over the world.
        <br />
        E. You may think that Gzhel painters create their works freely, using
        their imagination. Although the talent of an artist and creativity are
        certainly important, the painter needs to follow a very strict
        technological scheme. Each ornament represents an image or a story that
        is given a code. All the codes are listed in catalogues and kept in the
        factory library. Technologists use catalogues to modernize production
        and organize training for new painters.
        <br />
        F. The Gzhel museum is a special attraction. The finest items from the
        15th century to the present are displayed there. The collection of the
        museum contains about two thousand pieces and presents a great variety
        of bowls, vases, tea sets, toys and statuettes. The place is good for a
        family day out – apart from enjoying the displays and buying souvenirs
        you can watch the production process or take classes in sculpture or
        painting.
      </div>
      <div className="mt-6">
        {" "}
        Текст A B C D E F<br />
        Вопрос
      </div>
    </div>
  );
  let in6 = (
    <div className="text-slate-800 md:text-2xl lg:text-3xl  mt-10  robotoMono">
      The Best Job in the World <br />
      Have you ever heard of the Great Barrier Reef? It is the world’s largest
      coral reef system along the eastern coast of Australia. In February 2009
      an extraordinary position was advertised by the Australian Tourism Office.
      The advertisement ran that the Great Barrier Reef needed a caretaker for
      half a year. It was for a special person who would look after the Reef.{" "}
      <br />
      The job offered a large salary, free accommodation in a luxury villa, and
      transportation there and around the islands. All expenses would be paid:
      the winner wouldn’t need to spend any extra money on anything. <br />
      The job’s duties were pretty simple. You could only dream of such
      requirements. First, the person had to speak English and swim well.
      Second, on the island his responsibility included writing a weekly
      Internet blog. The job description also required the successful applicant
      to explore the islands of the Great Barrier Reef, swim, make friends with
      the locals and generally enjoy the tropical climate and lifestyle. A real
      dream! <br />
      Within the first 2 days of the contest, the tourism office received more
      than seven thousand online applications. All told, 34,000 people of all
      different nationalities applied. The candidates were interviewed and the
      winner was Ben Southall from the UK. <br />
      Ben greatly enjoyed the dream job he had got. He realised that people knew
      very little about our planet and its treasures. Living in big cities, they
      forgot how important the flora and fauna of this world were. Every time
      Ben went outdoors, he could discover something new. Ben's life on the
      island was not just fun. It was very busy, busier than most people
      imagined. He worked seven days a week and up to 19 hours a day. The Best
      Job included travelling to over 60 islands of the Reef almost every day.
      It was not just looking after the Reef, Ben had a lot of meetings, press
      conferences and interviews. He was getting a lot of attention all the time
      and he couldn’t get away from it. That was probably the hardest part of
      the job.
      <br /> Moreover, any adventure has a certain degree of risk. Swimming and
      diving on the Great Barrier Reef was not different. Ben had to deal with
      whales, sharks and other huge sea creatures. Surprisingly, the most
      dangerous thing was a small jellyfish about the size of a little finger.
      It’s considered to be extremely poisonous and Ben was stung by it. He had
      to spend a couple of days in hospital but luckily recovered after a course
      of antibiotics <br />
      <div className="mt-6">
        1) True <br />
        2) False <br />
        3) Not state
      </div>
    </div>
  );
  return (
    <TestIS
      lesson="Английский ОГЭ"
      arr={[
        [
          {
            question: `He himself was a very old man with white hair which grew
            over most of his face as well as on his head. The children liked
            him almost at once. Only Lucy, who was the
            __________________ of them, felt a little afraid of him. (YOUNG)`,

            RightAnswer: "youngest",
            name: "id1",
          },
          {
            question: `On their __________________ evening, after dinner, they said
            good night to the Professor and went upstairs. It was the largest
            house they had ever seen, so Peter suggested exploring it in the
            morning. (ONE)`,

            RightAnswer: "first",
            name: "id2",
          },
          {
            question: `When the next morning came, there was a steady rain falling.
            “I wish the weather __________________ more cheerful!” said
            Edmund. (BE)`,

            RightAnswer: "was",
            name: "id3",
          },
          {
            question: `“We were going to explore the house,” Peter reminded them.
            He __________________ a sandwich at the moment and was
            absolutely happy with the whole situation. (EAT)`,

            RightAnswer: "waseating",
            name: "id3",
          },
          {
            question: `Once there were four children whose names were Peter, Susan, 
            Edmund and Lucy. This story happened to 
            __________________ when they had to leave their home city, 
            London, during the war. (THEY)`,

            RightAnswer: "them",
            name: "id3",
          },
          {
            question: `They __________________ to the house of an old Professor 
            who lived in the country, ten miles from the nearest railway 
            station. (SEND)`,

            RightAnswer: "weresent",
            name: "id3",
          },
          {
            question: `He __________________ a wife and he lived in a very large 
            house with a housekeeper. (NOT HAVE) `,

            RightAnswer: "didnothave",
            name: "id3",
          },
          {
            question: `Everyone nodded and at that point their amazing adventures
            __________________. (BEGIN)`,

            RightAnswer: "began",
            name: "id3",
          },
          {
            question: `People travel a lot nowadays. Planes are considered to be the
            most __________________ means of transport but for some
            people airports can be a nightmare. (COMFORT)`,

            RightAnswer: "comfortable",
            name: "id3",
          },
          {
            question: `There are __________________ queues when you check in and
            you waste lots of time if your flight is delayed. (END)`,

            RightAnswer: "endless",
            name: "id3",
          },
          {
            question: `Вы проводите информационный поиск в ходе выполнения проектной работы.
            Определите, в каком из текстов A–F содержатся ответы на
            интересующие Вас вопросы 1–7. Один из вопросов останется без ответа.
            Занесите Ваши ответы в таблицу.`,
            inner: in5,

            RightAnswer: "367541",
            name: "id3",
          },
          {
            question: `The Australian Tourism Office needed a caretaker for six months`,
            inner: in6,

            RightAnswer: "1",
            name: "id3",
          },
          {
            question: `There was no Internet on the islands of the Great Barrier Reef`,
            inner: in6,

            RightAnswer: "2",
            name: "id3",
          },
          {
            question: `Ваше имя`,

            RightAnswer: "",
            name: "id3",
            mn: true,
          },
          {
            question: `Ваш номер телефона`,

            RightAnswer: "",
            name: "id3",
            phone: true,
          },
          {
            question: `Вам перезвонят и сообщать ваши результаты`,
          },
        ],
      ]}
    />
  );
}

export default EngOge;
