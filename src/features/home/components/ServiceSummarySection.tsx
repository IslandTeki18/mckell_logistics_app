import React from "react";
import {
  CubeIcon,
  ArrowsRightLeftIcon,
  MapPinIcon,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

type ServiceSummarySectionProps = {};

export const ServiceSummarySection = (props: ServiceSummarySectionProps) => {
  return (
    <section
      className="py-24 bg-base-100"
      aria-label="Service summary - What McKell Logistics does"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
            What We Do
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Professional hauling services tailored to your construction needs
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          role="list"
          aria-label="McKell Logistics services"
        >
          {/* Material Hauling */}
          <div className="flex items-start space-x-4" role="listitem">
            <div className="flex-shrink-0" aria-hidden="true">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <CubeIcon
                  className="w-6 h-6 text-secondary"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                Material Hauling
              </h3>
              <p className="text-base-content/70">
                Dirt, gravel, sand, and construction debris transport
              </p>
            </div>
          </div>

          {/* Side Dump Trailer Service */}
          <div className="flex items-start space-x-4" role="listitem">
            <div className="flex-shrink-0" aria-hidden="true">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <ArrowsRightLeftIcon
                  className="w-6 h-6 text-secondary"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                Side Dump Trailer Service
              </h3>
              <p className="text-base-content/70">
                Efficient unloading with specialized side dump equipment
              </p>
            </div>
          </div>

          {/* Local Construction Site Delivery */}
          <div className="flex items-start space-x-4" role="listitem">
            <div className="flex-shrink-0" aria-hidden="true">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <MapPinIcon
                  className="w-6 h-6 text-secondary"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                Local Construction Site Delivery
              </h3>
              <p className="text-base-content/70">
                Direct delivery to your Utah County construction sites
              </p>
            </div>
          </div>

          {/* Short-Notice Availability */}
          <div className="flex items-start space-x-4" role="listitem">
            <div className="flex-shrink-0" aria-hidden="true">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <ClockIcon
                  className="w-6 h-6 text-secondary"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                Short-Notice Availability
              </h3>
              <p className="text-base-content/70">
                Ready to respond quickly to urgent hauling needs
              </p>
            </div>
          </div>

          {/* Hourly or Contract Based Jobs */}
          <div
            className="flex items-start space-x-4 md:col-span-2 lg:col-span-1"
            role="listitem"
          >
            <div className="flex-shrink-0" aria-hidden="true">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <DocumentTextIcon
                  className="w-6 h-6 text-secondary"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                Hourly or Contract Based Jobs
              </h3>
              <p className="text-base-content/70">
                Flexible pricing options to fit your project budget
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
