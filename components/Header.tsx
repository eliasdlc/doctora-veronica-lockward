"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/images/logo.jpg";


const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Agrega el backdrop-blur + sombra suave una vez el usuario hace scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloquea el scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const handleNavClick = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                ${isScrolled ? "bg-brand-light/60 backdrop-blur-md shadow-sm" : "bg-brand-light backdrop-blur-md shadow-sm border-b border-stone-100"}`}
            >
                <div className="w-full mx-auto">
                    <div className="flex flex-row items-center justify-between h-auto min-h-18 md:h-20 w-full relative">

                        {/* Logo / Nombre */}
                        <div className={`flex items-center gap-4 md:gap-3 py-4 md:py-4 pl-4 pr-10 md:pr-20 
                                        bg-brand-primary/90 
                                        [clip-path:polygon(0_0,100%_0,calc(100%-2.25rem)_100%,0_100%)] 
                                        md:[clip-path:polygon(0_0,100%_0,calc(100%-4rem)_100%,0_100%)] ${isMobileMenuOpen ? "[clip-path:polygon(0_0,100%_0,calc(100%-0rem)_100%,0_100%)]" : "[clip-path:polygon(0_0,100%_0,calc(100%-4rem)_100%,0_100%)]"}`}>

                            <div className="flex w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden items-center justify-center ring-2 ring-white shrink-0 bg-white">
                                <Image src={logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>

                            <Link href="#inicio" className="flex flex-col leading-tight group truncate pr-2">
                                <span className="text-base md:text-xl font-bold text-white group-hover:text-brand-light transition-colors duration-200 truncate">
                                    Dra. Verónica Lockward
                                </span>
                                <span className="font-light text-brand-light text-[9px] md:text-sm mt-0.5 truncate">
                                    MEDICINA INTERNA - GASTROENTEROLOGÍA
                                </span>
                            </Link>
                        </div>

                        {/* Nav Desktop */}
                        <nav className="hidden md:flex items-center gap-10 lg:gap-16 px-4">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="relative text-sm lg:text-md font-bold text-stone-600 hover:text-brand-primary transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Desktop */}
                        <div className="hidden md:flex items-center pr-8 shrink-0">
                            <Link
                                href="#contacto"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary text-brand-light text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm"
                            >
                                <Phone size={14} />
                                Agendar consulta
                            </Link>
                        </div>

                        {/* Hamburger Mobile */}
                        <button
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            aria-label="Abrir menú"
                            className="md:hidden p-2 mr-4 rounded-lg text-stone-600 hover:text-brand-primary hover:bg-brand-accent/20 transition-colors duration-200 shrink-0"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay Menu */}
            <div
                className={`
                    fixed inset-0 z-40 md:hidden
                    transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            >
                {/* Backdrop oscurecido */}
                <div
                    className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
                    onClick={handleNavClick}
                />

                {/* Panel lateral */}
                <div
                    className={`
                        absolute top-0 right-0 h-full w-[75%] max-w-[280px] bg-white shadow-2xl
                        flex flex-col pt-22 px-6 pb-8
                        transition-transform duration-300 ease-in-out
                        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <nav className="flex flex-col gap-1 mt-4">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={handleNavClick}
                                className="py-3 px-4 rounded-xl text-base font-medium text-stone-700 hover:text-brand-primary hover:bg-brand-accent/20 transition-colors duration-150"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-stone-100">
                        <Link
                            href="#contacto"
                            onClick={handleNavClick}
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-primary text-white font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md"
                        >
                            <Phone size={18} />
                            Reservar Cita
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}