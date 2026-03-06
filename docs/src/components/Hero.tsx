import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !subTextRef.current) return;

      const text = new SplitType(textRef.current, { types: "lines" });

      const subText = new SplitType(subTextRef.current, { types: "lines" });

      text.lines?.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      subText.lines?.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      const tl = gsap.timeline();

      tl.from(text.lines, {
        y: 200,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      }).from(
        ".hero-text",
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        },
        "-=1",
      );

      tl.from(subText.lines, {
        y: 200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0,
      }).from(".hero-subtext", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <h1
          id="hero-text"
          ref={textRef}
          className="text-[clamp(2.5rem,10vw,8rem)] font-black leading-[0.9] uppercase tracking-tighter"
        >
          Blender 3D
          <br />
          Tooling
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p
            className="text-xl mt-8 opacity-60"
            ref={subTextRef}
            id="hero-subtext"
          >
            Building tools & 3D pipelines for Blender
          </p>
        </div>
      </div>

      <div className="absolute bottom-[-10%] right-[-5%] text-[20vw] font-black opacity-[0.02] pointer-events-none select-none">
        Blender
      </div>
    </section>
  );
};

export default Hero;
