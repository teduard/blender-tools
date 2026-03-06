import { useEffect } from "react";
import { useModal, type ModalData } from "../hooks/useModal";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import type Lenis from "lenis";

interface Props {
  lenisRef: React.RefObject<Lenis | null>;
  bindOpen: (fn: (data: ModalData) => void) => void;
}

export function Modal({ lenisRef, bindOpen }: Props) {
  const { data, overlayRef, contentRef, initTimeline, open, close } =
    useModal(lenisRef);

  useEffect(() => {
    bindOpen(open);
  }, []);

  useEffect(() => {
    initTimeline();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [data]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] bg-[#3e3d3d] invisible overflow-y-auto overscroll-contain [--webkit-overflow-scrolling:touch]"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md pointer-events-none" />

      <div
        ref={contentRef}
        className="max-w-[1400px] mx-auto relative min-h-screen"
      >
        <button
          onClick={close}
          className="absolute top-6 right-6 opacity-40 hover:opacity-100 transition-opacity z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row min-h-fit">
          <div className="w-full md:w-1/4 p-6 md:p-20 flex flex-col justify-center">
            <h2 className="text-4xl mb-4">{data?.title}</h2>
            <p className="text-lg opacity-60 leading-relaxed">{data?.desc}</p>
          </div>

          <div className="w-full md:w-3/4 p-6 md:p-20 flex flex-col justify-center">
            {data?.content}
          </div>
        </div>
      </div>
    </div>
  );
}
