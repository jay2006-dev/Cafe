import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedSection from "@/components/FeaturedSection";
import DessertSection from "@/components/DessertSection";
import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-coffee-50 overflow-x-hidden selection:bg-coffee-200 selection:text-coffee-950">
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturedSection />
      <Banner />
      <DessertSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
