"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Music, GlassWater, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";

// Variantes para el contenedor principal 
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.5,
    },
  },
};

// Variantes para encabezado (bounce con spring)
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.5, duration: 1.0 },
  },
};

// Variantes para tarjetas de eventos (flip vertical con rotateX negativo)
const cardVariants: Variants = {
  hidden: { opacity: 0, rotateX: -90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 0.9 },
  },
};

// Variantes para imágenes (rotación sutil con skew)
const imageVariants: Variants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 1.0 },
  },
};

// Variantes para CTA ("pop" con ease backOut)
const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "backOut", duration: 0.8 },
  },
};

const EventsSection = () => {
  return (
    <motion.section
      id="eventos"
      className="py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-blue-900 text-blue-100 hover:bg-blue-800"
          >
            <CalendarDays className="w-4 h-4 mr-2" />
            Experiencias Únicas
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Nuestros <span className="text-blue-400">Eventos Exclusivos</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Noches temáticas, shows en vivo y experiencias gastronómicas que
            transforman tu visita en un momento memorable.
          </p>
        </motion.div>

        {/* Grid de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Evento 1 - Noche de Jazz */}
          <motion.div
            variants={cardVariants}
            className="bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-blue-900/50 hover:border-blue-700 transition-colors group"
          >
            <div className="relative h-60 overflow-hidden">
              <motion.div variants={imageVariants}>
                <Image
                  src="https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Noche de Jazz"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-90"></div>
              <Badge className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-500">
                <Music className="w-4 h-4 mr-2" />
                Música en vivo
              </Badge>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Noche de Jazz
                  </h3>
                  <p className="text-blue-300 flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Todos los viernes
                  </p>
                </div>
                <div className="bg-blue-900/70 px-4 py-2 rounded-lg text-center border border-blue-700">
                  <p className="font-bold text-lg text-blue-100">21:00</p>
                  <p className="text-xs text-blue-300">a 01:00</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6">
                Disfruta de una velada sofisticada con los mejores talentos
                locales de jazz, acompañada de nuestros cócteles premiados y un
                menú degustación especial.
              </p>
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:bg-blue-900/50 hover:text-blue-100 w-full"
                asChild
              >
                <Link href="#">
                  Más información <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Evento 2 - Clase de Mixología */}
          <motion.div
            variants={cardVariants}
            className="bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-blue-900/50 hover:border-blue-700 transition-colors group"
          >
            <div className="relative h-60 overflow-hidden">
              <motion.div variants={imageVariants}>
                <Image
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Clase de Mixología"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-90"></div>
              <Badge className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-500">
                <GlassWater className="w-4 h-4 mr-2" />
                Experiencia interactiva
              </Badge>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Taller de Mixología
                  </h3>
                  <p className="text-blue-300 flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Primer sábado de cada mes
                  </p>
                </div>
                <div className="bg-blue-900/70 px-4 py-2 rounded-lg text-center border border-blue-700">
                  <p className="font-bold text-lg text-blue-100">18:00</p>
                  <p className="text-xs text-blue-300">a 20:00</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6">
                Aprende los secretos de la coctelería clásica con nuestros
                expertos mixólogos. Incluye preparación de 3 cócteles,
                degustación y diploma de participación.
              </p>
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-500 text-white w-full shadow-lg shadow-blue-500/20"
                asChild
              >
                <Link href="#">
                  Reservar ahora <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div variants={ctaVariants} className="text-center mt-16">
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            ¿Quieres organizar un evento privado o celebrar una ocasión especial
            en nuestro espacio?
          </p>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:text-blue-100"
            asChild
          >
            <Link href="#contacto">Contáctanos para eventos privados</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventsSection;
