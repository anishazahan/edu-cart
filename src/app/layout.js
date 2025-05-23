import { Inter } from "next/font/google";
import { dbConnect } from "../BackendService/Service/mongo";
import { Toaster } from "../components/ui/sonner";
import { cn } from "../lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "Edu-Cart  Wold's Best Learning Platform",
  description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({ children }) {
  const connection = await dbConnect();
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
