import prc1 from "./assets/prc1.png";
import prc2 from "./assets/prc2.png";
import prc3 from "./assets/prc3.png";
import prc4 from "./assets/prc4.png";
import prc5 from "./assets/prc5.png";
import prc6 from "./assets/prc6.png";
import cisco from "./assets/cisco.png";
import n1 from "./assets/n1.png";
import guvi from "./assets/GUVI-FSD.png";

// ------------------ SITE META ------------------
export const siteMeta = {
  name: "Ravikumar",
  role: "UI/UX Designer & Full-Stack Developer",
  location: "Tharangambadi, Mayiladuthurai, Tamil Nadu, India",
  email: "ravikumarsaravanan71640@gmail.com",
  resume: "/resume.pdf" // put resume.pdf into public folder if you want
};

// Import skill logos/icons
import htmlIcon from "./assets/html-5-48.png";
import cssIcon from "./assets/css-logo-48.png";
import jsIcon from "./assets/javascript-logo-32.png";
import reactIcon from "./assets/react-48.png";
import figmaIcon from "./assets/figma-48.png";
import photoshopIcon from "./assets/photoshop-48.png";
import corelIcon from "./assets/coreldraw-logo-48.png";
import flexIcon from "./assets/flex.png";
import gitIcon from "./assets/git-logo-48.png";
import githubIcon from "./assets/github-logo-48.png";
import canva from "./assets/canva-app-48.png";
import vscodeIcon from "./assets/vs-code-48.png";

// ------------------ SKILLS ------------------
export const skills = [
  { name: "HTML", level: "Expert", icon: htmlIcon },
  { name: "CSS", level: "Expert", icon: cssIcon },
  { name: "JavaScript", level: "Advanced", icon: jsIcon },
  { name: "React", level: "Advanced", icon: reactIcon },
  { name: "Figma", level: "Advanced", icon: figmaIcon },
  { name: "Photoshop", level: "Intermediate", icon: photoshopIcon },
  { name: "CorelDRAW", level: "Intermediate", icon: corelIcon },
  { name: "Flexi Sign Pro", level: "Intermediate", icon: flexIcon },
  { name: "Git", level: "Intermediate", icon: gitIcon },
  { name: "Github", level: "Intermediate", icon: githubIcon },
  { name: "Canva", level: "Advanced", icon: canva },
  { name: "VS Code", level: "Intermediate", icon: vscodeIcon }
];

// ------------------ SKILLS ------------------
// export const skills = [
//   { name: "HTML", level: "Expert" },
//   { name: "CSS", level: "Expert" },
//   { name: "JavaScript", level: "Advanced" },
//   { name: "React", level: "Advanced" },
//   // { name: "Node.js", level: "Intermediate" },
//   { name: "Figma", level: "Advanced" },
//   { name: "Photoshop", level: "Intermediate" },
//   { name: "CorelDRAW", level: "Intermediate" },
//   { name: "Flex Sign Pro", level: "Intermediate" },
//   { name: "Git", level: "Intermediate" },
//   { name: "Github", level: "Intermediate" },
//   // { name: "Responsive Design", level: "Advanced" },
//   { name: "UI/UX Design", level: "Advanced" },
//   { name: "VS Code", level: "Intermediate" }
// ];

// ------------------ PROJECTS ------------------
export const projects = [
  {
    id: 1,
    title: "PORTFOLIO",
    subtitle: "Design + Development",
    desc: "A personal portfolio showcasing my work and skills.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://ravikumarsaravanan.github.io/portfolio-website/",
    github: "https://github.com/ravikumarsaravanan/portfolio-website",
    image: prc1
  },
  // add github links for other projects if available


  {
    id: 2,
    title: "V-CARD",
    subtitle: "Creative idea + implementation",
    desc: "A virtual business card showcasing my skills and contact information.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://ravikumarsaravanan.github.io/VCARD/",
    github: "https://github.com/RavikumarSaravanan/VCARD",
    image: prc2
  },
  {
    id: 3,
    title: "PROFILE-CARD",
    subtitle: "Personal Profile Card",
    desc: "A personal profile card showcasing my skills and contact information.",
    tech: ["HTML", "CSS"],
    link: "https://ravikumarsaravanan.github.io/profile-card/",
    github: "https://github.com/RavikumarSaravanan/profile-card",
    image: prc3
  },

];

// ------------------ EDUCATION ------------------
export const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "EGS Pillay Engineering College",
    year: "2023 - 2027",
    description: [
      "Focused on Full Stack Development, UI/UX design, and cloud technologies."
    ]
  },
  {
    degree: "Higher Secondary",
    school: "Nivedha Matric Higher Secondary School",
    year: "2021 - 2023",
    description: [
      "Specialized in Science with Mathematics and Computer Applications."
    ]
  }
];

// ------------------ EXPERIENCE ------------------
export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Novitech R&D Pvt. Ltd – Remote",
    year: "March 2025 to April 2025",
    description: [
      "Built responsive web apps using React, Node.js, and MongoDB."
    ]
  },
  {
    role: "UI/UX Designer Intern & Full Stack Development Intern",
    company: "Arttifai Tech",
    year: "April 2025",
    description: [
      "Designed and prototyped mobile/web interfaces using Figma."
    ]
  },
  {
    role: "Junior Software Engineer Intern",
    company: "Technohack Edutech",
    year: "April 2024",
    description: [
      "Solved logic-based problems using C programming."
    ]
  }
];

// ------------------ CERTIFICATES ------------------
export const certificates = [
  {
  id: 3,
  title: "Certificate of Completion - #LearnWithGUVI Season Two",
  organization: "GUVI & HCL",
  date: "October 14 - 19, 2024",
  image: "./src/assets/GUVI-FSD.png", // replace with your actual path
  verify: "#"
},
  {
    id: 1,
    title: "Full-Stack Web Development Intern",
    organization: "Novitech R&D Pvt. Ltd",
    date: "March - April 2025",
    image: "./src/assets/n1.png",
    verify: "#",
  },
 {
  id: 2,
  title: "Python Essentials 1",
  organization: "Cisco Networking Academy & OpenEDG Python Institute",
  date: "August 03, 2024",
  image: "./src/assets/cisco.png", // replace with your actual path
  verify: "#"
}

];
