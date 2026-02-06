import eventsBg from "@/assets/eventsBg.png";
import SplitText from "@/components/SplitText.tsx";
import TeamCard from "@/components/TeamCard.tsx";
import Admin from "@/components/Admin.tsx";

import abhijeet from "@/assets/team/abhijeet.jpg";
import tanvi from "@/assets/team/tanvi.jpg";
import prashant from "@/assets/team/prashant.jpg";
import sriram from "@/assets/team/sriram.jpeg";
import anushka from "@/assets/team/anushka.jpg";
import rakshit from "@/assets/team/rakshit.jpg";
import prince from "@/assets/team/prince.jpg";
import chavan from "@/assets/team/chavan.webp";
import sahil from "@/assets/team/sahil.jpeg";
import arja from "@/assets/team/arja.webp";
import aryan from "@/assets/team/aryan.webp";
import pragya from "@/assets/team/pragya.webp";
import arpit from "@/assets/team/arpit.webp";
import mohit from "@/assets/team/mohit.webp";
import dhroov from "@/assets/team/dhroov.webp";
import tanisha from "@/assets/team/tanisha.webp";

import anshul from "@/assets/advisory/anshul.webp";
import rohit from "@/assets/advisory/rohit.webp";
import harsh from "@/assets/advisory/harsh.webp";
import bhakti from "@/assets/advisory/bhakti.webp";
import anurag from "@/assets/advisory/anurag.webp";
import apurva from "@/assets/advisory/apurva.webp";
import sudhanshu from "@/assets/advisory/sudhanshu.webp";
import aquib from "@/assets/advisory/aquib.webp";
import anuj from "@/assets/advisory/anuj.webp";
import mayank from "@/assets/advisory/mayank.webp";
import varad from "@/assets/advisory/varad.webp";
import sourav from "@/assets/advisory/sourav.webp";
import kaushik from "@/assets/advisory/kaushik.webp";

import director from "@/assets/admin/director.webp";
import agasti_sir from "@/assets/admin/agasti_sir.webp";
import khatri from "@/assets/admin/khatri.webp";
import chayan from "@/assets/admin/chayan.webp";

