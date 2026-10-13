---
version: alpha
name: Kinetic Lab Minimal
description: Desain sistem resmi ScreenShot UNNES dari Google Stitch — Multimedia & Journalistic of Computer Science.
colors:
  primary: "#930000"
  primary-hover: "#7A0000"
  on-primary: "#FFFFFF"
  primary-container: "#680000"
  on-primary-container: "#FFB4A8"
  secondary: "#930000"
  on-secondary: "#FFFFFF"
  secondary-container: "#F0EEE0"
  surface-canvas: "#EDEBDD"
  surface-card: "#FFFFFF"
  surface-card-warm: "#FBF9EE"
  surface-container: "#E5E3D5"
  surface-container-low: "#F6F4E6"
  surface-container-high: "#E2DFC9"
  border-subtle: "#DDD8C5"
  border-warm: "#DDD8C5"
  outline-variant: "#D0CBB5"
  outline: "#8F706B"
  on-surface: "#1C1C14"
  on-surface-variant: "#5B403C"
  darkroom: "#1A1917"
  cta-banner: "#171614"
  white: "#FFFFFF"
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: 800
    lineHeight: 64px
    letterSpacing: "-0.03em"
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: 800
    lineHeight: 42px
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: "-0.025em"
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 34px
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: "0.02em"
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 600
    lineHeight: 14px
    letterSpacing: "0.08em"
  button-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: "-0.01em"
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  "2xl": 64px
  "3xl": 96px
  gutter: 24px
  margin: 48px
components:
  page-layout:
    backgroundColor: "{colors.surface-canvas}"
    textColor: "{colors.on-surface}"
    padding: 48px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-outline:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 12px
  card-base:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-warm:
    backgroundColor: "{colors.surface-card-warm}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 24px
---

## Overview

Desain sistem **ScreenShot UNNES** dari Google Stitch mengusung estetika editorial warm-journalistic dan studio multimedia fotografi. Karakter visual memadukan kanvas kertas hangat (`#EDEBDD`), aksen merah marun/crimson (`#930000`), dan tipografi presisi.

## Colors

- **Primary Brand Red (`#930000`)**: Aksen brand ScreenShot untuk tombol CTA, highlight teks, indikator aktif, dan aksen garis.
- **Primary Hover (`#7A0000`)**: State hover tombol primer.
- **Surface Canvas (`#EDEBDD`)**: Latar belakang utama seluruh landing page.
- **Surface Card (`#FFFFFF`)**: Latar modul kartu konten dan floating polaroid.
- **Surface Card Warm (`#FBF9EE`)**: Latar modul kartu sekunder bernuansa hangat.
- **Surface Container Low (`#F6F4E6`)**: Latar polaroid frame dan container elemen pendukung.
- **Border Subtle & Warm (`#DDD8C5`)**: Garis batas hairline 1px untuk navbar, kartu, dan divider.
- **Text on Surface (`#1C1C14`)**: Teks utama berdaya kontras tajam.
- **Text on Surface Variant (`#5B403C`)**: Teks deskripsi dan metadata sekunder bernuansa warm dark charcoal.
- **Darkroom / CTA Banner (`#171614` / `#1A1917`)**: Latar belakang banner video/foto gelap berestetika kamar gelap fotografi.

## Typography

- **Headings — Plus Jakarta Sans**: Geometris tegas dengan bobot 700 & 800, tight tracking (`-0.02em` s.d. `-0.03em`).
- **Body — Hanken Grotesk / Plus Jakarta Sans**: Bersih, mudah dibaca untuk narasi visi-misi dan deskripsi kegiatan.
- **Labels & Code — JetBrains Mono**: Tipografi monospace untuk badge status, tag batch, dan tanggal.

## Layout & Spacing

- Container maksimal: `1280px` (`max-w-7xl`).
- Margin horizontal: `3rem` (`48px`) di desktop, `1.25rem` (`20px`) di mobile.
- Gutter: `1.5rem` (`24px`).

## Elevation & Depth

- Navbar: `bg-[#EDEBDD]/90 backdrop-blur-md border-b border-[#DDD8C5]`.
- Floating Polaroids: Elevasi bayangan halus `shadow-xl` dan `shadow-2xl` dengan rotasi `-6deg` dan `+6deg`.
- Hover shift: `hover:-translate-y-1.5` dan `transition-all duration-300`.

## Shapes

- Small & Buttons: `0.5rem` (`8px`) atau `rounded-lg`.
- Cards & Banners: `1rem` s.d. `1.5rem` (`rounded-2xl` s.d. `rounded-3xl`).
- Badges & Pills: `rounded-full` (`9999px`).

## Components

- **Header / TopNavBar**: Sticky header krem hangat dengan brand logo ScreenShot, navigasi menu, dan tombol *"Join Us"*.
- **Hero Section**: Background grid merah transparan halus, badge status live dot, display headline dengan underline merah tebal, dual CTA buttons.
- **Tentang Kami**: Big dark photo banner bertuliskan *"WRITE, CAMERA, ACTION, SEMANGAT BERKARYA!!"* dilengkapi overlapping floating polaroid cards.

## Do's and Don'ts

### Do's
- Gunakan `#EDEBDD` sebagai background utama halaman.
- Gunakan `#930000` untuk aksen brand dan tombol penting.
- Gunakan `#DDD8C5` untuk border pemisah modul.

### Don'ts
- Jangan gunakan background putih dingin `#FFFFFF` atau abu-abu dingin `#FAFAFA` untuk body canvas.
- Jangan gunakan warna cyan/teal atau oranye yang tidak ada dalam UI Google Stitch.
