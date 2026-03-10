import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import TerminalSection from "@/components/TerminalSection";
import PartnerSection from "@/components/PartnerSection";
import KnowledgeHub from "@/components/KnowledgeHub";
import ComparisonTable from "@/components/ComparisonTable";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBadges />
        <TerminalSection />
        <PartnerSection />
        <KnowledgeHub />
        <ComparisonTable />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
