import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

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
        <App>{children}</App>
      </body>
    </html>
  );
}
