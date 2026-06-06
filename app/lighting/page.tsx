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
  title: "Lighting Installation — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Indoor and outdoor lighting installation in West Palm Beach and Palm Beach County. Recessed, commercial, and fixture upgrades by licensed electrician EC13011506.",
};

export default function LightingPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-lighting.jpg"
        title="Lighting Installation"
        subtitle="Indoor and outdoor lighting installation for homes and businesses in West Palm Beach — recessed lighting, fixtures, and commercial upgrades."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Lighting Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Lighting Installation"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Lighting Installation Services in West Palm Beach"
        intro={[
          "Proper lighting makes a measurable difference — in productivity, safety, comfort, and aesthetics. JP Volt Electric installs interior and exterior lighting for homes and commercial spaces, from recessed can lights and ceiling fixtures to industrial and commercial lighting systems.",
          "The right lighting setup reduces eye fatigue, improves safety, and transforms the feel of any space. We assess your current setup and recommend solutions that work for your environment and budget.",
        ]}
        whatWeDo={[
          "Recessed lighting installation and retrofit",
          "Ceiling fan and fixture replacement",
          "Under-cabinet and accent lighting",
          "Commercial and office lighting systems",
          "Outdoor security and area lighting",
          "Dimmer switch and lighting control installation",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "Residential and commercial lighting expertise",
          "All wiring and connections to NEC code",
          "Free estimates with clear written pricing",
          "Serving West Palm Beach and Palm Beach County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
