import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  useGSAP(() => {
    if (isMobile) return;

    if (!cursorRef.current) return;

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.4,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.4,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 4, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const hoverables = document.querySelectorAll(
      "a, button, .project-card, span.text-sm",
    );
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
}

export default Cursor;
