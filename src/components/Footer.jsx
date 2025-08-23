// import React from 'react';

// export default function Footer() {
//   return (<center>
//     <footer>
//       {/* <p>© 2025 Ravikumar S. </p> */}
//       <div className="container small">
//        © {new Date().getFullYear()} Ravikumar — Built with ♥ • UI/UX & Full-Stack ! All rights reserved.
//       </div>
//     </footer></center>
//   );
// }


import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ padding: "20px 0" }}>
      <div
        className="footer-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 20px",
          
        }}
      >
        {/* Footer Text */}
        <div className="footer-text" style={{ fontSize: "14px" ,paddingLeft: "100px"}}>
          © {new Date().getFullYear()} Ravikumar — Built with ♥ • UI/UX & Full-Stack! All rights reserved.
        </div>

        {/* Social Media Icons */}
        <div className="social-links sl1" style={{ fontSize: "22px" , right: "10px" }}>
          <a href="mailto:your@email.com" target="_blank" rel="noreferrer">
            <FaEnvelope style={{ margin: "0 10px", color: "var(--light-slate)" }} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub style={{ margin: "0 10px", color: "var(--light-slate)" }} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin style={{ margin: "0 10px", color: "var(--light-slate)" }} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <FaTwitter style={{ margin: "0 10px", color: "var(--light-slate)" }} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram style={{ margin: "0 10px", color: "var(--light-slate)" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
