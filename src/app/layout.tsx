import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { Inter, Mansalva, Manrope, Roboto, Poppins } from "next/font/google";

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
        className={`${mansalva.variable} ${manrope.variable} ${inter.variable} ${roboto.variable} ${poppins.variable} flex flex-col my-0 mx-auto max-w-[144rem] font-inter min-h-screen antialiased`}
      >
        <App>
          <p>Header</p>
          {children}
          <p>Footer</p>
        </App>
      </body>
    </html>
  );
}
