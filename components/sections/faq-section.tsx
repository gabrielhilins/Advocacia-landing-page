"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Vale a pena se aposentar agora ou devo esperar?",
    answer:
      "A resposta depende de análise individualizada do seu histórico contributivo, idade, tempo de contribuição e regras de transição aplicáveis. Em muitos casos, esperar alguns meses ou anos pode resultar em aumento significativo do benefício. Realizamos simulações comparativas para identificar o cenário mais vantajoso para cada cliente.",
  },
  {
    question: "Ainda posso revisar minha aposentadoria?",
    answer:
      "Sim, desde que não tenha decorrido o prazo decadencial de 10 anos contados do primeiro pagamento do benefício. Revisões podem corrigir erros de cálculo, incluir períodos não computados ou reconhecer tempo especial não considerado originalmente. Analisamos a viabilidade técnica de cada pedido de revisão.",
  },
  {
    question: "O que é tempo especial e como ele beneficia minha aposentadoria?",
    answer:
      "Tempo especial é o período trabalhado em exposição a agentes nocivos à saúde ou em condições perigosas. Esse tempo pode ser convertido com acréscimo (fator 1,4 para homens e 1,2 para mulheres) quando somado ao tempo comum, ou pode garantir aposentadoria especial com tempo de contribuição reduzido (15, 20 ou 25 anos, dependendo do agente nocivo).",
  },
  {
    question: "Quanto tempo demora um processo previdenciário?",
    answer:
      "Processos administrativos junto ao INSS costumam durar de 45 a 180 dias. Ações judiciais podem variar de 1 a 4 anos, dependendo da complexidade do caso e da região. Mantemos nossos clientes informados sobre cada etapa e trabalhamos para agilizar os procedimentos dentro das possibilidades legais.",
  },
  {
    question: "Qual documentação é necessária para iniciar a análise?",
    answer:
      "Para a consulta inicial, solicitamos: documento de identidade, CNIS (Cadastro Nacional de Informações Sociais), carteiras de trabalho e, se aplicável, PPP (Perfil Profissiográfico Previdenciário) e laudos técnicos. Durante o processo, podemos solicitar documentação complementar específica para cada caso.",
  },
  {
    question: "Vocês atendem apenas presencialmente?",
    answer:
      "Oferecemos atendimento presencial em nosso escritório e também atendimento remoto por videoconferência. Todos os documentos podem ser enviados de forma digital e segura. O modelo de atendimento é definido conforme a preferência e conveniência de cada cliente.",
  },
]

export function FaqSection() {
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A1F44] mb-6">Perguntas Frequentes</h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as dúvidas mais comuns sobre direito previdenciário e nossa forma de atuação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-[#0A1F44]/10 rounded-lg px-6 data-[state=open]:border-[#C5A059]/30"
              >
                <AccordionTrigger className="text-left font-serif text-[#0A1F44] hover:text-[#C5A059] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#333333]/80 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
