import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog — JP Volt Electric Inc | Electrical Tips & Guides",
  description:
    "Read JP Volt Electric's blog for expert tips on panel upgrades, EV chargers, smart home installation, and electrical safety for West Palm Beach homeowners.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-blog.jpg"
        title="Blog"
        subtitle="Electrical tips, industry insights, and service guides from the JP Volt Electric team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
