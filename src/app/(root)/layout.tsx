import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".//../globals.css";
import Footer from "@/components/root/Footer";
import Navbar from "@/components/root/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bar App",
  description: "Bar App",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#0a0f1a]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
