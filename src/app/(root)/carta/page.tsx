"use client";

import { useEffect, useState } from "react";
import { Category, Dish } from "../../../../typing";
import { getCategoriesWithDishes } from "@/lib/categoryapi";
import { motion, AnimatePresence } from "framer-motion";
import { getDish } from "@/lib/dishapi";
import CategoryButton from "@/components/root/carta/CategoryButton";
import DishCard from "@/components/root/carta/DishCard";
import DishModal from "@/components/root/carta/DishModal";
import SkeletonCategoriesDishes from "@/components/root/carta/SkeletonCategoriesDishes";

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set()
  );
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategoriesWithProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getCategoriesWithDishes();
        setCategories(data);
        // Expandir la primera categoría por defecto
        setExpandedCategories(new Set([data[0]?.id]));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoriesWithProducts();
  }, []);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleDishClick = async (dishId: number) => {
    try {
      const dishData = await getDish(dishId);
      if (dishData) {
        setSelectedDish(dishData);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error al cargar los detalles del plato:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <SkeletonCategoriesDishes />;
  }

  return (
    <main className="pt-20 pb-5 bg-gray-900 min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Encabezado con título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestra <span className="text-blue-400">Carta</span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Descubre nuestra selección de platos preparados con los mejores
            ingredientes y dedicación
          </p>
        </div>

        {categories.length === 0 && (
          <div className="text-center text-blue-200 bg-blue-900/20 p-8 rounded-xl max-w-md mx-auto">
            No hay elementos en el menú disponibles actualmente.
          </div>
        )}

        {/* Listado de categorías */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <CategoryButton
                category={category}
                expandedCategories={expandedCategories}
                toggleCategory={toggleCategory}
              />

              <AnimatePresence>
                {expandedCategories.has(category.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* Grid de platos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {category.dishes.map((dish) => (
                        <DishCard
                          key={dish.id}
                          dish={dish}
                          handleDishClick={handleDishClick}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalles del plato */}
      <AnimatePresence>
        {isModalOpen && selectedDish && (
          <DishModal selectedDish={selectedDish} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Page;
