"use client"

import { motion } from "framer-motion"
import { FiCalendar, FiDollarSign, FiTarget } from "react-icons/fi"

const stats = [
  {
    icon: FiCalendar,
    value: "+15",
    label: "Anos de experiência exclusiva em Direito Previdenciário",
  },
  {
    icon: FiDollarSign,
    value: "R$ 12M+",
    label: "Em benefícios recuperados para nossos clientes",
  },
  {
    icon: FiTarget,
    value: "100%",
    label: "Dedicação exclusiva ao Direito Previdenciário",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function SocialProofSection() {
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#F4F4F4] mb-6">Trajetória e Resultados</h2>
          <p className="text-lg text-[#F4F4F4]/70 max-w-3xl mx-auto leading-relaxed">
            Números que refletem nossa dedicação exclusiva ao Direito Previdenciário e o impacto real na vida de nossos
            clientes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-8 rounded-lg border border-[#F4F4F4]/10 bg-[#F4F4F4]/5 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-7 h-7 text-[#C5A059]" />
              </div>
              <p className="text-4xl md:text-5xl font-serif text-[#C5A059] mb-4">{stat.value}</p>
              <p className="text-[#F4F4F4]/70 leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-[#F4F4F4]/40 mt-12 max-w-2xl mx-auto"
        >
          Resultados passados não garantem resultados futuros. Cada caso é único e depende de análise técnica
          individualizada para aferição de viabilidade.
        </motion.p>
      </div>
    </section>
  )
}
