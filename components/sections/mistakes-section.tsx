"use client"

import { motion } from "framer-motion"
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi"
import Link from "next/link"

const mainArticle = {
  headline: "Por Que a Maioria das Pessoas Perde Dinheiro ao se Aposentar",
  lead: "Especialistas alertam: decisões tomadas sem análise técnica adequada podem resultar em perdas acumuladas de até R$ 500 mil ao longo da vida do benefício.",
  date: "10 de Janeiro de 2026",
  readTime: "5 min de leitura",
  author: "Equipe Ferreira & Drummond",
}

const highlights = [
  {
    stat: "73%",
    text: "dos pedidos de aposentadoria contêm erros no cálculo inicial do INSS",
  },
  {
    stat: "R$ 127 mil",
    text: "é a diferença média entre o benefício concedido e o realmente devido",
  },
  {
    stat: "4 em 10",
    text: "profissionais deixam de reconhecer tempo especial por falta de documentação",
  },
]

const articlePreview = [
  {
    title: "O momento errado de pedir a aposentadoria",
    excerpt:
      "Muitos segurados pedem a aposentadoria assim que atingem os requisitos mínimos, sem avaliar se esperar mais alguns meses resultaria em um benefício significativamente maior.",
  },
  {
    title: "Períodos especiais ignorados",
    excerpt:
      "Profissionais expostos a agentes nocivos frequentemente não têm esse tempo reconhecido por falta de documentação adequada.",
  },
  {
    title: "O cálculo do INSS não está correto",
    excerpt:
      "O sistema do INSS apresenta falhas recorrentes: períodos não computados, vínculos esquecidos e erros que podem custar milhares de reais.",
  },
  {
    title: "Regras de transição mal aplicadas",
    excerpt:
      "A Reforma da Previdência criou múltiplas regras de transição. Escolher a errada significa perdas permanentes.",
  },
]

export function MistakesSection() {
  return (
    <section className="py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        {/* Newspaper Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b-4 border-[#0A1F44] pb-4 mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#C5A059] font-serif text-sm uppercase tracking-widest">Editorial</span>
              <span className="text-[#333333]/40">|</span>
              <span className="text-[#333333]/60 text-sm">Direito Previdenciário</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#333333]/60">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>{mainArticle.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{mainArticle.readTime}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0A1F44] leading-tight mb-6 text-balance">
              {mainArticle.headline}
            </h2>
            <p className="text-xl text-[#333333] leading-relaxed mb-8 font-serif italic border-l-4 border-[#C5A059] pl-6">
              {mainArticle.lead}
            </p>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10 py-8 border-y border-[#0A1F44]/10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-serif text-[#C5A059] mb-2">{item.stat}</p>
                  <p className="text-sm text-[#333333]/70 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Article Content Preview */}
            <div className="space-y-6">
              {articlePreview.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <span className="text-2xl font-serif text-[#C5A059]/40 shrink-0">{index + 1}.</span>
                  <div>
                    <h3 className="text-lg font-serif text-[#0A1F44] mb-1">{article.title}</h3>
                    <p className="text-[#333333]/70 text-sm leading-relaxed">{article.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Read More CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/conteudo/erros-aposentadoria"
                className="group inline-flex items-center gap-3 bg-[#0A1F44] text-[#F4F4F4] px-6 py-3 rounded font-medium transition-all hover:bg-[#0A1F44]/90"
              >
                Ler matéria completa
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <p className="mt-6 text-sm text-[#333333]/50">Por {mainArticle.author}</p>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-6 rounded-lg border border-[#0A1F44]/10 shadow-sm sticky top-24">
              <h3 className="text-sm font-semibold text-[#C5A059] uppercase tracking-wider mb-4">Você sabia?</h3>
              <div className="space-y-4">
                <p className="text-[#333333]/80 text-sm leading-relaxed">
                  A aposentadoria é, para muitos brasileiros, o maior ativo financeiro de suas vidas — muitas vezes
                  superando o valor total de um imóvel.
                </p>
                <p className="text-[#333333]/80 text-sm leading-relaxed">
                  No entanto, a complexidade das regras previdenciárias e a falta de planejamento adequado fazem com que
                  milhões de pessoas recebam menos do que têm direito.
                </p>
                <div className="pt-4 border-t border-[#0A1F44]/10">
                  <p className="text-[#0A1F44] font-serif text-lg mb-3">Quer saber se você está perdendo dinheiro?</p>
                  <Link
                    href="#contato"
                    className="inline-flex items-center gap-2 text-[#C5A059] font-medium text-sm hover:underline"
                  >
                    Solicitar análise gratuita
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
