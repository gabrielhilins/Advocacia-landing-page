"use client"

import { motion } from "framer-motion"
import { FiSearch, FiFolder, FiBarChart2, FiMap, FiHeadphones } from "react-icons/fi"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const steps = [
  {
    icon: FiSearch,
    title: "Análise Técnica Inicial",
    description:
      "Reunião consultiva para compreender seu histórico profissional, expectativas e documentação disponível. Avaliamos a viabilidade do caso e apresentamos diagnóstico preliminar.",
  },
  {
    icon: FiFolder,
    title: "Levantamento Documental",
    description:
      "Solicitação de CNIS detalhado, extrato de contribuições, PPP, laudos técnicos e demais documentos relevantes. Identificamos lacunas e orientamos a obtenção de provas complementares.",
  },
  {
    icon: FiBarChart2,
    title: "Cálculo e Simulação",
    description:
      "Processamos os dados em nosso sistema de cálculo proprietário. Simulamos diferentes cenários de aposentadoria, comparando valores, datas e regras aplicáveis.",
  },
  {
    icon: FiMap,
    title: "Estratégia Administrativa ou Judicial",
    description:
      "Definimos a melhor via para obter o benefício: requerimento administrativo otimizado ou ação judicial estratégica. Cada caminho é fundamentado em análise de viabilidade.",
  },
  {
    icon: FiHeadphones,
    title: "Acompanhamento Contínuo",
    description:
      "Monitoramos prazos, respondemos exigências e mantemos você informado sobre cada etapa. Comunicação clara e acessível até a concessão definitiva do benefício.",
  },
]

export function ProcessSection() {
  return (
    <section id="atuacao" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A1F44] mb-6">Como Funciona Nossa Atuação</h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Metodologia estruturada que combina rigor técnico, transparência e comunicação constante em cada fase do
            processo.
          </p>
        </motion.div>

        <VerticalTimeline lineColor="#0A1F44">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: "#F4F4F4",
                  color: "#333333",
                  boxShadow: "0 4px 20px rgba(10, 31, 68, 0.08)",
                  borderRadius: "12px",
                  border: "1px solid rgba(10, 31, 68, 0.08)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #F4F4F4" }}
                iconStyle={{
                  background: "#0A1F44",
                  color: "#C5A059",
                  boxShadow: "0 0 0 4px #C5A059, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                }}
                icon={<Icon />}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl font-serif text-[#C5A059]/40">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-serif text-[#0A1F44] mb-3">{step.title}</h3>
                <p className="text-[#333333]/80 leading-relaxed">{step.description}</p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </section>
  )
}
