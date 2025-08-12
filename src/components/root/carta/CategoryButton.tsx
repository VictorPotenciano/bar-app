import { Badge } from "@/components/ui/badge";
import { ChevronRight, MartiniIcon } from "lucide-react";
import { Category } from "../../../../typing";

interface CategoryButtonProps {
  category: Category;
  expandedCategories: Set<number>;
  toggleCategory: (categoryId: number) => void;
}

const CategoryButton = ({
  category,
  expandedCategories,
  toggleCategory,
}: CategoryButtonProps) => {
  return (
    <button
      onClick={() => toggleCategory(category.id)}
      className="flex items-center w-full group mb-6 cursor-pointer"
    >
      <div className="flex items-center">
        <Badge className="bg-blue-900/50 text-blue-100 hover:bg-blue-800 mr-4 group-hover:bg-blue-800 transition-colors">
          <MartiniIcon className="w-4 h-4 mr-2" />
          {category.name}
        </Badge>
        <span className="text-blue-300 text-sm">
          ({category.dishes.length} platos)
        </span>
      </div>
      <div className="flex-1 h-px bg-blue-900/50 mx-4 group-hover:bg-blue-700 transition-colors"></div>
      <ChevronRight
        className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
          expandedCategories.has(category.id) ? "rotate-90" : ""
        }`}
      />
    </button>
  );
};

export default CategoryButton;
