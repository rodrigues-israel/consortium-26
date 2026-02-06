import Hero from "@/components/Hero.tsx";
import About from "@/components/About.tsx";
import Speakers from "@/components/SpeakerSection.tsx";
import EventsSection from "@/components/EventsSection.tsx";
import Seperator from "@/components/Seperator.tsx";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Seperator />
      <Speakers />
      <Seperator />
      <EventsSection />
    </>
  );
}

export default App;
