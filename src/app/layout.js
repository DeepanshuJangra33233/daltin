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

export const metadata = {
  title: "Daltin",
  description:
    "At Daltin, we connect students with universities worldwide through our innovative all-in-one platform, streamlining the student recruiting process. We empower students with educational opportunities that enhance their quality of life and promote global betterment. By bridging international education providers and recruiting partners, we provide students access to diverse study options from anywhere in the world, transforming lives through education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
