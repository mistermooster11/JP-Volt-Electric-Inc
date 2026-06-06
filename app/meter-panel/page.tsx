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
  title: "Meter Panel Upgrade — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "200-amp panel upgrades for homes and businesses in West Palm Beach. Permits pulled, inspections passed. Licensed electrical contractor EC13011506.",
};

export default function MeterPanelPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-meter-panel.jpg"
        title="Meter Panel Upgrade"
        subtitle="200-amp service upgrades for West Palm Beach homes and businesses — fully permitted, inspected, and code-compliant."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Meter Panel Upgrade" },
        ]}
      />
      <ServiceDetailSection
        activeService="Meter Panel Upgrade"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Electrical Panel Upgrade Services"
        intro={[
          "The electrical panel is the heart of your home's power distribution. An outdated or undersized panel can cause breakers to trip constantly, prevent you from adding circuits, or pose a fire risk. JP Volt Electric upgrades panels to 200-amp service safely, with all required permits and a final inspection sign-off.",
          "If your panel has suffered damage, shows signs of wear, or simply can't keep up with modern electrical loads, contact us for a free assessment.",
        ]}
        whatWeDo={[
          "200-amp main panel upgrades from 60 or 100-amp service",
          "Meter and service entrance replacement",
          "Breaker replacement and panel repair",
          "Sub-panel installation for additions or outbuildings",
          "All permits pulled with Palm Beach County",
          "Final inspection coordination included",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "Inspections passed first time, every time",
          "Upfront written estimate before work begins",
          "10+ years of panel upgrade experience in South Florida",
          "Residential and light commercial projects",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
