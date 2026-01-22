import React from "react";
import TestIS from "./TestIS";

function EngEge() {
  let in1 = (
    <div className="text-white md:text-2xl lg:text-3xl  mt-10  robotoMono">
      1. Watching predators and prey <br /> 2. Hot water, cold air
      <br /> 3. How locals live and entertain <br /> 4. Impressive but difficult
      to reach <br /> 5. For the strong and adventurous <br /> 6. Nature and
      activities to enjoy <br /> 7. Conquering cold waves <br /> 8. Closer to
      wildlife
      <div className="mt-6">
        A. At the edge of Russia, on the Pacific Ocean, there is the distinctive
        Kamchatka peninsula, famous for its rich natural diversity. This land is
        surrounded by rough ocean waters, in the interior lie fiery volcanoes
        and boiling, steaming geysers. Some 300 volcanoes, 29 of which are
        active, make up nearly 40% of the peninsula. But Kamchatka’s landscapes
        and natural diversity are not the only things to attract the travellers
        from far and wide: the area is also rich in opportunities for extreme
        sports. Make your adventures in Kamchatka unforgettable.
        <br />
        B. Surfing in Bali is no big deal these days: the hot sun, the warm
        ocean, coconuts, bananas… We’ve seen it all! How about surfing in the
        chilly waters of the Pacific in Kamchatka? One of Kamchatka’s best surf
        destinations is Khalaktyrsky beach. You can catch waves here almost all
        year long: the hardiest of surfers are ready to jump in in sub-zero
        temperatures. Naturally, the best time to surf is summer when surf
        schools and equipment rental places are open for business. You don’t
        feel the cold in a wetsuit!
        <br />
        C. The Kamchatka peninsula is washed by the Pacific Ocean and the Bering
        Sea to the northeast and by the Sea of Okhotsk to the west. One of the
        best ways to explore the rugged coastline is to take a long trip by
        kayak. On the water, you’ll find yourself face to face with wild nature:
        you can get acquainted with sea lions, seals, killer whales and other
        sea creatures, and see the most beautiful, secluded bays, islands,
        headlands and lakes inland. You’re going to be taking numerous pictures
        of the seals and sea lions as they bask in the sun.
        <br />
        D. With vast numbers of fish, it is no wonder that Lake Kuril attracts
        over 200 Kamchatka brown bears who visit the lake to fish. Across the
        whole peninsula, there are around 20,000 bears altogether – that’s one
        bear to every 15 human inhabitants. Over the years, the animals on Lake
        Kuril have adapted to life alongside humans. Therefore, you can observe
        the bears and their prey close up as they show no signs of aggression.
        An experienced guide knows exactly where to observe them to make your
        adventure absolutely safe.
        <br />
        E. Discovered as recently as 1941, the Valley of Geysers in the
        Kronotsky Reserve in Kamchatka is one of the world’s largest geyser
        fields and is the only one in Eurasia. In a cramped 8 square kilometer
        piece of land there are over 40 powerful spouting geysers, not to
        mention hot springs, mud pools, thermal sites, waterfalls, all
        surrounded by volcanoes. As dangerous as any of these places seem, there
        are special paths for travellers. You can only get to the valley by air,
        so take a helicopter tour and face the raw power of Mother Nature.
        <br />
        F. If you feel comfortable on the runs at Alpine resorts and consider
        yourself experienced, Kamchatka will surprise you: imagine skiing down
        the slopes of an active volcano with breathtaking views over the
        Pacific! This is no fantasy: we suggest experienced riders try
        heli-skiing! Fly to the highest volcanoes’ peaks by helicopter, then
        enjoy the buzz of skiing the untouched slopes with awesome views of the
        not-so-distant Pacific. Such an activity requires skiers to be in great
        shape physically, and to have the love of an adrenaline rush.
        <br />
        G. Kamchatka is a very harsh place to live, yet people have lived here
        for centuries. In order to survive, they had to learn to live in harmony
        with nature. That led to the development of rituals that are still
        performed. When you visit, you can see how the indigenous people of
        Kamchatka have been living for generations in the village of Pimchakh
        that is open to visitors. Shortage of snow is never an issue, so the
        locals happily indulge in competitive and recreational dog sled races.
        You should certainly put a short dog sled trip on your bucket list
      </div>
      <div className="mt-6">
        {" "}
        Текст A B C D E F G<br />
        Вопрос
      </div>
    </div>
  );
  let in2 = (
    <div className="text-white md:text-2xl lg:text-3xl  mt-10  robotoMono">
      Do jellyfish sleep? Worms and fish do it. Birds and bees do it. But do
      jellyfish fall asleep? It was after midnight A_______________________
      where the jellyfish were kept. They left the lights off and walked through
      the room by the glow of their cellphones. The students did not tell anyone
      that they were doing this. The secret they were keeping was a “totally
      crazy” experiment aimed at finding out whether jellyfish sleep.
      <br />
      A few weeks before, B_______________________ whether jellyfish needed to
      sleep. “Of course not,” said one of them. “Sleep helps
      C_______________________. Jellyfish are so simple they don’t even have
      brains. How could they possibly share the need to sleep?” The others
      weren’t so sure, but they wanted to find out.
      <br />
      The three students designed an experiment to test different behaviors and
      see if the jellyfish were asleep. They watched the animals to see how they
      moved, and D_______________________ when they were resting. It turned out
      that the jellyfish moved about 30 percent less at night. It was also
      harder to get their attention.
      <br />
      Months of late-night studying led to amazing results. Young scientists
      reported E_______________________ sleeplike behavior. This made it the
      first animal without a brain known to do so. The results suggest
      F_______________________ life, as the jellyfish group of animals first
      arose about 700 million years ago, and has stuck with us ever since.
      <div className="mt-6">
        1. how talkative they were in a situation close to
        <br /> 2. that sleep evolved early in the history of animal
        <br />
        3. that the upside-down jellyfish Cassiopea showed
        <br />
        4. strengthen memory and keep the brain healthy
        <br />
        5. the students were having coffee and started debating
        <br />
        6. when three science students crept into the lab
        <br />
        7. if they could get the jellies’ attention
      </div>
      <div className="mt-6">
        {" "}
        Текст A B C D E F G<br />
        Вопрос
      </div>
    </div>
  );
  return (
    <TestIS
      lesson="Английский ЕГЭ"
      arr={[
        [
          {
            question: `Установите соответствие между текстами A–G и заголовками 1–8.
            Занесите свои ответы в таблицу. Используйте каждую цифру только
            один раз. В задании один заголовок лишний.`,
            inner: in1,
            RightAnswer: "6781453",
            name: "id1",
          },
          {
            question: `Прочитайте текст и заполните пропуски A–F частями предложений,
            обозначенными цифрами 1–7. Одна из частей в списке 1–7 лишняя.
            Занесите цифры, обозначающие соответствующие части предложений,
            в таблицу.`,
            inner: in2,

            RightAnswer: "654732",
            name: "id2",
          },
          {
            question: `A cleaning wand is a totally new invention. It features the
            advanced UV-C technology that helps to kill bacteria and
            germs. It’s the __________________ ever cleaning device you
            can literally take anywhere. (ONE)`,

            RightAnswer: "first",
            name: "id3",
          },
          {
            question: `The __________________ thing about it is that it can clean
            anything. (GOOD)`,

            RightAnswer: "best",
            name: "id3",
          },
          {
            question: `There’s no doubt that __________________ are going to like
            this invention very much. (WOMAN)`,

            RightAnswer: "women",
            name: "id3",
          },
          {
            question: `Robert A. Heinlein was a US science fiction author. He was
            among those writers who emphasized scientific accuracy in
            their fiction. He also __________________ it was necessary to
            challenge the readers (THINK)`,

            RightAnswer: "thought",
            name: "id3",
          },
          {
            question: `He pointed out it was necessary to develop
            __________________ critical thinking. (THEY)`,

            RightAnswer: "their",
            name: "id3",
          },
          {
            question: `He pointed out that any science fiction book
            __________________ a success if the author followed these
            two important principles. (BE) `,

            RightAnswer: "wouldbe",
            name: "id3",
          },
          {
            question: `After a short period of studying and working abroad Sechenov
            returned to Russia where he made numerous discoveries in
            psychology, physiology and anatomy, many of which we still
            use today. Publishing houses __________________ his
            scientific works every year. (PRINT)`,

            RightAnswer: "reprint",
            name: "id3",
          },
          {
            question: `He mastered biology, anatomy, surgery and physiology to
            __________________. (PERFECT)`,

            RightAnswer: "perfection",
            name: "id3",
          },
          {
            question: `Ivan Sechenov was an outstanding Russian scientist. He was
            born in 1829 in a noble family. His parents inspired young Ivan
            to continue his education throughout his entire life, and the boy
            followed their advice. At the age of 14 he chose to become
            a military engineer and studied __________________ technical
            subjects. (VARY)`,

            RightAnswer: "various",
            name: "id3",
          },
          {
            question: `However, his heart was not really in it. In 1850 Sechenov
            entered Moscow Medical University with a full
            __________________ of the goals of his life. (AWARE)`,

            RightAnswer: "awareness",
            name: "id3",
          },
          {
            question: `Sechenov was a __________________ student, which enabled
            him to graduate among top students. (WILL)`,

            RightAnswer: "willing",
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

export default EngEge;