const TeamData = [
  {
    id: 1,
    name: "Abhijeet Singh",
    title: "President",
    img: abhijeet,
    linkedin: "https://www.linkedin.com/in/abhijeet-singh-as1510",
    mail: "abhijeettsingh2715@gmail.com",
    phone: "09106392134",
  },
  {
    id: 2,
    name: "Tanvi Malode",
    title: "Vice President",
    img: tanvi,
    linkedin: "https://www.linkedin.com/in/tanvi-malode-5744a4258",
    mail: "malodetanvi01@gmail.com",
    phone: "9096779472",
  },
  {
    id: 3,
    name: "Prashant T Labde",
    title: "Treasurer",
    img: prashant,
    linkedin: "https://www.linkedin.com/in/prashanttlabde",
    mail: "Prashantlabade108@gmail.com",
    phone: "7499995479",
  },
  {
    id: 4,
    name: "K D Sriram",
    title: "Head of Corporate Communications",
    img: sriram,
    linkedin: "https://www.linkedin.com/in/dhana-sriram-katta-961b6a335",
    mail: "kdsriram.11@gmail.com",
    phone: "9130692448",
  },
  {
    id: 5,
    name: "Anushka Kumari",
    title: "Head of Corporate Communications",
    img: anushka,
    linkedin:
      "https://www.linkedin.com/in/anushkak0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail: "anushkak0954@gmail.com",
    phone: "8779165100",
  },
  {
    id: 6,
    name: "Rakshit Singhvi",
    title: "Head of Corporate Communications",
    img: rakshit,
    linkedin: "https://www.linkedin.com/in/rakshit-singhvi-75252a239/",
    mail: "rakshitsinghvi2005@gmail.com",
    phone: "9702696983",
  },
  {
    id: 7,
    name: "Prince Kumar",
    title: "Head of Brand Marketing",
    img: prince,
    linkedin:
      "https://www.linkedin.com/in/prince-nirala-201546284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail: "princet905624@gmail.com",
    phone: "9878259975",
  },
  {
    id: 8,
    name: "Saurabh Chavan",
    title: "Head of Brand Marketing",
    img: chavan,
    linkedin: "", // no LinkedIn link provided
    mail: "chavansaurabh782@gmail.com",
    phone: "7841953918",
  },
  {
    id: 9,
    name: "Sahil Shetty",
    title: "Head Of Public Relations",
    img: sahil,
    linkedin: "https://www.linkedin.com/in/sahillshetty",
    mail: "shetty.sahil2006@gmail.com",
    phone: "9137702898",
  },

  {
    id: 10,
    name: "Aarja Kaur Wadhwa",
    title: "Head Of Public Relations",
    img: arja,
    linkedin:
      "https://www.linkedin.com/in/aarja-kaur-wadhwa-773679365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    mail: "aarjakaurw@gmail.com",
    phone: "8767042611",
  },

  {
    id: 11,
    name: "Aryan Singh",
    title: "Head of Technical Affairs",
    img: aryan,
    linkedin: "https://www.linkedin.com/in/aryan-singh0811",
    mail: "aryansingh81104@gmail.com",
    phone: "7985447278",
  },
  {
    id: 12,
    name: "Pragya Chakravarty",
    title: "Head of Operations and Planning",
    img: pragya,
    linkedin: "https://www.linkedin.com/in/pragya-chakravarty-a82209327",
    mail: "pragyac09@gmail.com",
    phone: "9769091274",
  },
  {
    id: 13,
    name: "Arpit Sahu",
    title: "Head of Operations and Planning",
    img: arpit,
    linkedin:
      "https://www.linkedin.com/in/arpit-sahu-894058288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail: "arpit.shahu827@gmail.com",
    phone: "7897416094",
  },
  {
    id: 14,
    name: "Mohit Chavan",
    title: "Head of Operations and Planning",
    img: mohit,
    linkedin:
      "https://www.linkedin.com/in/mohit-chavan-5188761b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail: "mohitchavan917@gmail.com",
    phone: "9322010629",
  },
  {
    id: 15,
    name: "Dhroov Jindal",
    title: "Head of Growth & Partnerships",
    img: dhroov,
    linkedin: "https://linkedin.com/in/dhroov-jindal",
    mail: "dhroovjindal@gmail.com",
    phone: "8950674313",
  },
  {
    id: 16,
    name: "Tanisha Kanchan",
    title: "Head of Growth & Partnerships",
    img: tanisha,
    linkedin:
      "https://www.linkedin.com/in/tanisha-kanchan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail: "tanishakanchan20@gmail.com",
    phone: "9695449226",
  },
];

