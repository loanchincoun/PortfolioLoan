import React from "react";
export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-title">
        <p>Expérience</p>
        <h2>
          Une expérience terrain sur des applications réellement utilisées en
          entreprise.
        </h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <span>2024 - 2026</span>
          <h3>Alternant Développeur Power Platform · SERTA France</h3>
          <div className="timeline-description-item">
            <ul>
              <li>
                Développement et maintenance d’applications Power Apps adaptées
                aux besoins des utilisateurs.
              </li>
              <li>
                Analyse et digitalisation des processus métiers afin de
                remplacer les procédures papier et améliorer l’efficacité
                opérationnelle.
              </li>
              <li>
                Automatisation des workflows et circuits de validation avec
                Power Automate.
              </li>
              <li>
                Administration de bases de données SharePoint, Dataverse et SQL
                Server.
              </li>
              <li>
                Déploiement de solutions Microsoft 365 et gestion des droits
                d’accès.
              </li>
              <li>
                Pilotage de projets de la conception à la mise en production en
                méthodologie Agile et accompagnement des utilisateurs.
              </li>
            </ul>

            <div className="timeline-description-results">
              <h4>
                <strong>Résultats :</strong>
              </h4>
              <ul>
                <li>
                  📉 Réduction de 80 % de l'utilisation du papier pour les
                  réclamations clients
                </li>
                <li>
                  ⚡ Réduction de 55 % du temps de validation des demandes
                  d'achats
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <span>2025 - 2026</span>
          <h3>Développeur Low-Code · Projet ESIGELEC</h3>
        <div className="timeline-description-item">
          <ul>
            <li>
              Conception d’une solution de chatbot avec Botpress pour optimiser
              la relation client des PME.
            </li>
            <li>
              Développement de scénarios d’automatisation de prise de
              rendez-vous avec Make.
            </li>
            <li>
              Structuration et gestion des données utilisateurs avec Airtable.
            </li>
            <li>
              Implémentation de flux de données entre Botpress, Make, Airtable
              et Gmail.
            </li>
          </ul>
          <div className="timeline-description-results">
            
             <h4>
                <strong>Résultats : </strong> Mise en place d’un chatbot simple,
            robuste et accessible aux PME, réduisant le temps de gestion client
            de 30 %.
              </h4>
            
          
          </div>
        </div>
          

         
        </div>
      </div>
    </section>
  );
}
