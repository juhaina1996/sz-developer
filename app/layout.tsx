import "./globals.css";
import "./styles.css";

export const metadata = {
  title: "SZ Developers - Real Estate",
  description: "SZ Developers - Premium Real Estate Projects in Wayanad and Calicut",
  icons: {
    icon: "/sz-favicon.png",
    shortcut: "/sz-favicon.png",
    apple: "/sz-favicon.png",
  },
  openGraph: {
    title: "SZ Developers - Real Estate",
    description: "SZ Developers - Premium Real Estate Projects in Wayanad and Calicut",
    url: "https://www.szdevelopers.com/",
    siteName: "SZ Developers",
    images: [
      {
        url: "/sz-favicon.png",
        width: 1200,
        height: 630,
        alt: "SZ Developers - Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SZ Developers - Real Estate",
    description: "SZ Developers - Premium Real Estate Projects in Wayanad and Calicut",
    images: ["/sz-favicon.png"],
  },
  metadataBase: new URL("https://www.szdevelopers.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/sz-favicon.png" />
        <link rel="shortcut icon" href="/sz-favicon.png" />
        <link rel="apple-touch-icon" href="/sz-favicon.png" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.szdevelopers.com/" />
        <meta property="og:title" content="SZ Developers - Real Estate" />
        <meta property="og:description" content="SZ Developers - Premium Real Estate Projects in Wayanad and Calicut" />
        <meta property="og:image" content="https://www.szdevelopers.com/sz-favicon.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.szdevelopers.com/" />
        <meta property="twitter:title" content="SZ Developers - Real Estate" />
        <meta property="twitter:description" content="SZ Developers - Premium Real Estate Projects in Wayanad and Calicut" />
        <meta property="twitter:image" content="https://www.szdevelopers.com/sz-favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
