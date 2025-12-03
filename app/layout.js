import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import BookingBar from "@/components/layout/BookingBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Imperial Garden — Premium Banquet Hall Patna | Weddings & Events",
  description: "Patna's premier banquet hall for weddings, receptions, and grand celebrations. Elegant venues, exquisite catering, and flawless service near Kurji Holy Family Hospital.",
  keywords: "banquet hall Patna, wedding venue Patna, reception hall, event venue, Imperial Garden, wedding hall Bihar",
  authors: [{ name: "Imperial Garden" }],
  openGraph: {
    title: "Imperial Garden — Premium Banquet Hall Patna",
    description: "Elegant venues for weddings, receptions, and grand celebrations. Book your dream event today.",
    type: "website",
    locale: "en_IN",
    siteName: "Imperial Garden",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperial Garden — Premium Banquet Hall Patna",
    description: "Elegant venues for weddings, receptions, and grand celebrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans pb-20 md:pb-0`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <BookingBar />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              "name": "Imperial Garden",
              "description": "Premium banquet hall for weddings, receptions, and grand celebrations",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Kurji Holy Family Hospital",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "addressCountry": "IN",
              },
              "telephone": "+91 98765 43210",
              "priceRange": "₹₹₹",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioned Halls" },
                { "@type": "LocationFeatureSpecification", "name": "Garden Terrace" },
                { "@type": "LocationFeatureSpecification", "name": "Bridal Suite" },
                { "@type": "LocationFeatureSpecification", "name": "In-house Catering" },
                { "@type": "LocationFeatureSpecification", "name": "Valet Parking" },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
