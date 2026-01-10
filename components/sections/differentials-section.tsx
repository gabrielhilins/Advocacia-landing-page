"use client"

import { motion } from "framer-motion"
import { FiCpu, FiFileText, FiUsers, FiAward } from "react-icons/fi"

const differentials = [
  {
    icon: FiCpu,
    title: "Cálculo Matemático Próprio",
    description:
      "Utilizamos sistema de cálculo desenvolvido internamente, com validação cruzada e auditoria de resultados. Não dependemos exclusivamente de ferramentas genéricas do mercado.",
  },
  {
    icon: FiFileText,
    title: "Investigação Documental Profunda",
    description:
      "Buscamos provas em fontes primárias: arquivos de empresas, órgãos públicos, sindicatos e cartórios. Documentação sólida é a base de qualquer estratégia bem-sucedida.",
  },
  {
    icon: FiUsers,
    title: "Atendimento Exclusivo",
    description:
      "Trabalhamos com número limitado de casos para garantir atenção personalizada. Cada cliente tem acesso direto aos advogados responsáveis por seu processo.",
  },
  {
    icon: FiAward,
    title: "Atuação Estratégica e Não Massificada",
    description:
      "Rejeitamos modelos de volume. Priorizamos casos que exigem análise técnica diferenciada e estratégia jurídica sob medida para cada situação específica.",
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export function DifferentialsSection() {
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#F4F4F4] mb-6">Diferenciais do Escritório</h2>
          <p className="text-lg text-[#F4F4F4]/80 max-w-3xl mx-auto leading-relaxed">
            Nossa abordagem combina tradição jurídica com metodologia técnica contemporânea, sempre orientada para
            resultados concretos e mensuráveis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentials.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="bg-[#F4F4F4]/5 backdrop-blur-sm p-8 rounded-lg border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059]/20 transition-colors">
                <item.icon className="w-7 h-7 text-[#C5A059]" />
              </div>
              <h3 className="text-lg font-serif text-[#F4F4F4] mb-4">{item.title}</h3>
              <p className="text-[#F4F4F4]/70 leading-relaxed text-sm">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
