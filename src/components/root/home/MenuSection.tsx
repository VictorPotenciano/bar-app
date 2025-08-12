"use client";

import { CalendarDays, GlassWater, IceCream, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DailyMenu, Dish } from "../../../../typing";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

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
        <motion.div variants={headerVariants} className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-3 bg-blue-900 text-blue-100 hover:bg-blue-800"
          >
            <CalendarDays className="w-4 h-4 mr-2" />
            Menú Diario
          </Badge>
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              <span className="text-blue-400">{menu?.name}</span>
            </h2>
            {menu.price && (
              <Badge className="bg-green-600 hover:bg-green-500 text-white text-lg px-4 py-1">
                {menu.price} €
              </Badge>
            )}
          </div>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto">
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
              <DishCard
                dish={dish}
                key={dish.id}
                variant={index % 2 === 0 ? "left" : "right"}
                position={index + 1}
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
              <DishCard
                dish={dish}
                key={dish.id}
                variant={index % 2 === 0 ? "left" : "right"}
                position={index + 3}
              />
            ))}
          </div>
        </div>

        {/* Bebidas y postres */}
        <motion.div variants={headerVariants} className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Además incluye:</h3>
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-200"
          >
            <motion.div
              variants={sideSlideVariants}
              custom={0}
              className="flex items-center gap-2"
            >
              <GlassWater className="w-5 h-5" />
              <span>Bebida: Refresco, Agua o Cerveza</span>
            </motion.div>
            <motion.div
              variants={sideSlideVariants}
              custom={1}
              className="flex items-center gap-2"
            >
              <IceCream className="w-5 h-5" />
              <span>Postre: Helado, Fruta o Café</span>
            </motion.div>
          </motion.div>
        </motion.div>

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

type DishCardProps = {
  dish: Dish;
  variant: "left" | "right";
  position: number;
};

const DishCard = ({ dish, variant, position }: DishCardProps) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <motion.div
      variants={dishCardVariants}
      className={`flex flex-col ${
        variant === "right" ? "md:flex-row-reverse" : "md:flex-row"
      } gap-4`}
    >
      {/* Contenedor de imagen más pequeño */}
      <motion.div
        className="md:w-1/3 h-40 relative rounded-lg overflow-hidden shadow-lg group"
        style={{ y: yParallax }}
      >
        <motion.div
          variants={imageVariants}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <Image
            src={dish.imageUrl ?? "/placeholder.jpg"}
            alt={dish.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 30vw"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.jpg";
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-80"></div>
      </motion.div>

      {/* Contenido del plato */}
      <div className="md:w-2/3 flex flex-col justify-center p-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">{position}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{dish.name}</h3>
        </div>

        <p className="text-sm text-blue-300 mb-3 line-clamp-2">
          {dish.description}
        </p>

        <div className="mb-2">
          <h4 className="text-sm text-blue-400 font-semibold mb-1">
            Ingredientes:
          </h4>
          <div className="flex flex-wrap gap-1">
            {dish.ingredients.slice(0, 5).map((ingredient, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs text-blue-300 border-blue-700 bg-blue-900/20"
              >
                {ingredient}
              </Badge>
            ))}
            {dish.ingredients.length > 5 && (
              <Badge
                variant="outline"
                className="text-xs border-blue-700 bg-blue-900/20"
              >
                +{dish.ingredients.length - 5}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MenuSkeleton = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-8 w-32 mx-auto mb-4 bg-blue-900/50" />
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-blue-900/50" />
          <Skeleton className="h-1 w-20 mx-auto mb-6 bg-blue-500" />
          <Skeleton className="h-6 w-3/4 max-w-3xl mx-auto bg-blue-900/50" />
        </div>

        {/* Primeros platos Skeleton */}
        <div className="mb-10">
          <Skeleton className="h-8 w-48 mx-auto mb-6 bg-blue-900/50" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-4`}
              >
                <Skeleton className="md:w-1/3 h-40 rounded-lg bg-blue-900/50" />
                <div className="md:w-2/3 flex flex-col justify-center p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="w-6 h-6 rounded-full bg-blue-600" />
                    <Skeleton className="h-6 w-3/4 bg-blue-900/50" />
                  </div>
                  <Skeleton className="h-4 w-full bg-blue-900/50 mb-3" />
                  <div className="mb-2">
                    <Skeleton className="h-4 w-1/3 bg-blue-900/50 mb-1" />
                    <div className="flex flex-wrap gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Skeleton
                          key={i}
                          className="h-6 w-20 bg-blue-900/20 border border-blue-700"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segundos platos Skeleton */}
        <div className="mb-10">
          <Skeleton className="h-8 w-48 mx-auto mb-6 bg-blue-900/50" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-4`}
              >
                <Skeleton className="md:w-1/3 h-40 rounded-lg bg-blue-900/50" />
                <div className="md:w-2/3 flex flex-col justify-center p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="w-6 h-6 rounded-full bg-blue-600" />
                    <Skeleton className="h-6 w-3/4 bg-blue-900/50" />
                  </div>
                  <Skeleton className="h-4 w-full bg-blue-900/50 mb-3" />
                  <div className="mb-2">
                    <Skeleton className="h-4 w-1/3 bg-blue-900/50 mb-1" />
                    <div className="flex flex-wrap gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Skeleton
                          key={i}
                          className="h-6 w-20 bg-blue-900/20 border border-blue-700"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bebidas y postres Skeleton */}
        <div className="mt-12 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4 bg-blue-900/50" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 bg-blue-900/50" />
              <Skeleton className="h-4 w-40 bg-blue-900/50" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 bg-blue-900/50" />
              <Skeleton className="h-4 w-40 bg-blue-900/50" />
            </div>
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="text-center mt-16">
          <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto mb-6 bg-blue-900/50" />
          <Skeleton className="h-10 w-48 mx-auto bg-blue-900/50" />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
