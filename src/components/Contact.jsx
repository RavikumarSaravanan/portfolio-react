import React, { useState } from "react";
import { siteMeta } from "../data";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual IDs from EmailJS
    const serviceID = "service_xdezyza";
    const templateID = "template_rz8x3kc";
    const publicKey = "M4aomS8oTZri_2X50";

    emailjs
      .send(serviceID, templateID, form, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="section container">
      <div className="card">
        <h2 className="section-title">Contact</h2>
        <p className="small">
          Reach out — I’m available for freelance and full-time roles. Email:{" "}
          {siteMeta.email}
        </p>

        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-row">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              required
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
