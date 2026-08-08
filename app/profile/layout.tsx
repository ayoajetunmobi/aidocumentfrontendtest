import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My profile page',
  description: 'AI powerd',
  icons: {
    icon: `data:image/svg+xml,<svg xmlns="http://w3.org" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍇</text></svg>`, // Points to /public/logo.png
    // Optional additional formats:
    // apple: '/apple-touch-icon.png', 
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${roboto.className}`}>
        {children}
    </body>
  );
}
