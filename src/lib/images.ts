const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix local public assets with basePath for GitHub Pages. */
export function localAsset(path: string) {
  return `${basePath}${path}`;
}

export const images = {
  // Hosted in public/images — works on GitHub Pages with basePath prefix
  hero: localAsset("/images/hero.jpg"),
  about:
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
  services: [
    // Onepage · Landing Page · Corporate · Online-Shop
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
  ],
} as const;
