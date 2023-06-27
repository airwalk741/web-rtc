import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
      <Script
        src='https://kit.fontawesome.com/bd7e7f0690.js'
        crossOrigin='anonymous'
      ></Script>
    </html>
  );
}
