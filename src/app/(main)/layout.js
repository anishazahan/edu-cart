import { MainNav } from "@/components/custom/main-nav";
import { SiteFooter } from "@/components/custom/site-footer";
import { SessionProvider } from "next-auth/react";

const navLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
];
const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
        <SessionProvider>
          <div className="container flex h-20 items-center justify-between py-6 ">
            <MainNav items={navLinks} />
          </div>
        </SessionProvider>
      </header>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
};
export default MainLayout;
