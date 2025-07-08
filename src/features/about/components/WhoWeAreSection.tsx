import * as React from "react";

type WhoWeAreSectionProps = {};

export const WhoWeAreSection = (props: WhoWeAreSectionProps) => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Local expertise you can trust for all your hauling needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image/Photo */}
          <div className="order-2 lg:order-1">
            <div className="card bg-base-200 shadow-lg">
              <figure className="px-6 pt-6">
                <img
                  src="https://placehold.co/500x400/4A5568/FFFFFF?text=McKell+Logistics+Owner"
                  alt="McKell Logistics owner with truck"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </figure>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-base-content mb-4">
                  McKell Logistics
                </h3>
                <p className="text-lg text-base-content/80 mb-4">
                  McKell Logistics is a solo-owned hauling company serving the
                  Utah County area with reliable, professional service.
                </p>
                <p className="text-base-content/70">
                  Founded with a passion for construction and a commitment to
                  excellence, we've built our reputation on punctuality, fair
                  pricing, and going the extra mile for every client.
                </p>
              </div>

              {/* Key Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card bg-primary text-primary-content shadow-md">
                  <div className="card-body text-center p-4">
                    <div className="text-2xl mb-2">🏠</div>
                    <h4 className="font-bold text-sm">Local Roots</h4>
                    <p className="text-xs text-primary-content/80">
                      Utah County native
                    </p>
                  </div>
                </div>

                <div className="card bg-secondary text-secondary-content shadow-md">
                  <div className="card-body text-center p-4">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-bold text-sm">Reliability</h4>
                    <p className="text-xs text-secondary-content/80">
                      On-time service
                    </p>
                  </div>
                </div>

                <div className="card bg-accent text-accent-content shadow-md">
                  <div className="card-body text-center p-4">
                    <div className="text-2xl mb-2">🤝</div>
                    <h4 className="font-bold text-sm">Hands-On</h4>
                    <p className="text-xs text-accent-content/80">
                      Personal service
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h4 className="font-bold text-base-content mb-2">
                    Our Mission
                  </h4>
                  <p className="text-base-content/70 text-sm">
                    To provide Utah County contractors and homeowners with
                    dependable, professional hauling services that keep projects
                    moving forward on time and on budget.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center lg:text-left">
                <button className="btn btn-primary btn-lg">
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
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
