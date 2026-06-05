"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Equipment</div>
          <h2 className="fleet-section__heading">
            Professional-Grade Tools for Every Electrical Job
          </h2>
          <p className="fleet-section__intro">
            JP Volt Electric arrives on every job stocked with professional-grade
            electrical equipment — from panel and meter tools to EV charger hardware,
            smart home devices, and low-voltage lighting systems. The right tools on
            every truck mean faster installs, cleaner work, and fewer return trips
            across West Palm Beach and Palm Beach County.
          </p>
        </div>

        {/* RIGHT — 3 images stacked */}
        <div className="fleet-section__images">
          {/* TODO: Replace with JP Volt Electric equipment/job site photos */}
          <Image
            src="/images/equipment-1.jpg"
            alt="JP Volt Electric — electrical panel work"
            width={1024}
            height={909}
            className="fleet-section__img"
          />
          <Image
            src="/images/equipment-2.jpg"
            alt="JP Volt Electric — EV charger installation"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/images/equipment-3.jpg"
            alt="JP Volt Electric — service van and tools"
            width={1024}
            height={541}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
