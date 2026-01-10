"use client"

import { motion } from "framer-motion"
import { FiCalendar, FiArrowRight, FiTrendingUp, FiAward } from "react-icons/fi"
import { GoLaw } from "react-icons/go";
import { GiPapers } from "react-icons/gi";


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A1F44] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#C5A059]/20 via-[#C5A059]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#0A1F44] via-[#1a3a6e]/30 to-transparent blur-3xl" />
      </div>

      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-20 right-[15%] w-64 h-64 border border-[#C5A059]/20 rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute top-32 right-[18%] w-48 h-48 border border-[#C5A059]/10 rotate-45"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-20 left-10 w-32 h-32 border-l-2 border-b-2 border-[#C5A059]/30"
        />
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-40 right-10 lg:right-20 hidden md:block"
      >
        <div className="bg-[#C5A059]/10 backdrop-blur-sm border border-[#C5A059]/30 rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
            <GiPapers className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <p className="text-[#F4F4F4] font-medium text-sm">+500 Casos</p>
            <p className="text-[#F4F4F4]/60 text-xs">Resolvidos com sucesso</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-40 right-20 lg:right-40 hidden lg:block"
      >
        <div className="bg-[#0A1F44]/80 backdrop-blur-sm border border-[#F4F4F4]/10 rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
            <FiTrendingUp className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <p className="text-[#F4F4F4] font-medium text-sm">R$ 2.8M+</p>
            <p className="text-[#F4F4F4]/60 text-xs">Recuperados para clientes</p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full px-4 py-2 mb-8"
            >
              <FiAward className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium">Advocacia Especializada em Previdência</span>
            </motion.div>

            {/* Main heading with accent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#F4F4F4] leading-[1.1] mb-4">
                Aposentadoria de
              </h1>
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#C5A059] leading-[1.1]">
                  Alto Valor
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#C5A059] to-[#C5A059]/30"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-[#F4F4F4]/70 font-sans mb-10 max-w-xl leading-relaxed"
            >
              Estratégia jurídica para quem construiu uma carreira de excelência. Transformamos décadas de contribuição
              em benefícios previdenciários justos e matematicamente precisos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#0A1F44] px-8 py-4 font-sans font-semibold text-lg rounded transition-all hover:bg-[#d4af69] hover:shadow-xl hover:shadow-[#C5A059]/20 hover:scale-[1.02]"
              >
                <FiCalendar className="w-5 h-5" />
                Agendar Atendimento Estratégico
                <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-[#F4F4F4]/10"
            >
              <div>
                <p className="text-2xl md:text-3xl font-serif text-[#C5A059]">15+</p>
                <p className="text-[#F4F4F4]/60 text-sm">Anos de Experiência</p>
              </div>
              <div className="w-px h-12 bg-[#F4F4F4]/20" />
              <div>
                <p className="text-2xl md:text-3xl font-serif text-[#C5A059]">96%</p>
                <p className="text-[#F4F4F4]/60 text-sm">Taxa de Sucesso</p>
              </div>
              <div className="w-px h-12 bg-[#F4F4F4]/20 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-2xl md:text-3xl font-serif text-[#C5A059]">4.9★</p>
                <p className="text-[#F4F4F4]/60 text-sm">Avaliação Google</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Large decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-[400px] h-[500px]">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 to-transparent rounded-3xl rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-br from-[#1a3a6e]/50 to-[#0A1F44] rounded-2xl overflow-hidden">
                {/* Abstract legal pattern */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                  <div className="w-24 h-24 border-4 border-[#C5A059] rounded-full flex items-center justify-center mb-6">
                    <GoLaw className="w-12 h-12 text-[#C5A059]" />
                  </div>
                  <div className="w-full space-y-3">
                    <div className="h-2 bg-[#C5A059]/20 rounded-full w-full" />
                    <div className="h-2 bg-[#C5A059]/15 rounded-full w-4/5 mx-auto" />
                    <div className="h-2 bg-[#C5A059]/10 rounded-full w-3/5 mx-auto" />
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-[#F4F4F4] font-serif text-xl mb-2">Ferreira & Drummond</p>
                    <p className="text-[#C5A059] text-sm uppercase tracking-widest">Advocacia Previdenciária</p>
                  </div>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-[#C5A059]/50 rounded-br-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4F4F4] to-transparent" />
    </section>
  )
}
