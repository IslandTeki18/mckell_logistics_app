import * as React from "react";

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
            <div className="bg-base-100 rounded-lg shadow-xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-base-content/40 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-base-content/60 text-lg">
                  Utah County Service Area Map
                </p>
              </div>
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
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
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
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-base-content/80">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Radius */}
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
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
              <div className="border-l-4 border-primary pl-4">
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
