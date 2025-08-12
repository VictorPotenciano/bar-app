"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Bar interior",
    category: "Ambiente",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Salón",
    category: "Bebidas",
  },
  {
    src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Cerveza",
    category: "Bebidas",
  },
  {
    src: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Noche de Jazz",
    category: "Eventos",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Plato gourmet",
    category: "Gastronomía",
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Barra principal",
    category: "Ambiente",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    alt: "Cóctel especial",
    category: "Bebidas",
  },
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    alt: "Noche de jazz",
    category: "Eventos",
  },
];

// Variantes para el contenedor principal con stagger rápido
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.3,
    },
  },
};

// Variantes para encabezado (expand from center)
const headerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", ease: "circOut", duration: 0.8 },
  },
};

// Variantes para imágenes de galería (zoom-in con skew horizontal)
const galleryImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, skewX: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    skewX: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.7 },
  },
};

// Variantes para modal (grow from clicked image)
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", ease: "backOut", duration: 0.5 },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { type: "tween", ease: "backIn", duration: 0.3 },
  },
};

// Variantes para CTA (slide-up con fade)
const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 0.6 },
  },
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    category: string;
  } | null>(null);

  const openModal = (image: { src: string; alt: string; category: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.section
      id="galeria"
      className="py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 bg-blue-900/50 text-blue-100 px-4 py-2 rounded-full">
            <Camera className="w-5 h-5 mr-2" />
            <span>Momentos Capturados</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Galería <span className="text-blue-400">El Rincón</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Descubre la esencia de nuestro espacio a través de estas imágenes
            que capturan la magia de cada visita.
          </p>
        </motion.div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={galleryImageVariants}
              className="group relative overflow-hidden rounded-lg border border-blue-900/50 hover:border-blue-600 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-1">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={ctaVariants} className="text-center mt-12">
          <p className="text-blue-200 mb-6">
            ¿Quieres ver más de nuestro día a día?
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-300 rounded-full hover:bg-blue-900/30 hover:text-blue-100 transition-colors">
            Síguenos en Instagram
          </button>
        </motion.div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded">
              {selectedImage.category} - {selectedImage.alt}
            </div>
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-300"
              onClick={closeModal}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default GallerySection;
