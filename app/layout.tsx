// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Hani Boulos - Full Stack Developer",
  description: ".NET & React Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-black text-white m-0 p-0">
        {children}
      </body>
    </html>
  );
}
