"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? // ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            "bg-transparent"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // style={{
      //   backgroundImage: "url('/images/bg-1.png')",
      // }}
    >
      {/* <div className="absolute inset-0 bg-black/70 z-0" /> */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-24">
          {/* LOGO */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.04 }}
            >
              {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary"> */}
              <div
                className="
  w-12 h-12
  rounded-xl
  bg-gradient-to-br from-zinc-200 via-white to-zinc-300
  shadow-md
  flex items-center justify-center
"
              >
                <span className="text-black font-bold text-3xl font-display leading-none">
                  N
                </span>
              </div>

              {/* <span className="text-2xl font-bold font-display tracking-tight">
                <span className="text-foreground">NEURO</span>
                <span className="gradient-text">NEX</span>
              </span> */}

              <span className="text-2xl font-bold font-display tracking-tight">
                <span className="bg-gradient-to-r from-zinc-300 via-white to-zinc-200 bg-clip-text text-transparent">
                  Velammal Institute of
                </span>
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-300 bg-clip-text text-transparent">
                  Technology
                </span>
              </span>
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-14">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="
  text-lg font-medium
  text-zinc-300
  hover:text-white
  transition-all duration-300
  relative
  after:content-['']
  after:absolute
  after:left-0
  after:-bottom-1
  after:w-0
  after:h-[2px]
  after:bg-gradient-to-r after:from-zinc-300 after:to-white
  after:transition-all after:duration-300
  hover:after:w-full
"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                className="
    bg-gradient-to-r from-zinc-200 via-white to-zinc-300
    text-black
    font-semibold
    px-7 py-6
    text-base
    border border-white/60
    shadow-md
    hover:brightness-110
    hover:shadow-xl
    transition
  "
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
  text-3xl font-display font-semibold
  text-zinc-200
  hover:text-white
  transition-colors
  md:hidden
"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-24 bg-background/95 backdrop-blur-xl z-40"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-10 py-7 text-lg glow-primary">
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
