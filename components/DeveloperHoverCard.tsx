"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { createPortal } from "react-dom";

export default function DeveloperHoverCard() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const tiltWrapperRef = useRef<HTMLDivElement>(null);


  // Mount portal safely
  useEffect(() => {
    setMounted(true);
    setPortalRoot(document.getElementById("hover-root"));
  }, []);

  /* -------------------- CARD TILT ONLY -------------------- */
const handleTilt = (e: React.MouseEvent) => {
  if (!tiltWrapperRef.current) return;

  const rect = tiltWrapperRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const TILT = 10;
  const MOVE = 12;

  const nx = x / rect.width - 0.5;
  const ny = y / rect.height - 0.5;

  tiltWrapperRef.current.style.transform = `
    perspective(1200px)
    translate3d(${nx * MOVE}px, ${ny * MOVE}px, 0)
    rotateX(${ny * TILT}deg)
    rotateY(${-nx * TILT}deg)
  `;
};






const resetTilt = () => {
  if (!tiltWrapperRef.current) return;

  tiltWrapperRef.current.style.transform =
    "perspective(1200px) rotateX(0deg) rotateY(0deg)";
};


  /* -------------------- AUDIO FADE -------------------- */
  const FADE_DURATION = 300;
  const TARGET_VOLUME = 0.6;
  const fadeInterval = useRef<NodeJS.Timeout | null>(null);
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  useEffect(() => {
    const enableAudio = () => {
      setCanPlayAudio(true);
      window.removeEventListener("click", enableAudio);
    };
    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, []);

  const fadeInAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeInterval.current) clearInterval(fadeInterval.current);

    audio.volume = 0;
    audio.play().catch(() => {});

    const step = TARGET_VOLUME / (FADE_DURATION / 16);

    fadeInterval.current = setInterval(() => {
      if (audio.volume < TARGET_VOLUME) {
        audio.volume = Math.min(audio.volume + step, TARGET_VOLUME);
      } else {
        clearInterval(fadeInterval.current!);
      }
    }, 16);
  };

  const fadeOutAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeInterval.current) clearInterval(fadeInterval.current);

    const step = audio.volume / (FADE_DURATION / 16);

    fadeInterval.current = setInterval(() => {
      if (audio.volume > 0.02) {
        audio.volume = Math.max(audio.volume - step, 0);
      } else {
        audio.volume = 0;
        audio.pause();
        audio.currentTime = 0;
        clearInterval(fadeInterval.current!);
      }
    }, 16);
  };

  /* -------------------- POSITIONING -------------------- */
  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 380;
  const OFFSET = 16;
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const triggerRect = triggerRef.current?.getBoundingClientRect();

  const getPosition = () => {
    if (!triggerRect) return { x: 0, y: 0 };

    const padding = 12;
    let x = triggerRect.left + OFFSET;
    let y = triggerRect.top - CARD_HEIGHT - OFFSET;

    if (x + CARD_WIDTH > window.innerWidth) {
      x = triggerRect.left - CARD_WIDTH - OFFSET;
    }

    x = Math.max(padding, Math.min(x, window.innerWidth - CARD_WIDTH - padding));
    y = Math.max(padding, Math.min(y, window.innerHeight - CARD_HEIGHT - padding));

    return { x, y };
  };

  /* -------------------- RENDER -------------------- */
  return (
    <>
      {/* NAME */}
      <span
        ref={triggerRef}
        className="inline-block text-[#01ffff] font-medium cursor-pointer transition hover:drop-shadow-[0_0_8px_rgba(1,255,255,0.9)]"
        onMouseEnter={() => {
          if (hideTimeout.current) clearTimeout(hideTimeout.current);
          setShow(true);
          if (canPlayAudio) fadeInAudio();
        }}
        onMouseLeave={() => {
          hideTimeout.current = setTimeout(() => {
            setShow(false);
            fadeOutAudio();
          }, 100);
        }}
      >
        R Mohanaprasanth
      </span>

      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/raavana.mp3" type="audio/mpeg" />
      </audio>

      {/* PORTAL */}
      {mounted &&
        portalRoot &&
        createPortal(
          <AnimatePresence>
            {show &&
              triggerRect &&
              (() => {
                const { x, y } = getPosition();
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{
                      position: "fixed",
                      left: x,
                      top: y,
                      transform: "translate(-50%, -100%)",
                      zIndex: 9999,
                    }}
                    onMouseEnter={() => {
                      if (hideTimeout.current)
                        clearTimeout(hideTimeout.current);
                    }}
                    onMouseLeave={() => {
                      hideTimeout.current = setTimeout(() => {
                        setShow(false);
                        fadeOutAudio();
                      }, 300);
                    }}
                  >

                    <div
    ref={tiltWrapperRef}
    onMouseMove={handleTilt}
    onMouseLeave={resetTilt}
    className="relative will-change-transform"
    style={{ transformStyle: "preserve-3d" }}
  >

                    {/* base mild border */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none ml-10 sm:ml-57"

            style={{
              padding: "1.5px",
              background: "rgba(34, 172, 172, 0.65)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* rotating glow */}
          <motion.div
           className="absolute -inset-[2px] rounded-3xl pointer-events-none ml-10 sm:ml-57"



            style={{
              padding: "3.5px",
              background: `
                conic-gradient(
                  from 0deg,
                  #1edddd 0deg,
                  #15dedee4 40deg,
                  #01ffff 60deg,
                  #25a3a3 80deg,
                  #22bdbde3 100deg,
                  #22ebeb9a 360deg
                )
              `,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            animate={{
              backgroundImage: [
                `conic-gradient(from 0deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`,
                `conic-gradient(from 360deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`,
              ],
            }}
            transition={{
              duration: 3.8,
              ease: "linear",
              repeat: Infinity,
            }}
          />

                    <div
                      ref={cardRef}
                      className="
  relative w-[300px]
  rounded-3xl overflow-hidden
  bg-[#061824]/95 backdrop-blur-xl
  border border-[#01ffff]/35
  shadow-[0_0_32px_rgba(1,255,255,0.22)]
  will-change-transform ml-10 sm:ml-57
  p-5
"

                    >
                      {/* IMAGE */}
                      <div className="relative w-full h-[170px] bg-black rounded-2xl overflow-hidden">
  <Image
    src="/images/dp-5.png"
    alt="R Mohanaprasanth"
    fill
    priority
    className="object-contain"
  />
</div>


                      {/* CONTENT */}
                      <div className="px-6 py-5 text-center">
                        <h3 className="text-lg font-semibold text-white">
                          R Mohanaprasanth{" "}
                          <span className="text-sm text-zinc-400 italic tracking-wide">(RMP)</span>

                        </h3>

                        <p className="text-sm text-zinc-400 mt-1">
  AI & DS • III Year Student
</p>


                        <div className="flex justify-center gap-3 mt-4">
                          {[
                            {
                              icon: Mail,
                              link: "https://mail.google.com/mail/?view=cm&to=mohanaprasanth0506@gmail.com",
                            },
                            { icon: Github, link: "https://github.com/R-Mohanaprasanth" },
                            { icon: Linkedin, link: "https://linkedin.com/in/mohanaprasanth-r-528043342" },
                            { icon: Instagram, link: "https://www.instagram.com/_.mohanaprasanth._/" },
                          ].map(({ icon: Icon, link }, i) => (
                            <a
                              key={i}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
  w-9 h-9 rounded-full
  bg-[#01ffff]/5
  border border-[#01ffff]/60
  flex items-center justify-center
  text-[#01ffff]
  transition-all duration-300

  hover:shadow-[0_0_12px_rgba(1,255,255,0.45)]
  hover:bg-[#01ffff]/15
"

                            >
                              <Icon size={16} />
                            </a>
                          ))}
                        </div>
                      </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
          </AnimatePresence>,
          portalRoot
        )}
    </>
  );
}
