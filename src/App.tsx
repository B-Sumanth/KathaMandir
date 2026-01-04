import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MainLayout } from "@/components/layout/MainLayout";

import HomePage from "./pages/HomePage";
import RamayanaPage from "./pages/RamayanaPage";
import MahabharataPage from "./pages/MahabharataPage";
import StoryDetailPage from "./pages/StoryDetailPage";
import QuizzesPage from "./pages/QuizzesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ramayana" element={<RamayanaPage />} />
                <Route path="/mahabharata" element={<MahabharataPage />} />
                <Route path="/:epic/:storyId" element={<StoryDetailPage />} />
                <Route path="/quizzes" element={<QuizzesPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
