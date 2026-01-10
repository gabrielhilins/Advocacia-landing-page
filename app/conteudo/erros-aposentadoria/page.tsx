"use client"

import { motion } from "framer-motion"
import { FiArrowLeft, FiCalendar, FiClock, FiShare2 } from "react-icons/fi"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const articleContent = [
  {
    title: "1. Solicitar a aposentadoria no momento errado",
    content: `Um dos erros mais comuns — e mais custosos — é solicitar a aposentadoria assim que se atinge os requisitos mínimos, sem avaliar se esperar mais alguns meses ou anos resultaria em um benefício significativamente maior.

O sistema previdenciário brasileiro oferece diferentes faixas de cálculo dependendo do tempo de contribuição e da idade do segurado. Em muitos casos, esperar apenas 6 a 12 meses pode representar um aumento de 15% a 30% no valor mensal do benefício.

Considerando que a aposentadoria será paga por décadas, essa diferença pode facilmente ultrapassar R$ 200.000 ao longo da vida do benefício. Uma análise técnica detalhada é essencial para identificar o momento ideal de se aposentar.`,
  },
  {
    title: "2. Ignorar períodos especiais de contribuição",
    content: `Profissionais que trabalharam expostos a agentes nocivos — ruído excessivo, produtos químicos, condições insalubres — têm direito ao reconhecimento de tempo especial, que é convertido com um multiplicador favorável para a aposentadoria.

No entanto, muitos segurados não conseguem esse reconhecimento por falta de documentação adequada. O PPP (Perfil Profissiográfico Previdenciário), laudos técnicos e provas complementares são essenciais para comprovar a exposição aos agentes nocivos.

Empresas fechadas, fusões corporativas e a falta de organização documental fazem com que milhares de trabalhadores percam esse direito anualmente. Uma investigação técnica especializada pode recuperar provas e garantir o reconhecimento do tempo especial.`,
  },
  {
    title: "3. Confiar exclusivamente no cálculo do INSS",
    content: `Contrariamente ao que muitos acreditam, o sistema do INSS não é infalível. Estudos indicam que aproximadamente 73% dos pedidos de aposentadoria contêm algum tipo de erro no cálculo inicial.

Os problemas mais frequentes incluem: períodos de contribuição não computados, vínculos empregatícios ignorados, erros na conversão de tempo especial e aplicação incorreta das regras de transição.

Uma análise independente do histórico contributivo, realizada por especialistas em direito previdenciário, pode revelar diferenças substanciais entre o valor concedido pelo INSS e o benefício realmente devido. Em média, essa diferença gira em torno de R$ 127.000 ao longo da vida do benefício.`,
  },
  {
    title: "4. Não considerar as regras de transição aplicáveis",
    content: `A Reforma da Previdência de 2019 (EC 103/2019) criou múltiplas regras de transição para quem já estava no mercado de trabalho. Cada regra possui características específicas e pode ser mais ou menos vantajosa dependendo do perfil do segurado.

Muitos beneficiários simplesmente aceitam a primeira regra apresentada pelo INSS, sem avaliar qual seria a mais favorável ao seu caso específico. Essa escolha inadequada pode resultar em perdas permanentes no valor da aposentadoria.

As principais regras de transição incluem: sistema de pontos progressivo, idade mínima progressiva, pedágio de 50%, pedágio de 100% e regra específica para quem estava próximo de se aposentar. Cada uma exige análise técnica individualizada.`,
  },
]

export default function ArtigoErrosAposentadoriaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Article Header */}
        <section className="bg-[#0A1F44] py-16">
          <div className="container mx-auto px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#C5A059] hover:text-[#C5A059]/80 transition-colors mb-8"
            >
              <FiArrowLeft className="w-4 h-4" />
              Voltar para a página inicial
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[#C5A059] text-sm uppercase tracking-widest mb-4 block">
                Editorial | Direito Previdenciário
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#F4F4F4] leading-tight mb-6 max-w-4xl text-balance">
                Por Que a Maioria das Pessoas Perde Dinheiro ao se Aposentar
              </h1>
              <p className="text-xl text-[#F4F4F4]/70 max-w-3xl leading-relaxed font-serif italic">
                Especialistas alertam: decisões tomadas sem análise técnica adequada podem resultar em perdas acumuladas
                de até R$ 500 mil ao longo da vida do benefício.
              </p>
              <div className="flex items-center gap-6 mt-8 text-[#F4F4F4]/60 text-sm">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>10 de Janeiro de 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4" />
                  <span>8 min de leitura</span>
                </div>
                <button className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <FiShare2 className="w-4 h-4" />
                  Compartilhar
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-[#F4F4F4]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg"
              >
                <p className="text-[#333333] text-lg leading-relaxed mb-8">
                  A aposentadoria é, para a maioria dos brasileiros, o maior ativo financeiro de suas vidas. Muitas
                  vezes, o valor acumulado ao longo de décadas de pagamentos mensais supera facilmente o preço de um
                  imóvel. No entanto, a complexidade das regras previdenciárias e a falta de planejamento adequado fazem
                  com que milhões de pessoas recebam menos do que têm direito.
                </p>

                <p className="text-[#333333] text-lg leading-relaxed mb-12">
                  Neste artigo, analisamos os quatro erros mais comuns que levam segurados a perder dinheiro na
                  aposentadoria — e como evitá-los.
                </p>

                {articleContent.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-12"
                  >
                    <h2 className="text-2xl font-serif text-[#0A1F44] mb-4">{section.title}</h2>
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-[#333333]/80 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                ))}

                {/* CTA Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#0A1F44] rounded-xl p-8 mt-16"
                >
                  <h3 className="text-2xl font-serif text-[#F4F4F4] mb-4">
                    Não cometa esses erros com sua aposentadoria
                  </h3>
                  <p className="text-[#F4F4F4]/70 mb-6">
                    Nossa equipe realiza uma análise técnica completa do seu caso, identificando oportunidades de
                    aumento no valor do benefício e evitando os erros mais comuns.
                  </p>
                  <Link
                    href="/#contato"
                    className="inline-flex items-center gap-3 bg-[#C5A059] text-[#0A1F44] px-6 py-3 rounded font-semibold transition-all hover:bg-[#C5A059]/90"
                  >
                    Solicitar Análise Gratuita
                  </Link>
                </motion.div>

                <p className="text-sm text-[#333333]/50 mt-12 border-t border-[#0A1F44]/10 pt-8">
                  Artigo elaborado pela equipe jurídica do escritório Ferreira & Drummond. Este conteúdo tem caráter
                  meramente informativo e não substitui consultoria jurídica especializada.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
