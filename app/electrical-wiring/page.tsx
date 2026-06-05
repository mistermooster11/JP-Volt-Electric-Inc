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
  title: "Electrical Wiring — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Licensed electrical wiring services for homes and businesses in West Palm Beach and Palm Beach County. New construction, rewires, and circuit additions. License EC13011506.",
};

export default function ElectricalWiringPage() {
  return (
    <>
      <PageHeroSection
        title="Electrical Wiring"
        subtitle="Licensed wiring services for residential and light commercial properties across West Palm Beach and Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Electrical Wiring" },
        ]}
      />
      <ServiceDetailSection
        activeService="Electrical Wiring"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Electrical Wiring Services in West Palm Beach"
        intro={[
          "Proper electrical wiring is the foundation of a safe, functional home or business. Whether you're building new, adding circuits, or replacing outdated wiring, JP Volt Electric handles the full scope — from rough-in to final connection — with all required permits.",
          "Our team works on residential and light commercial projects throughout Palm Beach County, guided by the National Electrical Code (NEC) and Florida electrical standards.",
        ]}
        whatWeDo={[
          "New construction wiring and rough-in",
          "Circuit additions for added loads (appliances, EV chargers, hot tubs)",
          "Aluminum and knob-and-tube wiring replacement",
          "Dedicated circuits for kitchens, laundry, and home offices",
          "Conduit installation for exposed or outdoor wiring runs",
          "All permits pulled and inspections coordinated",
        ]}
        whyChooseUs={[
          "Florida Licensed Electrical Contractor EC13011506",
          "10+ years of residential and commercial wiring experience",
          "Upfront estimates — you approve before we start",
          "All work to NEC code, permitted and inspected",
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
