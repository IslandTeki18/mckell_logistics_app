import React from "react";
import { WhoWeAreSection } from "../components/WhoWeAreSection";
import { WhatWeDoSection } from "../components/WhatWeDoSection";
import { ServiceAreaSection } from "~src/features/home/components/ServiceAreaSection";
import { WhyChooseUsSection } from "~src/features/home/components/WhyChooseUsSection";
import { ContactCalloutSection } from "~src/features/home/components/ContactCalloutSection";

type AboutPageProps = {};

export const AboutPage = (props: AboutPageProps) => {
  return (
    <div className="min-h-screen">
      <WhoWeAreSection />
      <WhatWeDoSection />
      <ServiceAreaSection />
      <WhyChooseUsSection />
      <ContactCalloutSection />
    </div>
  );
};
