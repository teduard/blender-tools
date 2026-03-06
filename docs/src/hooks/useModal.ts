import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import type Lenis from "lenis";

export interface ModalData {
  title: string;
  desc: string;
  content: React.ReactNode;
}

export function useModal(lenisRef: React.RefObject<Lenis | null>) {
  const [data, setData] = useState<ModalData | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const initTimeline = () => {
    if (!overlayRef.current || !contentRef.current) return;
    tlRef.current = gsap
      .timeline({ paused: true })
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.3 })
      .from(
        contentRef.current,
        { y: 50, opacity: 100, duration: 0.5, ease: "power4.out" },
        "-=0.2",
      );
  };

  const open = (incoming: ModalData) => {
    setData(incoming);
    lenisRef.current?.stop();

    overlayRef.current?.addEventListener(
      "touchmove",
      (e) => {
        e.stopPropagation();
      },
      { passive: true },
    );

    setTimeout(() => tlRef.current?.play(), 0);
  };

  const close = () => {
    tlRef.current?.reverse();
    lenisRef.current?.start();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { data, overlayRef, contentRef, initTimeline, open, close };
}
