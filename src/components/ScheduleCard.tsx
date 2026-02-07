interface ScheduleProps {
  time?: string;
  eventTitle?: string;
  eventVenue?: string;
}

const ScheduleCard = (props: ScheduleProps) => {
  return (
    <>
      <div className="bg-white rounded-2xl hover:scale-102 transition-transform w-60 md:w-auto h-40 md:h-auto">
        <div className="text-center">
          <div className="mt-2 inline-block px-10 font-montserrat text-white text-md md:text-2xl bg-red-800 font-medium rounded-xl">
            {props.time}
          </div>
        </div>
        <div className="text-center text-2xl md:text-3xl p-2 pb-0 font-montserrat font-semibold uppercase">
          {props.eventTitle}
        </div>
        <div className="text-xl md:text-2xl text-center font-semibold font-poppins p-2 text-red-950 uppercase">
          {"VENUE: " + props.eventVenue}
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
