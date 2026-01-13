"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGlobe, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DevelopedBy } from "@/components/developed-by";

const links = [
  {
    label: "Agendar Atendimento",
    href: "/agendar",
    icon: <FaWhatsapp className="w-5 h-5" />,
    primary: true,
  },
  {
    label: "Website Oficial",
    href: "/",
    icon: <FiGlobe className="w-5 h-5" />,
    primary: false,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FiInstagram className="w-5 h-5" />,
    primary: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FiLinkedin className="w-5 h-5" />,
    primary: false,
  },
  {
    label: "Entre em Contato por E-mail",
    href: "mailto:contato@advocacia.com.br",
    icon: <FiMail className="w-5 h-5" />,
    primary: false,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#0A1F44] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#C5A059] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-[#C5A059] rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-md flex flex-col items-center gap-8 border border-[#F4F4F4]/10 bg-[#0A1F44]/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <span className="text-[#F4F4F4] font-serif text-3xl font-bold tracking-wide text-center">
              Ferreira & Drummond
            </span>
            <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mt-1">
              Advocacia
            </p>
          </div>
        </div>

        {/* Slogan */}
        <p className="text-[#F4F4F4]/80 text-center text-sm font-light leading-relaxed max-w-xs">
          Transformamos décadas de trabalho em uma aposentadoria segura, planejada e juridicamente justa.
        </p>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            >
              <Button
                asChild
                className={`w-full h-14 text-base font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg ${
                  link.primary
                    ? "bg-[#C5A059] text-[#0A1F44] hover:bg-[#C5A059]/90 border border-[#C5A059]"
                    : "bg-[#0A1F44] text-[#F4F4F4] border border-[#F4F4F4]/20 hover:bg-[#F4F4F4]/10 hover:border-[#C5A059]/50"
                }`}
              >
                <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} className="flex items-center justify-center gap-3">
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-0.5 bg-[#C5A059]/30" />
          <p className="text-[#F4F4F4]/40 text-xs text-center">
            © {new Date().getFullYear()} Ferreira & Drummond Advocacia.
            <br />
            Todos os direitos reservados.
          </p>
          <DevelopedBy className="mt-2" />
        </motion.div>
      </motion.div>
    </div>
  );
}
