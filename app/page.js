import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex flex-col gap-[32px] items-center justify-center flex-1">
      <Image  className="rounded-full"
          src="/image/headShot.jpg" // Remplace par le chemin vers ta photo
          alt="Ma photo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-2xl font-semibold"> Bonjour, je suis Sara !</h1>
        <p className="text-center sm:text-left mt-4">
          Développeuse web passionnée par les technologies modernes. Je maîtrise des outils comme React, Next.js et Node.js.
        </p>
        <h2 className="mt-8 text-xl font-medium">Mes compétences :</h2>
        <ul className="list-disc pl-6">
          <li>Développement Front-End (React, Next.js)</li>
          <li>Développement Back-End (Node.js, Express)</li>
          <li>HTML, CSS, JavaScript, Git</li>
        </ul>
      </main>
      
    </div>
       
  );
}
