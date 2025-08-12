import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#132241] border-t border-[#1d2d50] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a7b8d1]">
              El Rincón
            </h2>
            <p className="text-sm text-[#a7b8d1] leading-relaxed">
              Más que un bar, tu segundo hogar. Tapas, vino y buenos momentos en
              el corazón de la ciudad.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold text-[#a7b8d1] uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-[#a7b8d1] flex-shrink-0" />
                <p className="text-sm hover:text-white transition-colors">
                  +34 911 222 333
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-[#a7b8d1] flex-shrink-0" />
                <p className="text-sm hover:text-white transition-colors">
                  info@elrincon.es
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[#a7b8d1] flex-shrink-0" />
                <span className="text-sm">Calle del Sabor, 123, Madrid</span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-xs font-semibold text-[#a7b8d1] uppercase tracking-wider mb-4">
              Horario
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-[#a7b8d1]">Lun-Vie</span>
                <span>12:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#a7b8d1]">Sábado</span>
                <span>11:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#a7b8d1]">Domingo</span>
                <span>11:00 - 00:00</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-xs font-semibold text-[#a7b8d1] uppercase tracking-wider mb-4">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <button
                className="p-2 rounded-full bg-[#1d2d50] hover:bg-[#2a3d66] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-full bg-[#1d2d50] hover:bg-[#2a3d66] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-full bg-[#1d2d50] hover:bg-[#2a3d66] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-10 bg-[#1d2d50]" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#a7b8d1]">
          <p>
            © {new Date().getFullYear()} El Rincón. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
