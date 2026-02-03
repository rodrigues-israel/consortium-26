import SplitText from "./SplitText";
import eventsBg from "../assets/eventsBg.png";
import Event from "./Event";
import vishleshan from "../assets/vishleshan.png";
import iplauction from "../assets/iplauction.png";
import neo from "../assets/neo.png";
import jugaad from "../assets/jugaad.png";
import suc from "../assets/suc.png";
import wallstreet from "../assets/wallstreet.png";
import expo from "../assets/expo.png";
import ceo from "../assets/ceo.png";

const eventsData = [
  {
    id: 1,
    eventLogo: vishleshan,
    eventTitle: "VISHLESHAN",
    eventText:
      "Vishleshan, 180DC VNIT's flagship Case Study Competition, provides an exceptional platform for students to demonstrate their strategic insight and innovative thinkings",
    eventLink: "",
  },
  {
    id: 2,
    eventLogo: iplauction,
    eventTitle: "IPL AUCTION",
    eventText:
      "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction",
    eventLink: "",
  },
  {
    id: 3,
    eventLogo: neo,
    eventTitle: "NEO",
    eventText:
      "NEO is a PAN India examination and a skill enhancement program for students of class 7th to 12th grade to nurture and test their entrepreneurial skills",
    eventLink: "",
  },
  {
    id: 4,
    eventLogo: jugaad,
    eventTitle: "JUGAAD",
    eventText:
      "JUGAAD is an annual event where teams receive ₹100 to maximize through creative ideation, bargaining, and financial management.",
    eventLink: "",
  },
  {
    id: 5,
    eventLogo: suc,
    eventTitle: "StartUP Conclave",
    eventText:
      "StartUp Conclave is a national business plan competition that promotes entrepreneurship and fosters great ideas into successful undertakings",
    eventLink: "",
  },
  {
    id: 6,
    eventLogo: wallstreet,
    eventTitle: "WALLSTREET",
    eventText:
      "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities",
    eventLink: "",
  },
  {
    id: 7,
    eventLogo: ceo,
    eventTitle: "CEO",
    eventText:
      "CEO event cultivates leadership and management skills in students through real-world challenges, calculated risks, and competition to become influential leaders",
    eventLink: "",
  },
  {
    id: 8,
    eventLogo: expo,
    eventTitle: "STARTUP EXPO",
    eventText:
      "A national exhibition for startups to showcase innovations and network with participants, speakers, investors, and organizations from India",
    eventLink: "",
  },
  {
    id: 8,
    eventLogo: expo,
    eventTitle: "Networking Arena",
    eventText:
      "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction",
    eventLink: "",
  },
  {
    id: 8,
    eventLogo: expo,
    eventTitle: "GNP EVENT",
    eventText:
      "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction",
    eventLink: "",
  },
  {
    id: 9,
    eventLogo: expo,
    eventTitle: "Internship Fair",
    eventText:
      "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction",
    eventLink: "",
  },
  {
    id: 9,
    eventLogo: expo,
    eventTitle: "ESCAPE ROOM",
    eventText:
      "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction",
    eventLink: "",
  },
];

const EventsSection = () => {
  return (
    <>
      <section id="events" className="bg-white h-2"></section>
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
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default EventsSection;
