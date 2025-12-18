import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

export const metadata: Metadata = {
  title: "Beisser Lumber | Building Materials for Iowa Builders",
  description:
    "Family- and employee-owned building materials supplier serving Iowa builders since 1953.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1 py-8">
          <div className="main-container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
