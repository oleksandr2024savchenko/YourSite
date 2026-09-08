export type Copy = { de: string; en: string };

export const c = (de: string, en: string): Copy => ({ de, en });

export function tx(copy: Copy, locale: "de" | "en") {
  return copy[locale];
}
