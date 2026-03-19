import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import MarketplacePreview from '@/components/MarketplacePreview';
import Footer from '@/components/Footer';

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
