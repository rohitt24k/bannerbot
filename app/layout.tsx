import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={
          cn("antialiased", fontHeading.variable, fontBody.variable) +
          " flex flex-col min-h-screen"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className=" ml-auto px-8 py-8">
            <ModeToggle />
          </header>
          <main className=" flex-1 grid place-items-center">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
