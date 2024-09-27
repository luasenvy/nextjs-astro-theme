import "@/styles/global.css";

import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";

export const metadata = {
  title: "Astrolus",
  description: "Astrolus Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-gray-900`}>
        <AppHeader />
        <main className="space-y-40 mb-40">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
