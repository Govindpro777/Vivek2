import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import LandscapeDesign from "./pages/services/LandscapeDesign";
import HardscapePavers from "./pages/services/HardscapePavers";
import TurfInstallation from "./pages/services/TurfInstallation";
import LandscapeLighting from "./pages/services/LandscapeLighting";
import PatioCovers from "./pages/services/PatioCovers";
import TrellisesArbors from "./pages/services/TrellisesArbors";
import StepsWalkways from "./pages/services/StepsWalkways";
import OutdoorKitchens from "./pages/services/OutdoorKitchens";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/landscape-design" element={<LandscapeDesign />} />
            <Route path="/services/hardscape-pavers" element={<HardscapePavers />} />
            <Route path="/services/turf-installation" element={<TurfInstallation />} />
            <Route path="/services/landscape-lighting" element={<LandscapeLighting />} />
            <Route path="/services/patio-covers" element={<PatioCovers />} />
            <Route path="/services/trellises-arbors" element={<TrellisesArbors />} />
            <Route path="/services/steps-walkways" element={<StepsWalkways />} />
            <Route path="/services/outdoor-kitchens" element={<OutdoorKitchens />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
