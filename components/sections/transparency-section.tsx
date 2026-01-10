"use client"

import { motion } from "framer-motion"
import { FiCheckCircle, FiBook, FiLock } from "react-icons/fi"

const principles = [
  {
    icon: FiCheckCircle,
    title: "Diagnóstico Honesto",
    description:
      "Antes de aceitar qualquer caso, realizamos análise técnica para verificar viabilidade. Não aceitamos causas sem fundamento jurídico sólido, independentemente do valor envolvido.",
  },
  {
    icon: FiBook,
    title: "Sem Promessas de Resultado",
    description:
      "Conforme determina a ética profissional, não garantimos resultados específicos. Apresentamos probabilidades fundamentadas em jurisprudência e histórico de casos similares.",
  },
  {
    icon: FiLock,
    title: "Honorários Claros",
    description:
      "Todas as condições financeiras são formalizadas em contrato antes do início da atuação. Sem surpresas, cobranças ocultas ou valores não previamente acordados.",
  },
]

export function TransparencySection() {
  return (
    <section className="py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#0A1F44] mb-6">Segurança Jurídica e Transparência</h2>
            <p className="text-lg text-[#333333] leading-relaxed">
              Nossa atuação é pautada pelo Código de Ética da OAB e por princípios de transparência que regem a relação
              de confiança entre advogado e cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex items-start gap-6 bg-white p-8 rounded-lg border border-[#0A1F44]/10 shadow-sm"
              >
                <div className="w-14 h-14 rounded-lg bg-[#0A1F44] flex items-center justify-center shrink-0">
                  <principle.icon className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#0A1F44] mb-3">{principle.title}</h3>
                  <p className="text-[#333333]/80 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
