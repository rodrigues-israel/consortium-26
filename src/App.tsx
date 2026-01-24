import "./App.css";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Speakers from "./components/SpeakerSection.tsx";
import EventsSection from "./components/EventsSection.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <EventsSection />
      <Footer />
    </>
  );
}

export default App;
