// ------------------ PROJECT IMAGES ------------------
// Since these files are in /public/assets/
const prc1 = "/assets/prc1.png";
const prc2 = "/assets/prc2.png";
const prc3 = "/assets/prc3.png";

// ------------------ SITE META ------------------
export const siteMeta = {
  name: "Ravikumar",
  role: "UI/UX Designer & Full-Stack Developer",
  location: "Tharangambadi, Mayiladuthurai, Tamil Nadu, India",
  email: "ravikumarsaravanan71640@gmail.com",
  resume: "/resume.pdf" // ✅ correct Netlify path
};

// ------------------ SKILL ICONS ------------------
const htmlIcon = "/assets/html-5-48.png";
const cssIcon = "/assets/css-logo-48.png";
const jsIcon = "/assets/javascript-logo-32.png";
const reactIcon = "/assets/react-48.png";
const figmaIcon = "/assets/figma-48.png";
const photoshopIcon = "/assets/photoshop-48.png";
const corelIcon = "/assets/coreldraw-logo-48.png";
const flexIcon = "/assets/flex.png";
const gitIcon = "/assets/git-logo-48.png";
const githubIcon = "/assets/github-logo-48.png";
const canva = "/assets/canva-app-48.png";
const vscodeIcon = "/assets/vs-code-48.png";

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
    title: "Book My Show Clone",
    subtitle: "A clone of the popular movie ticket booking platform",
    desc: "This project replicates the core features of the Book My Show platform, allowing users to browse movies, view showtimes, and book tickets.",
    tech: ["HTML", "CSS"],
    link: "https://book-my-show-clone-ravikumar.netlify.app/#",
    github: "https://github.com/RavikumarSaravanan/Book-my-show-clone-",
    image: prc3
  }
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
    image: "/assets/GUVI-FSD.png", 
    verify: "#"
  },
  {
    id: 1,
    title: "Full-Stack Web Development Intern",
    organization: "Novitech R&D Pvt. Ltd",
    date: "March - April 2025",
    image: "/assets/n1.png",
    verify: "#"
  },
  {
    id: 2,
    title: "Python Essentials 1",
    organization: "Cisco Networking Academy & OpenEDG Python Institute",
    date: "August 03, 2024",
    image: "/assets/cisco.png",
    verify: "#"
  }
];
