import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/components/layout-ui/Header";
import Footer from "@/components/layout-ui/Footer";

export const metadata: Metadata = {
  title: "Credlist",
  description: "classified meta",
};

const App = dynamic(() => import("./App"), { ssr: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <App>
          <Header />
          <main className="mt-16">{children}</main>
          <Footer />
        </App>
      </body>
    </html>
  );
}
