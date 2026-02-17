import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingCallButton />
  </div>
);

export default Layout;
