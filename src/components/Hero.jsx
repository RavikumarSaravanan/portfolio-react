import React from "react";
import { siteMeta } from "../data";
import avatar from "../assets/avatar.png"; // add your avatar here

export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="intro-title">
      <div className="hero-left">
        <h1 id="intro-title">Hi — I'm {siteMeta.name}.</h1>
        <p className="small">{siteMeta.role} focused on creating useful, delightful experiences — from concept to code.</p>
        <div className="hero-cta" style={{ marginTop: 18 }}>
          <a className="btn btn-primary" href="#projects">See my work</a>
          <a className="btn btn-outline" href={siteMeta.resume}>Download CV</a>
        </div>
      </div>

      <div className="avatar card" aria-hidden="false">
        <img src={avatar} alt={`${siteMeta.name} avatar`} />
      </div>
    </section>
  );
}
