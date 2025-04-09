import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
  {
    id: "1",
    title: "Site Web Pharmacie",
    description: "Un site Web (frontend) pour une pharmacie",
    imageUrl: "/image/healthwave.jpg",
    technologies: ["HTML", "CSS","JavaScript"]
  },
  {
    id: "2",
    title: "Site Echange brique",
    description: "Plateforme d’Échange de Briques",
    imageUrl: "/image/brique.png",
    technologies: ["Node.js", "JavaScripT", "HTML/CSS"]
  }
];

export default function ProjectsList() {
  return (
    <>
   
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map(project => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group block"
            >
              <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow h-full">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{project.description}</p>
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

     
    </>
  );
}
