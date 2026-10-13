import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-20">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Main Banner Container with Floating Polaroids */}
        <div className="relative w-full mb-10 md:mb-14 pb-10 md:pb-12 overflow-visible">
          {/* Big Photo Banner */}
          <div className="relative w-full rounded-2xl bg-cta-banner border border-[#323123] shadow-xl group overflow-hidden">
            <div className="relative w-full aspect-video md:aspect-21/10 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6eIBxiIfPB-oWnN5cVaeD0_X0CYIEdioC8I_HcFJLcYcmpjHY9N4Ryyk66TTy-md9bDdf2hF6XS6sFiDt0Ghl8mQ1BmCc9MdD_8aFnrVMArsH5OhY68MrYnLMUcMntl0LZZhK5Jn24u_p9FkwXGooGC0FRrOMMdzyJ4xeYZh0hrtcvhSxBgDMZz-RloSkFCDnI3U6EiEy1nzxpSOB_1CV4huq-P1BBtulvRc6tQS6OLi7suEJXcYM_CM_uvjvlzpEJs"
                alt="Foto Bersama Komunitas ScreenShot UNNES"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Slogan Overlay */}
            <div className="absolute bottom-6 left-5 md:left-8 z-20 max-w-2xl">
              <h3 className="text-white font-heading text-2xl sm:text-3xl md:text-5xl tracking-tight uppercase font-bold leading-none [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
                Write, Camera, Action, Semangat Berkarya!!
              </h3>
            </div>
          </div>

          {/* Floating Polaroids Overlapping and Dropped Down Outside Container */}
          <div className="hidden md:flex items-center absolute -bottom-6 right-4 lg:right-12 z-30 gap-5 pointer-events-none">
            {/* Polaroid 1 */}
            <div className="transform -rotate-6 hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 pointer-events-auto shadow-2xl">
              <div className="p-2 bg-surface-container-low rounded-xl border border-white/40 shadow-xl w-44">
                <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-cta-banner mb-1.5 shadow-inner">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbxV0QPvtzk5-S9NEIo22q-69_MmUl5VSGyN3X9iRng5jXsEDOFWELpEW0ch6AZjdljU8QarwuiltGPHA69BvAfASE5c69lUe8sMNZixjrMGGcCD3-0b9xEr3NNk_vD2Cj6rhE4m3IhRaNRxEEhvf7dZISMF1x5vuLz7c-PVM_0-OXOYhhbWY1Yi8Uw9CsuEP1F-AuH59ZoLFoh_onGpBV0c7AYPGfLh_Qgm_JmcQVHPn-peaJCHSUNSvVpKisd92Iv_0"
                    alt="Sata Outdoor Photo Walk"
                    fill
                    sizes="176px"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Polaroid 2 */}
            <div className="transform rotate-6 hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 pointer-events-auto shadow-2xl">
              <div className="p-2 bg-surface-container-low rounded-xl border border-white/40 shadow-xl w-48">
                <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-cta-banner mb-1.5 shadow-inner">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvFb82AFiJpuwnd74KDXTX_xFMbUCNbdsMcR1KjytCXyN1agRBWtPqLx3s6rgmG4Grqnn19OhdzVAb3h4fct34i1CS6KsGZ6jd7mOODBg1jy9sD54abLxOTzNrF9U2_8LVpoSvNLzH9YEi49_O25g9jf2mSVQoyztgalZs9mgU32hx5sg8AyA9nzmoYKS48l_pDRxD0rkHMkkpeoaHBoYoCQZWXS-OFsegSFxhglHr_SX83STDNeekBYUsU7D2LS0roYA"
                    alt="ScreenShot Camp Outdoor"
                    fill
                    sizes="192px"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          <div className="lg:col-span-7 flex flex-col">
            <p className="font-body text-base sm:text-lg text-on-surface leading-relaxed">
              Di <strong className="text-primary font-bold">ScreenShot HIMA ILKOM UNNES</strong>, kami
              lebih dari sekadar komunitas multimedia dan fotografi, kami adalah ruang bertumbuhnya para{" "}
              <span className="font-bold text-primary">inovator visual</span>,{" "}
              <span className="font-bold text-primary">pencerita</span>, dan{" "}
              <span className="font-bold text-primary">kreator lintas divisi</span>. Menyalurkan
              kekreatifan, mengasah kepekaan rasa estetika, dan membangun karya berdampak bersama.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-surface-card border border-border-subtle shadow-sm">
            <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
              ScreenShot dibentuk sebagai wadah mahasiswa Ilmu Komputer yang memiliki gairah di bidang
              visual dan kepenulisan, merajut karya nyata lewat eksplorasi kamera, kurasi berkala, pameran
              foto tahunan, dan produksi konten publikasi yang profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
