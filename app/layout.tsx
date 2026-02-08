import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hani Boulos - Full Stack Developer",
  description: ".NET & React Developer Portfolio",
};

interface RootLayoutProps {
  children: ReactNode; // هنا عرفنا نوع children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white m-0 p-0">
        {children}
      </body>
    </html>
  );
}