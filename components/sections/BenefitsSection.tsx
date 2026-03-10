"use client";

import { motion } from "framer-motion";
import { PiggyBank, TrendingUp, Home, Leaf, Wrench, ShieldCheck } from "lucide-react";

export default function BenefitsSection() {
    const benefits = [
        {
            title: "ECONOMIA",
            description: "Reduza sua fatura de energia em até 95%.",
            icon: <PiggyBank className="w-10 h-10 text-white" />,
            image: "/portfolio/f88c44_2438b3dbd2234db287287157717be0f7~mv2.avif"
        },
        {
            title: "PAGAMENTO FACILITADO",
            description: "Linhas de crédito para pagar em até 120 meses.",
            icon: <TrendingUp className="w-10 h-10 text-white" />,
            image: "/portfolio/f88c44_8e90452fda0f45bc9a7029d99bfb4fd4~mv2 (1).avif"
        },
        {
            title: "RENOVÁVEL",
            description: "Energia 100% limpa e amiga do meio ambiente.",
            icon: <Leaf className="w-10 h-10 text-white" />,
            image: "/portfolio/f88c44_ab93b8653a0f43e98fa6a253d8249bcc~mv2.avif"
        },
        {
            title: "ZERO PREOCUPAÇÕES",
            description: "Nós cuidamos de toda a burocracia para você.",
            icon: <Home className="w-10 h-10 text-white" />,
            image: "/residencial.jpg"
        },
        {
            title: "INSTALAÇÃO RÁPIDA",
            description: "Equipe especializada entregando no prazo.",
            icon: <Wrench className="w-10 h-10 text-white" />,
            image: "/portfolio/f88c44_7b596169b5e8464a9ff1338faea94e13~mv2.png"
        },
        {
            title: "GARANTIA DE SATISFAÇÃO",
            description: "Resultados comprovados em milhares de projetos.",
            icon: <ShieldCheck className="w-10 h-10 text-white" />,
            image: "/placas_solares.jpg"
        }
    ];

    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4 max-w-6xl text-center">

                <div className="mb-12">
                    <h2 className="text-xl md:text-2xl text-slate-400 font-medium tracking-widest uppercase mb-1">
                        Vantagens da
                    </h2>
                    <h3 className="text-4xl md:text-5xl text-slate-800 font-black uppercase">
                        Energia Solar
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            {/* Card Background Image & Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={benefit.image}
                                    alt="Solar background"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#0A192F]/90 mix-blend-multiply" />
                            </div>

                            <div className="relative z-10 p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[300px] bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <div className="shrink-0 flex items-center justify-center p-4 mb-4 border-2 border-white/20 rounded-full bg-white/10 backdrop-blur-md shadow-xl">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-[#D51119] uppercase mb-2 tracking-wide" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                                        {benefit.title}
                                    </h4>
                                    <p className="text-white text-base md:text-lg leading-relaxed font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-12 py-5 bg-[#333333] hover:bg-[#222222] text-white font-black text-lg uppercase rounded-sm shadow-2xl transition-all border-b-4 border-[#9a0c12] hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative z-10">Quero Economizar</span>
                    </button>
                    <p className="text-xs text-[#D51119] mt-3 font-bold uppercase tracking-wider">Orçamento rápido e gratuito</p>
                </div>

            </div>
        </section>
    );
}
