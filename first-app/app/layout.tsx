import Link from "next/link";
import type { ReactNode } from "react";
import './globals.css';
import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","700"],
  display: "swap",
})

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html
      lang="en"
     
    >
      <head>
        <title>
          Yogesh Next.js
          </title>
          
          </head>
            <body className={inter.className}>
          <header>
            <nav >
              <Link href="/"  style={{padding: "25px"}}>Home</Link>
              <Link href="/about"  style={{padding: "25px"}}>About</Link>
              <Link href="/contect"  style={{padding: "25px"}}>Contect</Link>
              <Link href="/dashboard"  style={{padding: "25px"}}>Dashboard</Link>
              <Link href="/blog"  style={{padding: "25px"}}>Blog</Link>
              <Link href="/products"  style={{padding: "25px"}}>Products</Link>
            </nav>
          </header>
    {children}
   
    </body>

    </html>
  );
}
