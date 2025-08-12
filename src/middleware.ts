import { NextRequest, NextResponse } from "next/server";

// Configura el middleware
export async function middleware(request: NextRequest) {
  // Crea una respuesta con los encabezados CORS
  const response = NextResponse.next();

  // Configura los encabezados CORS
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://bar-app-six.vercel.app"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Allow-Credentials", "true");

  return response;
}

// Aplica el middleware a las rutas de la API
export const config = {
  matcher: "/api/:path*",
};
