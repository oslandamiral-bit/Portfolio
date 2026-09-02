// Ce fichier centralise toutes les données de ton portfolio.
// Modifie simplement ces valeurs pour personnaliser ton site.

import gestionNotesPreview from '../assets/preview-gestion_notes.png'
import institutUATMPreview from '../assets/preview-institutUATM.png'
import student229Preview from '../assets/preview-student229.png'

export const profile = {
  name: "Osland HOUNGBEME",
  firstName: "Osland",
  role: "Développeur Web",
  tagline:
    "Je crée des sites et applications web modernes, rapides et élégants avec React.",
  email: "oslandamiral@gmail.com",
  phone: "0199075912",
  location: "Cotonou, Bénin",
  github: "https://github.com/oslandamiral-bit/Portfolio",
  whatsapp: "https://wa.me/22999075912",
  resumeUrl: "#contact",
  cvUrl: "/cv/cv_osland_v3.pdf",
  about: [
    "Développeur passionné, je code depuis 2 ans et je transforme des idées en produits concrets et performants. Mon terrain de jeu : le front-end moderne (React, Tailwind CSS, Vite) pour des interfaces rapides, élégantes et agréables à utiliser.",
    "Mon parcours m'a aussi mené vers le développement mobile avec Flutter et Dart, où je conçois des applications natives multiplateformes, vers la programmation backend et les outils avec Python (notamment des applications de bureau avec CustomTkinter), ainsi que vers Java et Visual Basic .NET. Cette diversité me permet de comprendre un projet dans sa globalité, de la base de données jusqu'à l'interface utilisateur.",
    "Autodidacte et toujours curieux, j'apprends en construisant : gestion des notes, sites vitrines, applications mobiles… Chaque projet est pour moi une occasion d'expérimenter, de résoudre de vrais problèmes et de me dépasser. À l'écoute et rigoureux, j'aime travailler en équipe et partager ce que j'apprends. Actuellement en 3ᵉ année de Licence en Informatique à l'Université GASA Formation, je mets ces compétences au service de projets concrets et ambitieux.",
  ],
}

export const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "HTML / CSS", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Flutter / Dart", level: 70 },
  { name: "Python", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Java", level: 55 },
  { name: "Visual Basic .NET", level: 55 },
  { name: "Git / GitHub", level: 80 },
  { name: "UI / UX Design", level: 70 },
  { name: "Vite", level: 85 },
]

export const projects = [
  {
    title: "Gestion_notes",
    description:
      "Application de bureau (CustomTkinter + SQLite/MySQL) pour la gestion complète des notes : filières, classes, étudiants, matières, rapports et relevés.",
    image: gestionNotesPreview,
    tech: ["Python", "CustomTkinter", "SQLite/MySQL"],
    repoUrl: "https://github.com/oslandamiral-bit/Gestion_notes",
    previewUrl: "http://localhost:8310",
  },
  {
    title: "institutUATM",
    description:
      "Site web vitrine de l'Institut UATM GASA Formation (Université Privée du Bénin) : présentation des filières, formations et formulaire de contact.",
    image: institutUATMPreview,
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    repoUrl: "https://github.com/oslandamiral-bit/institutUATM",
    previewUrl: "http://localhost:8025",
  },
  {
    title: "student229",
    description:
      "Application mobile Flutter de gestion de classe avec authentification (inscription / connexion) et stockage local des données via SQLite (sqflite).",
    image: student229Preview,
    tech: ["Flutter", "Dart", "SQLite"],
    repoUrl: "https://github.com/oslandamiral-bit/student229",
    previewUrl: "http://localhost:8311",
  },
]
