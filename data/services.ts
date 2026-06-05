export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Electrical Wiring",          href: "/electrical-wiring/" },
  { label: "Meter Panel Upgrade",        href: "/meter-panel/" },
  { label: "EV Charger Installation",    href: "/ev-charger/" },
  { label: "Lighting Installation",      href: "/lighting/" },
  { label: "Landscape Lighting",         href: "/landscape-lighting/" },
  { label: "Outlet & Switch",            href: "/outlet-and-switch/" },
  { label: "Smart Home Automation",      href: "/smart-home/" },
  { label: "Security Cameras",           href: "/security-cameras/" },
  { label: "Electrical Troubleshooting", href: "/troubleshooting/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Meter Panel Upgrade",
    image: "/images/service-1.png",
    href: "/meter-panel/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "EV Charger Installation",
    image: "/images/service-2.png",
    href: "/ev-charger/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Smart Home Automation",
    image: "/images/service-3.webp",
    href: "/smart-home/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Electrical Wiring",
    image: "/images/service-4.webp",
    href: "/electrical-wiring/",
    width: 535,
    height: 643,
  },
];
