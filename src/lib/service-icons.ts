import {
  Building2,
  Compass,
  LayoutTemplate,
  LifeBuoy,
  MousePointerClick,
  RefreshCw,
  SearchCheck,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import type { ServiceSlug } from "@/lib/services";

export const serviceIcons: Record<ServiceSlug | "website-check", LucideIcon> = {
  "website-erstellen-lassen": Compass,
  "business-website": Building2,
  "onepage-website": LayoutTemplate,
  "landing-page": MousePointerClick,
  "website-relaunch": RefreshCw,
  "online-shop": ShoppingCart,
  "support-wartung": LifeBuoy,
  "website-check": SearchCheck,
};
