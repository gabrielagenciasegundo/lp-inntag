import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#333333] border-t border-slate-900 py-12 relative z-10">
            <div className="container mx-auto px-4 text-center">

                <div className="flex flex-col items-center justify-center mb-6">
                    <Image
                        src="/logo/logo horizontal.png"
                        alt="Inntag Solar Logo"
                        width={200}
                        height={50}
                        className="mb-4"
                    />

                    <div className="flex items-center gap-6 mt-4">
                        <a href="https://www.instagram.com/inntag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:bg-[#D51119]">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://www.facebook.com/Inntag/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:bg-[#D51119]">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.youtube.com/user/inntag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:bg-[#D51119]">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <p className="text-xs md:text-sm text-white font-bold tracking-wide">
                    &copy; {new Date().getFullYear()} Inntag Energia Solar. Todos os direitos reservados.
                </p>

            </div>
        </footer>
    );
}
