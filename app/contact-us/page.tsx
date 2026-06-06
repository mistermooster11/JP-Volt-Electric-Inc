import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — JP Volt Electric Inc | Free Estimate West Palm Beach",
  description:
    "Contact JP Volt Electric Inc for a free estimate on electrical work in West Palm Beach and Palm Beach County. Panel upgrades, EV chargers, wiring, and more.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection bgImage="/images/masthead-contact.jpg"
        title="Contact Us"
        subtitle="Request a free estimate for any electrical project in West Palm Beach or Palm Beach County. Call us or fill out the form."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="JP Volt Electric Inc — West Palm Beach, FL"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.2!2d-80.058254!3d26.681437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d8d8d8d8d8d8%3A0xc1f1f1f1f1f1f1f8!2s625+El+Vedado%2C+West+Palm+Beach%2C+FL+33405!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