const AdvisoryData = [
  {
    id: 1,
    title: "Anshul Mukati",
    position: "Treasurer",
    image: anshul,
    linkedin: "https://www.linkedin.com/in/anshul-mukati-643a15285",
    mail: "anshulmukati2021@gmail.com",
    phone: "9479402002",
  },

  {
    id: 2,
    title: "Rohit Shrivas",
    position: "Head of Operations & Planning",
    image: rohit,
    linkedin: "Rohit Shrivas",
    mail: "rohitshrivas453@gmail.com",
    phone: "7440391889",
  },

  {
    id: 3,
    title: "Harsh Agrawal",
    position: "Head of Technical Affairs",
    image: harsh,
    linkedin: "https://www.linkedin.com/in/harsh-agrawal-1o0",
    mail: "hagrawal560@gmail.com",
    phone: "8805214581",
  },
  {
    id: 4,
    title: "Bhakti Umarkar",
    position: "Head of Brand Marketing",
    image: bhakti,
    linkedin: "https://www.linkedin.com/in/bhakti-umarkar-101754282",
    mail: "bhaktiumarkar497@gmail.com",
    phone: "9552990692",
  },
  {
    id: 5,
    title: "Anurag Tiwari",
    position: "Head of Brand Marketing",
    image: anurag,
    linkedin:
      "https://www.linkedin.com/in/anurag-tiwari-172a59250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail: "tiwanurag44@gmail.com",
    phone: "7572041766",
  },
  {
    id: 6,
    title: "Apurva Ugale",
    position: "Head of Corporate Communications",
    image: apurva,
    linkedin: "https://www.linkedin.com/in/apurva-ugale-3964b1267",
    mail: "bt22mme018@vnit.students.ac.in",
    phone: "8208874080",
  },
  {
    id: 7,
    title: "Sudhanshu Tiwari",
    position: "Head Of Corporate Communications",
    image: sudhanshu,
    linkedin: "https://www.linkedin.com/in/sudhanshu-tiwari-843ba525b",
    mail: "sudhanshutiwari4117@gmail.com",
    phone: "9130692448",
  },
  {
    id: 8,
    title: "Aquib Iqbal Shaikh",
    position: "Head Of Public Relations",
    image: aquib,
    linkedin: "https://www.linkedin.com/in/aquib-iqbal-shaikh-042504253",
    mail: "aquibshaikh200215@gmail.com",
    phone: "8581930601",
  },
  {
    id: 9,
    title: "Anuj Singh",
    position: "Head of Public Relations",
    image: anuj,
    linkedin: "https://www.linkedin.com/in/anujsingh5",
    mail: "anujsingh.442211@gmail.com",
    phone: "9373765481",
  },
  {
    id: 10,
    title: "Mayank Gupta",
    position: "Client Services and Partnership Director",
    image: mayank,
    linkedin: "https://www.linkedin.com/in/mayank-gupta-mak1708/",
    mail: "mayankgupta170804@gmail.com",
    phone: "9326060530",
  },
  {
    id: 11,
    title: "Varad nilawar ",
    position: "Consulting Director",
    image: varad,
    linkedin: "https://www.linkedin.com/in/varad-nilawar-9630a9202",
    mail: "Varadnilawar23@gmail.com",
    phone: "86684 54798 ",
  },
  {
    id: 12,
    title: "Sourav Vishwakarma",
    position: "Client Services and Partnership Director",
    image: sourav,
    linkedin: "https://www.linkedin.com/in/souravish",
    mail: "its.souravish@gmail.com",
    phone: "7354651575",
  },
  {
    id: 13,
    title: "Kaushik Reddyshetty",
    position: "Consulting Director",
    image: kaushik,
    linkedin: "https://www.linkedin.com/in/kaushik-reddyshetty-2b4b80229",
    mail: "kaushikreddyshetty123@gmail.com",
    phone: "9063060617",
  },
];

const AdminData = [
  {
    id: 1,
    title: "Dr. P. L. Patel",
    position: "Director, VNIT",
    image: director,
  },
  {
    id: 2,
    title: "Dr. Amrut Agasti",
    position: "Professor Incharge",
    image: agasti_sir,
  },
  {
    id: 3,
    title: "Dr. Ashish P. Khatri",
    position: "Professor Incharge",
    image: khatri,
  },
  {
    id: 4,
    title: "Dr. Chayan Das",
    position: "Professor Incharge",
    image: chayan,
  },
];

const Team = () => {
  return (
    <>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${eventsBg})` }}
      >
        <div className="flex justify-center">
          <SplitText
            text="ADMIN"
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
        <div className="grid xl:grid-cols-4 gap-10 p-5 place-items-center md:grid-cols-2 lg:p-10">
          {AdminData.map((member) => (
            <Admin
              key={member.id}
              name={member.title}
              title={member.position}
              img={member.image}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <SplitText
            text="TEAM"
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
        <div className="grid xl:grid-cols-4 gap-10 p-5 place-items-center md:grid-cols-2 lg:p-10">
          {TeamData.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              title={member.title}
              img={member.img}
              linkedin={member.linkedin}
              mail={member.mail}
              phone={member.phone}
            />
          ))}
        </div>
      </section>

      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${eventsBg})` }}
      >
        <div className="flex justify-center">
          <SplitText
            text="ADVISORY"
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
        <div className="grid xl:grid-cols-4 gap-10 p-5 place-items-center md:grid-cols-2 lg:p-10">
          {AdvisoryData.map((member) => (
            <TeamCard
              key={member.id}
              name={member.title}
              title={member.position}
              img={member.image}
              linkedin={member.linkedin}
              mail={member.mail}
              phone={member.phone}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
