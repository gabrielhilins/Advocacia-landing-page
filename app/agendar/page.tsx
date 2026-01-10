"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiShield,
  FiClock,
  FiBriefcase,
  FiDollarSign,
} from "react-icons/fi"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const serviceTypes = [
  { value: "aposentadoria", label: "Aposentadoria por Tempo de Contribuição" },
  { value: "aposentadoria-especial", label: "Aposentadoria Especial" },
  { value: "aposentadoria-invalidez", label: "Aposentadoria por Invalidez" },
  { value: "revisao", label: "Revisão de Benefício" },
  { value: "planejamento", label: "Planejamento Previdenciário" },
  { value: "outros", label: "Outros Assuntos" },
]

const contributionRanges = [
  { value: "menos-15", label: "Menos de 15 anos" },
  { value: "15-25", label: "15 a 25 anos" },
  { value: "25-35", label: "25 a 35 anos" },
  { value: "mais-35", label: "Mais de 35 anos" },
]

const incomeRanges = [
  { value: "ate-5k", label: "Até R$ 5.000" },
  { value: "5k-10k", label: "R$ 5.000 a R$ 10.000" },
  { value: "10k-20k", label: "R$ 10.000 a R$ 20.000" },
  { value: "acima-20k", label: "Acima de R$ 20.000" },
]

