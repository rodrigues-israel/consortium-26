import eventCardBg from "../assets/eventCardBg.webp";

interface EventProps {
  eventLogo?: string;
  eventTitle?: string;
  eventText?: string;
  eventLink?: string;
  details?: string;
}

export default function Event({
  eventLogo,
  eventTitle,
  eventText,
  eventLink,
  details = "REGISTER",
}: EventProps) {
  return (
    <>
      <div
        className="group bg-cover bg-center rounded-4xl border-2 border-white flex flex-col items-center p-5 overflow-hidden"
        style={{ backgroundImage: `url(${eventCardBg})` }}
      >
        <img
          src={eventLogo}
          className="eventLogo mt-8 rounded-2xl transition-transform translate-y-10 group-hover:translate-y-0 group-hover:ease-out"
        ></img>
        <div className="eventTitle text-white font-montserrat font-bold text-[2.5rem] p-3 translate-y-10 transition-transform group-hover:translate-y-0 group-hover:ease-out md:text-[2rem] lg:text-[1.4rem] text-center">
          {eventTitle}
        </div>
        <div className="eventText h-35 max-w-90 text-center text-white font-montserrat pt-0 opacity-0 transition-transform group-hover:opacity-100 group-hover:ease-out duration-100 delay-50">
          {eventText}
        </div>
        <a
          href={eventLink}
          className="eventRegister w-45 bg-red-600 text-center text-white font-montserrat font-semibold p-2 rounded-md text-[18px] -translate-y-17.5 transition-transform group-hover:translate-y-0"
          target="_blank"
        >
          {details}
        </a>
      </div>
    </>
  );
}
