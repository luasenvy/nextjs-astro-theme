import "@/styles/tailwind.css";

import { Urbanist } from "next/font/google";

import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";

export const metadata = {
  title: "Astrolus",
  description: "Astrolus Template",
};

const urbanist = Urbanist({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-gray-900 ${urbanist.className}`}>
        <AppHeader />
        <main className="mb-40 space-y-40">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
