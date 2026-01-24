import eventCardBg from "../assets/eventCardBg.png";

interface EventProps {
  eventLogo?: string;
  eventTitle?: string;
  eventText?: string;
  eventLink?: string;
}

export default function Event(props: EventProps) {
  return (
    <>
      <div
        className="group bg-cover bg-center rounded-4xl border-2 border-white flex flex-col items-center p-5 overflow-hidden"
        style={{ backgroundImage: `url(${eventCardBg})` }}
      >
        <img
          src={props.eventLogo}
          className="eventLogo mt-8 rounded-2xl transition-transform translate-y-10 group-hover:translate-y-0 group-hover:ease-out"
        ></img>
        <div className="eventTitle text-white font-montserrat font-bold text-[2.5rem] p-3 translate-y-10 transition-transform group-hover:translate-y-0 group-hover:ease-out md:text-[2rem] lg:text-[1.4rem] text-center">
          {props.eventTitle}
        </div>
        <div className="eventText h-35 max-w-90 text-center text-white font-montserrat p-5 pt-0 opacity-0 transition-transform group-hover:opacity-100 group-hover:ease-out duration-100 delay-50">
          {props.eventText}
        </div>
        <a
          href={props.eventLink}
          className="eventRegister w-45 bg-red-600 text-center text-white font-montserrat font-semibold p-2 rounded-md text-[18px] -translate-y-17.5 transition-transform group-hover:translate-y-0"
        >
          REGISTER
        </a>
      </div>
    </>
  );
}
