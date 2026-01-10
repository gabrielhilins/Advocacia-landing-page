"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiCalendar } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Atendemos", href: "/#quem-atendemos" },
  { label: "Nossa Atuação", href: "/#atuacao" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg =
    !isHomePage || isScrolled
      ? "bg-[#0A1F44]/95 backdrop-blur-md shadow-lg"
      : "bg-transparent";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="hidden sm:block">
                <span className="text-[#F4F4F4] font-serif text-lg">
                  Ferreira & Drummond
                </span>
                <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.2em]">
                  Advocacia
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  /* Alterado hover:text-[#F4F4F4] para hover:text-[#C5A059] */
                  className="group relative text-[#F4F4F4]/80 hover:text-[#C5A059] text-sm font-medium transition-colors"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center bg-[#C5A059] text-[#0A1F44] px-6 py-2.5 font-sans font-semibold text-sm rounded transition-all hover:bg-[#C5A059]/90 hover:shadow-lg hover:scale-105"
              >
                <FiCalendar className="mr-2 w-4 h-4" />
                Agendar Atendimento
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#F4F4F4]"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 bg-[#0A1F44] border-t border-[#F4F4F4]/10 lg:hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#F4F4F4]/80 hover:text-[#C5A059] text-lg font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              {/* CTA Button Mobile */}
              <Link
                href="/agendar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center bg-[#C5A059] text-[#0A1F44] px-6 py-3 font-sans font-semibold text-base rounded mt-4"
              >
                <FiCalendar className="mr-2 w-5 h-5" />
                Agendar Consulta
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}