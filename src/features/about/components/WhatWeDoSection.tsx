import React from "react";
type WhatWeDoSectionProps = {};

export const WhatWeDoSection = (props: WhatWeDoSectionProps) => {
  const services = [
    {
      icon: "🚛",
      title: "Material Hauling",
      description: "Dirt, gravel, sand, and construction materials",
    },
    {
      icon: "🏗️",
      title: "Debris Removal",
      description: "Construction waste and demolition cleanup",
    },
    {
      icon: "⚡",
      title: "Side Dump Trailer",
      description: "Efficient unloading for faster project completion",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            What We Do
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            We haul dirt, gravel, sand, debris, and other materials using a side
            dump trailer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Main Description */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-base-content mb-4">
                  Construction-Focused Hauling
                </h3>
                <p className="text-lg text-base-content/80 mb-4">
                  Our specialized side dump trailer and professional approach
                  ensure safe, on-time delivery for all your construction
                  hauling needs.
                </p>
                <p className="text-base-content/70">
                  Whether you're moving materials between job sites, delivering
                  from quarries, or removing debris, we handle every load with
                  the care and professionalism your project deserves.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base-content">
                    Safe handling and transport
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base-content">
                    On-time delivery guarantee
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base-content">
                    Construction industry expertise
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Image */}
          <div className="order-1 lg:order-2">
            <div className="card bg-base-100 shadow-lg">
              <figure className="px-6 pt-6">
                <img
                  src="https://placehold.co/500x350/4A5568/FFFFFF?text=Side+Dump+Trailer+in+Action"
                  alt="Side dump trailer unloading materials"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="card-title justify-center text-lg font-bold text-base-content mb-2">
                  {service.title}
                </h4>
                <p className="text-base-content/70 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="card bg-primary text-primary-content shadow-lg max-w-3xl mx-auto">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-primary-content/90">
                "To deliver reliable hauling that keeps your projects moving."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
