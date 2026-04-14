import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper — Keep Your Friendships Alive",
  description: "Keep Your Friendships Alive",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
       data-theme="light"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <header>
           <Navbar />
         </header>

        <main className="bg-base-200 ">
          { children }
         </main>

         <footer className="bg-[#244d3fFF] text-white">
          <Footer />
          </footer>        
        </body>
    </html>
  );
}
