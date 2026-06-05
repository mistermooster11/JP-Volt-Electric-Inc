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
  title: "EV Charger Installation — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Level 2 EV charger installation in West Palm Beach and Palm Beach County. Dedicated 240V circuit, permit included. Licensed electrician EC13011506.",
};

export default function EvChargerPage() {
  return (
    <>
      <PageHeroSection
        title="EV Charger Installation"
        subtitle="Level 2 home EV charger installation in West Palm Beach and Palm Beach County — dedicated circuit, permit included, inspection-ready."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "EV Charger Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="EV Charger Installation"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Home EV Charger Installation"
        intro={[
          "Electric vehicle sales are rising across South Florida — and a Level 2 home charger is the most practical upgrade for any EV owner. A Level 2 charger requires a dedicated 240V circuit and proper installation by a licensed electrician. JP Volt Electric handles the full process: panel assessment, circuit run, charger mount, permit, and inspection.",
          "We install NEMA 14-50 outlets and hardwired Level 2 units compatible with all major EV brands including Tesla, Ford, GM, and more.",
        ]}
        whatWeDo={[
          "Panel capacity assessment before installation",
          "Dedicated 240V circuit installation",
          "NEMA 14-50 outlet or hardwired Level 2 charger",
          "Garage or exterior mounting",
          "Permit pulled with Palm Beach County",
          "Final inspection scheduled and coordinated",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "Compatible with Tesla, Ford, GM, Rivian, and all major brands",
          "Permit-ready on every install — no code compliance headaches",
          "Upfront pricing with written estimate",
          "Same crew from assessment to inspection sign-off",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
