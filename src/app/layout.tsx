import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berryfuneralservices.vercel.app"),
  title: "Berry Funeral Services | Dignified Last Goodbye to Your Loved Ones",
  description:
    "Berry Funeral Services provides compassionate, professional, and dignified funeral services in Ebony Park, Midrand and nationwide across South Africa. Burial solutions, 24/7 body collection, funeral policies, repatriation, exhumation, and tombstones.",
  keywords: [
    "Berry Funeral Services",
    "Berry Mofulatsi",
    "Funeral Undertaker Midrand",
    "Ebony Park Funeral Services",
    "No Waiting Period Funeral Cover",
    "Standard Plan",
    "Secondary Plan",
    "Executive Plan",
    "Burial Society Group Scheme",
    "Cross-border Repatriation South Africa",
    "Body Collection 24/7",
    "Exhumation Services",
    "Tombstones Midrand",
  ],
  authors: [{ name: "Berry Mofulatsi - Berry Funeral Services" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/images/berry-crest.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Berry Funeral Services | Dignified Last Goodbye to Your Loved Ones",
    description:
      "Take control of the unexpected! Bury your loved with dignity and respect with Berry Funeral Services. We let you pay for your funeral in advance and at today's price.",
    type: "website",
    url: "https://www.berryfuneralservice.co.za",
    images: [
      {
        url: "/images/berryfuneralservices-logo.png",
        width: 1080,
        height: 407,
        alt: "Berry Funeral Services Official Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
