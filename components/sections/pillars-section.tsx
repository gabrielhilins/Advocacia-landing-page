"use client"

import { motion } from "framer-motion"
import { FiTarget, FiShield, FiTrendingUp } from "react-icons/fi"

const pillars = [
  {
    icon: FiTarget,
    title: "Planejamento Previdenciário",
    description:
      "Análise completa do histórico contributivo, simulação de cenários e definição da estratégia ideal para maximizar o valor do benefício. Avaliamos regras de transição, tempo de contribuição e valor das contribuições para identificar o melhor momento e a melhor modalidade de aposentadoria para cada cliente.",
  },
  {
    icon: FiShield,
    title: "Reconhecimento de Tempo Especial",
    description:
      "Investigação técnica e documental para comprovar exposição a agentes nocivos à saúde. Atuamos na obtenção de PPP, laudos técnicos, LTCAT e demais documentos necessários para converter tempo especial em comum ou garantir aposentadoria especial junto ao INSS ou Poder Judiciário.",
  },
  {
    icon: FiTrendingUp,
    title: "Atuação Contenciosa Estratégica",
    description:
      "Quando a via administrativa não é suficiente, ingressamos com ações judiciais fundamentadas em cálculos precisos e jurisprudência consolidada. Nossa atuação contenciosa é técnica, documentada e orientada para resultados concretos, sempre com transparência sobre prazos e expectativas realistas.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function PillarsSection() {
  return (
    <section className="py-24 bg-[#0A1F44]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#F4F4F4] mb-6">Nossos Pilares Estratégicos</h2>
          <p className="text-lg text-[#F4F4F4]/80 max-w-3xl mx-auto leading-relaxed">
            Cada caso é tratado com profundidade técnica e visão estratégica. Nossa metodologia combina análise
            jurídica, cálculo atuarial e investigação documental.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={itemVariants}
              className="bg-[#F4F4F4]/5 backdrop-blur-sm p-8 rounded-lg border border-[#F4F4F4]/10 hover:border-[#C5A059]/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-lg bg-[#C5A059]/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-serif text-[#F4F4F4] mb-4">{pillar.title}</h3>
              <p className="text-[#F4F4F4]/70 leading-relaxed">{pillar.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
