import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAMEO Management Consultancies | Dubai Business Advisory",
  description:
    "Dubai-based management consultancy helping businesses improve performance, scale operations, and make confident strategic decisions. Located in Business Bay.",
  keywords: [
    "Management Consultancy Dubai",
    "Business Advisory UAE",
    "Business Setup Dubai",
    "Corporate Structuring UAE",
    "Financial Advisory Dubai",
    "CAMEO Management",
    "Business Bay Dubai",
    "FinXpert Solutions",
    "UAE Business Consultant",
  ],
  openGraph: {
    title: "CAMEO Management Consultancies | Dubai Business Advisory",
    description:
      "Transforming Businesses. Driving Growth. Delivering Results. Dubai-based management consultancy in Business Bay, UAE.",
    type: "website",
    locale: "en_AE",
    siteName: "CAMEO Management Consultancies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased font-body bg-neutral text-text-main`}
      >
        {children}
      </body>
    </html>
  );
}
