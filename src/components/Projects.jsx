import React from "react";
import { ExternalLink, Github } from "lucide-react"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <p>Projets</p>
        <h2>Des projets concrets autour du full-stack, mobile, IA et digitalisation métier.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span>{project.category}</span>
              <div>
                <a href={project.github} target="_blank" aria-label="GitHub"><Github size={18} /></a>
                <a href={project.demo} target="_blank" aria-label="Demo"><ExternalLink size={18} /></a>
              </div>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>

            <ul>
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
