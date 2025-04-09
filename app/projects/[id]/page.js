import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';


const projectsData = [
  {
    id: "1",
    title: "Site Web Pharmacie",
    description: "Un site Web (frontend) pour une pharmacie",
    detailedDescription: "Ce site Web frontend de pharmacie offre une plateforme conviviale et moderne permettant aux utilisateurs d’accéder à plusieurs services essentiels liés à la santé. Le site est organisé en trois sections principales : Consultation, Parapharmacie, et Journal, chacune pensée pour répondre aux besoins des visiteurs de manière claire et efficace.",
    technologies: ["HTML", "CSS", "JavaScrpt"],
    features: [
      "Permet aux utilisateurs de prendre rendez-vous pour des consultations pharmaceutiques",
      "Catalogue dynamique de produits non-médicamenteux (soins, hygiène, compléments alimentaires).",
      "Espace dédié à la publication d’articles santé, conseils de prévention, nouveautés médicales et recommandations de saison"
    ],
    imageUrl: "/image/healthwave.jpg", 
   
  },
  {
    id: "2",
    title: "Site Web - Plateforme d’Échange de Briques",
    description: "Site Web backend/Node.js ",
    detailedDescription: "Ce site Web backend/Node.js est une plateforme interactive permettant aux utilisateurs de s’échanger des pièces de construction (type LEGO). Il propose un système d’authentification sécurisé, une gestion dynamique des briques disponibles, et des fonctionnalités de publication ou suppression d’échanges entre membres.",
    technologies: ["Node.js", "SQL", "HTML/CSS", "JavaScript"],
    features: [
      "Authentification sécurisée avec gestion de sessions. Chaque utilisateur peut se connecter à son compte ou se déconnecter à tout moment pour protéger ses échanges.",
      "Les utilisateurs peuvent consulter les briques proposées par les autres membres, avec détails comme le nom, la couleur, la quantité, et l’état.",
      "Les membres peuvent proposer un nouvel échange en décrivant la brique qu’ils offrent et celle qu’ils recherchent.",
      "Un utilisateur peut retirer une annonce qu’il a postée une fois l’échange effectué ou annulé."
    ],
    imageUrl: "/image/brichange.jpg",
  }
];

export default function ProjectDetail({ params }) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
      
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Bouton retour */}
        <Link 
          href="/projects" 
          className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux projets
        </Link>

        {/* Titre du projet */}
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        
        {/* Image du projet */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description détaillée */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description du projet</h2>
          <p className="text-gray-700 leading-relaxed">{project.detailedDescription}</p>
        </section>

        {/* Technologies utilisées */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-800" 
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fonctionnalités</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </section>

        {/* Liens */}
        <div className="flex flex-wrap gap-4 mt-6">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code source
            </a>
          )}
          
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Voir la démo
            </a>
          )}
        </div>
      </main>

    
    </>
  );
}

// Génération des paths statiques
export async function generateStaticParams() {
  return projectsData.map(project => ({
    id: project.id,
  }));
}