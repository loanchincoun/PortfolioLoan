import React from "react";
const skills = {
  Backend: ["Java", "Spring Boot", "Hibernate", "Maven", "Node.js", "Python", "REST API"],
  Frontend: ["React", "React Native", "HTML", "CSS", "PHP", "Power Apps","Angular"],
  "Low-Code & Automation": ["Power Automate", "Make", "Botpress", "OpenAI"],
  Databases: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Oracle", "Firestore", "Airtable"],
  "Cloud & DevOps": ["Docker", "Kubernetes", "Git", "GitLab"],
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-title">
        <p>Compétences</p>
        <h2>Les technologies que j’utilise pour construire mes projets.</h2>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>
            <div className="tags">
              {items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
