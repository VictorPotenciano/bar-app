"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Martini, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Función para generar el href correcto dependiendo de si estamos en la home o no
  const getSectionHref = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <header className="fixed w-full bg-[#0a0f1a]/90 backdrop-blur-sm border-b border-blue-900/50 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="bg-blue-600 p-2 rounded-lg mr-3 group-hover:bg-blue-500 transition-colors">
            <Martini className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-white">El</span>{" "}
            <span className="text-blue-400">Rincón</span>
          </h1>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Inicio
          </Link>
          <Link
            href={getSectionHref("nosotros")}
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            href={getSectionHref("menu")}
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Menú
          </Link>
          <Link
            href="/carta"
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Carta
          </Link>
          <Link
            href={getSectionHref("eventos")}
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Eventos
          </Link>
          <Link
            href={getSectionHref("galeria")}
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Galería
          </Link>
          <Link
            href={getSectionHref("reservas")}
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Reservas
          </Link>
          <Link
            href={getSectionHref("contacto")}
            className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón de reserva y menú móvil */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-blue-900/50"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
