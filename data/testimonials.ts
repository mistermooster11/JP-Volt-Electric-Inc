export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

// TODO: Replace with real Google/Yelp reviews pulled from JP Volt Electric's verified listings.
// Avatar images: download and store in /public/images/ as avatar-1.png through avatar-5.png.
export const reviews: Review[] = [
  {
    name: "West Palm Beach Homeowner",
    rating: 5,
    text: "JP Volt Electric did an outstanding job on our panel upgrade. Junior and his team were professional, on time, and cleaned up before they left. Everything passed inspection on the first try.",
    avatar: "/images/avatar-1.png",
  },
  {
    name: "Palm Beach County Resident",
    rating: 5,
    text: "Had them install an EV charger in our garage — couldn't be easier. They handled the permit, ran the circuit, and had it working same day. Very knowledgeable crew.",
    avatar: "/images/avatar-2.png",
  },
  {
    name: "West Palm Beach Business Owner",
    rating: 5,
    text: "Called JP Volt for troubleshooting a commercial space that kept tripping breakers. They diagnosed the issue quickly, explained everything clearly, and had it fixed within hours.",
    avatar: "/images/avatar-3.png",
  },
  {
    name: "South Florida Homeowner",
    rating: 5,
    text: "Best electricians in the area. They set up our smart home system — lighting, outlets, security cameras — the whole package. Clean work and great communication throughout.",
    avatar: "/images/avatar-4.png",
  },
  {
    name: "Palm Beach Resident",
    rating: 5,
    text: "Over 10 years of experience really shows. Junior knows his trade inside and out. Fair pricing, fast response, and everything done to code. Won't use anyone else.",
    avatar: "/images/avatar-5.png",
  },
];
