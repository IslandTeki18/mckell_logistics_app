import * as React from "react";
import { CallToActionHeaderSection } from "../components/CalledToActionHeaderSection";
import { CallOrTextSection } from "../components/CallOrTextSection";
import { HowToBookSection } from "~src/features/services/components/HowToBookSection";
import { ServiceAreaSection } from "~src/features/home/components/ServiceAreaSection";

type ContactPageProps = {};

export const ContactPage = (props: ContactPageProps) => {
  return (
    <div className="min-h-screen">
      <CallToActionHeaderSection />
      <HowToBookSection />
      <ServiceAreaSection />
    </div>
  );
};
