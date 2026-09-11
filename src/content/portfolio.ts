import type { Copy } from "./copy";

export type PortfolioProject = {
  title: Copy;
  summary: Copy;
  image?: string;
  href?: string;
};

export type PortfolioVoice = {
  quote: Copy;
  name: Copy;
  role: Copy;
};

export const portfolioProjects: PortfolioProject[] = [];

export const portfolioVoices: PortfolioVoice[] = [];
