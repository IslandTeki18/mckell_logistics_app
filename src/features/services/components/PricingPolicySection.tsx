import * as React from "react";

type PricingPolicySectionProps = {};

export const PricingPolicySection = (props: PricingPolicySectionProps) => {
  const pricingDetails = [
    {
      icon: "💰",
      title: "Hourly Rate",
      description: "$125/hour, 3-hour minimum",
      highlight: true,
    },
    {
      icon: "🚛",
      title: "Per Load",
      description: "Available for larger projects",
      highlight: false,
    },
  ];

  const policies = [
    {
      icon: "🏗️",
      title: "Disposal Fees",
      description:
        "Dump fees passed through at cost - not included in hourly rate",
    },
    {
      icon: "⏰",
      title: "Wait Time",
      description: "Standard hourly rate applies for on-site waiting",
    },
    {
      icon: "📅",
      title: "Cancellation",
      description: "1 free cancellation per week; $50 fee thereafter",
    },
    {
      icon: "🕐",
      title: "Scheduling",
      description: "24-hour notice preferred for optimal scheduling",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Pricing & Dumping Policy
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Clear, transparent pricing with no hidden fees
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pricingDetails.map((pricing, index) => (
            <div
              key={index}
              className={`card shadow-lg ${
                pricing.highlight
                  ? "bg-primary text-primary-content"
                  : "bg-base-200"
              }`}
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{pricing.icon}</div>
                <h3 className="card-title justify-center text-xl font-bold mb-2">
                  {pricing.title}
                </h3>
                <p
                  className={`text-lg ${
                    pricing.highlight
                      ? "text-primary-content"
                      : "text-base-content"
                  }`}
                >
                  {pricing.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="card-body text-center p-6">
                <div className="text-3xl mb-3">{policy.icon}</div>
                <h4 className="font-bold text-base-content mb-2">
                  {policy.title}
                </h4>
                <p className="text-base-content/70 text-sm">
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="card bg-base-200 shadow-lg max-w-2xl mx-auto">
            <div className="card-body">
              <h3 className="card-title justify-center text-xl font-bold mb-4">
                Need a Custom Quote?
              </h3>
              <p className="text-base-content/70 mb-6">
                Large projects or unique requirements? Contact us for
                personalized pricing.
              </p>
              <div className="card-actions justify-center">
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
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
