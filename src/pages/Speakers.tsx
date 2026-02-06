// import speakersBg from "../assets/speakers_bg.webp";
import SplitText from "@/components/SplitText.tsx";
import SpeakerCard from "@/components/Speakers";
import speakersBg from "../assets/speakers_bg.webp";

import kiran_bedi from "../assets/speakers/kiran_bedi.webp";
import simon from "../assets/speakers/simon.webp";
import jatin from "../assets/speakers/jatin.webp";
import anilswarup from "../assets/speakers/anilswarup.webp";
import pankhuri from "../assets/speakers/pankhuri.webp";
import aman from "../assets/speakers/aman.webp";
import pranav from "../assets/speakers/pranav.webp";
import rajeevsuri from "../assets/speakers/rajeevsuri.webp";
import vishwajeet from "../assets/speakers/vishwajeet.webp";
import aditya from "../assets/speakers/aditya.webp";
import sanket from "../assets/speakers/sanket.webp";
import tridha from "../assets/speakers/tridha.webp";
import jimmy from "../assets/speakers/jimmy.webp";
import satish from "../assets/speakers/satish.webp";
import divya from "../assets/speakers/divya.webp";
import nandu from "../assets/speakers/nandu.webp";
import sharad from "../assets/speakers/sharad.webp";
import shirish from "../assets/speakers/shirish.webp";
import karan from "../assets/speakers/karan.webp";
import harsh from "../assets/speakers/harsh.webp";
import krishnan from "../assets/speakers/krishnan.webp";
import nitin from "../assets/speakers/nitin.webp";
import somdutta from "../assets/speakers/somdutta.webp";
import ashwani from "../assets/speakers/ashwani.webp";
import sohrab from "../assets/speakers/sohrab.webp";
import anurag from "../assets/speakers/anurag.webp";

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
  {
    id: 7,
    name: "PRANAV KOSHAL",
    title: "Associate Kalaari Capital",
    img: pranav,
  },
  {
    id: 8,
    name: "RAJEEV SURI",
    title: "Managing Partner Orios Venture Partners",
    img: rajeevsuri,
  },
  {
    id: 9,
    name: "VISHWAJEET SINHA",
    title: "CMO Meesho",
    img: vishwajeet,
  },
  {
    id: 10,
    name: "Adityan Kayalakal",
    title: "Senior Director Byju's",
    img: aditya,
  },
  {
    id: 11,
    name: "Sanket Narkar",
    title: "CMO PhysicsWallah",
    img: sanket,
  },
  {
    id: 12,
    name: "Tridha Choudhury",
    title: "Actress",
    img: tridha,
  },
  {
    id: 13,
    name: "JIMMY MISTRY",
    title: "Chairman & MD Della Group",
    img: jimmy,
  },
  {
    id: 14,
    name: "LT. GEN SATISH DUA",
    title: "Corps Commander Surgical Strike, URI",
    img: satish,
  },
  {
    id: 15,
    name: "Divya Ganesh",
    title: "McKinsey & Company Partner",
    img: divya,
  },
  {
    id: 16,
    name: "Nandu Giriyapur",
    title: "Managing Director Deloitte Company",
    img: nandu,
  },
  {
    id: 17,
    name: "Sharad Somani",
    title: "Executive Director KPMG Singapore",
    img: sharad,
  },
  {
    id: 18,
    name: "Shirish Andhare",
    title: "Director & Head of Product Twitter",
    img: shirish,
  },
  {
    id: 19,
    name: "KARAN SHAH",
    title: "Founder & CEO IIDE - The Digital School",
    img: karan,
  },
  {
    id: 20,
    name: "HARSH GOELA",
    title: "Co-Founder Goela School of Finance LLP",
    img: harsh,
  },
  {
    id: 21,
    name: "SATISH KRISHNAN",
    title: "Former MD & Head Standard Chartered Bank",
    img: krishnan,
  },
  {
    id: 22,
    name: "NITIN BAWANKULE",
    title: "Director and Head Digital Native Business, AWS India",
    img: nitin,
  },
  {
    id: 23,
    name: "SOMDUTTA SINGH",
    title: "Founder & CEO Assiduus Global",
    img: somdutta,
  },
  {
    id: 24,
    name: "ASHWANI LOHANI",
    title: "Chief Executive Officer GMR Group",
    img: ashwani,
  },
  {
    id: 25,
    name: "SOHRAB SITARAM",
    title: "Co-Founder & Director Keventers",
    img: sohrab,
  },
  {
    id: 26,
    name: "ANURAG BATRA",
    title: "Chairman & Editor in Chief BW Businessworld",
    img: anurag,
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
