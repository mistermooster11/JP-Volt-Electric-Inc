export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

// TODO: Confirm actual pricing with JP Volt Electric before going live. These are placeholder ranges.
export const pricingCards: PricingCard[] = [
  {
    price: 150,
    note: "Free estimate included",
    title: "Outlet & Switch Service",
    features: [
      "Outlet replacement or repair",
      "GFCI & AFCI protection",
      "Switch replacement",
      "Smart outlet installation",
    ],
    description:
      "Quick fixes and upgrades for outlets and switches throughout your home. GFCI and smart outlets installed to code.",
  },
  {
    price: 499,
    note: "Permit & inspection included",
    title: "EV Charger Install",
    features: [
      "Dedicated 240V circuit",
      "NEMA 14-50 or hardwired Level 2",
      "Permit pulled and inspection scheduled",
      "Panel capacity check included",
    ],
    description:
      "Full Level 2 EV charger installation with permit. We assess your panel, run the circuit, and get it inspection-ready.",
    highlight: true,
  },
  {
    price: 1200,
    note: "Free estimate — price varies by amperage",
    title: "Panel Upgrade",
    features: [
      "200-amp service upgrade",
      "All permits pulled",
      "Final inspection coordinated",
      "Residential & commercial",
    ],
    description:
      "Upgrade your electrical panel to 200-amp service. We handle permits, the work, and the final inspection sign-off.",
  },
  {
    price: 199,
    note: "Free estimate included",
    title: "Lighting Installation",
    features: [
      "Recessed & fixture installation",
      "Ceiling fan wiring",
      "Dimmer switch installation",
      "Indoor & outdoor lighting",
    ],
    description:
      "Interior and exterior lighting upgrades — recessed cans, ceiling fans, dimmers, landscape lighting, and more.",
  },
];
