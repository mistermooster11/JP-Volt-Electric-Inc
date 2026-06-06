import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — JP Volt Electric Inc | West Palm Beach Electrician",
  description:
    "JP Volt Electric Inc is a licensed electrical contractor serving West Palm Beach and Palm Beach County. Over 10 years of experience. License EC13011506.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-about.jpg"
        title="About Us"
        subtitle="Licensed electrical contractor serving West Palm Beach and Palm Beach County — over 10 years of professional electrical work guided by the NEC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
