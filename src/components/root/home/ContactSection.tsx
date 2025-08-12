"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Variantes para el contenedor principal (deslizamiento curvo)
const containerVariants: Variants = {
  hidden: { opacity: 0, x: -100, rotateY: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.9,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

// Variantes para encabezado y elementos de contacto (pop con rotación inversa)
const infoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateZ: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.7 },
  },
};

// Variantes para mapa y botón (fade-in con escalado)
const mapButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", ease: "easeOut", duration: 0.6 },
  },
};

const ContactSection = () => {
  return (
    <motion.section
      id="contacto"
      className="py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div variants={infoVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            <span className="text-blue-400">Visítanos</span> o Contáctanos
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Estamos ubicados en el corazón de la ciudad, listos para ofrecerte
            una experiencia gastronómica inolvidable.
          </p>
        </motion.div>

        {/* Contenido */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mapa */}
          <motion.div
            variants={mapButtonVariants}
            whileHover="hover"
            className="lg:w-1/2 h-96 lg:h-auto"
          >
            <div className="h-full w-full rounded-xl overflow-hidden border border-blue-900/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.454103032465!2d-3.703789684603999!3d40.4167754793647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e23989a3d%3A0x3a446b6c9e1f0a9e!2sPuerta%20del%20Sol%2C%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sus!4v1620000000000!5m2!1ses!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div variants={infoVariants} className="lg:w-1/2">
            <div className="bg-[#111827] p-8 rounded-xl border border-blue-900/50 h-full">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Dirección */}
                <motion.div
                  variants={infoVariants}
                  className="flex items-start"
                >
                  <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Dirección</h4>
                    <p className="text-blue-100">
                      Calle Ejemplo, 123
                      <br />
                      28013 Madrid, España
                    </p>
                  </div>
                </motion.div>

                {/* Teléfono */}
                <motion.div
                  variants={infoVariants}
                  className="flex items-start"
                >
                  <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Teléfono</h4>
                    <p className="text-blue-100">+34 123 456 789</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-blue-700 text-blue-300 hover:bg-blue-900/30"
                    >
                      Llamar ahora
                    </Button>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={infoVariants}
                  className="flex items-start"
                >
                  <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <p className="text-blue-100">info@elrinconbar.com</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-blue-700 text-blue-300 hover:bg-blue-900/30"
                    >
                      Enviar email
                    </Button>
                  </div>
                </motion.div>

                {/* Horario */}
                <motion.div
                  variants={infoVariants}
                  className="flex items-start"
                >
                  <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-blue-300" />
                  </div>
                  <div className="w-full max-w-md">
                    <h4 className="font-medium text-white mb-2 text-lg sm:text-xl md:text-2xl">
                      Horario
                    </h4>
                    <ul className="text-blue-100 space-y-2 text-sm sm:text-base">
                      <li className="flex flex-col sm:flex-row sm:justify-between">
                        <span>Lunes - Jueves:</span>
                        <span className="font-medium">17:00 - 01:00</span>
                      </li>
                      <li className="flex flex-col sm:flex-row sm:justify-between">
                        <span>Viernes - Sábado:</span>
                        <span className="font-medium">17:00 - 02:00</span>
                      </li>
                      <li className="flex flex-col sm:flex-row sm:justify-between">
                        <span>Domingo:</span>
                        <span className="font-medium">17:00 - 00:00</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Botón de reserva */}
              <motion.div
                variants={mapButtonVariants}
                whileHover="hover"
                className="mt-10 pt-6 border-t border-blue-900/30"
              >
                <Button
                  variant="default"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  asChild
                >
                  <Link href="#reservas">Hacer una reserva</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
