import Navbar from '../../components/ui/Navbar';
import Hero from '../../components/landing/Hero';
import HowItWorks from '../../components/landing/HowItWorks';
import MarketplacePreview from '../../components/landing/MarketplacePreview';
import Footer from '../../components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MarketplacePreview />
      <Footer />
    </main>
  );
}
