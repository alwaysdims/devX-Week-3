import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Organization from "@/components/Organization";
import Activities from "@/components/Activities";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-canvas text-on-surface">
      {/* 1. Header & Navigation Bar (Sticky Glassmorphism) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (Dimas) */}
        <Hero />

        {/* 3. Tentang Kami & Visi Misi (Dimas) */}
        <About />

        {/* 4. Struktur Organisasi & 4 Divisi (Lutfi) */}
        <Organization />

        {/* 5. Galeri Kegiatan & Program Kerja (Lutfi) */}
        <Activities />

        {/* 6. Recruitment Hub & Kontak (Lutfi) */}
        <Recruitment />
      </main>

      {/* 7. Footer (Lutfi) */}
      <Footer />
    </div>
  );
}
