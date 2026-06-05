export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Electrical Wiring", href: "/electrical-wiring" },
      { label: "Meter Panel Upgrade", href: "/meter-panel" },
      { label: "EV Charger Installation", href: "/ev-charger" },
      { label: "Lighting Installation", href: "/lighting" },
      { label: "Landscape Lighting", href: "/landscape-lighting" },
      { label: "Outlet & Switch", href: "/outlet-and-switch" },
      { label: "Smart Home Automation", href: "/smart-home" },
      { label: "Security Cameras", href: "/security-cameras" },
      { label: "Electrical Troubleshooting", href: "/troubleshooting" },
    ],
  },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog-unclogme" },
  { label: "Contact", href: "/contact-us" },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services-page" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog-unclogme" },
  { label: "Contact", href: "/contact-us" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Electrical Wiring", href: "/electrical-wiring" },
  { label: "Meter Panel Upgrade", href: "/meter-panel" },
  { label: "EV Charger Installation", href: "/ev-charger" },
  { label: "Lighting Installation", href: "/lighting" },
  { label: "Landscape Lighting", href: "/landscape-lighting" },
  { label: "Outlet & Switch", href: "/outlet-and-switch" },
  { label: "Smart Home Automation", href: "/smart-home" },
  { label: "Security Cameras", href: "/security-cameras" },
  { label: "Electrical Troubleshooting", href: "/troubleshooting" },
];
