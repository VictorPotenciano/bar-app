"use client";

import { CalendarDays, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DailyMenu } from "../../../../../typing";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import MenuSkeleton from "./MenuSkeleton";
import MenuDishCard from "./MenuDishCard";
import MenuDrinksDessert from "./MenuDrinksDessert";

interface MenuSectionProps {
  menu: DailyMenu | null;
  isLoading: boolean;
}

// Variantes para el contenedor principal (animación de aparición escalonada)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

// Variantes para los encabezados (animación de escala y fade)
const headerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

// Variantes para las tarjetas de platos (efecto 3D de rotación)
const dishCardVariants: Variants = {
  hidden: { opacity: 0, rotateY: 15 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

// Variantes para imágenes (efecto de zoom y desenfoque)
const imageVariants: Variants = {
  hidden: {
    scale: 1.05,
    filter: "blur(5px)",
  },
  visible: {
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.9,
    },
  },
};

// Variantes para elementos laterales (deslizamiento horizontal)
const sideSlideVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index === 0 ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

// Variantes para el boton (efecto de escala y fade)
const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.7,
    },
  },
};

const MenuSection = ({ menu, isLoading }: MenuSectionProps) => {
  if (isLoading || !menu) {
    return <MenuSkeleton />;
  }

  // Separamos los primeros 2 platos como primeros y los siguientes 2 como segundos
  const firstCourses = menu.dishes.slice(0, 2);
  const secondCourses = menu.dishes.slice(2, 4);

  return (
    <motion.section
      id="menu"
      className="py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          variants={headerVariants}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <Badge
            variant="secondary"
            className="mb-2 sm:mb-3 bg-blue-900 text-blue-100 hover:bg-blue-800 text-xs sm:text-sm px-3 sm:px-4 py-1"
          >
            <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Menú Diario
          </Badge>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              <span className="text-blue-400">{menu?.name}</span>
            </h2>
            {menu.price && (
              <Badge className="bg-green-600 hover:bg-green-500 text-white text-sm sm:text-base md:text-lg px-3 sm:px-4 py-0.5 sm:py-1">
                {menu.price} €
              </Badge>
            )}
          </div>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mt-4">
            {menu?.description ??
              "Descubre nuestro menú casero y equilibrado para hoy."}
          </p>
        </motion.div>

        {/* Primeros platos */}
        <div className="mb-10">
          <motion.h3
            variants={headerVariants}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Primeros Platos
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {firstCourses.map((dish, index) => (
              <MenuDishCard
                dish={dish}
                key={dish.id}
                variant={index % 2 === 0 ? "left" : "right"}
                position={index + 1}
                dishCardVariants={dishCardVariants}
                imageVariants={imageVariants}
              />
            ))}
          </div>
        </div>

        {/* Segundos platos */}
        <div className="mb-10">
          <motion.h3
            variants={headerVariants}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Segundos Platos
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondCourses.map((dish, index) => (
              <MenuDishCard
                dish={dish}
                key={dish.id}
                variant={index % 2 === 0 ? "left" : "right"}
                position={index + 3}
                dishCardVariants={dishCardVariants}
                imageVariants={imageVariants}
              />
            ))}
          </div>
        </div>

        {/* Bebidas y postres */}
        <MenuDrinksDessert
          headerVariants={headerVariants}
          containerVariants={containerVariants}
          sideSlideVariants={sideSlideVariants}
        />

        {/* CTA */}
        <motion.div variants={ctaVariants} className="text-center mt-16">
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Este menú está disponible solo por hoy. ¡No te lo pierdas!
          </p>
          <Button
            size="lg"
            variant="default"
            className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
          >
            <Link href="/carta">Ver Carta Completa</Link>
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MenuSection;
