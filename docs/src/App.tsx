import { useRef } from "react";
import BackToTopButton from "./components/BackToTopButton";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";

import useLenis from "./hooks/useLenis";
import { type ModalData } from "./hooks/useModal";
import { Modal } from "./components/Modal";

function App() {
  const lenisRef = useLenis();
  const openModalRef = useRef<(data: ModalData) => void>(() => {});

  return (
    <>
      <Header />

      <div className="max-w-[1400px] mx-auto relative">
        <Cursor />
        <BackToTopButton />
        <Hero />
        <ProjectList onCardClick={(data) => openModalRef.current(data)} />

        <Modal
          lenisRef={lenisRef}
          bindOpen={(fn) => {
            openModalRef.current = fn;
          }}
        />
      </div>
    </>
  );
}

export default App;
