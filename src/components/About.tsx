// import GradientText from "./GradientText";
import Numbers from "./Numbers";
import SplitText from "./SplitText";

const About = () => {
  return (
    <>
      <section id="#about">
        <div className="bg-linear-to-b from-black to-red-900">
          <div className="flex justify-center">
            <SplitText
              text="ABOUT CONSORTIUM'26"
              className="text-white text-shadow-lg text-shadow-red-900 text-center text-[2.5rem] xl:text-8xl font-poppins font-bold mt-50 md:text-6xl"
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
          <p className="text-white text-center p-5 mt-5 pb-5 text-xl font-montserrat md:p-10 md:text-3xl">
            Consortium is the flagship annual entrepreneurship summit and
            management festival of VNIT. It offers a platform for students to
            showcase their entrepreneurial skills and network with industry
            experts. The event features engaging competitions and keynote
            sessions, inspiring and fueling the spirit of entrepreneurship among
            attendees. Join us to ignite your entrepreneurial spark at
            Consortium!
          </p>
          <p className="text-white text-center text-4xl font-montserrat">
            Check out events schedule{" "}
            <a href="/schedule" className="underline" target="_blank">
              HERE
            </a>
          </p>

          <div className="grid grid-cols-1 px-5 py-10 pb-20 gap-5 justify-center md:grid-cols-2 lg:grid-cols-4 lg:px-5 xl:px-20">
            <Numbers title="EVENTS" numbers={20} />
            <Numbers title="COLLEGES" numbers={200} />
            <Numbers title="FOOTFALL" numbers={20000} />
            <Numbers title="SPEAKERS" numbers={20} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
