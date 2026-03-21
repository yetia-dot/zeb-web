import Navbar from '../../components/layout/Navbar'
import WelcomeNote from '../../components/dashboard/WelcomeNote'
import TabbedArtworks from '../../components/dashboard/TabbedArtworks'
import Footer from '../../components/layout/Footer';

export default function Dashboard() {
  return (
    <main className="min-h-screen pt-20 bg-background text-foreground overflow-hidden font-sans">
      <Navbar dashboardMode />
      <WelcomeNote />
      <TabbedArtworks />
      <Footer />
    </main>
  );
}
