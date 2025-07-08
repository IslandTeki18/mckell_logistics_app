import * as React from "react";
import {
  UserIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

type WhyChooseUsSectionProps = {};

export const WhyChooseUsSection = (props: WhyChooseUsSectionProps) => {
  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Trust, reliability, and professional service you can count on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Experienced Operator */}
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserIcon className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Experienced Operator
            </h3>
            <p className="text-base-content/70">
              Years of construction hauling experience with skilled,
              professional service
            </p>
          </div>

          {/* On-Time Delivery */}
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-base-content mb-2">
              On-Time Delivery
            </h3>
            <p className="text-base-content/70">
              Reliable scheduling and timely service to keep your projects on
              track
            </p>
          </div>

          {/* Licensed & Insured */}
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Licensed & Insured
            </h3>
            <p className="text-base-content/70">
              Fully licensed and insured for your peace of mind and protection
            </p>
          </div>

          {/* Straightforward Pricing */}
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CurrencyDollarIcon className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Straightforward Pricing
            </h3>
            <p className="text-base-content/70">
              Clear, upfront pricing with no hidden fees or surprise charges
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-3">
            <CheckIcon className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold">
              Trusted by Utah County contractors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
