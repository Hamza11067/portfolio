import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import WhatsAppButton from "@/components/WhatsAppBtn";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Hamza Khalid",
  description: "FullStack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${JetBrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col font-primary no-scrollbar">
        <Header />
        <StairTransition />
        <PageTransition>
          <div className="container mx-auto px-6 md:px-10 xl:px-0">
            {children}
            <WhatsAppButton />
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
