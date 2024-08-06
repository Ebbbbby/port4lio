import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiTwotoneHome,
} from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BsBook } from "react-icons/bs";
// import { RiServiceLine } from "react-icons/ri";
// import { MdContactPhone } from "react-icons/md";
// import { GoProjectSymlink } from "react-icons/go";
import { BiLogoNetlify } from "react-icons/bi";
// import img1 from "../src/assets/b1.svg";
import { FaCheckCircle } from "react-icons/fa";

export const navbarLinks = [
  {
    id: 1,
    link: "/home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "/education",
  },
  {
    id: 4,
    link: "/experience",
  },
  {
    id: 5,
    link: "/projects",
  },
  {
    id: 6,
    link: "/contact",
  },
];

export interface LinkItem {
  id: number;
  link: string;
  icon: any;
}

export const socialLinks: LinkItem[] = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/ebele-ozoani-319524224",
    icon: <AiOutlineLinkedin />,
  },
  {
    id: 2,
    link: "https://github.com/Ebbbbby",
    icon: <AiFillGithub />,
  },
  {
    id: 3,
    link: "https://twitter.com/ebele_ozoani",
    icon: <AiOutlineTwitter />,
  },

  {
    id: 4,
    link: "https://www.instagram.com/ebele_ozoani/",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 5,
    link: "https://moviesspot.netlify.app",
    icon: <BiLogoNetlify />,
  },
];
export const gridItems = [
  {
    id: 1,
    title: "Responsive Web Design",
    description:
      "Creating websites that work seamlessly across different devices and screen sizes. Utilizing modern CSS frameworks like Tailwind CSS, Bootstrap, or custom media queries for responsiveness.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "../src/assets/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Developing interactive and dynamic web applications using HTML, CSS, and JavaScript. Proficient in modern JavaScript frameworks and libraries like React, Next JS.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "../src/assets/devImg.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "SEO-Friendly Development",
    description:
      "Develop websites with best practices for search engine optimization (SEO) to improve visibility and ranking",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "../src/assets/wavy.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: " API Integration.",
    description:
      "Connecting front-end applications to back-end services and third-party APIs. Using RESTful services, GraphQL, and AJAX",

    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "../src/assets/API.svg",
    spareImg: "./b4.svg",
  },
];

export const skillsItem = [
  {
    id: 1,
    title: "React Js",
    progress: 80,
    color: "green",
    icon: <FaCheckCircle />,
  },

  {
    id: 2,
    title: "Javascript",
    progress: 82,
    color: "green",
    icon: <FaCheckCircle />,
  },
  {
    id: 3,
    title: "Next Js",
    progress: 70,
    color: "green",
    icon: <FaCheckCircle />,
  },
  {
    id: 4,
    title: "TypeScript",
    progress: 70,
    color: "green",
    icon: <FaCheckCircle />,
  },
  {
    id: 5,
    title: "Redux",
    progress: 75,
    color: "green",
    icon: <FaCheckCircle />,
  },
  {
    id: 6,
    title: "HTML & CSS",
    progress: 85,
    color: "green",
    icon: <FaCheckCircle />,
  },
  {
    id: 7,
    title: "Tailwind CSS",
    progress: 80,
    color: "green",
    icon: <FaCheckCircle />,
  },
  {
    id: 8,
    title: "Bootstrap",
    progress: 80,
    color: "green",
    icon: <FaCheckCircle />,
  },
  {
    id:9,
    title: ".Net",
    progress: 50,
    color: "green",
    icon: <FaCheckCircle />,
  },
];

export const hireMeItems = [
  {
    id: 1,
    icon: <AiTwotoneHome />,
    title: "Technical Proficiency",
    description:
      "I possess extensive expertise in front-end web development, with a strong foundation in HTML, CSS, JavaScript, TypeScript, and modern frameworks such as React and Next.js. My approach combines technical proficiency with a keen eye for user experience, ensuring the development of robust, efficient, and user-friendly web applications. I stay current with emerging trends and best practices in web development, allowing me to deliver cutting-edge solutions that meet and exceed project requirements.",
  },
  {
    id: 2,
    icon: <AiTwotoneHome />,
    title: "Strong Analytical and Troubleshooting Skills",
    description:
      "I can efficiently pinpoint problems in code, whether they're related to layout, functionality, or performance. I use tools like Chrome DevTools, Firefox Developer Edition, and other debugging utilities to inspect and resolve issues. I analyze and optimize code to enhance the speed and responsiveness of web applications. Finally, I tailor solutions to fit various project requirements, ensuring robust and scalable code.",
  },
  {
    id: 3,
    icon: <AiTwotoneHome />,
    title: "Seamless Scaling",
    description:
      "My holistic approach goes beyond creating websites; I engineer growth. through strategic design, responsive development, and targeted digital strategies, I empower businesses to scale effectively and seize opportunities.",
  },
  {
    id: 4,
    icon: <AiTwotoneHome />,
    title: "Version Control Systems",
    description:
      "I am Proficient with tools like Git for Code Management and Collaboration. ",
  },
  // {
  //   id: 5,
  //   icon: <AiTwotoneHome />,
  //   title: "Seamless Scaling",
  //   description:
  //     "My holistic approach goes beyond creating websites; I engineer growth. Through strategic design, responsive development, and targeted digital strategies, I empower businesses to scale effectively and seize opportunities.",
  // },
  // {
  //   id: 6,
  //   icon: <AiTwotoneHome />,
  //   title: "Seamless Scaling",
  //   description:
  //     "My holistic approach goes beyond creating websites; I engineer growth. Through strategic design, responsive development, and targeted digital strategies, I empower businesses to scale effectively and seize opportunities.",
  // },
];

