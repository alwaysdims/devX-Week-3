"use client";

import { useState } from "react";
import Image from "next/image";
import { ActivityItem } from "@/types";

interface Category {
  id: string;
  label: string;
}

interface ActivitiesGalleryProps {
  activities: ActivityItem[];
  categories: Category[];
}

export default function ActivitiesGallery({ activities, categories }: ActivitiesGalleryProps) {
  const [filter, setFilter] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((act) => act.category === filter);

  return (
    <>
      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full font-heading text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
              filter === cat.id
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-card border border-border-subtle text-on-surface-variant hover:border-primary/50 hover:text-on-surface"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Asymmetric 12-Column Grid from Stitch */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {filteredActivities.map((act) => {
          // Layout asymmetry: Card 1 & 3 are 4 cols, Card 2 & 4 are 8 cols
          const isWide = act.id === "sidak-kata" || act.id === "grand-launching";
          return (
            <div
              key={act.id}
              onClick={() => setSelectedActivity(act)}
              className={`${
                isWide
                  ? "md:col-span-8 aspect-video md:aspect-21/10"
                  : "md:col-span-4 aspect-4/5"
              } group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle hover:border-primary flex flex-col justify-end bg-cta-banner cursor-pointer`}
            >
              {/* Background Photo */}
              <Image
                src={act.image}
                alt={act.title}
                fill
                sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />

              {/* Top Floating Badge & Action Indicator */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[#ffdad4] border border-white/20">
                  {act.batchOrDate}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 shadow-xs">
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M7 17L17 7M7 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Cluster */}
              <div className="relative z-10 p-5 md:p-6 flex flex-col text-white">
                <div className="font-mono text-[11px] text-[#ffdad4] uppercase tracking-wider mb-1 font-bold">
                  {act.badgeText}
                </div>
                <h3
                  className={`font-heading font-extrabold text-white mb-2 leading-tight ${
                    isWide ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                  }`}
                >
                  {act.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-surface-canvas/85 leading-relaxed line-clamp-2 mb-4">
                  {act.description}
                </p>

                {/* Card Meta Bar */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between font-mono text-[11px] text-border-subtle/90">
                  <span className="truncate pr-2">{act.division}</span>
                  <span className="text-[#ffdad4] font-bold shrink-0">{act.format}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reactive Lightbox Modal for Activities */}
      {selectedActivity && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-surface-card rounded-3xl border border-border-subtle shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-video w-full bg-cta-banner overflow-hidden">
              <Image
                src={selectedActivity.image}
                alt={selectedActivity.title}
                fill
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-primary flex items-center justify-center text-lg transition-colors z-20 cursor-pointer"
                aria-label="Tutup Pratinjau"
              >
                &times;
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white z-10">
                <span className="font-mono text-xs text-[#ffdad4] uppercase tracking-wider font-semibold">
                  {selectedActivity.badgeText}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedActivity.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed mb-6">
                {selectedActivity.description}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-container-low border border-border-subtle mb-6 font-mono text-xs">
                <div>
                  <span className="text-on-surface-variant block mb-1">Divisi Pelaksana:</span>
                  <span className="font-bold text-on-surface">{selectedActivity.division}</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block mb-1">Kategori Publikasi:</span>
                  <span className="font-bold text-primary">{selectedActivity.format}</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2.5 rounded-xl border border-border-subtle text-on-surface-variant font-heading text-sm font-semibold hover:bg-surface-container-low transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
