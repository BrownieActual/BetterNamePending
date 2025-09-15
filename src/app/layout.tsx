import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/public/globals.css";
import NavBar from "@/src/components/NavBar";
import PageContent from "@/src/components/base/PageContent";
import Footer from "@/src/components/base/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BetterNamePending",
  description: "Because naming is the hardest part in coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO: Create Theme hook to switch light and dark mode
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased h-screen flex flex-col`}
      >
        <NavBar />
        <PageContent>{children}</PageContent>
        <Footer />
      </body>
    </html>
  );
}
