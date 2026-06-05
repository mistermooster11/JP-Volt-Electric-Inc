export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

// TODO: Replace with real blog posts when JP Volt Electric publishes content.
export const blogPosts: BlogPost[] = [
  {
    slug: "/2026/06/01/do-i-need-a-200-amp-panel-upgrade/",
    image: "/images/blog-3.png",
    date: "01",
    monthYear: "Jun '26",
    category: "Electrical Tips",
    categoryHref: "/category/electrical-tips/",
    title: "Do I Need a 200-Amp Panel Upgrade? A West Palm Beach Homeowner's Guide",
    excerpt:
      "Breakers tripping constantly? Running out of circuits? Here's how to know if your home needs a panel upgrade — and what to expect from the process.",
  },
  {
    slug: "/2026/06/01/level-1-vs-level-2-ev-charger/",
    image: "/images/blog-2.png",
    date: "01",
    monthYear: "Jun '26",
    category: "EV Charging",
    categoryHref: "/category/ev-charging/",
    title: "Level 1 vs Level 2 EV Chargers: What's the Difference and Which Do You Need?",
    excerpt:
      "Electric vehicles are everywhere in South Florida. Here's a plain-English breakdown of your home charging options and why most homeowners upgrade to Level 2.",
  },
  {
    slug: "/2026/06/01/5-signs-outdated-wiring/",
    image: "/images/blog-3.png",
    date: "01",
    monthYear: "Jun '26",
    category: "Home Safety",
    categoryHref: "/category/home-safety/",
    title: "5 Signs Your Home Has Outdated Wiring (And What to Do About It)",
    excerpt:
      "Flickering lights, warm outlets, and frequently tripped breakers are more than annoyances — they're warning signs. Learn what to look for and when to call a licensed electrician.",
  },
];
