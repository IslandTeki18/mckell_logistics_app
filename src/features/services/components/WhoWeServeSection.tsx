import * as React from "react";

type WhoWeServeSectionProps = {};

export const WhoWeServeSection = (props: WhoWeServeSectionProps) => {
  const customers = [
    {
      icon: "🏗️",
      title: "Builders",
      description: "Residential and commercial construction projects",
      services: ["Material delivery", "Site cleanup", "Debris removal"],
    },
    {
      icon: "👷",
      title: "General Contractors",
      description: "Multi-phase construction and renovation projects",
      services: ["Bulk material transport", "Waste management", "Site prep"],
    },
    {
      icon: "🚜",
      title: "Excavation & Grading Crews",
      description: "Earthwork and site preparation specialists",
      services: [
        "Dirt & gravel hauling",
        "Excess material removal",
        "Site leveling",
      ],
    },
    {
      icon: "🏠",
      title: "Roofers & Demo Teams",
      description: "Roofing and demolition professionals",
      services: ["Debris disposal", "Material cleanup", "Waste removal"],
    },
    {
      icon: "🔨",
      title: "DIY Homeowners",
      description: "Property owners tackling their own projects",
      services: ["Material delivery", "Yard waste removal", "Small loads"],
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Professional hauling services for contractors, builders, and
            homeowners throughout Utah County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="card-body">
                <div className="text-4xl mb-4 text-center">{customer.icon}</div>
                <h3 className="card-title justify-center text-xl font-bold text-base-content mb-2">
                  {customer.title}
                </h3>
                <p className="text-base-content/70 text-sm text-center mb-4">
                  {customer.description}
                </p>
                <div className="divider my-2"></div>
                <div className="space-y-2">
                  {customer.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-base-content">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card bg-primary text-primary-content shadow-lg max-w-3xl mx-auto">
            <div className="card-body">
              <h3 className="card-title justify-center text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-primary-content/90 mb-6">
                Whether you're a contractor with a big project or a homeowner
                with a small job, we have the equipment and expertise to get it
                done right.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-secondary btn-lg">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
