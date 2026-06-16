import React from "react";
import { ArrowRight, Download, Github } from "lucide-react";
import photoProfil from "../assets/LoanCHINCOUN.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

      
        <h1 className="hero-title">
          Bonjour,
          <br />
          Je suis <span>Loan CHINCOUN</span>
        </h1>

        <h2 className="hero-subtitle">
          Développeur Full Stack passionné par le développement web,
          l'automatisation et les solutions métiers.
        </h2>

        <p className="hero-description">
          J'accompagne les entreprises dans leur transformation numérique
          en concevant des applications modernes, performantes et adaptées
          aux besoins des utilisateurs.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            Voir mes projets
            <ArrowRight size={18} />
          </a>

          <a
            className="btn secondary"
            href="/CV_Loan_CHINCOUN.pdf"
            download
          >
            Télécharger mon CV
            <Download size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
