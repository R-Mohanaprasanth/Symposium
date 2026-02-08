"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/navbar/Navbar";
import VerticalEventMarquee from "@/components/VerticalEventMarquee";
import NeuronexLoader from "@/components/ui/NeuronexLoader";

export default function BootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [booting, setBooting] = useState(isHome);

  useEffect(() => {
    if (!isHome) return;

    const MIN_DURATION = 1800; // premium, already tuned

    const timer = setTimeout(() => {
      setBooting(false);
    }, MIN_DURATION);

    return () => clearTimeout(timer);
  }, [isHome]);

  if (booting && isHome) {
    return <NeuronexLoader />;
  }

  return (
    <>
      <Navbar />
      <VerticalEventMarquee />
      {children}
      <div id="hover-root" />
    </>
  );
}
