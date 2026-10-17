"use client";

import { useState } from "react";

export default function RecruitmentAction() {
  const [showApplyModal, setShowApplyModal] = useState(false);

  return (
    <>
      {/* Primary Action Button */}
      <button
        type="button"
        onClick={() => setShowApplyModal(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-heading text-sm font-bold hover:bg-primary-hover hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-primary/25 cursor-pointer"
      >
        <span>Daftar Calon Anggota Sekarang</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      {/* Registration Closed Modal */}
      {showApplyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowApplyModal(false)}
        >
          <div
            className="relative w-full max-w-xl bg-[#F8FAFC] rounded-3xl border border-slate-200/80 shadow-2xl p-8 sm:p-12 overflow-hidden animate-in zoom-in-95 duration-200 text-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 15%, rgba(147, 0, 0, 0.08) 0%, transparent 45%), radial-gradient(circle at 95% 55%, rgba(147, 0, 0, 0.12) 0%, transparent 50%)",
            }}
          >
            <button
              type="button"
              onClick={() => setShowApplyModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight mb-4 leading-tight">
              Pendaftaran telah ditutup!
            </h3>

            <p className="font-body text-sm sm:text-base text-[#334155] leading-relaxed max-w-lg mx-auto">
              Ikuti akun Instagram kami{" "}
              <a
                href="https://www.instagram.com/screenshotilkom"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary hover:underline"
              >
                @screenshotilkom
              </a>{" "}
              agar kamu tidak ketinggalan informasi mengenai gelombang pendaftaran selanjutnya dan berbagai acara menarik lainnya.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
