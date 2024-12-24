import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/components/layout-ui/Header";
import { Inter, Mansalva, Manrope, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/layout-ui/Footer";
import { CustomToast } from "@/components/ui/CustomToast";

export const metadata: Metadata = {
  title: "Credlist",
  description: "classified meta",
};
const mansalva = Mansalva({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-mansalva",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "400",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "400",
});
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
});
const App = dynamic(() => import("./App"), { ssr: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mansalva.variable} ${manrope.variable} ${inter.variable} ${roboto.variable} ${poppins.variable} 
           flex-col bg-primary-1 my-0 mx-auto max-w-[144rem]  min-h-screen antialiased`}
      >
        <App>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <CustomToast />
        </App>
      </body>
    </html>
  );
}
