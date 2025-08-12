import { GlassWater, IceCream } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface MenuDrinksDessertProps {
  headerVariants: Variants;
  containerVariants: Variants;
  sideSlideVariants: Variants;
}

const MenuDrinksDessert = ({
  headerVariants,
  containerVariants,
  sideSlideVariants,
}: MenuDrinksDessertProps) => {
  return (
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
  );
};

export default MenuDrinksDessert;
