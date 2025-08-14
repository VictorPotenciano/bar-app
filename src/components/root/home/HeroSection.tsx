"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Martini } from "lucide-react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

// Variantes para el contenedor principal
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3, 
    },
  },
};

// Variantes para elementos hijos (comunes)
const childVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Variante especial para badge con rotación leve
const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotate: -5, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 18, duration: 0.5 },
  },
};

const HeroSection = () => {
  // Para parallax en la burbuja
  const { scrollYProgress } = useScroll();
  const yBubble = useTransform(scrollYProgress, [0, 1], [0, -50]); 

  return (
    <motion.section
      id="inicio"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-20"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          variants={badgeVariants}
          className="inline-flex items-center justify-center mb-6 bg-blue-900/50 text-blue-100 px-6 py-3 rounded-full backdrop-blur-sm hover:scale-105 transition-transform"
        >
          <div className="animate-spin-slow">
            <Martini className="w-5 h-5 mr-3" />
          </div>
          <span>Bienvenido a El Rincón</span>
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={childVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          <span>Descubre el </span>
          <span className="text-blue-400">sabor auténtico</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.div
          variants={childVariants}
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100"
        >
          <p>
            Cócteles artesanales, ambiente único y noches inolvidables en el
            corazón de la ciudad
          </p>
        </motion.div>

        {/* Botones */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Primer botón */}
          <div className="hover:scale-105 transition-transform">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden"
              asChild
            >
              <Link href="#reservas">
                <span className="relative z-10">Reservar Mesa</span>
                <span className="absolute inset-0 bg-blue-400 opacity-0 hover:opacity-20 hover:scale-150 transition-all duration-600" />
              </Link>
            </Button>
          </div>

          {/* Segundo botón */}
          <div className="hover:scale-105 transition-transform">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:text-blue-100 relative group"
              asChild
            >
              <Link href="#menu">
                <span className="relative z-10">Ver Menú Completo</span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-lg group-hover:opacity-100 transition-all duration-400" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Efecto de burbujas decorativas con parallax */}
        <motion.div
          style={{ y: yBubble }}
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5,
          }}
        />
      </div>
    </motion.section>
  );
};

export default HeroSection;
