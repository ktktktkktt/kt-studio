import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import Corporate from "./pages/services/Corporate";
import Ecommerce from "./pages/services/Ecommerce";
import Landing from "./pages/services/Landing";
import WebApp from "./pages/services/WebApp";
import Mobile from "./pages/services/Mobile";
import Support from "./pages/services/Support";
import Consultation from "./pages/services/Consultation";
import Development from "./pages/services/Development";
import Training from "./pages/services/Training";
import TechStore from "./pages/portfolio/TechStore";
import DevCorp from "./pages/portfolio/DevCorp";
import FinTech from "./pages/portfolio/FinTech";
import StyleShop from "./pages/portfolio/StyleShop";
import TaskFlow from "./pages/portfolio/TaskFlow";
import MedCenter from "./pages/portfolio/MedCenter";
import CodeCourse from "./pages/portfolio/CodeCourse";
import FoodExpress from "./pages/portfolio/FoodExpress";
import HomeStore from "./pages/portfolio/HomeStore";
import SecureBank from "./pages/portfolio/SecureBank";
import EduPlatform from "./pages/portfolio/EduPlatform";
import FitTracker from "./pages/portfolio/FitTracker";
import ModernWebsite2024 from "./pages/blog/ModernWebsite2024";
import UxUiDesignSales from "./pages/blog/UxUiDesignSales";
import SeoEcommerceGuide from "./pages/blog/SeoEcommerceGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
                <Route path="/services/consultation" element={<Consultation />} />
                <Route path="/services/development" element={<Development />} />
                <Route path="/services/training" element={<Training />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/techstore" element={<TechStore />} />
                <Route path="/portfolio/devcorp" element={<DevCorp />} />
                <Route path="/portfolio/fintech" element={<FinTech />} />
                <Route path="/portfolio/styleshop" element={<StyleShop />} />
                <Route path="/portfolio/taskflow" element={<TaskFlow />} />
                <Route path="/portfolio/medcenter" element={<MedCenter />} />
                <Route path="/portfolio/codecourse" element={<CodeCourse />} />
                <Route path="/portfolio/foodexpress" element={<FoodExpress />} />
                <Route path="/portfolio/homestore" element={<HomeStore />} />
                <Route path="/portfolio/securebank" element={<SecureBank />} />
                <Route path="/portfolio/eduplatform" element={<EduPlatform />} />
                <Route path="/portfolio/fittracker" element={<FitTracker />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/modern-website-2024" element={<ModernWebsite2024 />} />
                <Route path="/blog/ux-ui-design-sales" element={<UxUiDesignSales />} />
                <Route path="/blog/seo-ecommerce-guide" element={<SeoEcommerceGuide />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
