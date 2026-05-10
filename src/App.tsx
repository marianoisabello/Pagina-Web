import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import SiteLayout from "@/components/layout/SiteLayout";
import Home from "./pages/Home";
import ProductsIndex from "./pages/Productos";
import AIData from "./pages/products/AIData";
import GenerativeAI from "./pages/products/GenerativeAI";
import Automation from "./pages/products/Automation";
import Agents from "./pages/products/Agents";
import DecisionCopilot from "./pages/products/DecisionCopilot";
import SocialAI from "./pages/products/SocialAI";
import AutonomousAgents from "./pages/products/AutonomousAgents";
import ProcessIndex from "./pages/Proceso";
import Entendimiento from "./pages/process/Entendimiento";
import Diseno from "./pages/process/Diseno";
import Construccion from "./pages/process/Construccion";
import Escala from "./pages/process/Escala";
import CasosDeUso from "./pages/CasosDeUso";
import Pricing from "./pages/Pricing";
import ImpactoSocial from "./pages/ImpactoSocial";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/productos" element={<ProductsIndex />} />
            <Route path="/productos/ai-data" element={<AIData />} />
            <Route path="/productos/generative-ai" element={<GenerativeAI />} />
            <Route path="/productos/automation" element={<Automation />} />
            <Route path="/productos/agents" element={<Agents />} />
            <Route path="/productos/decision-copilot" element={<DecisionCopilot />} />
            <Route path="/productos/social-ai" element={<SocialAI />} />
            <Route path="/productos/autonomous-agents" element={<AutonomousAgents />} />

            <Route path="/proceso" element={<ProcessIndex />} />
            <Route path="/proceso/entendimiento" element={<Entendimiento />} />
            <Route path="/proceso/diseno" element={<Diseno />} />
            <Route path="/proceso/construccion" element={<Construccion />} />
            <Route path="/proceso/escala" element={<Escala />} />

            <Route path="/casos-de-uso" element={<CasosDeUso />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/impacto-social" element={<ImpactoSocial />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Legacy redirect */}
            <Route path="/index" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
