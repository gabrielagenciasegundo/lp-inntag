"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white relative">
            {/* Downward pointing triangle (divider from dark section above) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-black/90 z-20"></div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="mb-8 border-l-4 border-[#D51119] pl-4">
                            <h2 className="text-xl md:text-2xl text-slate-400 font-medium tracking-widest uppercase mb-1">
                                Sobre a
                            </h2>
                            <h3 className="text-4xl md:text-5xl text-slate-800 font-black uppercase">
                                Inntag
                            </h3>
                        </div>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                            A Inntag Solar é muito mais do que uma fornecedora de equipamentos. Nós somos parceiros na sua jornada rumo à independência energética. Integramos solidez de mercado com engenharia de ponta para garantir os melhores resultados.
                        </p>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Fazemos parte do Grupo Inntag, carregando um legado de sucesso, qualidade e, acima de tudo, respeito pelo investimento de cada cliente. Com atuação consolidada e projetos em dezenas de cidades, nosso objetivo é descomplicar a energia solar.
                        </p>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed pb-4">
                            Cada telhado tem um potencial incrível. Nossa missão é despertar esse potencial, valorizar seu imóvel e libertar o seu bolso das contas de luz abusivas.
                        </p>

                        <button
                            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-4 inline-block bg-[#333333] hover:bg-[#222222] text-white font-black uppercase rounded-sm shadow-2xl transition-all border-b-4 border-[#9a0c12] hover:-translate-y-1 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative z-10">Quero Economizar</span>
                        </button>
                        <p className="text-xs text-[#D51119] mt-2 font-bold uppercase tracking-wider">Fale conosco sem compromisso</p>

                    </motion.div>

                    {/* Image Side - Simulating the logo/video placeholder on the right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square md:aspect-[3/4] bg-slate-900 rounded-sm overflow-hidden flex flex-col items-center justify-center p-8 text-center border-b-8 border-[#D51119] shadow-2xl relative">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/mariana-proenca-GXiHwHkIdVs-unsplash.jpg"
                                    alt="Textura Inntag"
                                    className="w-full h-full object-cover opacity-20"
                                />
                            </div>

                            <div className="relative z-10 w-full flex flex-col items-center">
                                <Image
                                    src="/logo/logo horizontal.png"
                                    alt="Inntag Solar Logo"
                                    width={200}
                                    height={50}
                                    className="brightness-0 invert mb-12"
                                />
                                <a href="https://www.youtube.com/watch?v=kaXlfJmnI9M" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer z-20">
                                    <div className="w-16 h-16 bg-white/10 group-hover:bg-[#D51119]/90 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-white/20 animate-pulse group-hover:animate-none transition-all shadow-lg group-hover:shadow-[#D51119]/50">
                                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                                    </div>
                                    <p className="text-white mt-4 font-bold tracking-widest uppercase text-sm group-hover:text-amber-500 transition-colors">Assista ao vídeo</p>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
