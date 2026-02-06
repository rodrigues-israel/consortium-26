import teamBg from "@/assets/teambg.webp";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface TeamProps {
  name?: string;
  title?: string;
  img?: string;
  linkedin?: string;
  mail?: string;
  phone?: string;
}

export default function Speakers(props: TeamProps) {
  return (
    <>
      <div
        className="bg-cover bg-center rounded-4xl border-white flex flex-col items-center p-5 h-100 w-80 overflow-hidden hover:scale-102 transition-transform drop-shadow-xl drop-shadow-gray-900"
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
        <div className="flex mt-7 gap-4 justify-evenly">
          {/* Linkedin */}
          <div>
            <a
              href={`${props.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size="1.8rem"
                className="text-white hover:scale-110 hover:duration-150"
              />
            </a>
          </div>

          {/* email */}
          <div>
            <a href={`mailto:${props.mail}`} target="_blank">
              <MdEmail
                size="1.8rem"
                className="text-white hover:scale-110 hover:duration-150 "
              />
            </a>
          </div>

          {/* phone number */}
          <div>
            <a href={`tel:${props.phone}`} target="_blank">
              <FaPhone
                size="1.8rem"
                className="text-white hover:scale-110 hover:duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
