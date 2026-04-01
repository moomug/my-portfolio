import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Elmaghrabi | Portfolio",
  description: "Senior Full-Stack .NET Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA] text-gray-900 md:flex`}>
        <Sidebar />
        
       
        <main className="md:ml-72 flex-1 min-h-screen pt-20 md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}