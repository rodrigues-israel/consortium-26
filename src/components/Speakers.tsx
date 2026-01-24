interface SpeakersProps {
  name?: string;
  title?: string;
  img?: string;
}

export default function Speakers(props: SpeakersProps) {
  return (
    <>
      <div className="group bg-linear-to-b from-[#B20204] to-[#2F060E] h-100 w-80 rounded-4xl overflow-hidden">
        <div className="font-montserrat text-white text-center font-bold text-2xl mt-7">
          {props.name}
        </div>
        <div className="text-white text-center text-xl">{props.title}</div>
        <img
          src={props.img}
          alt=""
          className="mt-4 group-hover:scale-105 transition-transform"
        />
      </div>
    </>
  );
}
