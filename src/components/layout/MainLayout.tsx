import { TopNavigation } from "./TopNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <main className="container mx-auto px-4 py-6 lg:py-8">
        {children}
      </main>
    </div>
  );
}
