
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Corporate from "./pages/services/Corporate";
import Ecommerce from "./pages/services/Ecommerce";
import Landing from "./pages/services/Landing";
import WebApp from "./pages/services/WebApp";
import Mobile from "./pages/services/Mobile";
import Support from "./pages/services/Support";
import TechStore from "./pages/portfolio/TechStore";
import ModernWebsite2024 from "./pages/blog/ModernWebsite2024";
import UxUiDesignSales from "./pages/blog/UxUiDesignSales";
import SeoEcommerceGuide from "./pages/blog/SeoEcommerceGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/corporate" element={<Corporate />} />
              <Route path="/services/ecommerce" element={<Ecommerce />} />
              <Route path="/services/landing" element={<Landing />} />
              <Route path="/services/webapp" element={<WebApp />} />
              <Route path="/services/mobile" element={<Mobile />} />
              <Route path="/services/support" element={<Support />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/techstore" element={<TechStore />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/modern-website-2024" element={<ModernWebsite2024 />} />
              <Route path="/blog/ux-ui-design-sales" element={<UxUiDesignSales />} />
              <Route path="/blog/seo-ecommerce-guide" element={<SeoEcommerceGuide />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
