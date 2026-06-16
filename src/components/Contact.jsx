import React from "react";
import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-title">
        <p>Contact</p>
        <h2>Tu veux échanger sur un projet ou une opportunité ?</h2>
      </div>

      <div className="contact-card">
        <p>
          Je suis disponible à partir de novembre 2026 pour une opportunité en développement full-stack.
        </p>

        <div className="contact-links">
          <a href="mailto:loanchincoun76@gmail.com"><Mail size={18} /> Email</a>
          <a href="https://github.com/loanchincoun" target="_blank"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/loan-chincoun" target="_blank"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
