import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12 relative z-10">
            <div className="container mx-auto px-4 text-center">

                <div className="flex flex-col items-center justify-center mb-6">
                    <Image
                        src="/logo/logo horizontal.png"
                        alt="Inntag Solar Logo"
                        width={200}
                        height={50}
                        className="brightness-0 invert opacity-70 mb-4"
                    />
                </div>

                <p className="text-xs md:text-sm text-slate-500 font-medium tracking-wide">
                    &copy; {new Date().getFullYear()} Inntag Energia Solar. Todos os direitos reservados.
                </p>

            </div>
        </footer>
    );
}
