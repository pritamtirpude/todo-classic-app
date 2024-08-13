import React from "react";
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Todo App | Organize Your Tasks Efficiently",
  description:
    "A user-friendly Todo application to help you manage and track your daily tasks with ease. Boost your productivity with a simple yet powerful task management tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
