"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
    const faqs = [
        {
            q: "A energia solar vale a pena para residência?",
            a: "Sim, muito! O retorno sobre o investimento geralmente acontece entre 4 e 5 anos, e a economia na conta de luz pode chegar a 95%. Além disso, o sistema tem vida útil superior a 25 anos."
        },
        {
            q: "Em dias nublados o sistema continua gerando energia?",
            a: "Sim. Os painéis solares geram energia mesmo em dias nublados ou chuvosos, embora a geração seja menor do que em dias ensolarados. A incidência de luz difusa já é suficiente para gerar energia."
        },
        {
            q: "Como funciona o excedente de energia?",
            a: "A energia gerada que você não consome durante o dia é injetada na rede da concessionária e vira créditos. Você pode usar esses créditos à noite ou em meses em que o consumo for maior que a geração."
        },
        {
            q: "Posso financiar meu sistema solar?",
            a: "Com certeza! Trabalhamos com diversas linhas de financiamento, onde muitas vezes o valor da parcela fica próximo ou até menor que a economia gerada na sua conta de luz, fazendo o sistema se pagar sozinho."
        },
        {
            q: "As placas exigem muita manutenção?",
            a: "Não. A manutenção é mínima, resumindo-se praticamente a uma limpeza periódica com água (geralmente uma ou duas vezes ao ano, dependendo da região) para retirar poeira e melhorar a captação solar."
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden border-t border-white/10">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/placas_solares.webp"
                    alt="Energia solar fundo"
                    className="w-full h-full object-cover object-center translate-y-20 scale-110" // Parallax-ish offset
                />
                <div className="absolute inset-0 bg-[#3E2723]/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-widest capitalize mb-1">
                        Dúvidas
                    </h2>
                    <h3 className="text-4xl md:text-5xl text-[#D51119] font-black capitalize" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Frequentes
                    </h3>
                </div>

                <div className="space-y-4">
                    <Accordion className="w-full flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded shadow-md overflow-hidden">
                                <AccordionItem value={`item-${index}`} className="border-none px-6">
                                    <AccordionTrigger className="text-left text-base font-bold text-slate-800 hover:text-[#D51119] hover:no-underline transition-colors py-5 [&[data-state=open]>svg]:text-[#D51119]">
                                        <span className="flex-1">{faq.q}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-6 pt-2">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-12 py-5 bg-[#333333] hover:bg-[#222222] text-white font-black text-lg uppercase rounded-sm shadow-2xl transition-all border-b-4 border-[#9a0c12] hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative z-10">Quero Economizar</span>
                    </button>
                    <p className="text-xs text-[#D51119] mt-3 font-bold uppercase tracking-wider">Equipe pronta para ajudar</p>
                </div>
            </div>
        </section>
    );
}
