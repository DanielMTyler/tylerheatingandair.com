import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyler Heating & Air LLC | Automotive A/C & Electrical",
  description: "Mobile & Shop Service in Unadilla, GA. Specializing in Automotive A/C, Heat, and Electrical Diagnostics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
    {/* Navigation / Header */}
    <header className="border-b bg-white sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

    {/* Logo and Branding Group */}
    <div className="flex items-center gap-4">
    <Image
    src="/logo.png"
    alt="Tyler Heating & Air LLC Logo"
    width={100}
    height={100}
    className="object-contain"
    priority
    />
    <div className="hidden sm:block">
    <h1 className="font-black text-xl tracking-tight uppercase leading-none text-slate-900">
    Tyler <span className="text-orange-600">Heating</span> & <span className="text-blue-600">Air</span> LLC
    </h1>
    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
    Automotive A/C & Electrical
    </p>
    </div>
    </div>

    {/* Contact Actions */}
    <nav className="flex items-center gap-6">
    <a href="tel:2296992496" className="font-bold text-slate-900 hover:text-orange-600 transition">
    229-699-2496
    </a>
    <a
    href="sms:2296992496"
    className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-700 transition"
    >
    Book Appointment
    </a>
    </nav>

    </div>
    </header>

    {/* Content from page.tsx */}
    {children}

    {/* Shared Footer */}
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
    <div>
    <h2 className="text-white font-bold mb-4 uppercase">Tyler Heating & Air LLC</h2>
    <p className="text-sm">Mobile & Shop Service by Appointment Only</p>
    <p className="text-sm font-bold mt-2 text-white">Licensed & Insured</p>
    </div>
    <div>
    <h3 className="text-white font-bold mb-4 uppercase">Location</h3>
    <p className="text-sm">348 Lindsey Rd</p>
    <p className="text-sm">Unadilla, GA 31091</p>
    </div>
    <div>
    <h3 className="text-white font-bold mb-4 uppercase">Contact</h3>
    <p className="text-sm">Text or Call: 229-699-2496</p>
    <p className="text-sm">tylerheatingandair.com</p>
    </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
    <p>© {new Date().getFullYear()} Tyler Heating & Air LLC. All rights reserved.</p>
    </div>
    </footer>
    </body>
    </html>
  );
}
