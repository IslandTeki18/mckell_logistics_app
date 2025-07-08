import * as React from "react";

type CallToActionHeaderSectionProps = {};

export const CallToActionHeaderSection = (
  props: CallToActionHeaderSectionProps
) => {
  return (
    <section className="py-16 bg-primary text-primary-content">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Need Hauling? Let's Get You Scheduled.
          </h1>
          <p className="text-xl md:text-2xl text-primary-content/90 mb-8">
            Call, text, or send a request—whatever works best for you.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card bg-primary-content text-primary shadow-lg">
              <div className="card-body text-center">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="card-title justify-center text-lg font-bold mb-2">
                  Call Us
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  Speak directly with us for immediate assistance
                </p>
                <button className="btn btn-primary btn-sm">
                  (801) 555-0123
                </button>
              </div>
            </div>

            <div className="card bg-primary-content text-primary shadow-lg">
              <div className="card-body text-center">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="card-title justify-center text-lg font-bold mb-2">
                  Text Us
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  Quick questions or schedule via text
                </p>
                <button className="btn btn-primary btn-sm">Send Text</button>
              </div>
            </div>

            <div className="card bg-primary-content text-primary shadow-lg">
              <div className="card-body text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="card-title justify-center text-lg font-bold mb-2">
                  Send Request
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  Fill out our form for detailed quotes
                </p>
                <button className="btn btn-primary btn-sm">Get Started</button>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-primary-content/80">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Response within 2 hours</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
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
              <span>Free estimates</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
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
              <span>Same-day service available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
