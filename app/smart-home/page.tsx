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
  title: "Smart Home Automation — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Smart home automation wiring and installation in West Palm Beach. Smart lighting, thermostats, security systems, and home automation integration. License EC13011506.",
};

export default function SmartHomePage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-smart-home.jpg"
        title="Smart Home Automation"
        subtitle="Smart home installation and wiring in West Palm Beach — lighting automation, smart thermostats, security integration, and energy control."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Smart Home Automation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Smart Home Automation"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Smart Home Automation Installation"
        intro={[
          "Home automation helps you use energy more efficiently, improves security, and gives you control of your home from anywhere. JP Volt Electric installs and wires smart home systems — from individual smart switches and outlets to whole-home automation integration including lighting, thermostats, and security.",
          "We handle the electrical side of smart home upgrades correctly: proper wiring, neutral wire installation where needed, and load management to ensure smart devices operate reliably.",
        ]}
        whatWeDo={[
          "Smart switch and smart dimmer installation",
          "Smart thermostat wiring and installation",
          "Smart carbon monoxide and smoke detector integration",
          "Smart security system electrical work",
          "Smart doorbell and video doorbell installation",
          "Whole-home automation wiring and device integration",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "Smart home devices wired correctly for long-term reliability",
          "Experience with all major platforms (Google Home, Alexa, Apple HomeKit)",
          "Neutral wire installation for older homes with incompatible switches",
          "Free estimate for all smart home projects",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
