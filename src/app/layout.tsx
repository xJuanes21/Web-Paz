import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  weight: ['300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
});



export const metadata: Metadata = {
  title: "Colombo Farmaceutica SAS",
  description: "Descubre nuestra línea de productos farmacéuticos desarrollados con los más altos estándares de calidad y basados en la última investigación científica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
