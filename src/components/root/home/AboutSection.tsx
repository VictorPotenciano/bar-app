"use client";

import Image from "next/image";
import { Award, Calendar, MartiniIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

// Variantes para el contenedor principal con stagger
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};

// Variantes para la imagen
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 1.1 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
  },
};

// Variantes para el badge de experiencia
const experienceBadgeVariants: Variants = {
  hidden: { opacity: 0, y: 30, rotate: 5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 140, damping: 16, duration: 0.6 },
  },
};

// Variantes para el badge de texto y título
const textBadgeVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.5 },
  },
};

// Variantes para párrafos y cita (efecto typewriter simulado)
const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Variantes para la línea separadora (expansión horizontal)
const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
};

// Variantes para las tarjetas con rotación 3D
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 130, damping: 18, duration: 0.5 },
  },
};

const AboutSection = () => {
  // Parallax para el fondo de la imagen
  const { scrollYProgress } = useScroll();
  const xParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]); // Movimiento horizontal sutil

  return (
    <motion.section
      id="nosotros"
      className="py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen */}
          <div className="lg:w-1/2 relative">
            <motion.div
              variants={imageVariants}
              className="relative h-96 w-full rounded-xl overflow-hidden border-2 border-blue-900/50 group"
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Bar interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div
                style={{ x: xParallax }} // Parallax horizontal
                className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/30 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>

            {/* Badge de experiencia */}
            <motion.div
              variants={experienceBadgeVariants}
              className="absolute -bottom-6 -left-6 bg-blue-600 p-5 text-white shadow-xl rounded-xl hidden lg:flex items-center"
            >
              <Calendar className="w-8 h-8 mr-3" />
              <div>
                <p className="font-bold text-lg">+10 años</p>
                <p className="text-blue-100 text-sm">de excelencia</p>
              </div>
            </motion.div>
          </div>

          {/* Texto */}
          <div className="lg:w-1/2">
            <motion.div
              variants={containerVariants}
              className="bg-[#111827] p-8 rounded-xl border border-blue-900/50"
            >
              <motion.div variants={textBadgeVariants}>
                <Badge className="mb-4 bg-blue-900/50 text-blue-100 hover:bg-blue-800">
                  <Award className="w-4 h-4 mr-2" />
                  Nuestra Esencia
                </Badge>
              </motion.div>

              <motion.h2
                variants={textBadgeVariants}
                className="text-3xl font-bold text-white mb-6"
              >
                Más que un bar, una{" "}
                <span className="text-blue-400">experiencia</span>
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="space-y-4 text-blue-100 mb-8"
              >
                <motion.p variants={textVariants}>
                  Desde 2010, El Rincón ha sido el refugio para los amantes de
                  la mixología creativa y la gastronomía sofisticada, donde cada
                  visita se convierte en un momento memorable.
                </motion.p>
                <motion.p variants={textVariants}>
                  Nuestro equipo de expertos combina técnicas ancestrales con
                  innovación, utilizando ingredientes premium y una pasión que
                  se percibe en cada creación.
                </motion.p>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="flex items-center mb-8"
              >
                <motion.div
                  variants={lineVariants}
                  className="w-16 h-1 bg-blue-500 mr-4 rounded-full"
                />
                <span className="text-blue-300 italic font-medium">
                  &quot;Donde cada trazo de sabor cuenta una historia&quot;
                </span>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-[#1e293b] p-4 rounded-lg border border-blue-900/30"
                >
                  <MartiniIcon className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="font-medium text-white mb-1">
                    Mixología Artesanal
                  </h4>
                  <p className="text-sm text-blue-200">
                    Cócteles únicos con ingredientes locales
                  </p>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="bg-[#1e293b] p-4 rounded-lg border border-blue-900/30"
                >
                  <Award className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="font-medium text-white mb-1">
                    Reconocimientos
                  </h4>
                  <p className="text-sm text-blue-200">
                    Premios nacionales de coctelería
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
