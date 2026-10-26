import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Topbar from "./Component/Topbar";
import SetiaFloatingContactButtons from "./Component/SetiaFloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:"Guru Nanak Tours & Travels",
  description: "Guru Nanak Tours & Travels provides reliable transportation services in Punjab for government departments, healthcare institutions and corporate organizations. Trusted since 2005 for safety, punctuality and professional service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar/>
        <Navbar/>
        {children}
           <SetiaFloatingContactButtons/>
        <Footer/>
      </body>
    </html>
  );
}
