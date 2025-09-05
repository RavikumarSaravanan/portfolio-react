// // import React from "react";
// // import { siteMeta } from "../data";
// // import avatar from "../assets/avatar.png"; // add your avatar here

// // export default function Hero() {
// //   return (
// //     <section id="home" className="hero container" aria-labelledby="intro-title">
// //       <div className="hero-left">
// //         <h1 id="intro-title">Hi — I'm {siteMeta.name}.</h1>
// //         <p className="small">{siteMeta.role} focused on creating useful, delightful experiences — from concept to code.</p>
// //         <div className="hero-cta" style={{ marginTop: 18 }}>
// //           <a className="btn btn-primary" href="#projects">See my work</a>
// //           <a className="btn btn-outline" href={siteMeta.resume}>Download CV</a>
// //         </div>
// //       </div>

// //       <div className="avatar card" aria-hidden="false">
// //         <img src={avatar} alt={`${siteMeta.name} avatar`} />
// //       </div>
// //     </section>
// //   );
// // }
// import React from "react";
// import { siteMeta } from "../data";
// import avatar from "../assets/avatar.png"; // add your avatar here
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section id="home" className="hero container" aria-labelledby="intro-title">
//       <div className="hero-left">
//         <h1 id="intro-title">Hi — I'm {siteMeta.name}.</h1>
//         <p className="small">
//           {siteMeta.role} focused on creating useful, delightful experiences — from concept to code.
//         </p>

//         {/* CTA Buttons */}
//         <div className="hero-cta" style={{ marginTop: 18 }}>
//           <a className="btn btn-primary" href="#projects">See my work</a>
//           <a className="btn btn-outline" href={siteMeta.resume}>Download CV</a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="social-links" style={{ marginTop: 80 }}>
//           <h3 style={{ marginBottom: "10px" }}>Or connect with me</h3>
//           <div style={{ fontSize: "24px" }}>
//             <a href="mailto:your@email.com" target="_blank" rel="noreferrer">
//               <FaEnvelope style={{ margin: "0 10px 0 -1px" }} />
//             </a>
//             <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
//               <FaGithub style={{ margin: "0 11px" }} />
//             </a>
//             <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
//               <FaLinkedin style={{ margin: "0 10px" }} />
//             </a>
//             <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
//               <FaTwitter style={{ margin: "0 10px" }} />
//             </a>
//             <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
//               <FaInstagram style={{ margin: "0 10px" }} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Avatar */}
//       <div className="avatar card" aria-hidden="false">
//         <img src={avatar} alt={`${siteMeta.name} avatar`} />
//       </div>
//     </section>
//   );
// }
import React from "react";
import { siteMeta } from "../data";
import avatar from "/assets/avatar.webp"; // add your avatar here

export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="intro-title">
      <div className="hero-left">
        {/* Intro line */}
        <p className="intro-text">Hi, my name is</p>

        {/* Main heading */}
        <h1 id="intro-title">{siteMeta.name}.</h1>

        {/* Sub heading */}
        <h2 className="sub-heading">I build things for the web.</h2>

        {/* Short bio */}
        <p className="hero-desc">
          I’m a <strong>{siteMeta.role}</strong> specializing in building exceptional
          digital experiences. Currently, I’m focused on developing modern web apps
          with <strong>React</strong> & <strong>full-stack technologies</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a className="btn btn-primary hero-btn" href="#projects">
            Check out my work
          </a>
          
        </div>
      </div>

      {/* Avatar / Image */}
      <div className="avatar">
        <img src={avatar} alt={`${siteMeta.name} avatar`} />
      </div>
    </section>
  );
}
