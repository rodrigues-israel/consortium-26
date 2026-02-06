import { useState } from "react";
import SplitText from "../components/SplitText";
import speakersBg from "../assets/speakers_bg.webp";
import ScheduleCard from "@/components/ScheduleCard";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Day1 = [
  {
    id: "1",
    time: "6:40 PM - 10:05 PM",
    eventTitle: "TEDx Talk",
    eventVenue: "Auditorium",
  },
];

const Day2 = [
  {
    id: "1",
    time: "11:00 AM",
    eventTitle: "Hult Prize",
    eventVenue: "MAC",
  },
  {
    id: "2",
    time: "10:00 AM onwards",
    eventTitle: "Jugaad",
    eventVenue: "Audi Foyer",
  },
  {
    id: "3",
    time: "11:00 AM onwards",
    eventTitle: "Startup Expo ",
    eventVenue: "ECE lawns",
  },
  {
    id: "4",
    time: "2:00 PM - 4:00 PM",
    eventTitle: "CEO (R-1)",
    eventVenue: "CRC 3-1",
  },
  {
    id: "5",
    time: "7:00 PM - 10:00 PM",
    eventTitle: "Founders Talk",
    eventVenue: "Auditorium",
  },
];

const Day3 = [
  {
    id: "1",
    time: "10:00 AM - 1:00 PM",
    eventTitle: "CEO (R-2)",
    eventVenue: "Conference Hall (MME Dept)",
  },
  {
    id: "2",
    time: "10:30 AM - 4:30 PM",
    eventTitle: "Escape Room",
    eventVenue: "CRC",
  },
  {
    id: "3",
    time: "11:00 AM onwards",
    eventTitle: "StartUp Conclave",
    eventVenue: "MAC",
  },
  {
    id: "4",
    time: "10:00 AM",
    eventTitle: "IPL Auction",
    eventVenue: "Library Lawn",
  },
  {
    id: "5",
    time: "4:00 PM - 6:00 PM",
    eventTitle: "Valedictory Function",
    eventVenue: "MAC",
  },
  {
    id: "6",
    time: "7:00 PM - 10:00 PM",
    eventTitle: "Consonite",
    eventVenue: "Auditorium",
  },
];

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2" | "day3">(
    "day1",
  );

  const getEvents = () => {
    if (selectedDay === "day1") return Day1;
    if (selectedDay === "day2") return Day2;
    return Day3;
  };
  return (
    <>
      <section
        className="bg-cover bg-center flex-row justify-center items-center"
        style={{ backgroundImage: `url(${speakersBg})` }}
      >
        <div className="flex justify-center">
          <SplitText
            text="SCHEDULE"
            className="text-white text-shadow-lg text-shadow-red-900 text-center text-6xl font-poppins font-bold mt-15"
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

        <div className="bg-white flex justify-center md:gap-10 py-3 w-90 md:w-100 rounded-2xl mx-auto mt-10">
          <div className="bg-white flex justify-center gap-10 w-100 rounded-2xl mx-auto">
            {["day1", "day2", "day3"].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day as any)}
                className={`font-montserrat text-xl md:text-2xl font-semibold px-2 md:px-4 py-1 rounded-xl transition
              ${
                selectedDay === day
                  ? "bg-red-800 text-white"
                  : "text-black hover:text-red-800"
              }`}
              >
                {day.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-5 md:p-10 pt-3 md:pt-0">
          <Timeline position="alternate">
            {getEvents().map((event) => (
              <TimelineItem key={event.id}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <ScheduleCard
                    time={event.time}
                    eventTitle={event.eventTitle}
                    eventVenue={event.eventVenue}
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </section>
    </>
  );
};

export default Schedule;
