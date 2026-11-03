import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/LanguageContext";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import OurWork from "./pages/OurWork.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import BlueEconomy from "./pages/BlueEconomy.tsx";
import Insights from "./pages/Insights.tsx";
import InsightDetail from "./pages/InsightDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/advisory" element={<Navigate to="/our-work" replace />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          {/* Blue Economy, Funds, and Media hidden completely */}
          <Route path="/blue-economy" element={<Navigate to="/" replace />} />
          <Route path="/funds" element={<Navigate to="/" replace />} />
          <Route path="/media" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </TooltipProvider>
</QueryClientProvider>
);

export default App;
