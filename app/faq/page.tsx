import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "FAQ — JP Volt Electric Inc | Electrical Questions Answered",
  description:
    "Answers to common questions about electrical services in West Palm Beach — panel upgrades, EV chargers, permits, licensing, and service areas.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-faq.jpg"
        title="Frequently Asked Questions"
        subtitle="Common questions about our electrical services, licensing, pricing, and service area in West Palm Beach and Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQSection />
      {/* <NeedServicesSection /> */}
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
