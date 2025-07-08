import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ServiceSummarySection } from "../components/ServiceSummarySection";
import { ServiceAreaSection } from "../components/ServiceAreaSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ContactCalloutSection } from "../components/ContactCalloutSection";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceSummarySection />
      <ServiceAreaSection />
      <WhyChooseUsSection />
      <ContactCalloutSection />
    </div>
  );
};
