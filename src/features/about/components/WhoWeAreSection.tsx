import React from "react";
import {
  HomeIcon,
  BoltIcon,
  HandRaisedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import portrait from "url:../assets/images/portrait_final.jpeg";

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
            <div className="card bg-base-200 shadow-xl border border-base-300">
              <figure className="p-2">
                <img
                  src={portrait}
                  alt="McKell Logistics owner with truck"
                  className="rounded-lg w-full h-auto object-cover object-center"
                />
              </figure>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  McKell Logistics
                </h3>
                <p className="text-lg text-base-content mb-4">
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
                <div className="card bg-primary text-primary-content shadow-lg border border-primary/20">
                  <div className="card-body text-center p-4">
                    <div className="flex justify-center mb-2">
                      <HomeIcon className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-sm">Local Roots</h4>
                    <p className="text-xs text-primary-content/80">
                      Utah County native
                    </p>
                  </div>
                </div>

                <div className="card bg-secondary text-secondary-content shadow-lg border border-secondary/20">
                  <div className="card-body text-center p-4">
                    <div className="flex justify-center mb-2">
                      <BoltIcon className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-sm">Reliability</h4>
                    <p className="text-xs text-secondary-content/80">
                      On-time service
                    </p>
                  </div>
                </div>

                <div className="card bg-accent text-accent-content shadow-lg border border-accent/20">
                  <div className="card-body text-center p-4">
                    <div className="flex justify-center mb-2">
                      <HandRaisedIcon className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-sm">Hands-On</h4>
                    <p className="text-xs text-accent-content/80">
                      Personal service
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="card bg-base-200 shadow-lg border border-base-300">
                <div className="card-body">
                  <h4 className="font-bold text-primary mb-2">Our Mission</h4>
                  <p className="text-base-content/70 text-sm">
                    To provide Utah County contractors and homeowners with
                    dependable, professional hauling services that keep projects
                    moving forward on time and on budget.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center lg:text-left">
                <button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-shadow">
                  <PhoneIcon className="mr-2 h-5 w-5" />
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
