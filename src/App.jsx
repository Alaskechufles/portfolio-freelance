import { useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stack from './components/sections/Stack';
import Work from './components/sections/Work';
import AiWork from './components/sections/AiWork';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import { useReveal } from './hooks/useReveal';
import { useSmoothAnchorScroll } from './hooks/useSmoothAnchorScroll';

function App() {
  const rootRef = useRef(null);
  useReveal(rootRef);
  useSmoothAnchorScroll();

  return (
    <div className="font-sans">
      <Nav />
      <div ref={rootRef} className="relative overflow-hidden bg-[#faf8ff] text-[#1c1430]">
        <div className="pointer-events-none absolute -top-45 -right-30 h-140 w-140 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,.34),transparent_70%)] blur-[30px]" />
        <div className="pointer-events-none absolute top-130 -left-50 h-140 w-140 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,.30),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute top-375 -right-35 h-130 w-130 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.26),transparent_70%)] blur-2xl" />

        <div className="relative mx-auto max-w-270 px-7">
          <Hero />
          <About />
          <Stack />
          <Work />
          <AiWork />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
