import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login";
import Contracts from "./pages/Contracts";
import Vehicles from "./pages/Vehicles";
import LogSheets from "./pages/LogSheets";
import Drivers from "./pages/Drivers";
import Invoices from "./pages/Invoices";
import Reports from "./pages/Reports";
import TollParking from "./pages/TollParking";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/logsheets" element={<LogSheets />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/toll-parking" element={<TollParking />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
