import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <div className="flex gap-6">
        <a
          href="https://github.com/saraeiii"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sara-el-baydi-250629255/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          LinkedIn
        </a>
      </div>
      <div className="ml-4">
        {/* Tu peux ajouter ici des éléments comme une image ou du texte supplémentaire si nécessaire */}
      </div>
    </footer>
  );
}
