import React from "react";
import { MapIcon, MapPinIcon, BoltIcon } from "@heroicons/react/24/outline";
import utahCountyMap from "url:~src/assets/images/utah_county.jpg";

type ServiceAreaSectionProps = {};

export const ServiceAreaSection = (props: ServiceAreaSectionProps) => {
  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
            Service Area
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            Proudly serving Provo, Orem, Spanish Fork, American Fork, and
            surrounding areas within 25 miles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-base-100 rounded-lg shadow-xl h-80 flex items-center justify-center">
              <img
                src={utahCountyMap}
                alt="Utah County Service Area Map"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Service Area Details */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-base-content mb-6">
              Utah County & Surrounding Areas
            </h3>

            <div className="space-y-6">
              {/* Primary Service Areas */}
              <div>
                <h4 className="text-lg font-semibold text-base-content mb-3 flex items-center">
                  <MapPinIcon className="w-5 h-5 text-secondary mr-2" />
                  Primary Service Cities
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Provo",
                    "Orem",
                    "Spanish Fork",
                    "American Fork",
                    "Lehi",
                    "Pleasant Grove",
                    "Payson",
                    "Springville",
                  ].map((city) => (
                    <div key={city} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-base-content/80">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Radius */}
              <div className="bg-secondary/10 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                      <BoltIcon className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">
                      25 Mile Service Radius
                    </p>
                    <p className="text-sm text-base-content/70">
                      Fast response times within our coverage area
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Note */}
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-base-content/80">
                  <strong className="text-base-content">
                    Outside our standard area?
                  </strong>{" "}
                  We may still be able to help! Contact us to discuss your
                  specific location and project needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
