import { hireMeItems } from "../../Data";



const HireMe = () => {
  return (
    <section className="container mx-auto relative my-16 " id="about">
      <h2 className="text-2xl font-bold text-center mb-12 text-white md:text-4xl mt-20">
        Why You Should
        <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200 bg-clip-text text-transparent">
          {" "}
          Hire Me
        </span>
      </h2>

      <div className="hidden md:block absolute left-1/2 top-44 bottom-44 w-px bg-gray-600 transform "></div>

      <div className="relative">
        {hireMeItems.map(({ id, title, description }, index) => (
          <div key={id} className="mb-16">
            {/* Mobile layout */}
            <div className="md:hidden">
              <div className="relative pl-12  border-l-4 border-gray-600">
                <div className="absolute left-0 top-0 w-10 h-10 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center -translate-x-1/2">
                  <span className="text-white text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {title}
                </h3>
                <p className="text-gray-400">{description}</p>
                <ul className="list-disc pl-5 mt-2 text-gray-400 text-sm">
                  {/* Add your list items here */}
                </ul>
              </div>
            </div>

            {/* Desktop layout */}
            <div
              className={`hidden md:flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center">
                <span className="text-white text-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div
                className={`w-5/12 border border-slate-900 py-4 px-2 ${
                  index % 2 === 0 ? "text-center" : "text-center"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {title}
                </h3>
                <p className="text-gray-400 text-md text-center tracking-wide">
                  {description}
                </p>
                <ul
                  className={`list-disc mt-2 text-gray-400 text-sm ${
                    index % 2 === 0 ? "pl-5" : "pl-5"
                  }`}
                ></ul>
              </div>

              {/* <div className="w-2/12"></div> */}
            </div>
          </div>
        ))}
        {/* <a href="#">
          <MagicButton
            title="Book a call"
            icon={<FaPhone />}
            position="right"
          />
        </a> */}
      </div>
    </section>
  );
};

export default HireMe;
