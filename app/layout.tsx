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
  title: "Tyler Heating &amp; Air LLC",
  description: "Tyler Heating &amp; Air LLC: Mobile Automotive A/C Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="wrapper">
          <header>
            <h2>Tyler Heating &amp; Air LLC</h2>
            <h3>Mobile Automotive A/C Specialist</h3>
          </header>

          <nav>
            <a href="index.html">Home</a>
          </nav>

          <main>
            <div>
              <h3>This website is still a work-in-progress.</h3>
            </div>
          </main>

          <footer>
            <p><a href="#">Back to Top</a></p>
            <p>Copyright &copy; 2025 Tyler Heating &amp; Air LLC. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
