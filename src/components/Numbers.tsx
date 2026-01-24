import CountUp from "./CountUp";

interface NumbersProps {
  numbers: number;
  title: string;
}

export default function Numbers(props: NumbersProps) {
  return (
    <>
      <div className="bg-white rounded-[60px] shadow-black shadow-2xl p-3 lg:p-5">
        <div className="text-center">
          <CountUp
            from={0}
            to={props.numbers}
            separator=","
            direction="up"
            duration={1}
            className="text-black font-montserrat text-5xl font-semibold text-center md:text-4xl"
          />
          <span className="text-black font-montserrat text-5xl font-semibold md:text-4xl">
            +
          </span>
        </div>
        <div className="text-red-900 text-3xl font-montserrat font-bold text-center mt-2 md:text-3xl">
          {props.title}
        </div>
      </div>
    </>
  );
}
