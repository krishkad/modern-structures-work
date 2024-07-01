import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Structures",
  description: "Modern Structure has proposed a residential housing development project to be constructed in Kampala, Uganda with a total of 164 units. This proposed project will be built on a plot size of 2 acres with a total constructed area of 8500 square metres. Modern Structure will be responsible for the design and consultation parts of this project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, 'scroll-smooth')}>
        <main className="relative w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
