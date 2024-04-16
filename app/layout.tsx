import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/src/components/theme-provider";
import {TailwindIndicator} from "@/src/components/tailwind-indicator";
import {ThemeToggle} from "@/src/components/theme-toggle";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Todo List",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Todo</title>
    </head>
    <body className={inter.className}>
    <main>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        <ThemeToggle/>
        <TailwindIndicator/>
      </ThemeProvider>
    </main>
    </body>
    </html>
  );
}
