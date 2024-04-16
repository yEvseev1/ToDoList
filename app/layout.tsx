import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {TailwindIndicator} from "@/components/tailwind-indicator";
import {ThemeToggle} from "@/components/theme-toggle";
import {ListTodo, ListTodoIcon} from "lucide-react";

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
        {/*header*/}
        <div
          className='h-[120px] md:h-[200px] bg-header text-5xl font-extrabold flex
          flex-col items-center justify-center gap-6'>
          <div className='flex items-center'>
            <ListTodo className='scale-150 mr-2 text-blue-400'/>
            <div className='text-blue-400'>
              to
            </div>
            <div className='text-violet-600'>
              do
            </div>
          </div>
          <ThemeToggle/>
        </div>
        {/*main content*/}
        {children}
        
        <TailwindIndicator/>
      </ThemeProvider>
    </main>
    </body>
    </html>
  );
}
