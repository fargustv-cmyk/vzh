"use client";

import { useState } from "react";
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  bg: string;
  textColor: string;
  logo: string;
  content: JSX.Element;
};

export default function Home() {
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  const cards: Card[] = [
    {
      id: 1,
      title: "TSOH",
      bg: "#EABF92",
      textColor: "black",
      logo: "/TSOH_LOGO.png",
      content: (
        <>
          <p className="text-black text-sm leading-relaxed opacity-80 mt-4">
            Это telegram‑приложение для пар, которое помогает быть внимательнее и глубже
            в понимании друг друга.<br /><br />
            Оно позволяет обмениваться желаниями, проходить тесты на взаимопонимание
            и вести «энциклопедию» партнёра, чтобы никогда не забывать важные детали.<br /><br />
            Монетизация строится на подписке Premium, которая открывает углублённый контент
            и расширенные инструменты для осознанных пар.
          </p>

          <p className="text-black text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Two Souls One Heart"
          </p>

          <a
            href="https://tsoh.ru"
            className="w-full bg-black text-white text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Запустить приложение
          </a>
        </>
      ),
    },

    {
      id: 2,
      title: "CineShift",
      bg: "#212121",
      textColor: "white",
      logo: "/cineshift.png",
      content: (
        <>
          <p className="text-white text-sm leading-relaxed opacity-80 mt-4">
            Платформа для анализа кино, автоматизации съёмочного процесса и управления продакшеном.
          </p>

          <p className="text-white text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Cinema. Reimagined."
          </p>

          <a
            href="#"
            className="w-full bg-white text-black text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Подробнее
          </a>
        </>
      ),
    },

    {
      id: 3,
      title: "CineShift.org",
      bg: "#212121",
      textColor: "white",
      logo: "/cineshift.png",
      content: (
        <>
          <p className="text-white text-sm leading-relaxed opacity-80 mt-4">
            Образовательная платформа о кино, режиссуре, монтаже и визуальном сторителлинге.
          </p>

          <p className="text-white text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Learn Filmmaking."
          </p>

          <a
            href="#"
            className="w-full bg-white text-black text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Подробнее
          </a>
        </>
      ),
    },

    {
      id: 4,
      title: "ProdProc",
      bg: "#FFFFFF",
      textColor: "black",
      logo: "/prodproc.png",
      content: (
        <>
          <p className="text-black text-sm leading-relaxed opacity-80 mt-4">
            Инструмент для автоматизации производственных процессов и управления командами.
          </p>

          <p className="text-black text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Process. Perfected."
          </p>

          <a
            href="#"
            className="w-full bg-black text-white text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Подробнее
          </a>
        </>
      ),
    },

    {
      id: 5,
      title: "KenoStyle",
      bg: "#222222",
      textColor: "white",
      logo: "/kenostyle.png",
      content: (
        <>
          <p className="text-white text-sm leading-relaxed opacity-80 mt-4">
            Студия визуального дизайна и бренд‑айдентики.
          </p>

          <p className="text-white text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Design with Soul."
          </p>

          <a
            href="#"
            className="w-full bg-white text-black text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Подробнее
          </a>
        </>
      ),
    },

    {
      id: 6,
      title: "KenoMedia",
      bg: "#0C0C0C",
      textColor: "white",
      logo: "/kenomedia.png",
      content: (
        <>
          <p className="text-white text-sm leading-relaxed opacity-80 mt-4">
            Медиа‑продакшен, видеосъёмка, монтаж и пост‑продакшен.
          </p>

          <p className="text-white text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Create. Capture. Craft."
          </p>

          <a
            href="#"
            className="w-full bg-white text-black text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Подробнее
          </a>
        </>
      ),
    },

    {
      id: 7,
      title: "Cerebellar",
      bg: "#0C0C0C",
      textColor: "white",
      logo: "/cerebellar.png",
      content: (
        <>
          <p className="text-white text-sm leading-relaxed opacity-80 mt-4">
            Нейротехнологии, когнитивные интерфейсы и исследования мозга.
          </p>

          <p className="text-white text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Mind. Enhanced."
          </p>

          <a
            href="#"
            className="w-full bg-white text-black text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Подробнее
          </a>
        </>
      ),
    },

    {
      id: 8,
      title: "PlanSync",
      bg: "#FEFFFE",
      textColor: "black",
      logo: "/plansync.png",
      content: (
        <>
          <p className="text-black text-sm leading-relaxed opacity-80 mt-4">
            Планировщик задач, синхронизация проектов и управление временем.
          </p>

          <p className="text-black text-lg opacity-60 font-forum text-center mt-8 tracking-wide">
            "Plan. Sync. Achieve."
          </p>

          <a
            href="#"
            className="w-full bg-black text-white text-center py-3 rounded-xl text-sm opacity-90 hover:opacity-100 transition mt-8"
          >
            Подробнее
          </a>
        </>
      ),
    },
  ];

  const handleCardClick = (card: Card) => {
    setActiveCard(card);
  };

  const handleClose = () => {
    setActiveCard(null);
  };

  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-start p-6">
      <div className="w-full max-w-[400px] flex flex-col space-y-8 relative">

        {/* Профиль */}
        <div className="flex h-[120px]">
          <Image
            src="/profile.jpg"
            alt="Yasha Vozhakin"
            width={90}
            height={90}
            className="rounded-[20px] object-cover"
          />
          <div className="flex flex-col justify-end items-end flex-1">
            <h1 className="text-2xl font-bold leading-snug">Yasha Vozhakin</h1>
            <p className="text-base text-gray-400 leading-snug text-right">
              Founder by<br />
              Vozhakin Group
            </p>
          </div>
        </div>

        {/* СТОПКА */}
        <div
          className={`
            w-full flex flex-col transition-all duration-500
            ${activeCard ? "opacity-0 pointer-events-none translate-y-3" : "opacity-100 translate-y-0"}
          `}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`
                w-full rounded-[24px] px-4 pb-4 pt-0 flex flex-col cursor-pointer
                transition-all duration-500
                h-[500px]
                border border-black/15
                shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                ${index !== 0 ? "-mt-[445px]" : ""}
              `}
              style={{ backgroundColor: card.bg }}
            >
              <div className="flex items-center space-x-3 pt-0">
                <Image src={card.logo} alt={card.title} width={43} height={43} />
                <h2
                  className="text-4xl font-forum leading-tight relative top-[5px]"
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* ПОЛНОЭКРАННАЯ КАРТОЧКА */}
        {activeCard && (
          <div
            className={`
              fixed inset-0 z-20 flex justify-center items-start
              bg-black/60 backdrop-blur-sm
              transition-opacity duration-500
            `}
            onClick={handleClose}
          >
            <div className="w-full max-w-[400px] mx-auto mt-8 px-4">
              <div
                className={`
                  rounded-[28px] p-5 transition-all duration-500
                  opacity-100 translate-y-0
                  border border-black/15
                  shadow-[0_6px_27px_rgba(0,0,0,0.27)]
                `}
                style={{ backgroundColor: activeCard.bg }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={activeCard.logo}
                    alt={activeCard.title}
                    width={43}
                    height={43}
                  />
                  <h2
                    className="text-4xl font-forum leading-tight"
                    style={{ color: activeCard.textColor }}
                  >
                    {activeCard.title}
                  </h2>
                </div>

                {activeCard.content}
              </div>
            </div>
          </div>
        )}

        {/* Telegram */}
        <div className="w-full flex justify-center">
          <a
            href="https://t.me/Yasha_Vozhakin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/telegram.png"
              alt="Telegram"
              width={40}
              height={40}
              className="opacity-100 hover:opacity-100 transition"
            />
          </a>
        </div>

        {/* Логотип */}
        <div className="w-full flex justify-center py-10">
          <Image
            src="/vzh.png"
            alt="Vozhakin Logo"
            width={42}
            height={42}
            className="opacity-80"
          />
        </div>
      </div>
    </main>
  );
}
