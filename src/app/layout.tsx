import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const productSans = localFont({
  src: [
    {
      path: '../../public/fonts/product-sans/Product Sans Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/product-sans/Product Sans Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/product-sans/Product Sans Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/product-sans/Product Sans Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})
export const metadata: Metadata = {
  title: "Eyüp Şengöz - Portfolio",
  description: "Eyüp Şengöz'ün kişisel portfolyo sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${productSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}