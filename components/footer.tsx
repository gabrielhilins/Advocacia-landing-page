"use client";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A1F44] border-t border-[#F4F4F4]/10">
      <div className="container mx-auto px-6 py-16">
        {/* Parte Superior - Agora Centralizada */}
        <div className="flex flex-col items-center text-center gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-serif text-[#F4F4F4]">
                Ferreira & Drummond
              </h3>
            </div>
            <p className="text-[#F4F4F4]/70 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              Advocacia Especializada em Direito Previdenciário. Atuação
              técnica, personalizada e fundamentada para aposentadorias de alto
              valor.
            </p>
            <p className="text-xs text-[#F4F4F4]/50 uppercase tracking-widest">
              OAB/XX 00.000 | OAB/XX 00.000
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold text-[#C5A059] uppercase tracking-wider mb-6">
              Contato
            </h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li className="flex flex-col md:flex-row items-center gap-3 text-[#F4F4F4]/70 text-sm">
                <FiMapPin className="w-4 h-4 text-[#C5A059]" />
                <span>
                  Av. Exemplo, 1000 - Sala 1500 — Belo Horizonte/MG - CEP
                  00000-000
                </span>
              </li>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <li className="flex items-center gap-3 text-[#F4F4F4]/70 text-sm">
                  <FiMail className="w-4 h-4 text-[#C5A059]" />
                  <a
                    href="mailto:contato@ferreiraedrummond.adv.br"
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    contato@ferreiraedrummond.adv.br
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#F4F4F4]/70 text-sm">
                  <FiPhone className="w-4 h-4 text-[#C5A059]" />
                  <a
                    href="tel:+5531000000000"
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    (31) 0000-0000
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Links Inferiores */}
        <div className="border-t border-[#F4F4F4]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[#F4F4F4]/70 text-sm hover:text-[#C5A059] transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-[#F4F4F4]/70 text-sm hover:text-[#C5A059] transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
          <p className="text-xs text-[#F4F4F4]/40 text-center md:text-left">
            © {new Date().getFullYear()} Ferreira & Drummond Advocacia. Todos os
            direitos reservados.
          </p>

          <div className="flex justify-center items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-[family-name:var(--font-quicksand)] text-white">
            <span className="italic text-white/40">desenvolvido por</span>
            <a
              href="https://ggabstechdesign.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <img
                src="/Wordmark SVG.svg"
                alt="GGABS"
                className="h-5 w-auto transition-transform duration-300 ease-out group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
