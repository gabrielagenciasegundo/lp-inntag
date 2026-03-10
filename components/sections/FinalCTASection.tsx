"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FinalCTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-primary z-0">
                <div className="absolute inset-0 bg-[url('/images/placeholders/hero-bg.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/80"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-2xl">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                            Descubra quanto sua casa pode economizar com energia solar
                        </h2>
                        <p className="text-lg text-slate-600">
                            Solicite sua simulação personalizada com a equipe da Inntag Solar. É rápido, sem compromisso e desenhado exclusivamente para o seu perfil e o seu bolso.
                        </p>
                        <div className="hidden md:block">
                            <div className="flex -space-x-3 mb-4 mt-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs text-slate-500 overflow-hidden">
                                        <img src={`/images/placeholders/user-${i}.jpg`} alt={`User ${i}`} className="w-full h-full object-cover opacity-50" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold font-sans">
                                    +17k
                                </div>
                            </div>
                            <p className="text-sm font-medium text-slate-500">Junte-se a milhares de brasileiros economizando.</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                        <form className="space-y-4">
                            <Input
                                placeholder="Seu nome"
                                className="bg-white border-slate-200 py-6 placeholder:text-slate-400"
                            />
                            <Input
                                placeholder="Seu telefone / WhatsApp"
                                type="tel"
                                className="bg-white border-slate-200 py-6 placeholder:text-slate-400"
                            />
                            <Input
                                placeholder="Valor médio da sua conta"
                                type="number"
                                className="bg-white border-slate-200 py-6 placeholder:text-slate-400"
                            />
                            <Button className="w-full py-6 text-base font-bold bg-secondary hover:bg-secondary/90 shadow-lg mt-4 h-14">
                                Solicitar orçamento
                            </Button>
                            <p className="text-xs text-center text-slate-400">
                                Seus dados estão 100% seguros conosco.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
