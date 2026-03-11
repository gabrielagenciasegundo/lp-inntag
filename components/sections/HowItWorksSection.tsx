"use client";

import { motion } from "framer-motion";
import { FileText, Calculator, FileCheck, CheckCircle, Zap } from "lucide-react";

export default function HowItWorksSection() {
    const steps = [
        {
            title: "Envio de Dados",
            desc: "Você nos fornece informações básicas sobre sua residência e consumo.",
            icon: <FileText className="w-8 h-8 text-[#D51119]" />
        },
        {
            title: "Análise Técnica",
            desc: "A Inntag analisa o perfil de consumo e a viabilidade do seu telhado.",
            icon: <Calculator className="w-8 h-8 text-[#D51119]" />
        },
        {
            title: "Simulação",
            desc: "Nossa equipe monta um projeto personalizado para a sua necessidade.",
            icon: <Zap className="w-8 h-8 text-[#D51119]" />
        },
        {
            title: "Proposta",
            desc: "Você recebe o orçamento com as melhores condições de pagamento.",
            icon: <FileCheck className="w-8 h-8 text-[#D51119]" />
        },
        {
            title: "Instalação",
            desc: "Após aprovação, realizamos a instalação rápida e segura do seu sistema.",
            icon: <CheckCircle className="w-8 h-8 text-[#D51119]" />
        }
    ];

    return (
        <section className="py-24 pt-14 bg-white relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
                        Como funciona?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Ter energia solar em casa é mais simples do que você imagina.
                        Nós cuidamos de tudo para você, do projeto à homologação.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[3rem] left-0 w-full h-1 bg-slate-100 z-0"></div>
                    
                    {/* Connector Line (Mobile) */}
                    <div className="block lg:hidden absolute top-0 left-[2.5rem] md:left-[3rem] w-1 h-full bg-slate-100 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex md:flex-col items-center text-left md:text-center gap-6 md:gap-4 relative"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-slate-50 border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D51119] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-white">
                                        {i + 1}
                                    </div>
                                    {step.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-2">{step.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
