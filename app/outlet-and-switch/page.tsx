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
  title: "Outlet & Switch Installation — JP Volt Electric Inc | West Palm Beach, FL",
  description:
    "Outlet and switch installation, replacement, and repair in West Palm Beach. GFCI, AFCI, 240V, and smart outlets. Licensed electrician EC13011506.",
};

export default function OutletAndSwitchPage() {
  return (
    <>
      <PageHeroSection
        title="Outlet & Switch"
        subtitle="Outlet and switch installation, replacement, and repair in West Palm Beach — GFCI, AFCI, 240V heavy-duty, and smart outlets."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Outlet & Switch" },
        ]}
      />
      <ServiceDetailSection
        activeService="Outlet & Switch"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Outlet & Switch Installation and Repair"
        intro={[
          "Outlets and switches are the most-used electrical components in any home or business. Dead outlets, warm switch plates, flickering lights, and non-working GFCI outlets are symptoms of underlying issues that need proper diagnosis — not just part swaps. JP Volt Electric installs and repairs all types of outlets and switches to code.",
          "From simple replacements to smart outlet installation and heavy-duty 240V circuits for appliances and equipment, we handle it all with the same level of care and code compliance.",
        ]}
        whatWeDo={[
          "Standard outlet replacement and repair",
          "GFCI outlet installation (kitchens, bathrooms, garages, laundry)",
          "AFCI outlet and breaker installation for fire safety",
          "Smart plug and smart switch installation",
          "Heavy-duty 240V outlets for dryers, ranges, and equipment",
          "USB and USB-C combination outlet installation",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor EC13011506",
          "All outlet and switch work to NEC code standards",
          "GFCI and AFCI protection installed correctly",
          "Fast service for residential and light commercial properties",
          "Written estimate before any work begins",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
