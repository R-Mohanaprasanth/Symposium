"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* BACKGROUND (ONLY ON SCROLL) */}
      {scrolled && (
        <>
          {/* IMAGE */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/bg-1.png')",
            }}
          />

          {/* OVERLAY + BLUR */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-xl z-10" />

          {/* BOTTOM BORDER */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00ffff]/20 z-20" />
        </>
      )}

      {/* NAV CONTENT */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-24">

          {/* LOGO */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-200 via-white to-zinc-300 shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-extrabold font-display tracking-tight  bg-clip-text text-white">
                  Velammal
                </span>
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-white via-zinc-200 to-zinc-300 bg-clip-text text-transparent">
                  Institute of Technology
                </span>
              </div>
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
                    text-lg font-medium text-zinc-300 relative
                    transition-all duration-300
                    hover:text-[#00ffff]
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-[#00bebe] after:via-[#00cccc] after:to-[#00ffff]
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <Button
  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdyfNolKePjJbLEF2oqTst0UUfVhBLxNqcEVKzR9akafB4tcg/viewform",
      "_blank"
    )
  }
  className="
    px-7 py-6 text-base font-semibold text-white
    border border-[#00cccc]/60
    bg-gradient-to-b from-[#00bebe] via-[#00cccc] to-[#002222]
    shadow-[0_0_25px_rgba(0,204,204,0.4)]
    hover:brightness-110
    transition
    flex items-center
  "
>
  <Rocket className="w-4 h-4 mr-2" />
  Get Started
</Button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-zinc-200 hover:text-white transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-24 bg-black/90 backdrop-blur-xl z-40"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-semibold text-white hover:text-[#00ffff]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
