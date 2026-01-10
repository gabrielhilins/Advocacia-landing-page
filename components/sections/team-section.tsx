"use client"

import { motion } from "framer-motion"
import { FiLinkedin, FiMail } from "react-icons/fi"
import Image from "next/image"

const team = [
  {
    name: "Dra. Heloísa Ferreira",
    role: "Sócia Fundadora",
    oab: "OAB/MG 145.892",
    specialty: "Especialista em Aposentadorias por Tempo de Contribuição e Regras de Transição",
    description:
      "Com mais de 18 anos de experiência exclusiva em Direito Previdenciário, Heloísa conduziu mais de 2.000 casos de sucesso. Mestre em Direito Previdenciário pela PUC-MG.",
    image: "/professional-woman-lawyer-portrait-elegant.jpg",
    linkedin: "#",
    email: "heloisa@ferreiradrummond.adv.br",
  },
  {
    name: "Dr. Paulo Drummond",
    role: "Sócio Fundador",
    oab: "OAB/MG 132.456",
    specialty: "Especialista em Aposentadorias Especiais e Revisões de Benefício",
    description:
      "Paulo é referência nacional em atividades especiais e insalubridade. Autor de diversos artigos sobre conversão de tempo especial. Pós-graduado pela ESMAFE.",
    image: "/professional-man-lawyer-portrait-elegant-suit.jpg",
    linkedin: "#",
    email: "paulo@ferreiradrummond.adv.br",
  },
  {
    name: "Dra. Camila Rezende",
    role: "Advogada Sênior",
    oab: "OAB/MG 178.234",
    specialty: "Especialista em Benefícios por Incapacidade",
    description:
      "Camila atua há 10 anos na área previdenciária com foco em auxílio-doença e aposentadoria por invalidez. Certificada em Perícia Médica Previdenciária.",
    image: "/professional-woman-lawyer-portrait-brazilian.jpg",
    linkedin: "#",
    email: "camila@ferreiradrummond.adv.br",
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Advogado Associado",
    oab: "OAB/MG 189.567",
    specialty: "Especialista em Planejamento Previdenciário",
    description:
      "Rafael combina expertise jurídica com análise financeira para orientar clientes sobre o momento ideal de aposentadoria. MBA em Gestão Financeira.",
    image: "/professional-young-man-lawyer-portrait.jpg",
    linkedin: "#",
    email: "rafael@ferreiradrummond.adv.br",
  },
  {
    name: "Juliana Costa",
    role: "Analista Previdenciária",
    specialty: "Análise de CNIS e Documentação",
    description:
      "Juliana é responsável pela análise técnica de documentos e históricos contributivos, identificando oportunidades e inconsistências nos registros do INSS.",
    image: "/professional-woman-analyst-portrait-office.jpg",
    linkedin: "#",
    email: "juliana@ferreiradrummond.adv.br",
  },
  {
    name: "Fernanda Oliveira",
    role: "Coordenadora de Atendimento",
    specialty: "Relacionamento com Cliente",
    description:
      "Fernanda garante que cada cliente receba atenção personalizada durante todo o processo, mantendo comunicação clara e transparente em todas as etapas.",
    image: "/professional-woman-customer-service-portrait-frien.jpg",
    linkedin: "#",
    email: "fernanda@ferreiradrummond.adv.br",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C5A059] text-sm uppercase tracking-widest mb-4 block">Nossa Equipe</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A1F44] mb-6">Sobre Nós</h2>
          <p className="text-lg text-[#333333]/80 max-w-3xl mx-auto leading-relaxed">
            Conheça os profissionais dedicados exclusivamente ao Direito Previdenciário que farão a diferença no seu
            caso. Nossa equipe combina expertise técnica, experiência comprovada e compromisso genuíno com cada cliente.
          </p>
        </motion.div>

        {/* Sócios Fundadores - Destaque */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {team.slice(0, 2).map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#0A1F44]/5 group"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-48 h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-serif text-[#0A1F44]">{member.name}</h3>
                      <p className="text-[#C5A059] font-medium text-sm">{member.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-full bg-[#0A1F44]/5 flex items-center justify-center text-[#0A1F44]/60 hover:bg-[#0A1F44] hover:text-[#F4F4F4] transition-all"
                      >
                        <FiLinkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-full bg-[#0A1F44]/5 flex items-center justify-center text-[#0A1F44]/60 hover:bg-[#C5A059] hover:text-[#0A1F44] transition-all"
                      >
                        <FiMail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  {member.oab && (
                    <p className="text-xs text-[#333333]/50 mb-2 uppercase tracking-wider">{member.oab}</p>
                  )}
                  <p className="text-sm text-[#C5A059]/80 mb-3 font-medium">{member.specialty}</p>
                  <p className="text-sm text-[#333333]/70 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Restante da Equipe */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.slice(2).map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-[#0A1F44]/5 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-serif text-[#F4F4F4]">{member.name}</h3>
                  <p className="text-[#C5A059] text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-4">
                {member.oab && (
                  <p className="text-[10px] text-[#333333]/50 mb-2 uppercase tracking-wider">{member.oab}</p>
                )}
                <p className="text-xs text-[#C5A059]/80 mb-2 font-medium">{member.specialty}</p>
                <p className="text-xs text-[#333333]/60 leading-relaxed line-clamp-3">{member.description}</p>
                <div className="flex gap-2 mt-4 pt-4 border-t border-[#0A1F44]/5">
                  <a
                    href={member.linkedin}
                    className="w-7 h-7 rounded-full bg-[#0A1F44]/5 flex items-center justify-center text-[#0A1F44]/60 hover:bg-[#0A1F44] hover:text-[#F4F4F4] transition-all"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-7 h-7 rounded-full bg-[#0A1F44]/5 flex items-center justify-center text-[#0A1F44]/60 hover:bg-[#C5A059] hover:text-[#0A1F44] transition-all"
                  >
                    <FiMail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Valores da Advocacia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-[#0A1F44] rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F4F4F4] mb-4">
                Advocacia com <span className="text-[#C5A059]">Propósito</span>
              </h3>
              <p className="text-[#F4F4F4]/70 leading-relaxed mb-6">
                Acreditamos que o Direito Previdenciário é, antes de tudo, uma ferramenta de justiça social. Cada
                cliente que atendemos representa uma história de trabalho, dedicação e contribuição para a sociedade.
                Nosso papel é garantir que essa trajetória seja reconhecida e valorizada.
              </p>
              <p className="text-[#F4F4F4]/70 leading-relaxed">
                Por isso, optamos pela especialização exclusiva. Não dividimos nossa atenção com outras áreas do
                Direito. Cada membro de nossa equipe está integralmente dedicado a entender, analisar e defender os
                direitos previdenciários de nossos clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F4F4F4]/5 rounded-xl p-6 border border-[#F4F4F4]/10">
                <p className="text-3xl font-serif text-[#C5A059] mb-2">2.000+</p>
                <p className="text-sm text-[#F4F4F4]/60">Casos conduzidos com sucesso</p>
              </div>
              <div className="bg-[#F4F4F4]/5 rounded-xl p-6 border border-[#F4F4F4]/10">
                <p className="text-3xl font-serif text-[#C5A059] mb-2">98%</p>
                <p className="text-sm text-[#F4F4F4]/60">Taxa de sucesso em revisões</p>
              </div>
              <div className="bg-[#F4F4F4]/5 rounded-xl p-6 border border-[#F4F4F4]/10">
                <p className="text-3xl font-serif text-[#C5A059] mb-2">15+</p>
                <p className="text-sm text-[#F4F4F4]/60">Anos de atuação exclusiva</p>
              </div>
              <div className="bg-[#F4F4F4]/5 rounded-xl p-6 border border-[#F4F4F4]/10">
                <p className="text-3xl font-serif text-[#C5A059] mb-2">100%</p>
                <p className="text-sm text-[#F4F4F4]/60">Foco em previdenciário</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
