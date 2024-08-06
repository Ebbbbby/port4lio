import { workExperience } from "../../Data";
import { Button } from "../ui/MovingBorder";

const Experience = () => {
  return (
    <section className="py-16">
      <div className=" container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12 text-white md:text-4xl">
          My Work
          <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200 bg-clip-text text-transparent">
            {" "}
            Experience
          </span>
        </h2>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="ms-5">
                  <h2 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h2>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
