'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-32 bg-orange-600 rounded flex items-center justify-center text-white font-bold">
              PHARMA LOGO
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-red-900 hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Productos
            </a>
            <a href="#" className="text-red-900 hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Servicios
            </a>
            <a href="#" className="text-red-900 hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Nosotros
            </a>
            <a href="#" className="text-red-900 hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-900 hover:text-orange-600 focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-red-900 hover:text-orange-600 hover:bg-gray-100"
            >
              Productos
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-red-900 hover:text-orange-600 hover:bg-gray-100"
            >
              Servicios
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-red-900 hover:text-orange-600 hover:bg-gray-100"
            >
              Nosotros
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-red-900 hover:text-orange-600 hover:bg-gray-100"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}