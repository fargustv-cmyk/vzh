"use client";

import { useState, UIEvent, useRef, useEffect } from "react";
import Image from "next/image";

type Slide = {
  title: string;
  bg: string;
  textColor: string;
  logo: string;
  description: string;
  tagline: string;
  link: string;
  buttonText: string;
};

type Card = {
  id: number;
  title: string;
  bg: string;
  textColor: string;
  logo: string;
  slides: Slide[];
};

export default function Home() {
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isCosmicTheme, setIsCosmicTheme] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Escape key to close modal + Arrow keys for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCard) {
        handleClose();
      }
      if (e.key === "ArrowRight" && activeCard && activeSlideIndex < activeCard.slides.length - 1) {
        setActiveSlideIndex(activeSlideIndex + 1);
      }
      if (e.key === "ArrowLeft" && activeCard && activeSlideIndex > 0) {
        setActiveSlideIndex(activeSlideIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCard, activeSlideIndex]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply/remove cosmic theme
  useEffect(() => {
    if (isCosmicTheme) {
      document.body.classList.add("cosmic-theme");
    } else {
      document.body.classList.remove("cosmic-theme");
    }
  }, [isCosmicTheme]);

  // ПРОЕКТЫ - ЛЕГКО МЕНЯТЬ ОПИСАНИЯ И ДОБАВЛЯТЬ НОВЫЕ
  // ===============================================
  // КАК СОЗДАВАТЬ СТОПКИ:
  // 1. Скопируй CineShift блок (lines ~95-145)
  // 2. Измени id на следующий номер
  // 3. Добавь столько slides сколько нужно (каждый slide - это одна карточка в стопке)
  // 4. При свайпе/листании переключается между slides одной карточки
  // 5. На мобильном будут кнопки ← → для листания
  // 6. На ПК будут стрелки слева/справа от модалки + клавиши ←/→
  // ===============================================
  const cards: Card[] = [
    // ========================================
    // TSOH
    // ========================================
    {
      id: 1,
      title: "TSOH",
      bg: "#EABF92",
      textColor: "black",
      logo: "/TSOH_LOGO.png",
      slides: [
        {
          title: "TSOH",
          bg: "#EABF92",
          textColor: "black",
          logo: "/TSOH_LOGO.png",
          description: "Это telegram‑приложение для пар, которое помогает быть внимательнее и глубже в понимании друг друга.\n\nОно позволяет обмениваться желаниями, проходить тесты на взаимопонимание и вести «энциклопедию» партнёра, чтобы никогда не забывать важные детали.\n\nМонетизация строится на подписке Premium, которая открывает углублённый контент и расширенные инструменты для осознанных пар.",
          tagline: "Two Souls One Heart",
          link: "https://tsoh.ru",
          buttonText: "Запустить приложение",
        },
      ],
    },

    // ========================================
    // CINESHIFT (СТОПКА - 2 слайда)
    // Структура для создания других стопок:
    // id: уникальный номер
    // title: название карточки (видно в стопке)
    // bg/textColor: цвета основной карточки
    // logo: путь к логотипу
    // slides: массив с слайдами (можешь добавлять неограниченно)
    // ========================================
    {
      id: 2,
      title: "CineShift",
      bg: "#212121",
      textColor: "white",
      logo: "/CineShift.png",
      slides: [
        // СЛАЙД 1 - CineShift
        {
          title: "CineShift",
          bg: "#212121",
          textColor: "white",
          logo: "/CineShift.png",
          description: "Это персональный цифровой ассистент для работников: кино, телевидения и трансляций.\n\nОн заменяет ручные таблицы, автоматически рассчитывая смены со всеми нюансами и помогая вести личное оборудование для учёта в сменах.\n\nДоступно как веб-приложение с 30-дневным триалом и удобной подпиской.",
          tagline: "За кадром твоего успеха",
          link: "https://cineshift.ru",
          buttonText: "Начать учет смен",
        },
        // СЛАЙД 2 - CineShift.org
        {
          title: "CineShift.org",
          bg: "#212121",
          textColor: "white",
          logo: "/CineShift.png",
          description: "Это платформа для автоматизации производственных процессов и управления командами в индустрии медиа и проката.\n\nИнструмент превращает хаос съёмочного процесса в отлаженную систему, объединяя учёт смен, контроль оборудования, управление договорами и подбор проверенных специалистов через интеграцию с сообществом Cineshift.\n\nЭто единая среда для командной работы, доступная как веб-приложение с пробным периодом и гибкой подпиской для компаний.",
          tagline: "Твой цифровой продюсер на каждом этапе",
          link: "https://cineshift.org",
          buttonText: "Запустить Trial-версию",
        },
      ],
    },

    // ========================================
    // PRODPROC
    // ========================================
    {
      id: 3,
      title: "ProdProc",
      bg: "#FFFFFF",
      textColor: "black",
      logo: "/ProdProc.png",
      slides: [
        {
          title: "ProdProc",
          bg: "#FFFFFF",
          textColor: "black",
          logo: "/ProdProc.png",
          description: "CRM для управления производством контента, включая полный цикл работы с документами: контракты, сметы, согласования, архивы.\n\nСистематизируйте процесс, контролируйте этапы и храните все юридические и финансовые документы в защищённом облаке.\n\nВаш цифровой продюсерский офис.",
          tagline: "Система. Документы. Результат",
          link: "https://prodproc.ru",
          buttonText: "Открыть CRM",
        },
      ],
    },

    // ========================================
    // KENOSTYLE
    // ========================================
    {
      id: 4,
      title: "KenoStyle",
      bg: "#222222",
      textColor: "white",
      logo: "/keno.png",
      slides: [
        {
          title: "KenoStyle",
          bg: "#1a1a1a",
          textColor: "white",
          logo: "/keno.png",
          description: "Это экипировка, созданная для тех, кто делает кино. От худи и комбинезонов до перчаток и кофров — всё, что нужно на съёмочной площадке.\n\nБольше не придётся искать снаряжение в магазинах для альпинистов или военных.\n\nТолько функционально, стильно и своё.",
          tagline: "Одежда для своих, от своих",
          link: "https://kenostyle.ru",
          buttonText: "Открыть каталог",
        },
      ],
    },

    // ========================================
    // KENOMEDIA
    // ========================================
    {
      id: 5,
      title: "KenoMedia",
      bg: "#0C0C0C",
      textColor: "white",
      logo: "/MEDIA.png",
      slides: [
        {
          title: "KenoMedia",
          bg: "#0C0C0C",
          textColor: "white",
          logo: "/MEDIA.png",
          description: "Это операторский продакшн полного цикла, созданный командой профессионалов из индустрии кино и телевидения.\n\nМы специализируемся на многокамерных трансляциях, съёмках рекламы и сложных проектах, где важен каждый кадр.\n\nНаше ключевое отличие — профессиональное кинооборудование и подход: мы снимаем трансляции так, как снимают кино, уделяя внимание свету, композиции и динамике. Мы не просто «передаём картинку», мы создаём визуальную историю, за которую в кино платят большие деньги.",
          tagline: "Добавляем в трансляции то, за что платят в кино",
          link: "https://kenomedia.ru",
          buttonText: "Заказать трансляцию",
        },
      ],
    },

    // ========================================
    // PLANSYNC
    // ========================================
    {
      id: 6,
      title: "PlanSync",
      bg: "#FEFFFE",
      textColor: "black",
      logo: "/PlanSync.png",
      slides: [
        {
          title: "PlanSync",
          bg: "#FEFFFE",
          textColor: "black",
          logo: "/PlanSync.png",
          description: "Экосистема для планирования, которая соединяет магию бумажного дневника с мощью цифрового приложения.\n\n Проект создан для тех, кто ценит тактильность и фокус рукописных записей, но не хочет терять преимущества цифровой синхронизации и гибкой организации.",
          tagline: "Ваши планы — в идеальном ритме",
          link: "https://plansync.ru",
          buttonText: "Выбрать блокнот",
        },
      ],
    },
  ];

  const handleCardClick = (card: Card) => {
    setActiveCard(card);
    setActiveSlideIndex(0);
  };

  const handleClose = () => {
    setActiveCard(null);
    setActiveSlideIndex(0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white flex justify-center items-start p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[500px] md:max-w-6xl md:grid md:grid-cols-2 md:gap-8 md:items-start flex flex-col space-y-10 relative">
        {/* ПРОФИЛЬ */}
        <div 
          className={`animate-slideUp cursor-pointer ${isCosmicTheme ? "hidden" : "block"}`}
          onClick={scrollToTop}
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        >
          <div className="flex items-end gap-4 p-6 rounded-3xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <Image
                src="/profile.jpg"
                alt="Yasha Vozhakin"
                width={90}
                height={90}
                className="relative rounded-2xl object-cover border border-slate-600/50 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-end flex-1 pb-1">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent font-poppins">
                Yasha Vozhakin
              </h1>
              <p className="text-sm text-slate-400 leading-snug mt-1 font-inter">
                Founder by Vozhakin Group
              </p>
            </div>
          </div>
        </div>

        {/* СТОПКА КАРТОЧЕК */}
        <div
          className={`w-full flex flex-col ${
            activeCard
              ? "opacity-0 pointer-events-none translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
          style={{ 
            transform: `translateY(${parallaxOffset * 0.3}px)`,
            display: isCosmicTheme ? "none" : "flex"
          }}
        >
          {cards.map((card, index) => {
            const mainSlide = card.slides[0];
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={`relative w-full rounded-3xl px-5 py-4 md:px-8 md:py-5 flex flex-col cursor-pointer transition-all duration-300 h-[160px] md:h-[180px] border border-slate-600/30 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 group animate-slideUp overflow-hidden`} 
                style={{
                  backgroundColor: mainSlide.bg,
                  zIndex: index,
                  boxShadow: `0 ${5 + index * 2}px ${15 + index * 5}px rgba(0, 0, 0, 0.3)`,
                  backgroundImage: `linear-gradient(135deg, ${mainSlide.bg}dd 0%, ${mainSlide.bg}99 100%)`,
                  marginTop: index !== 0 ? "-60px" : "0",
                }}
              >
                {/* SHIMMER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent"></div>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white to-transparent transition-opacity duration-300"></div>

                {/* CONTENT */}
                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="relative group/logo flex-shrink-0">
                      <div className="absolute -inset-1 bg-gradient-to-r from-slate-400/20 to-slate-600/20 rounded-lg blur opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src={mainSlide.logo}
                        alt={mainSlide.title}
                        width={56}
                        height={56}
                        className="relative rounded-lg object-cover group-hover/logo:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2
                        className="text-lg sm:text-xl md:text-2xl font-bold leading-snug tracking-tight font-poppins truncate"
                        style={{ color: mainSlide.textColor }}
                      >
                        {mainSlide.title}
                      </h2>
                      <p
                        className="text-xs sm:text-sm md:text-base opacity-60 font-inter mt-0.5 truncate"
                        style={{ color: mainSlide.textColor }}
                      >
                        {mainSlide.tagline}
                      </p>
                    </div>
                  </div>

                  {/* BADGE ДЛЯ СТОПОК */}
                  {card.slides.length > 1 && (
                    <div className="bg-white/15 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-semibold border border-white/30 font-inter flex-shrink-0">
                      +{card.slides.length}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* COSMIC MODE FULLSCREEN PROFILE */}
        {isCosmicTheme && (
          <div className="fixed inset-0 z-50 flex flex-col justify-center items-center w-screen h-screen">
            <div className="text-center px-6 z-10">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-3xl blur-2xl animate-pulse"></div>
                  <Image
                    src="/profile.jpg"
                    alt="Yasha Vozhakin"
                    width={150}
                    height={150}
                    className="relative rounded-3xl object-cover border-2 border-white/50"
                  />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-3 font-poppins animate-pulse">
                Yasha Vozhakin
              </h1>
              
              <p className="text-lg md:text-2xl text-white/80 mb-8 font-inter">
                Founder & Creator
              </p>
              
              <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed mb-12 font-inter">
                Ideas first. 
                <br/>
                
                I design systems that feel — tactile, visual, emotional.
                <br/><br/>
                From tech to retail. 
                <br/>
                I build experiences where clarity meets imagination.
              </p>

              <div className="flex gap-4 justify-center mb-8">
                <a
                  href="https://t.me/Yasha_Vozhakin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-white font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Telegram
                </a>
              </div>

              <button
                onClick={() => setIsCosmicTheme(false)}
                className="text-4xl font-bold text-white transition-all duration-300 cursor-pointer"
                style={{ animation: "buttonPulse 2s ease-in-out infinite" }}
                title="Return to projects"
              >
                ✦
              </button>
            </div>
          </div>
        )}

        {/* МОДАЛЬНОЕ ОКНО С ОПИСАНИЕМ */}
        {activeCard && (
          <div
            className="fixed inset-0 z-40 flex justify-center items-start md:items-center bg-black/20 backdrop-blur-md transition-opacity duration-300 pt-6 sm:pt-12 md:pt-0 px-4"
            onClick={handleClose}
          >
            <div
              className="w-full max-w-[420px] md:max-w-[920px] animate-scaleIn md:rounded-3xl relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ЛЕВАЯ СТРЕЛКА - Desktop only */}
              {activeCard.slides.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeSlideIndex > 0) setActiveSlideIndex(activeSlideIndex - 1);
                  }}
                  className="hidden md:block absolute -left-20 z-50 text-5xl text-white/40 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                  disabled={activeSlideIndex === 0}
                >
                  ←
                </button>
              )}

              {/* ПРАВАЯ СТРЕЛКА - Desktop only */}
              {activeCard.slides.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeSlideIndex < activeCard.slides.length - 1) setActiveSlideIndex(activeSlideIndex + 1);
                  }}
                  className="hidden md:block absolute -right-20 z-50 text-5xl text-white/40 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                  disabled={activeSlideIndex === activeCard.slides.length - 1}
                >
                  →
                </button>
              )}

              {/* СОДЕРЖИМОЕ СЛАЙДА */}
              <div className="relative w-full">
                <div className="flex flex-col items-center">
                  {/* ТЕКУЩИЙ СЛАЙД */}
                  {activeCard.slides[activeSlideIndex] && (
                    <div
                      key={activeSlideIndex}
                      onClick={handleClose}
                      className="rounded-3xl p-4 sm:p-6 cursor-pointer border border-slate-600/30 shadow-2xl transition-all duration-300 hover:shadow-3xl group min-h-[520px] md:min-h-[620px] w-full animate-fadeIn"
                      style={{
                        backgroundColor: activeCard.slides[activeSlideIndex].bg,
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {/* GRADIENT OVERLAY */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 bg-gradient-to-br from-white to-transparent transition-opacity duration-300"></div>

                      <div className="relative flex flex-col h-full">
                        {/* HEADER */}
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                          <div className="relative group/logo flex-shrink-0">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400/20 to-slate-600/20 rounded-lg blur opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src={activeCard.slides[activeSlideIndex].logo}
                              alt={activeCard.slides[activeSlideIndex].title}
                              width={64}
                              height={64}
                              className="relative rounded-lg object-cover group-hover/logo:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h2
                              className="text-lg sm:text-xl font-bold tracking-tight font-poppins truncate"
                              style={{ color: activeCard.slides[activeSlideIndex].textColor }}
                            >
                              {activeCard.slides[activeSlideIndex].title}
                            </h2>
                          </div>
                        </div>

                        {/* ОПИСАНИЕ */}
                        <div className="flex-1 font-inter space-y-3 mb-4">
                          {activeCard.slides[activeSlideIndex].description.split('\n\n').map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-sm md:text-base leading-relaxed opacity-75"
                              style={{ color: activeCard.slides[activeSlideIndex].textColor }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* FOOTER */}
                        <div className="pt-3 border-t border-white/10 space-y-6">
                          {/* СЛОГАН */}
                          <p
                            className="text-sm opacity-60 font-montserrat text-center italic font-medium"
                            style={{ color: activeCard.slides[activeSlideIndex].textColor }}
                          >
                            {activeCard.slides[activeSlideIndex].tagline}
                          </p>

                          {/* КНОПКА */}
                          <a
                            href={activeCard.slides[activeSlideIndex].link}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full text-center py-2.5 sm:py-3 rounded-2xl text-sm md:text-base font-semibold font-poppins opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-lg active:scale-95 block border transition-colors"
                            style={{
                              backgroundColor:
                                activeCard.slides[activeSlideIndex].textColor === "black" ? "black" : "white",
                              color:
                                activeCard.slides[activeSlideIndex].textColor === "black" ? "white" : "black",
                              borderColor:
                                activeCard.slides[activeSlideIndex].textColor === "black"
                                  ? "rgba(0,0,0,0.2)"
                                  : "rgba(255,255,255,0.2)",
                            }}
                          >
                            {activeCard.slides[activeSlideIndex].buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ИНДИКАТОРЫ СЛАЙДОВ (под карточкой) */}
                  {activeCard.slides.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4 md:mt-6">
                      {activeCard.slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlideIndex(i);
                          }}
                          className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-110 ${
                            i === activeSlideIndex
                              ? "w-8 h-2.5 bg-white"
                              : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Перейти к слайду ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* ЛЕВАЯ АКТИВНАЯ ЗОНА - Mobile only */}
                {activeCard.slides.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (activeSlideIndex > 0) setActiveSlideIndex(activeSlideIndex - 1);
                    }}
                    className="md:hidden absolute left-0 top-0 bottom-0 w-1/4 z-40 cursor-pointer group"
                    disabled={activeSlideIndex === 0}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center pl-2">
                      <span className="text-2xl text-white/50">←</span>
                    </div>
                  </button>
                )}

                {/* ПРАВАЯ АКТИВНАЯ ЗОНА - Mobile only */}
                {activeCard.slides.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (activeSlideIndex < activeCard.slides.length - 1) setActiveSlideIndex(activeSlideIndex + 1);
                    }}
                    className="md:hidden absolute right-0 top-0 bottom-0 w-1/4 z-40 cursor-pointer group"
                    disabled={activeSlideIndex === activeCard.slides.length - 1}
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-2">
                      <span className="text-2xl text-white/50">→</span>
                    </div>
                  </button>
                )}
              </div> 
            </div>
          </div>
        )}

        {/* FOOTER SECTION */}
        <div 
          className={`w-full flex flex-col items-center gap-6 pt-12 pb-6 animate-slideUp md:col-span-2 ${isCosmicTheme ? "hidden" : "block"}`}
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        >
          {/* DIVIDER */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

          {/* SIMPLE LINKS */}
          <div className="flex gap-8 justify-center">
            {/* TELEGRAM LINK */}
            <a
              href="https://t.me/Yasha_Vozhakin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-inter text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              <Image
                src="/telegram.png"
                alt="Telegram"
                width={16}
                height={16}
              />
              Telegram
            </a>

            {/* SEPARATOR */}
            <div className="w-px h-5 bg-slate-700/30"></div>

            {/* BRAND */}
            <div className="text-sm font-inter text-slate-400 flex items-center gap-2">
              <Image
                src="/vzh.png"
                alt="Vozhakin Group"
                width={16}
                height={16}
              />
              Vozhakin Group
            </div>
          </div>

          {/* YEAR */}
          <p className="text-xs text-slate-600 font-inter">
            © 2025
          </p>

          {/* EASTER EGG - COSMIC THEME BUTTON */}
          <button
            onClick={() => setIsCosmicTheme(!isCosmicTheme)}
            className="text-sm sm:text-xs text-slate-700 hover:text-white transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer font-bold hover:scale-150 hover:drop-shadow-lg"
            title="Unlock the cosmos..."
          >
            ✦
          </button>
        </div>

        {/* SPACING */}
        <div className="h-8"></div>
      </div>
    </main>
  );
}
