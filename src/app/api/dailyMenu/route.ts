import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const dailyMenu = await prisma.dailyMenu.findFirst({
      orderBy: {
        date: "desc",
      },
      include: {
        dishes: {
          include: {
            dish: true,
          },
        },
      },
    });

    if (!dailyMenu || dailyMenu.dishes.length === 0) {
      console.log("No se encontró ningún menú diario.");
      return null;
    }

    const formattedDate = dailyMenu.date.toISOString().split("T")[0];

    const result = {
      id: dailyMenu.id,
      name: dailyMenu.name,
      date: formattedDate,
      description: dailyMenu.description,
      price: dailyMenu.price,
      dishes: dailyMenu.dishes.map((dailyMenuDish) => ({
        id: dailyMenuDish.dish.id,
        name: dailyMenuDish.dish.name,
        description: dailyMenuDish.dish.description,
        imageUrl: dailyMenuDish.dish.imageUrl,
        ingredients: dailyMenuDish.dish.ingredients,
      })),
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
