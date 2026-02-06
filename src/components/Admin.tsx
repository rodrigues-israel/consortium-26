import teamBg from "@/assets/teambg.png";

interface TeamProps {
  name?: string;
  title?: string;
  img?: string;
}

export default function Speakers(props: TeamProps) {
  return (
    <>
      <div
        className="bg-cover bg-center rounded-4xl border-white flex flex-col items-center p-5 h-95 w-80 overflow-hidden hover:scale-102 transition-transform drop-shadow-xl drop-shadow-gray-900"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="font-montserrat text-white text-center font-bold text-xl mt-7 uppercase">
          {props.name}
        </div>
        <div className="text-white text-center text-[15px]">{props.title}</div>
        <img
          src={props.img}
          alt=""
          className="mt-4 w-52 h-52 object-cover rounded-full shadow-black shadow-2xl"
        />
      </div>
    </>
  );
}
