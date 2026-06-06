import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services — JP Volt Electric Inc | West Palm Beach Electrician",
  description:
    "Full-service electrical contractor in West Palm Beach: panel upgrades, EV chargers, wiring, lighting, landscape lighting, smart home, security cameras, and troubleshooting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-services.jpg"
        title="Our Services"
        subtitle="Licensed electrical services for homes and businesses in West Palm Beach and Palm Beach County — panel upgrades, EV chargers, smart home, wiring, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
