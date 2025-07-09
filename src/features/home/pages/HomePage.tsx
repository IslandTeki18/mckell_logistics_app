import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ServiceSummarySection } from "../components/ServiceSummarySection";
import { ServiceAreaSection } from "../components/ServiceAreaSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ContactCalloutSection } from "../components/ContactCalloutSection";
import { HomepageSEO } from "~src/features/home/components/HomepageSEO";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  return (
    <div className="min-h-screen">
      <HomepageSEO />
      <HeroSection />
      <ServiceSummarySection />
      <ServiceAreaSection />
      <WhyChooseUsSection />
      <ContactCalloutSection />
    </div>
  );
};
