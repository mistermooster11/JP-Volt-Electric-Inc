import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Landscape Lighting — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Low-voltage landscape and outdoor lighting installation in West Palm Beach and Palm Beach County. Pathways, gardens, and security lighting. License EC13011506.",
};

export default function LandscapeLightingPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-landscape-lighting.jpg"
        title="Landscape Lighting"
        subtitle="Low-voltage outdoor and landscape lighting installation in West Palm Beach — pathways, garden features, and perimeter security lighting."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Landscape Lighting" },
        ]}
      />
      <ServiceDetailSection
        activeService="Landscape Lighting"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Outdoor & Landscape Lighting Installation"
        intro={[
          "Landscape lighting does more than look good — it enhances security, defines pathways, and extends the usable hours of your outdoor spaces. JP Volt Electric specializes in low-voltage landscape illumination systems that beautifully highlight gardens, paths, and architectural features while keeping energy costs low.",
          "We design and install systems that complement your property's natural layout, using quality fixtures and correctly run low-voltage wiring for long-term reliability in South Florida's outdoor conditions.",
        ]}
        whatWeDo={[
          "Pathway and walkway lighting installation",
          "Garden and tree uplighting",
          "Perimeter security and flood lighting",
          "Low-voltage transformer installation and programming",
          "Landscape lighting repair and re-wiring",
          "Timer and smart control integration",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "Specializing in low-voltage outdoor systems",
          "Energy-efficient LED fixture recommendations",
          "South Florida outdoor conditions expertise",
          "Free estimates for all landscape lighting projects",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
