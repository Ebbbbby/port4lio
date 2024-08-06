import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "../../Data";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="w-full pt-20 pb-10 container mx-auto">
        <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
          <img
            src="../src/assets/footer-grid.svg"
            alt="footer"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="flex flex-col items-center ">
          <h2 className="text-2xl font-bold text-center mb-4 text-white md:text-4xl">
            Ready to Take your Digital Presence to the{" "}
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200 bg-clip-text text-transparent">
              Next Level?
            </span>{" "}
          </h2>
          <p className="text-gray-200 text-center">
            Reach out to me today and let's discuss houw I can help you achieve
            your goals.{" "}
          </p>
          <a href="mailto:ocynthiaebele@gmail.com">
            <MagicButton
              title="let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="text-gray-200 text-center md:text-base text-sm md:font-normal font-light">
            Copyright © 2024. Cynthia Ebele Ozoani
          </p>
          <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0 ">
            {socialMedia.map((socials) => (
              <div
                key={socials.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-slate-800 rounded-lg border border-black-300 md:mt-5"
              >
                <a
                  href={
                    socials.link.startsWith("http")
                      ? socials.link
                      : `/${socials.link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socials.img} alt="socials" width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
