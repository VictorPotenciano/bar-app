"use client";

import { Calendar, Clock, Phone, Mail, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, Variants } from "framer-motion";

// Variantes para el contenedor principal (fade-in con desplazamiento diagonal)
const containerVariants: Variants = {
  hidden: { opacity: 0, x: -50, y: -50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Variantes para encabezado y tarjetas de horario/contacto (rebote suave con rotación)
const infoVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateZ: 5 },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.7 },
  },
};

// Variantes para elementos del formulario (cascada desde abajo)
const formItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.6 },
  },
};

const ReservationSection = () => {
  return (
    <motion.section
      id="reservas"
      className="py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Información de contacto */}
          <motion.div variants={infoVariants} className="lg:w-1/2">
            <div className="bg-[#111827] p-8 rounded-xl border border-blue-900/50">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Reserva tu <span className="text-blue-400">Experiencia</span>
                </h2>
                <p className="text-blue-100">
                  Asegura tu lugar en nuestro exclusivo espacio para disfrutar
                  de una velada inolvidable con nuestra gastronomía y mixología
                  de autor.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  Horario
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    variants={infoVariants}
                    className="bg-[#1e293b] p-4 rounded-lg border border-blue-900/30"
                  >
                    <p className="font-medium text-white">Lunes - Jueves</p>
                    <p className="text-blue-300">17:00 - 01:00</p>
                  </motion.div>
                  <motion.div
                    variants={infoVariants}
                    className="bg-[#1e293b] p-4 rounded-lg border border-blue-900/30"
                  >
                    <p className="font-medium text-white">Viernes - Sábado</p>
                    <p className="text-blue-300">17:00 - 02:00</p>
                  </motion.div>
                  <motion.div
                    variants={infoVariants}
                    className="bg-[#1e293b] p-4 rounded-lg border border-blue-900/30"
                  >
                    <p className="font-medium text-white">Domingo</p>
                    <p className="text-blue-300">17:00 - 00:00</p>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-400" />
                  Contacto
                </h3>
                <div className="space-y-4">
                  <motion.div
                    variants={infoVariants}
                    className="flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-4 text-blue-300" />
                    <p className="text-blue-100">+34 123 456 789</p>
                  </motion.div>
                  <motion.div
                    variants={infoVariants}
                    className="flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-4 text-blue-300" />
                    <p className="text-blue-100">info@elrinconbar.com</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de reserva */}
          <motion.div variants={infoVariants} className="lg:w-1/2">
            <div className="bg-[#111827] p-8 rounded-xl border border-blue-900/50">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Formulario de Reserva
              </h3>

              <form className="space-y-6">
                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-blue-100 mb-2"
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Nombre completo
                  </label>
                  <Input
                    type="text"
                    id="nombre"
                    className="bg-[#1e293b] border-blue-900/50 focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-blue-100 mb-2"
                  >
                    <Mail className="w-4 h-4 inline mr-2" />
                    Correo electrónico
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="bg-[#1e293b] border-blue-900/50 focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={formItemVariants}>
                    <label
                      htmlFor="fecha"
                      className="block text-sm font-medium text-blue-100 mb-2"
                    >
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Fecha
                    </label>
                    <Input
                      type="date"
                      id="fecha"
                      className="bg-[#1e293b] border-blue-900/50 focus:border-blue-500 focus:ring-blue-500 text-white"
                    />
                  </motion.div>
                  <motion.div variants={formItemVariants}>
                    <label
                      htmlFor="hora"
                      className="block text-sm font-medium text-blue-100 mb-2"
                    >
                      <Clock className="w-4 h-4 inline mr-2" />
                      Hora
                    </label>
                    <Input
                      type="time"
                      id="hora"
                      className="bg-[#1e293b] border-blue-900/50 focus:border-blue-500 focus:ring-blue-500 text-white"
                    />
                  </motion.div>
                </div>

                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="personas"
                    className="block text-sm font-medium text-blue-100 mb-2"
                  >
                    <Users className="w-4 h-4 inline mr-2" />
                    Número de personas
                  </label>
                  <Select>
                    <SelectTrigger className="bg-[#1e293b] border-blue-900/50 focus:ring-blue-500 text-white">
                      <SelectValue placeholder="Selecciona..." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1e293b] border-blue-900/50 text-white">
                      <SelectItem value="1">1 persona</SelectItem>
                      <SelectItem value="2">2 personas</SelectItem>
                      <SelectItem value="3">3 personas</SelectItem>
                      <SelectItem value="4">4 personas</SelectItem>
                      <SelectItem value="5+">5+ personas</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="comentarios"
                    className="block text-sm font-medium text-blue-100 mb-2"
                  >
                    Comentarios adicionales
                  </label>
                  <Textarea
                    id="comentarios"
                    rows={3}
                    className="bg-[#1e293b] border-blue-900/50 focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </motion.div>

                <motion.div variants={formItemVariants} whileHover="hover">
                  <Button
                    variant="default" 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  >
                    Confirmar Reserva
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReservationSection;
