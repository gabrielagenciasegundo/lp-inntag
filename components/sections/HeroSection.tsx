"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/placas_solares.jpg"
                    alt="Energia solar residencial Inntag"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Very dark overlay to make text pop */}
                <div className="absolute inset-0 bg-black/0 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white space-y-4 max-w-xl"
                    >
                        {/* Logo */}
                        <div className="mb-6">
                            <Image
                                src="/logo/logo horizontal.png"
                                alt="Inntag Solar Logo"
                                width={240}
                                height={60}
                                className="brightness-0 invert"
                            />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-semibold text-slate-200 mb-2">
                            Reduza sua conta
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-[#D51119] capitalize tracking-tight leading-none mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            de energia residencial
                        </h1>

                        <p className="text-xl md:text-3xl font-medium text-white leading-tight mt-6">
                            Instale energia solar,<br />
                            parcelando em até <span className="text-[#D51119] font-bold">120x</span><br />
                            E ECONOMIZE ATÉ <span className="text-5xl md:text-6xl font-black text-[#D51119] ml-2">95%</span>
                        </p>
                    </motion.div>

                    {/* Right Column: Solid Primary Lead Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-md mx-auto lg:ml-auto"
                    >
                        <div id="lead-form" className="bg-[#D51119] rounded-lg shadow-2xl p-6 md:p-8 flex flex-col space-y-5 border-b-8 border-[#9a0c12]">
                            <div className="text-center mb-2">
                                <h3 className="text-lg md:text-xl font-bold text-white capitalize">
                                    Comece a ECONOMIZAR com
                                    energia solar <span className="font-black">agora!</span>
                                </h3>
                            </div>

                            <form className="space-y-3">
                                <Input
                                    placeholder="Nome"
                                    className="bg-white border-0 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#333333] rounded-sm"
                                />

                                <Input
                                    type="tel"
                                    placeholder="Celular / WhatsApp"
                                    className="bg-white border-0 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#333333] rounded-sm"
                                />

                                <Input
                                    placeholder="Cidade / Estado"
                                    className="bg-white border-0 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#333333] rounded-sm"
                                />

                                <Input
                                    type="number"
                                    placeholder="Valor médio da conta de luz"
                                    className="bg-white border-0 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#333333] rounded-sm"
                                />

                                <div className="space-y-1">
                                    <label className="text-xs text-white/90 font-bold uppercase tracking-wide ml-1">
                                        Anexar Conta de Energia
                                    </label>

                                    <Input
                                        type="file"
                                        accept=".pdf,.png,.jpg,.jpeg"
                                        className="
      h-14
      w-full
      text-sm
      text-white
      bg-white/10
      border border-white/30
      rounded-md
      cursor-pointer

      file:h-full
      file:border-0
      file:px-7
      file:rounded-md
      file:mr-1
      file:bg-white/20
      file:text-white
      file:font-medium
      file:leading-none
      file:cursor-pointer

      hover:file:bg-white/30
    "
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button className="w-full py-7 text-lg font-black bg-[#333333] hover:bg-[#222222] text-white rounded-sm uppercase tracking-wider shadow-lg hover:-translate-y-1 transition-all border-b-4 border-[#9a0c12] relative overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                        <span className="relative z-10">ECONOMIZE AGORA</span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Downward pointing triangle (divider) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[1px] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[30px] border-b-white z-20"></div>
        </section>
    );
}
