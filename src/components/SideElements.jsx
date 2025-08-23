import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaCodepen } from "react-icons/fa";

export default function SideElements() {
  return (
    <>
      {/* Left side social icons */}
      <div className="side-social">
        

<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=ravikumarsaravanan71640@gmail.com&su=Freelance%20Opportunity&body=Hello%20Ravi,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AThanks.`}
  target="_blank"
  rel="noopener"
>
  <FaEnvelope />
</a>

        <a href="https://github.com/RavikumarSaravanan" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/ravikumar71640" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/RAVIKUMAR071640" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com/sravik776" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://codepen.io/RAVIKUMAR-SARAVANAN" target="_blank" rel="noreferrer"><FaCodepen /></a>
      </div>

      {/* Right side email */}
      <div className="side-email">
        <a   href={`https://mail.google.com/mail/?view=cm&fs=1&to=ravikumarsaravanan71640@gmail.com&su=Freelance%20Opportunity&body=Hello%20Ravi,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AThanks.`}
          target="_blank">
          ravikumarsaravanan71640@gmail.com
        </a>
      </div>
    </>
  );
}
