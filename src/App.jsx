import { useState } from "react";

import Header from "./components/layout/Header";
import MobileNav from "./components/layout/MobileNav";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Preloader from "./components/common/Preloader";
import ChatWidget from "./components/common/ChatWidget";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Counters from "./components/sections/Counters";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import WhyChoose from "./components/sections/WhyChoose";
import FAQ from "./components/sections/Faq";
import Footer from "./components/layout/Footer";

const SECTION_IDS = ["home", "about", "services", "projects", "contact"];

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <>

    <Preloader />
    <ChatWidget />
    
      <div className="relative mx-auto w-full min-w-[300px] overflow-hidden">
        <Header
          activeId={activeId}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />
        <main>
          <Hero/>
          <About/>
          <Services />
          <Counters />
          <Portfolio />
          <Process/>
          <WhyChoose/>
          <FAQ/>

        </main>
      </div>

      <MobileNav
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
      <Footer/>
    </>
  );
}