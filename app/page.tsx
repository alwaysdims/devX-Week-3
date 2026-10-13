import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EDEBDD] text-[#1C1C14]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        
        {/* Slot Bagian Bawah (Lutfi): Struktur, Kegiatan, Rekrutmen/Kontak */}
        <div id="struktur" />
        <div id="kegiatan" />
        <div id="kontak" />
      </main>
    </div>
  );
}
