import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const dishId = Number(params.id);
    const dish = await prisma.dish.findUnique({
      where: {
        id: dishId,
      },
      include: {
        category: true,
      },
    });
    if (!dish)
      return NextResponse.json(
        { message: "Plato no encontrado" },
        { status: 404 }
      );
    const result = {
      id: dish.id,
      name: dish.name,
      description: dish.description,
      category: dish.category.name,
      price: dish.price,
      imageUrl: dish.imageUrl,
      ingredients: dish.ingredients,
    };
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
