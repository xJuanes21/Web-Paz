'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Control de visibilidad basado en scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Si estamos al principio de la página, siempre mostramos la navbar
      if (currentScrollY < 100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Si estamos scrolleando hacia abajo, ocultamos la navbar
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // Si estamos scrolleando hacia arriba, mostramos la navbar
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // Limpieza del event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-gradient-to-l from-[#561A16] via-[#C6441C] to-[#D4741C]  to-white shadow-md fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="container    px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-32 rounded flex items-center justify-center text-white font-bold">
              <Link  href="/" >
              <Image src="/assets/logo-colores.png" alt="Logo" width={80} height={80} />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-open">
            <a href="#" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Productos
            </a>
            <a href="#" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Servicios
            </a>
            <a href="/labs" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Laboratorios
            </a>
            <a href="/" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Inicio
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-95">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
            >
              Productos
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
            >
              Servicios
            </a>
            <a
              href="/labs"
              className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
            >
              Laboratorios
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
            >
              Inicio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}