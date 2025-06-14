import type { Metadata } from "next";
import { Caveat, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: "Ian Hoang",
  description: "Full-stack developer and Computer Science student at UF",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${caveat.variable} ${permanentMarker.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
