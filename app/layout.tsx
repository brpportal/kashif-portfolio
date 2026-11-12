import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koclify — Websites That Grow Your Business | Kashif Noor",
  description: "Koclify — premium websites for small businesses in Pakistan. Honest pricing from Rs. 9,999, no hidden charges.",
  openGraph: {
    type: "website",
    siteName: "Koclify",
    title: "Koclify — Websites That Grow Your Business",
    description: "Premium websites for small businesses in Pakistan. Packages from Rs. 9,999.",
    url: "https://koclify.vercel.app/",
  },
  twitter: {
    card: "summary",
    title: "Koclify — Websites That Grow Your Business",
    description: "Premium websites for small businesses in Pakistan. Packages from Rs. 9,999.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
