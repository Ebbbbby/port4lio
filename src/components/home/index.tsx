import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import HeroImg from "../../assets/heroImg.svg";
import ServicesCard from "../servicesCard/ServicesCard";
import DevSkills from "../skills/DevSkills";
import RecentProjects from "../recentProjects/RecentProjects";
import Testimonials from "../testimonial/Testimonials";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";

const index = () => {
  return (
    <>
      <div className="flex flex-col mt-20 md:flex-row items-center justify-between p-4 max-w-7xl mx-auto" id="home">
        <div className=" text-centerw-full md:w-1/2 mb-8 md:mb-0">
          <div className="text-center leading-loose ">
            <span className="text-white leading-tight">
              Hello there, name is
              <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase">
                Cynthia Ebele Ozoani
              </p>
              <TextGenerateEffect
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white"
                words="Front End Web Developer"
              />
            </span>
          </div>
        </div>
        <div className="w-8/12 md:w-1/2 ">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full h-auto lg:w-10/12 mx-auto"
          />
        </div>

      </div>
      <div className="p-4 max-w-7xl mx-auto text-white flex justify-center flex-col text-center md:flex-row md:gap-20 leading-loose">
        <p className="py-3 tracking-wide font-medium md:px-5 ">30+ Projects</p>
        <p className="py-3 tracking-wide font-medium  md:px-5 ">
          20+ Satisfied Clients
        </p>
        <p className="tracking-wide py-3 md:px-5 font-medium">
          4 Years Experience
        </p>
      </div>

      <ServicesCard />
      <div className="mb-9">
        <DevSkills />
      </div>
      <RecentProjects />

      <Testimonials />
      <Experience/>
      <Footer/>
    </>
  );
};

export default index;
