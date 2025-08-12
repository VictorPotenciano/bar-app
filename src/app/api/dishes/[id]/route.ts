import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const dish = await prisma.dish.findUnique({
      where: {
        id: Number(id),
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
