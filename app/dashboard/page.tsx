import Navbar from '../../components/layout/Navbar'
import ProfileHeader from '../../components/dashboard/ProfileHeader'
import NFTsTab from '../../components/dashboard/NFTsTab'



import Footer from '../../components/layout/Footer';

export default function Dashboard() {
  return (
    <main className="min-h-screen pt-20 bg-background text-foreground overflow-hidden font-sans relative">
      <Navbar dashboardMode />
      <ProfileHeader />
      <div className="mx-auto px-6 pb-1">
        <NFTsTab />
      </div>

      <Footer />
    </main>
  );
}

