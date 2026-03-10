import React, { useState, useRef, useEffect } from "react";

const CARDS = [
  {
    rotation: 0,
    title: "Clinical Excellence",
    desc: "Providing world-class care with the latest evidence-based treatments and techniques.",
    icon: (
      <>
        <path d="M11 2v2" />
        <path d="M5 2v2" />
        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
        <path d="M8 15a6 6 0 0 0 12 0v-3" />
        <circle cx="20" cy="10" r="2" />
      </>
    ),
  },
  {
    rotation: 1.6,
    title: "Compassionate Care",
    desc: "Supporting patients and families through every step of their healthcare journey.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    rotation: 6,
    title: "Research & Innovation",
    desc: "Contributing to medical advancement through research and professional leadership.",
    icon: (
      <>
        <path d="M15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </>
    ),
  },
];

const TOTAL = CARDS.length;
const THRESHOLD = 55;

// Stacked deck positions: front card flat, back cards rotated
const RANK_STYLE = [
  { zIndex: 30, rotate: "0deg",   scale: 1    },
  { zIndex: 20, rotate: "1.6deg", scale: 0.97 },
  { zIndex: 10, rotate: "6deg",   scale: 0.94 },
];

export default function AboutSectionView() {
  const [stack, setStack] = useState([0, 1, 2]);
  const [exitingCardIdx, setExitingCardIdx] = useState(null);
  const [suppressCardIdx, setSuppressCardIdx] = useState(null);
  const stackRef       = useRef([0, 1, 2]);
  const cardStackRef   = useRef(null);
  const exitActiveRef  = useRef(false);
  const shownCountRef  = useRef(1);
  const accumRef       = useRef(0);
  const lastDirRef     = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const syncedSetStack = (updater) => {
      setStack((prev) => {
        const next = updater(prev);
        stackRef.current = next;
        return next;
      });
    };

    const cycle = (dir) => {
      if (exitActiveRef.current) return;
      exitActiveRef.current = true;
      accumRef.current = 0;

      if (dir === 1) {
        // Fly the front card upward and fade it out, then commit
        const frontIdx = stackRef.current[0];
        setExitingCardIdx(frontIdx);

        setTimeout(() => {
          shownCountRef.current = Math.min(shownCountRef.current + 1, TOTAL);
          syncedSetStack((prev) => {
            const [front, ...rest] = prev;
            return [...rest, front];
          });
          setSuppressCardIdx(frontIdx);
          setExitingCardIdx(null);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setSuppressCardIdx(null);
              exitActiveRef.current = false;
            });
          });
        }, 320);
      } else {
        // Spring the back card to front
        shownCountRef.current = Math.max(shownCountRef.current - 1, 1);
        syncedSetStack((prev) => {
          const last = prev[prev.length - 1];
          return [last, ...prev.slice(0, -1)];
        });
        setTimeout(() => { exitActiveRef.current = false; }, 480);
      }
    };

    const handleWheel = (e) => {
      if (window.innerWidth >= 640) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      if (dir === 1 && shownCountRef.current >= TOTAL) return;
      if (dir === -1 && stackRef.current[0] === 0) return;
      e.preventDefault();
      if (dir !== lastDirRef.current) { accumRef.current = 0; lastDirRef.current = dir; }
      accumRef.current += Math.abs(e.deltaY);
      if (accumRef.current >= THRESHOLD) cycle(dir);
    };

    const handleTouchStart = (e) => {
      if (window.innerWidth >= 640) return;
      touchStartYRef.current = e.touches[0].clientY;
      accumRef.current = 0;
    };

    const handleTouchMove = (e) => {
      if (window.innerWidth >= 640) return;
      const delta = touchStartYRef.current - e.touches[0].clientY;
      touchStartYRef.current = e.touches[0].clientY;
      const dir = delta > 0 ? 1 : -1;
      if (dir === 1 && shownCountRef.current >= TOTAL) return;
      if (dir === -1 && stackRef.current[0] === 0) return;
      e.preventDefault();
      if (dir !== lastDirRef.current) { accumRef.current = 0; lastDirRef.current = dir; }
      accumRef.current += Math.abs(delta);
      if (accumRef.current >= THRESHOLD) cycle(dir);
    };

    const attach = () => {
      if (!cardStackRef.current) { setTimeout(attach, 50); return; }
      cardStackRef.current.addEventListener("wheel", handleWheel, { passive: false });
      cardStackRef.current.addEventListener("touchstart", handleTouchStart, { passive: true });
      cardStackRef.current.addEventListener("touchmove", handleTouchMove, { passive: false });
    };

    attach();
    const el = cardStackRef.current;
    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
        el.removeEventListener("touchstart", handleTouchStart);
        el.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

  return (
    <section className="bg-white" id="about">

      {/* ── Mobile: gesture-locked card deck ── */}
      <div className="sm:hidden py-10 px-5">
        <div className="text-center mb-8">
          <h2 className="text-section text-primary-pink mb-4">
            About Mr Ketankumar Gajjar
          </h2>
          <p className="text-body-large text-black/90 max-w-3xl mx-auto">
            A leading consultant in gynaecological oncology, dedicated to
            providing exceptional care and advancing women's health through
            clinical excellence and research.
          </p>
        </div>

        <div
          ref={cardStackRef}
          style={{
            position: "relative",
            height: 320,
            maxWidth: 420,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          {stack.map((cardIdx, rank) => {
            const s = RANK_STYLE[rank];
            const isExiting   = cardIdx === exitingCardIdx;
            const noTransition = cardIdx === suppressCardIdx;

            let transform  = `rotate(${s.rotate}) scale(${s.scale})`;
            let opacity    = 1;
            let transition = "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.35s ease-out";
            let zIndex     = s.zIndex;

            if (noTransition) {
              transition = "none";
            } else if (isExiting) {
              // Fly upward and fade — matches ServicesSection exit style
              transform  = "translateY(-180%) rotate(0deg) scale(0.9)";
              opacity    = 0;
              transition = "transform 0.32s ease-in, opacity 0.28s ease-in";
              zIndex     = 40;
            }

            return (
              <div
                key={cardIdx}
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: 420,
                  zIndex,
                  transform,
                  opacity,
                  transition,
                  transformOrigin: "center",
                  willChange: "transform, opacity",
                }}
                className="bg-white rounded-2xl border border-primary-pink shadow-md p-6 flex flex-col items-center text-center gap-4 select-none"
              >
                <div className="bg-primary-pink/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-primary-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {CARDS[cardIdx].icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-card-title text-[#1F2937] mb-2">
                    {CARDS[cardIdx].title}
                  </h3>
                  <p className="text-body text-black/80 text-sm leading-relaxed">
                    {CARDS[cardIdx].desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {CARDS.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                stack[0] === i
                  ? "w-5 h-2.5 bg-primary-pink"
                  : "w-2.5 h-2.5 bg-primary-pink/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop: regular grid ── */}
      <div className="hidden sm:block py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-section text-primary-pink mb-4" data-aos="fade-up">
            About Mr Ketankumar Gajjar
          </h2>
          <p
            className="text-body-large text-black/90 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A leading consultant in gynaecological oncology, dedicated to
            providing exceptional care and advancing women's health through
            clinical excellence and research.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="group bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-primary-pink shadow-sm text-center p-6 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.3)]"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="bg-primary-pink/10 group-hover:bg-primary-pink/20 transition-colors duration-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-pink"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-card-title mb-2 text-[#1F2937]">{card.title}</h3>
              <p className="text-body text-black/90">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
