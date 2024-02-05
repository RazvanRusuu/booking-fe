import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Toast from "./components/Toast";
import { useAppContext } from "./context/AppContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useAppContext();
  return (
    <div className="flex flex-col min-h-screen">
      {toast && <Toast variant={toast.type} {...toast} />}
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
