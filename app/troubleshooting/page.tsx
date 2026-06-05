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
  title: "Electrical Troubleshooting — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Electrical troubleshooting and diagnosis in West Palm Beach. Tripping breakers, dead outlets, flickering lights, broken conduit, and more. License EC13011506.",
};

export default function TroubleshootingPage() {
  return (
    <>
      <PageHeroSection
        title="Electrical Troubleshooting"
        subtitle="Fast electrical diagnosis and repair in West Palm Beach — tripping breakers, dead outlets, flickering lights, and electrical emergencies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Electrical Troubleshooting" },
        ]}
      />
      <ServiceDetailSection
        activeService="Electrical Troubleshooting"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Electrical Troubleshooting & Repair"
        intro={[
          "Electrical problems rarely fix themselves — they get worse. If your breaker keeps tripping, your outlet stopped working, your lights flicker, or your electrical conduit is damaged, JP Volt Electric diagnoses and repairs the root cause, not just the symptom.",
          "With over 10 years of experience and NEC-guided work practices, we identify the issue quickly and present you with a clear fix before we start. No guesswork, no unnecessary parts replacement.",
        ]}
        whatWeDo={[
          "Breaker tripping diagnosis and repair",
          "Dead or non-working outlet diagnosis",
          "Flickering light and voltage fluctuation troubleshooting",
          "Ceiling fan and fixture wiring repair",
          "Broken or damaged electrical conduit replacement",
          "Temporary service and emergency electrical repair",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "10+ years diagnosing residential and commercial electrical issues",
          "NEC-guided work — we fix it right, not just fast",
          "Clear explanation of the problem before work begins",
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
