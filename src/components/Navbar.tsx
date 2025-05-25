'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Variantes de animación para el menú móvil
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Variantes para los elementos del menú
  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      initial={{ translateY: 0 }}
      animate={{ translateY: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-l from-[#561A16] via-[#C6441C] to-[#D4741C] to-white shadow-md fixed w-full z-50`}
    >
      <div className="container px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <div className="h-8 w-32 rounded flex items-center justify-center text-white font-bold ">
              <Link href="/">
                <Image src="/assets/logohorizontal.png" alt="Logo" width={150} height={60} />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-open">
            <a href="/" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Inicio
            </a>
            <a href="/products" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Productos
            </a>
            <a href="/services" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Servicios
            </a>
            <a href="/labs" className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors">
              Laboratorios
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-600 focus:outline-none"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-95">
              <motion.a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
                variants={itemVariants}
              >
                Inicio
              </motion.a>
              <motion.a
                href="/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
                variants={itemVariants}
              >
                Productos
              </motion.a>
              <motion.a
                href="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
                variants={itemVariants}
              >
                Servicios
              </motion.a>
              <motion.a
                href="/labs"
                className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-orange-600 hover:bg-black"
                variants={itemVariants}
              >
                Laboratorios
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}