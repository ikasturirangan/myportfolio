import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/root/header";
import { Footer } from "@/components/root/footer";
import { ThemeProvider } from "@/components/root/theme-provider";
import CookieConsent from "@/components/root/cookie-consent";
import DevelopmentNotice from "@/components/root/under-development";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ikasturirangan",
  description: "Founder | Mechanical Engineer | Product Consultant ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        <main className="flex-grow pt-16 pb-16">
          <DevelopmentNotice/>
        <CookieConsent/>
          {children}
        </main>
        <Footer />
        </ThemeProvider>
      </body>
      
    </html>
  );
}
