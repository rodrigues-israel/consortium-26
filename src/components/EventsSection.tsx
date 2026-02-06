import SplitText from "./SplitText";
import eventsBg from "../assets/eventsBg.webp";
import Event from "./Event";

// import vishleshan from "../assets/events/vishleshan.png";
import iplauction from "../assets/events/iplauction.webp";
import neo from "../assets/events/neo.webp";
import jugaad from "../assets/events/jugaad.webp";
import suc from "../assets/events/suc.webp";
import wallstreet from "../assets/events/wallstreet.webp";
import expo from "../assets/events/expo.webp";
import ceo from "../assets/events/ceo.webp";
import hultprize from "../assets/events/hultprize.webp";
import internshipfair from "../assets/events/internshipfair.webp";
import networkingarena from "../assets/events/networkingarena.webp";
import pitchinthecar from "../assets/events/pitchinthecar.webp";

const eventsData = [
  // {
  //   id: 1,
  //   eventLogo: vishleshan,
  //   eventTitle: "VISHLESHAN",
  //   eventText:
  //     "Vishleshan, 180DC VNIT's flagship Case Study Competition, provides an exceptional platform for students to demonstrate their strategic insight and innovative thinkings",
  //   eventLink: "",
  // },
  // {
  //   id: 2,
  //   eventLogo: expo,
  //   eventTitle: "ESCAPE ROOM",
  //   eventText:
  //     "The event combines consulting-style case puzzles with escape-room gamification, where teams solve challenges to unlock the next room and progress in the competition.",
  //   eventLink: "",
  // },
  {
    id: 3,
    eventLogo: iplauction,
    eventTitle: "IPL AUCTION",
    eventText:
      "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction",
    eventLink: "https://ipl.ecellvnit.org",
  },
  {
    id: 4,
    eventLogo: neo,
    eventTitle: "NEO",
    eventText:
      "NEO is a PAN India examination and a skill enhancement program for students of class 7th to 12th grade to nurture and test their entrepreneurial skills",
    eventLink: "https://neo.ecellvnit.org",
  },
  {
    id: 5,
    eventLogo: jugaad,
    eventTitle: "JUGAAD",
    eventText:
      "JUGAAD is an annual event where teams receive ₹100 to maximize through creative ideation, bargaining, and financial management.",
    eventLink: "https://jugaad.ecellvnit.org",
  },
  {
    id: 6,
    eventLogo: suc,
    eventTitle: "StartUP Conclave",
    eventText:
      "StartUp Conclave is a national business plan competition that promotes entrepreneurship and fosters great ideas into successful undertakings",
    eventLink: "https://startupconclave.ecellvnit.org",
  },
  {
    id: 7,
    eventLogo: wallstreet,
    eventTitle: "WALLSTREET",
    eventText:
      "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities",
    eventLink: "https://wallstreet.ecellvnit.org",
  },
  {
    id: 8,
    eventLogo: ceo,
    eventTitle: "CEO",
    eventText:
      "CEO event cultivates leadership and management skills in students through real-world challenges, calculated risks, and competition to become influential leaders",
    eventLink: "https://ceo.ecellvnit.org",
  },
  {
    id: 9,
    eventLogo: expo,
    eventTitle: "STARTUP EXPO",
    eventText:
      "A national exhibition for startups to showcase innovations and network with participants, speakers, investors, and organizations from India",
    eventLink: "https://expo.ecellvnit.org",
  },
  {
    id: 10,
    eventLogo: hultprize,
    eventTitle: "HULT PRIZE",
    eventText:
      "Hult Prize is the world’s largest student startup competition focused on building SDG-aligned businesses",
    eventLink: "https://www.instagram.com/hultprize_vnit/",
  },
  {
    id: 11,
    eventLogo: internshipfair,
    eventTitle: "Internship Fair",
    eventText: "CONNECT - GROW - INNOVATE",
    eventLink: "mailto:team_ecell@vnit.ac.in",
    details: "CONNECT",
  },
  {
    id: 12,
    eventLogo: networkingarena,
    eventTitle: "Networking Arena",
    eventLink:
      "https://unstop.com/o/E3sMC2w?lb=XXfTQEEf&utm_medium=Share&utm_source=teamvni42274&utm_campaign=Workshops",
    eventText:
      "Networking Arena connects experts across domains to exchange ideas, provide guidance, and foster collaboration.",
  },
  {
    id: 14,
    eventLogo: pitchinthecar,
    eventTitle: "Pitch in the Car",
    eventLink:
      "https://unstop.com/o/CGW3AvD?lb=6vnimjjW&utm_medium=Share&utm_source=aryansin7258&utm_campaign=Competitions",
    eventText:
      "Pitch in the Car is a 4-minute startup pitch judged on innovation, clarity, feasibility, scalability, market potential, and founder confidence",
  },
];

const EventsSection = () => {
  return (
    <>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${eventsBg})` }}
      >
        <div className="flex justify-center">
          <SplitText
            text="EVENTS"
            className="text-white text-shadow-lg text-shadow-red-900 text-center text-7xl font-poppins font-bold mt-10 p-5"
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
        <div className="grid xl:grid-cols-4 gap-5 p-5 place-items-center md:grid-cols-2 lg:p-10">
          {eventsData.map((event) => (
            <Event
              eventLogo={event.eventLogo}
              eventTitle={event.eventTitle}
              eventText={event.eventText}
              eventLink={event.eventLink}
              details={event.details}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default EventsSection;
