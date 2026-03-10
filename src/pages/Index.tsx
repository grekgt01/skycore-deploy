import { LanguageProvider } from "@/contexts/LanguageContext";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import TerminalSection from "@/components/TerminalSection";
import PartnerSection from "@/components/PartnerSection";
import KnowledgeHub from "@/components/KnowledgeHub";
import SuccessStories from "@/components/SuccessStories";
import ComparisonTable from "@/components/ComparisonTable";
import SiteFooter from "@/components/SiteFooter";
import FloatingBadge from "@/components/FloatingBadge";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <HeroSection />
          <TrustBadges />
          <TerminalSection />
          <PartnerSection />
          <KnowledgeHub />
          <SuccessStories />
          <ComparisonTable />
        </main>
        <SiteFooter />
        <FloatingBadge />
      </div>
    </LanguageProvider>
  );
};

export default Index;
