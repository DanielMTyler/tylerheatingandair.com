import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyler Heating & Air LLC | Mobile Automotive A/C and Heat",
  description: "Mobile automotive A/C and heat service by appointment only, Mon-Fri. Serving 14 counties across Central Georgia including Houston, Bibb, Dooly, Peach, Crisp, Tift, and Sumter. Diagnosis, recharge, leak repair, and component replacement.",
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

    {/* Wordmark */}
    <div>
    <h1 className="font-black text-xl md:text-2xl tracking-tight uppercase leading-none text-slate-900">
    Tyler <span className="text-orange-600">Heating</span> & <span className="text-blue-600">Air</span> LLC
    </h1>
    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
    Mobile Automotive A/C and Heat
    </p>
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
    <p className="text-sm">Mobile Automotive A/C and Heat</p>
    <p className="text-sm">By Appointment Only &middot; Mon&ndash;Fri, 8am&ndash;5pm</p>
    <p className="text-sm">Serving Central Georgia</p>
    <p className="text-sm font-bold mt-2 text-white">Licensed &amp; Insured</p>
    </div>
    <div>
    <h3 className="text-white font-bold mb-4 uppercase">Service Area</h3>
    <p className="text-sm">14 counties across Central Georgia,</p>
    <p className="text-sm">from Macon down to Tifton.</p>
    <p className="text-sm mt-2">Travel fee by county, once per visit.</p>
    <p className="text-sm mt-2">Drop-off or pickup available for larger jobs.</p>
    </div>
    <div>
    <h3 className="text-white font-bold mb-4 uppercase">Contact</h3>
    <p className="text-sm">
    Text or Call:{" "}
    <a href="tel:2296992496" className="hover:text-white transition">229-699-2496</a>
    </p>
    <p className="text-sm">
    <a href="mailto:tylerheatingandairga@gmail.com" className="hover:text-white transition">
    tylerheatingandairga@gmail.com
    </a>
    </p>
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
