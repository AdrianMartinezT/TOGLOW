import React, { useState } from 'react';
import SignupButton from 'src/components/SignupButton';
import LoginButton from 'src/components/LoginButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';  

const NavbarComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo  */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="h-8 w-8"
              src="/2.png"  
              alt="Logo"
              width={150}  
              height={150} 
            />
            <span className="ml-3 text-xl font-semibold">TOGLOW</span>
          </div>

          {/* Menú oculto en móviles y visible en pantallas grandes */}
          <div className="hidden lg:flex lg:space-x-8 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar contribuciones"
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2 w-full"
              />
              {/* Ícono de búsqueda */}
              <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <SignupButton />
            <LoginButton />
          </div>

          {/* Botón hamburguesa para móviles */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar contribuciones"
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2 w-full"
              />
              {/* Ícono de búsqueda en móviles */}
              <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <SignupButton />
            <LoginButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
