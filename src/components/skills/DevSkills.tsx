import ProgressBar from '../ProgressBar';
import { skillsItem } from '../../Data';
import skillsImg from '../../assets/skills1.svg'
import MagicButton from '../ui/MagicButton';
import { FiDownload } from 'react-icons/fi';
import HireMe from '../hireMe/HireMe';
import { useState } from 'react';



const DevSkills = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const downLoadResume = () => {
    setIsDownloading(true);

       // Create a link element
       const link = document.createElement("a");
       link.href = "/assets/my_resume.pdf"; // Path to your PDF file
       link.download = "CYNTHIA OZOANI_CVs.pdf"; // Name for the downloaded file

       // Append to body, click, and remove
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);

       setIsDownloading(false);
    // setIsDownLoading(true)
    // setTimeout(() => {
    //   setIsDownLoading(false)
    // }, 3000)


  };
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-9/12 md:w-full mx-auto">
          <img
            src={skillsImg}
            alt=""
            className="w-full h-auto lg:w-10/12 mx-auto"
          />
        </div>
        <div className="w-full p-4 shadow-sm shadow-purple-500/30 ">
          <h2 className="text-2xl font-bold text-center mb-12 text-white md:text-4xl">
            My Programming
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200 bg-clip-text text-transparent">
              {" "}
              Skills
            </span>
          </h2>
          {skillsItem.map(({ title, id, progress, icon }) => (
            <div key={id} className="mb-4 relative ">
              <div className="flex">
                <span className="text-white mr-2">{icon}</span>
                <h3 className="text-sm font-semibold text-white w-full md:w-5/12 lg:w-3/12">
                  {title}
                </h3>

                <ProgressBar value={progress} color={`bg-green-400`} />
              </div>
            </div>
          ))}
          <a href="#" onClick={(e) => e.preventDefault()}>
            <MagicButton
              title={isDownloading ? "Downloading..." : "Download Resume"}
              icon={<FiDownload />}
              position="right"
              handleClick={downLoadResume}
              // disabled={isDownloading}
            />
          </a>
        </div>
      </div>
      <HireMe />
    </section>
  );
}

export default DevSkills




