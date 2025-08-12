import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categoriesWithProducts = await prisma.category.findMany({
      include: {
        dishes: true,
      },
    });
    if (!categoriesWithProducts)
      return NextResponse.json(
        { message: "Categorias con platos no encontrados" },
        { status: 404 }
      );

    const result = categoriesWithProducts.map((category) => ({
      id: category.id,
      name: category.name,
      dishes: category.dishes.map((dish) => ({
        id: dish.id,
        name: dish.name,
        description: dish.description,
        price: dish.price,
        imageUrl: dish.imageUrl,
        ingredients: dish.ingredients,
      })),
    }));
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
