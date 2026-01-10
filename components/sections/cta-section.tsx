"use client"

import { motion } from "framer-motion"
import { FiCalendar, FiShield } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa";

export function CtaSection() {
  return (
    <section id="contato" className="py-24 bg-[#0A1F44]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#F4F4F4] mb-6 text-balance">
            Sua Aposentadoria Merece Estratégia e Precisão Técnica
          </h2>
          <p className="text-lg md:text-xl text-[#F4F4F4]/80 mb-10 leading-relaxed">
            Agende uma consulta estratégica para análise personalizada do seu caso. Descubra como maximizar o valor do
            seu benefício com segurança jurídica e planejamento fundamentado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="/agendar"
              className="inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#0A1F44] px-8 py-4 font-sans font-semibold text-lg rounded transition-all hover:bg-[#C5A059]/90 hover:shadow-lg hover:shadow-[#C5A059]/20"
            >
              <FiCalendar className="w-5 h-5" />
              Agendar Atendimento Estratégico
            </a>

            <a
              href="https://wa.me/5500000000000"
              className="inline-flex items-center justify-center gap-3 border border-[#F4F4F4]/30 text-[#F4F4F4] px-8 py-4 font-sans font-medium text-lg rounded transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              <FaWhatsapp className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-[#F4F4F4]/60 text-sm">
            <FiShield className="w-4 h-4" />
            <span>Atendimento sigiloso. Seus dados estão protegidos.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