export default function AgendarPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoServico: "",
    tempoContribuicao: "",
    faixaRenda: "",
    situacaoAtual: "",
    dataPreferida: "",
    horarioPreferido: "",
    comoConheceu: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const steps = [
    { number: 1, title: "Dados Pessoais" },
    { number: 2, title: "Informações do Caso" },
    { number: 3, title: "Agendamento" },
  ]

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#F4F4F4] pt-24">
          <div className="container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                <FiCheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-[#0A1F44] mb-6">Solicitação Enviada com Sucesso</h1>
              <p className="text-lg text-[#333333]/80 mb-8 leading-relaxed">
                Recebemos sua solicitação de agendamento. Nossa equipe entrará em contato em até 24 horas úteis para
                confirmar o horário da sua consulta estratégica.
              </p>
              <div className="bg-white rounded-xl p-8 border border-[#0A1F44]/10 shadow-sm mb-8">
                <h3 className="font-serif text-xl text-[#0A1F44] mb-4">Próximos Passos</h3>
                <ul className="text-left space-y-4 text-[#333333]/80">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#C5A059] text-sm font-semibold">1</span>
                    </span>
                    <span>Você receberá um e-mail de confirmação com os detalhes da sua solicitação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#C5A059] text-sm font-semibold">2</span>
                    </span>
                    <span>Nossa equipe analisará as informações e entrará em contato</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#C5A059] text-sm font-semibold">3</span>
                    </span>
                    <span>Na consulta, apresentaremos uma análise preliminar do seu caso</span>
                  </li>
                </ul>
              </div>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-[#C5A059] font-medium hover:text-[#0A1F44] transition-colors"
              >
                Voltar para a página inicial
                <FiArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F4F4F4]">
        {/* Hero Section */}
        <section className="bg-[#0A1F44] pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#C5A059]/10 to-transparent blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#C5A059] hover:text-[#C5A059]/80 transition-colors mb-8"
            >
              <FiArrowLeft className="w-4 h-4" />
              Voltar para a página inicial
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full px-4 py-2 mb-6">
                <FiCalendar className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-medium">Agendamento de Consulta</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#F4F4F4] mb-6">
                Agende sua Consulta Estratégica
              </h1>
              <p className="text-lg text-[#F4F4F4]/70 leading-relaxed max-w-2xl">
                Preencha o formulário abaixo para solicitar uma consulta personalizada. Nossa equipe entrará em contato
                para confirmar o melhor horário.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Progress Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center justify-between relative">
                  {/* Progress Line */}
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#0A1F44]/10">
                    <div
                      className="h-full bg-[#C5A059] transition-all duration-500"
                      style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                  </div>

                  {steps.map((step) => (
                    <div key={step.number} className="relative z-10 flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                          currentStep >= step.number
                            ? "bg-[#C5A059] text-[#0A1F44]"
                            : "bg-white border-2 border-[#0A1F44]/20 text-[#0A1F44]/40"
                        }`}
                      >
                        {currentStep > step.number ? <FiCheckCircle className="w-5 h-5" /> : step.number}
                      </div>
                      <span
                        className={`mt-2 text-sm font-medium hidden sm:block ${
                          currentStep >= step.number ? "text-[#0A1F44]" : "text-[#0A1F44]/40"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl shadow-[#0A1F44]/5 border border-[#0A1F44]/5 overflow-hidden"
              >
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Data */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-8 md:p-12"
                    >
                      <h2 className="text-2xl font-serif text-[#0A1F44] mb-2">Dados Pessoais</h2>
                      <p className="text-[#333333]/60 mb-8">Informe seus dados para entrarmos em contato</p>

                      <div className="space-y-6">
                        <div>
                          <label htmlFor="nome" className="block text-sm font-medium text-[#0A1F44] mb-2">
                            Nome Completo *
                          </label>
                          <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A1F44]/40" />
                            <input
                              type="text"
                              id="nome"
                              name="nome"
                              required
                              value={formData.nome}
                              onChange={handleChange}
                              placeholder="Digite seu nome completo"
                              className="w-full pl-12 pr-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] placeholder:text-[#0A1F44]/40"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#0A1F44] mb-2">
                              E-mail *
                            </label>
                            <div className="relative">
                              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A1F44]/40" />
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                className="w-full pl-12 pr-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] placeholder:text-[#0A1F44]/40"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="telefone" className="block text-sm font-medium text-[#0A1F44] mb-2">
                              Telefone / WhatsApp *
                            </label>
                            <div className="relative">
                              <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A1F44]/40" />
                              <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                required
                                value={formData.telefone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                                className="w-full pl-12 pr-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] placeholder:text-[#0A1F44]/40"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="comoConheceu" className="block text-sm font-medium text-[#0A1F44] mb-2">
                            Como nos conheceu?
                          </label>
                          <select
                            id="comoConheceu"
                            name="comoConheceu"
                            value={formData.comoConheceu}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] bg-white"
                          >
                            <option value="">Selecione uma opção</option>
                            <option value="google">Pesquisa no Google</option>
                            <option value="indicacao">Indicação</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Case Information */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-8 md:p-12"
                    >
                      <h2 className="text-2xl font-serif text-[#0A1F44] mb-2">Informações do Caso</h2>
                      <p className="text-[#333333]/60 mb-8">Conte-nos sobre sua situação previdenciária</p>

                      <div className="space-y-6">
                        <div>
                          <label htmlFor="tipoServico" className="block text-sm font-medium text-[#0A1F44] mb-2">
                            <FiFileText className="inline w-4 h-4 mr-2" />
                            Tipo de Serviço *
                          </label>
                          <select
                            id="tipoServico"
                            name="tipoServico"
                            required
                            value={formData.tipoServico}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] bg-white"
                          >
                            <option value="">Selecione o tipo de serviço</option>
                            {serviceTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="tempoContribuicao"
                              className="block text-sm font-medium text-[#0A1F44] mb-2"
                            >
                              <FiBriefcase className="inline w-4 h-4 mr-2" />
                              Tempo de Contribuição
                            </label>
                            <select
                              id="tempoContribuicao"
                              name="tempoContribuicao"
                              value={formData.tempoContribuicao}
                              onChange={handleChange}
                              className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] bg-white"
                            >
                              <option value="">Selecione</option>
                              {contributionRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                  {range.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label htmlFor="faixaRenda" className="block text-sm font-medium text-[#0A1F44] mb-2">
                              <FiDollarSign className="inline w-4 h-4 mr-2" />
                              Faixa de Renda Atual
                            </label>
                            <select
                              id="faixaRenda"
                              name="faixaRenda"
                              value={formData.faixaRenda}
                              onChange={handleChange}
                              className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] bg-white"
                            >
                              <option value="">Selecione</option>
                              {incomeRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                  {range.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="situacaoAtual" className="block text-sm font-medium text-[#0A1F44] mb-2">
                            Situação Atual
                          </label>
                          <select
                            id="situacaoAtual"
                            name="situacaoAtual"
                            value={formData.situacaoAtual}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] bg-white"
                          >
                            <option value="">Selecione sua situação</option>
                            <option value="trabalhando">Ainda trabalhando</option>
                            <option value="proximo-aposentar">Próximo de aposentar</option>
                            <option value="ja-aposentado">Já aposentado</option>
                            <option value="beneficio-negado">Benefício negado pelo INSS</option>
                            <option value="aguardando-inss">Aguardando resposta do INSS</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="mensagem" className="block text-sm font-medium text-[#0A1F44] mb-2">
                            Conte-nos mais sobre seu caso
                          </label>
                          <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={4}
                            value={formData.mensagem}
                            onChange={handleChange}
                            placeholder="Descreva brevemente sua situação e dúvidas principais..."
                            className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] placeholder:text-[#0A1F44]/40 resize-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Scheduling */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-8 md:p-12"
                    >
                      <h2 className="text-2xl font-serif text-[#0A1F44] mb-2">Agendamento</h2>
                      <p className="text-[#333333]/60 mb-8">Escolha sua preferência de data e horário</p>

                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="dataPreferida" className="block text-sm font-medium text-[#0A1F44] mb-2">
                              <FiCalendar className="inline w-4 h-4 mr-2" />
                              Data Preferida *
                            </label>
                            <input
                              type="date"
                              id="dataPreferida"
                              name="dataPreferida"
                              required
                              value={formData.dataPreferida}
                              onChange={handleChange}
                              className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] bg-white"
                            />
                          </div>

                          <div>
                            <label htmlFor="horarioPreferido" className="block text-sm font-medium text-[#0A1F44] mb-2">
                              <FiClock className="inline w-4 h-4 mr-2" />
                              Horário Preferido *
                            </label>
                            <select
                              id="horarioPreferido"
                              name="horarioPreferido"
                              required
                              value={formData.horarioPreferido}
                              onChange={handleChange}
                              className="w-full px-4 py-4 rounded-lg border border-[#0A1F44]/20 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all text-[#0A1F44] bg-white"
                            >
                              <option value="">Selecione o horário</option>
                              <option value="09:00">09:00</option>
                              <option value="10:00">10:00</option>
                              <option value="11:00">11:00</option>
                              <option value="14:00">14:00</option>
                              <option value="15:00">15:00</option>
                              <option value="16:00">16:00</option>
                              <option value="17:00">17:00</option>
                            </select>
                          </div>
                        </div>

                        {/* Summary Card */}
                        <div className="bg-[#F4F4F4] rounded-xl p-6 mt-8">
                          <h3 className="font-serif text-lg text-[#0A1F44] mb-4">Resumo da Solicitação</h3>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-[#333333]/60">Nome:</span>
                              <p className="text-[#0A1F44] font-medium">{formData.nome || "—"}</p>
                            </div>
                            <div>
                              <span className="text-[#333333]/60">E-mail:</span>
                              <p className="text-[#0A1F44] font-medium">{formData.email || "—"}</p>
                            </div>
                            <div>
                              <span className="text-[#333333]/60">Telefone:</span>
                              <p className="text-[#0A1F44] font-medium">{formData.telefone || "—"}</p>
                            </div>
                            <div>
                              <span className="text-[#333333]/60">Serviço:</span>
                              <p className="text-[#0A1F44] font-medium">
                                {serviceTypes.find((s) => s.value === formData.tipoServico)?.label || "—"}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Privacy Notice */}
                        <div className="flex items-start gap-3 p-4 bg-[#0A1F44]/5 rounded-lg">
                          <FiShield className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                          <p className="text-sm text-[#333333]/70">
                            Ao enviar este formulário, você concorda com nossa{" "}
                            <a href="#" className="text-[#C5A059] hover:underline">
                              Política de Privacidade
                            </a>
                            . Seus dados são tratados com total sigilo profissional.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Form Navigation */}
                  <div className="px-8 md:px-12 py-6 bg-[#F4F4F4]/50 border-t border-[#0A1F44]/5 flex justify-between items-center">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 text-[#0A1F44] font-medium hover:text-[#C5A059] transition-colors"
                      >
                        Voltar
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-2 bg-[#0A1F44] text-[#F4F4F4] px-8 py-3 rounded-lg font-medium hover:bg-[#0A1F44]/90 transition-all"
                      >
                        Continuar
                        <FiArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-[#C5A059] text-[#0A1F44] px-8 py-3 rounded-lg font-semibold hover:bg-[#C5A059]/90 transition-all hover:shadow-lg hover:shadow-[#C5A059]/20"
                      >
                        <FiCalendar className="w-5 h-5" />
                        Solicitar Agendamento
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>

              {/* Trust Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#0A1F44]/5">
                  <div className="w-12 h-12 rounded-full bg-[#0A1F44]/5 flex items-center justify-center">
                    <FiShield className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0A1F44]">Sigilo Garantido</p>
                    <p className="text-sm text-[#333333]/60">Dados protegidos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#0A1F44]/5">
                  <div className="w-12 h-12 rounded-full bg-[#0A1F44]/5 flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0A1F44]">Retorno em até 24h</p>
                    <p className="text-sm text-[#333333]/60">Dias úteis</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#0A1F44]/5">
                  <div className="w-12 h-12 rounded-full bg-[#0A1F44]/5 flex items-center justify-center">
                    <FiCheckCircle className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0A1F44]">Sem Compromisso</p>
                    <p className="text-sm text-[#333333]/60">Consulta inicial</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
