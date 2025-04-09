'use client';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice.js";

export default function Header() {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">Mon Portfolio</h1>
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">
              Projets
            </Link>
          </li>
          <li>
            <Link href="/témoignages" className="hover:text-gray-400">
              Témoignages
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          
          {/* Lien Connexion/Déconnexion */}
          {currentUser ? (
            <>
              <li className="text-sm text-gray-300">
                Connecté en tant que {currentUser.name}
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="hover:text-gray-400"
                >
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" className="hover:text-gray-400">
                Connexion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}