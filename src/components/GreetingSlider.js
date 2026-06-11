import React, { useEffect, useState, useRef } from "react";
import "./GreetingSlider.css";

const greetings = [
  { text: "Hello",      lang: "English",    dir: "ltr" },
  { text: "नमस्ते",      lang: "हिन्दी",      dir: "ltr" },
  { text: "Bonjour",    lang: "Français",   dir: "ltr" },
  { text: "Hola",       lang: "Español",    dir: "ltr" },
  { text: "Привет",     lang: "Русский",    dir: "ltr" },
  { text: "こんにちは",  lang: "日本語",      dir: "ltr" },
  { text: "你好",        lang: "中文",        dir: "ltr" },
  { text: "مرحبا",      lang: "العربية",    dir: "rtl" },
  { text: "안녕하세요",  lang: "한국어",      dir: "ltr" },
  { text: "Ciao",       lang: "Italiano",   dir: "ltr" },
  { text: "Olá",        lang: "Português",  dir: "ltr" },
  { text: "Merhaba",    lang: "Türkçe",     dir: "ltr" },
];

const FAST_SPIN_DURATION = 2000;
const SLOW_DOWN_STEPS    = 8;
const HOLD_DURATION      = 2200;
const INITIAL_INTERVAL   = 80;
const FINAL_INTERVAL     = 520;

// Preload font — non-blocking, won't delay page render
function preloadFont() {
  if (document.querySelector('link[data-greeting-font]')) return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400&display=swap";
  link.setAttribute("data-greeting-font", "1");
  link.onload = () => { link.rel = "stylesheet"; };
  document.head.appendChild(link);
}

function GreetingSlider() {
  const [index,   setIndex]   = useState(0);
  const [phase,   setPhase]   = useState("fast");
  const [animKey, setAnimKey] = useState(0);

  const indexRef    = useRef(0);
  const targetRef   = useRef(0);
  const timerRef    = useRef(null);

  const clear = () => {
    clearInterval(timerRef.current);
    clearTimeout(timerRef.current);
  };

  const advance = () => {
    indexRef.current = (indexRef.current + 1) % greetings.length;
    setIndex(indexRef.current);
    setAnimKey((k) => k + 1);
  };

  const startCycle = () => {
    // Always land on the next greeting in sequence
    targetRef.current = (indexRef.current + 1) % greetings.length;
    setPhase("fast");
    timerRef.current = setInterval(advance, INITIAL_INTERVAL);

    setTimeout(() => {
      clear();
      setPhase("slowing");

      let step = 0;
      const slowStep = () => {
        advance();
        step++;
        const t =
          INITIAL_INTERVAL +
          ((FINAL_INTERVAL - INITIAL_INTERVAL) * step) / SLOW_DOWN_STEPS;
        if (step < SLOW_DOWN_STEPS) {
          timerRef.current = setTimeout(slowStep, t);
        } else {
          indexRef.current = targetRef.current;
          setIndex(targetRef.current);
          setAnimKey((k) => k + 1);
          setPhase("hold");
          timerRef.current = setTimeout(startCycle, HOLD_DURATION);
        }
      };
      timerRef.current = setTimeout(slowStep, INITIAL_INTERVAL);
    }, FAST_SPIN_DURATION);
  };

  useEffect(() => {
    preloadFont();   // non-blocking font load
    startCycle();
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = greetings[index];

  return (
    <div className="greeting-screen">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="dot-grid" />

      <div className="greeting-wrapper">
        <div className="dot-row">
          {greetings.map((_, i) => (
            <span key={i} className={`dot-pip ${i === index ? "active" : ""}`} />
          ))}
        </div>

        <h1
          key={animKey}
          className={`greeting-text phase-${phase}`}
          dir={current.dir}
        >
          {current.text}
        </h1>

        <p key={"lang-" + animKey} className={`greeting-lang phase-${phase}`}>
          {current.lang}
        </p>
      </div>
    </div>
  );
}

export default React.memo(GreetingSlider);
