import { useRef, useState } from "react";
import gsap from "gsap";
export default function Header() {
  // const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const headerNavRef = useRef<HTMLElement>(null);

  const [triggerClass, setTriggerClass] = useState<string>("");
  //const [amountOpen, setAmountOpen] = useState<number>(0);

  const handleTrigger = () => {
    const isOpening = triggerClass !== "open";
    setTriggerClass(isOpening ? "open" : "");
    //setAmountOpen(isOpening ? 100 : 0);

    const targetValue = isOpening ? "100%" : "0%";
    const tl = gsap.timeline();

    ["1", "2", "3", "4"].forEach((num, index) => {
      tl.to(
        headerNavRef.current,
        {
          [`--panel-bottom-${num}`]: targetValue,
          duration: 0.4,
          ease: "power1.out",
        },
        index * 0.1,
      );
    });
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto relative">
        <div className="header">
          <div className="header__top">
            <button
              className={`header__trigger ${triggerClass}`}
              onClick={handleTrigger}
              ref={buttonRef}
            ></button>
          </div>
          <nav className={`header__nav ${triggerClass}`} ref={headerNavRef}>
            <ul className="header__list max-w-[1400px] mx-auto relative">
              <li className="header__item">
                <a className="header__link" href="#">
                  Home
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  href="https://www.blender.org/"
                  target="_blank"
                >
                  Blender 3D
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  href="https://github.com/teduard/blender-tools"
                  target="_blank"
                >
                  View repo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
