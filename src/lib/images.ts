const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix local public assets with basePath for GitHub Pages. */
export function localAsset(path: string) {
  return `${basePath}${path}`;
}

export const images = {
  // Hosted in public/images — works on GitHub Pages with basePath prefix
  hero: localAsset("/images/hero2.jpg"),
  about:
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
  services: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  ],
} as const;
