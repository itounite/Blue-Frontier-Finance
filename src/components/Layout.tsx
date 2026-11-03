import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  navVariant?: "light" | "dark";
}

const Layout = ({ children, navVariant = "dark" }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-clay text-navy">
      <Navbar variant={navVariant} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
