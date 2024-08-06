import { FaLocationArrow } from "react-icons/fa";
import { projects } from "../../Data";
import { PinContainer } from "../ui/3d-pin";

const RecentProjects = () => {
  return (
    <div>
      <section className="py-16" id="RecentProjects">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-white md:text-4xl">
            A Small Selection Of{" "}
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200 bg-clip-text text-transparent">
              {" "}
              Recent Projects
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center p-4 gap-x-10 mt-5 md:gap-x-10 ">
            {projects
              .slice(0, 3)
              .map(({ id, title, des, img, iconLists, link }) => (
                <div
                  key={id}
                  className="lg:min-h-[32.5rem] h-[29rem] flex items-center justify-center sm:w-96 w-[50vw] px-5"
                >
                  <PinContainer title={link} href={link}>
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <div className="relative w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                        <img
                          src="../../../src/assets/bg.png"
                          alt={title}
                          className="w-full h-full object-contain rounded-lg shadow-lg shadow-purple-500/40"
                        />
                      </div>
                      <img
                        src={img}
                        alt={title}
                        className="absolute bottom-0 w-full rounded-lg h-full object-cover "
                      />
                    </div>
                    <h2 className="text-2 xl font-semibold mb-2 text-center text-white">
                      {title}
                    </h2>
                    <p className=" text-gray-300 flex-grow text-sm text-center">
                      {des}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                          <div
                            key={icon}
                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            <img src={icon} alt={icon} className="p-2" />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-sm md:text-xs text-sm text-purple-400">
                          {" "}
                          View Project
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBAC" />
                      </div>
                    </div>
                  </PinContainer>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentProjects;


 <div className="h-[40rem] w-full flex items-center justify-center ">
   <PinContainer
     title="/ui.aceternity.com"
     href="https://twitter.com/mannupaaji"
   >
     <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
       <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
         Aceternity UI
       </h3>
       <div className="text-base !m-0 !p-0 font-normal">
         <span className="text-slate-500 ">
           Customizable Tailwind CSS and Framer Motion Components.
         </span>
       </div>
       <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
     </div>
   </PinContainer>
 </div>;