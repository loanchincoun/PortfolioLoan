import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">Loan<span>.</span></a>

      <nav>
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#experience">Expérience</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-icons">
        <a href="https://github.com/loanchincoun" target="_blank" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/loan-chincoun" target="_blank" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="mailto:loanchincoun76@gmail.com" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
    </header>
  )
}
