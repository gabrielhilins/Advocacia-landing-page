"use client"

import { motion } from "framer-motion"
import { FiUser, FiBriefcase } from "react-icons/fi"

const personas = [
  {
    icon: FiUser,
    title: "Planejamento para Alta Contribuição",
    name: "Para servidores públicos e executivos sênior",
    description:
      "Você dedicou décadas à sua carreira, construiu patrimônio e contribuiu com valores expressivos à Previdência. Agora, busca garantir que sua aposentadoria reflita esse histórico — com segurança jurídica, cálculos precisos e a certeza de que não haverá perdas financeiras por decisões precipitadas ou mal orientadas.",
    points: [
      "Análise de regras de transição mais vantajosas",
      "Simulações comparativas de cenários",
      "Planejamento de data ideal para o pedido",
    ],
  },
  {
    icon: FiBriefcase,
    title: "Reconhecimento de Tempo Especial",
    name: "Para profissionais expostos a agentes nocivos",
    description:
      "Engenheiros, médicos, supervisores industriais e técnicos que atuaram em condições especiais de trabalho frequentemente têm seus direitos negados pelo INSS. Nosso escritório investiga, documenta e defende tecnicamente o reconhecimento do tempo especial para antecipar sua aposentadoria ou aumentar o valor do benefício.",
    points: [
      "Investigação documental aprofundada",
      "Análise de laudos técnicos e PPP",
      "Atuação administrativa e judicial especializada",
    ],
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function AudienceSection() {
  return (
    <section className="py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A1F44] mb-6">Para Quem Atuamos</h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Atendemos exclusivamente casos previdenciários que exigem análise técnica aprofundada e estratégia jurídica
            personalizada. Nossa atuação é voltada para profissionais que valorizam rigor, transparência e resultados
            fundamentados.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {personas.map((persona) => (
            <motion.article
              key={persona.title}
              variants={itemVariants}
              className="bg-white p-8 md:p-10 rounded-lg border border-[#0A1F44]/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#0A1F44] flex items-center justify-center">
                  <persona.icon className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#0A1F44]">{persona.title}</h3>
                  <p className="text-sm text-[#C5A059] font-medium">{persona.name}</p>
                </div>
              </div>

              <p className="text-[#333333] leading-relaxed mb-6">{persona.description}</p>

              <ul className="space-y-3">
                {persona.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#333333]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
