import * as React from "react";
import { WhatWeHaulSection } from "../components/WhatWeHaulSection";
import { EquipmentCapabilitiesSection } from "../components/EquipmentCapabilitiesSection";
import { ServiceAreaSection } from "~src/features/home/components/ServiceAreaSection";
import { PricingPolicySection } from "../components/PricingPolicySection";
import { WhoWeServeSection } from "../components/WhoWeServeSection";
import { HowToBookSection } from "../components/HowToBookSection";
import { WhyChooseUsSection } from "~src/features/home/components/WhyChooseUsSection";

type ServicesPageProps = {};

export const ServicesPage = (props: ServicesPageProps) => {
  return (
    <div className="min-h-screen">
      <WhatWeHaulSection />
      <EquipmentCapabilitiesSection />
      <ServiceAreaSection />
      <PricingPolicySection />
      <WhoWeServeSection />
      <HowToBookSection />
      <WhyChooseUsSection />
    </div>
  );
};
