import SplitText from "./SplitText";
import SpeakerCard from "./Speakers";
import speakersBg from "../assets/speakers_bg.webp";

import kiran_bedi from "../assets/speakers/kiran_bedi.webp";
import simon from "../assets/speakers/simon.webp";
import jatin from "../assets/speakers/jatin.webp";
import anilswarup from "../assets/speakers/anilswarup.webp";
import pankhuri from "../assets/speakers/pankhuri.webp";
import aman from "../assets/speakers/aman.webp";

const speakersData = [
  {
    id: 1,
    name: "KIRAN BEDI",
    title: "24th Lt. Governor",
    img: kiran_bedi,
  },
  {
    id: 2,
    name: "AMAN DHATTARWAL",
    title: "Founder Apna College",
    img: aman,
  },
  {
    id: 3,
    name: "JATIN SAPRU",
    title: "Television Presenter",
    img: jatin,
  },
  {
    id: 4,
    name: "ANIL SWARUP",
    title: "Former IAS Officer",
    img: anilswarup,
  },
  {
    id: 5,
    name: "PANKHURI GIDWANI",
    title: "Miss Grand India International",
    img: pankhuri,
  },
  {
    id: 6,
    name: "SIMON TAUFEL",
    title: "Former Cricket Umpire",
    img: simon,
  },
];

const Speakers = () => {
  return (
    <>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${speakersBg})` }}
      >
        <div className="flex justify-center">
          <SplitText
            text="PAST SPEAKERS"
            className="text-white text-shadow-lg text-shadow-red-900 text-center text-6xl font-poppins font-bold mt-20"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <div className="py-15 grid xl:grid-cols-3 gap-10 place-items-center md:grid-cols-2 md:px-[10vw]">
          {speakersData.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              title={speaker.title}
              img={speaker.img}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Speakers;
