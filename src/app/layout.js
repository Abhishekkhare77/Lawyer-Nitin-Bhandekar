import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lawyer Nitin Bhandekar",
  description: "The right lawyer makes all the difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className}>
        <div>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