// export const recentProjects = [
//   {
//     id: 1,
//     title: "Movies Spot",
//     description:
//       "A web application that allows users to search for movies and tv shows.",
//     img: "",
//     link: "https://github.com/Ebbbbby/movies-spot",
//     icon: <GoProjectSymlink />,
//   },
//   {
//     id: 2,
//     title: "Recipe App",
//     description:
//       "A web application that allows users to search for movies and tv shows.",
//     img: "",
//     link: "https://github.com/Ebbbbby/movies-spot",
//     icon: <GoProjectSymlink />,
//   },

//   {
//     id: 3,
//     title: "E-commerce",
//     description:
//       "A web application that allows users to search for movies and tv shows.",
//     img: "",
//     link: "https://github.com/Ebbbbby/movies-spot",
//     icon: <GoProjectSymlink />,
//   },
//   {
//     id: 4,
//     title: "E-commerce",
//     description:
//       "A web application that allows users to search for movies and tv shows.",
//     img: "",
//     link: "https://github.com/Ebbbbby/movies-spot",
//     icon: <GoProjectSymlink />,
//   },
//   {
//     is: 5,
//     title: "Sip of Coctail",
//     description:
//       "A web application that allows users to search for movies and tv shows.",
//     img: "",
//     link: "https://github.com/Ebbbbby/movies-spot",
//     icon: <GoProjectSymlink />,
//   },
//   {
//     id: 6,
//     title: "E-commerce",
//     description:
//       "A web application that allows users to search for movies and tv shows.",
//     img: "",
//     link: "https://github.com/Ebbbbby/movies-spot",
//     icon: <GoProjectSymlink />,
//   },
// ];
export const projects = [
  {
    id: 1,
    title: "Hotel Management App",
    des: "Developed a hotel management web application featuring a Stripe-integrated payment gateway and Google and GitHub authentication for secure, user-friendly access.",
    img: "../src/assets/hotel.png",
    iconLists: [
      "/../src/assets/next.svg",

      "../src/assets/tail.svg",
      "../src/assets/ts.svg",
      "../src/assets/fm.svg",
    ],
    link: "https://hotel-management-59cv.vercel.app/",
  },
  {
    id: 2,
    title: "Movie App",
    des: "Created a responsive movie app using React, which dynamically fetches data from a movie API database to display the latest films.",
    img: "../src/assets/moviehubfp.png",
    iconLists: [
      "../src/assets/re.svg",
      "../src/assets/tail.svg",
      "../src/assets/c.svg",
    ],
    link: "https://moviesspot.netlify.app",
  },
  {
    id: 3,
    title: "Mini E- Commerce App",
    des: "Developed an application where you can shop for various items. The application allows a user to login, add items to cart and pay for those items",
    img: "../src/assets/fp.png",
    iconLists: [
      "../src/assets/re.svg",
      "../src/assets/tail.svg",
      "../src/assets/ts.svg",
      "../src/assets/three.svg",
      "../src/assets/c.svg",
    ],
    link: "https://clothier.netlify.app",
  },

];
export const testimonials = [
  {
    quote:
      "Working with Cynthia was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cynthia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cynthia is the ideal.",
    name: "Moses Obika",
    title: "CTO Regxta Global Services Limited",
  },
  {
    quote:
      "Collaborating with Cynthia was an outstanding experience. Her professionalism, punctuality, and commitment to achieving remarkable outcomes were apparent from start to finish. Cynthia's passion for every aspect of development shines brightly. ",
    name: "Henry Chibuike",
    title: "Senior Developer Fair Money Micro Finance Bank",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Assisted in the development of a web-based platform using JavaScript, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "../src/assets/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer at Decagon",
    desc: "Designed and developed dynamic applications utilizing React, JavaScript, HTML, and CSS for the front end, ensuring responsive and interactive user experiences. Leveraged the .NET framework for backend development, providing robust and scalable server-side functionality. ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "../src/assets/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Devloper at NLPC PFA",
    desc: "Designed and developed web applications for user departments to streamline their daily operations. Utilized React for the front end and employed Redux for efficient state management, ensuring smooth and consistent application performance.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "../src/assets/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer at Regxta",
    desc: "Developed and maintained user-facing features using modern frontend technologies, including React, TypeScript, and Redux. Leveraged these tools to create dynamic and responsive web applications that enhance user experience and provide efficient state management",
    className: "md:col-span-2",
    thumbnail: "../src/assets/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "../src/assets/git.svg",
    link: "https://github.com/Ebbbbby",
  },

  {
    id: 2,
    img: "../src/assets/link.svg",
    link:"https://www.linkedin.com/in/ebele-ozoani-319524224/"
  },
];