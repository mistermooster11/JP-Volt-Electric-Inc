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
  title: "Security Camera Installation — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Security camera and home surveillance system installation in West Palm Beach and Palm Beach County. Hardwired systems by licensed electrician EC13011506.",
};

export default function SecurityCamerasPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-security-cameras.jpg"
        title="Security Cameras"
        subtitle="Hardwired security camera and home surveillance installation in West Palm Beach — professional electrical work for lasting, reliable protection."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Security Cameras" },
        ]}
      />
      <ServiceDetailSection
        activeService="Security Cameras"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Security Camera Installation in West Palm Beach"
        intro={[
          "A hardwired security camera system provides more reliable coverage than wireless alternatives — no dead batteries, no WiFi dropouts, and no gaps in your footage. JP Volt Electric handles the electrical side of security camera installation: power runs, conduit work, mounting, and integration with your existing or new security system.",
          "Whether you want cameras at entry points, around your perimeter, or covering your property interior, we install systems designed to deter burglars and give you peace of mind when you're away.",
        ]}
        whatWeDo={[
          "Hardwired security camera installation (residential and commercial)",
          "Power and data conduit runs for camera systems",
          "DVR/NVR electrical setup and integration",
          "Exterior and interior camera mounting",
          "Smart doorbell and video doorbell installation",
          "Lighting integration for camera coverage areas",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "Hardwired systems for maximum reliability",
          "Clean conduit work — no exposed wiring on exterior",
          "Residential and commercial camera projects",
          "Free estimate for all security camera installations",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
