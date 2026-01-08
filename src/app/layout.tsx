import type { Metadata } from "next";
import "./globals.css";
import ModernNavigation from "@/components/sections/ModernNavigation";
import ModernFooter from "@/components/sections/ModernFooter";

export const metadata: Metadata = {
  title: "LaCrosse Wagon Hitch | Horse-Drawn Carriage Rides in Buckley, WA",
  description: "Experience the magic of horse-drawn travel with LaCrosse Wagon Hitch. Providing professional carriage and wagon rides for weddings, events, and special occasions in Buckley, Washington.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ModernNavigation />
        {children}
        <ModernFooter />
      </body>
    </html>
  );
}
