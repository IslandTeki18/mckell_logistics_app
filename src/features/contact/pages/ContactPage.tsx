import React from "react";
import { CallToActionHeaderSection } from "../components/CalledToActionHeaderSection";
import { HowToBookSection } from "~src/features/services/components/HowToBookSection";
import { ServiceAreaSection } from "~src/features/home/components/ServiceAreaSection";
import { ContactSEO } from "../components/ContactSEO";

type ContactPageProps = {};

export const ContactPage = (props: ContactPageProps) => {
  return (
    <div className="min-h-screen">
      <ContactSEO />
      <CallToActionHeaderSection />
      <HowToBookSection />
      <ServiceAreaSection />
    </div>
  );
};
