import * as React from "react";

type ContactCalloutSectionProps = {};

export const ContactCalloutSection = (props: ContactCalloutSectionProps) => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-content mb-8">
            Need a hauler? Let's talk.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Phone Contact */}
            <div className="bg-primary-content/10 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary-content/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-content"
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
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-content mb-2">
                Call Now
              </h3>
              <a
                href="tel:+1234567890"
                className="text-2xl font-bold text-primary-content hover:text-primary-content/80 transition-colors"
              >
                (123) 456-7890
              </a>
              <p className="text-primary-content/80 text-sm mt-2">
                Click to call on mobile
              </p>
            </div>

            {/* Email Contact */}
            <div className="bg-primary-content/10 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary-content/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-content"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-content mb-2">
                Email Us
              </h3>
              <a
                href="mailto:info@mckelllogistics.com"
                className="text-xl font-semibold text-primary-content hover:text-primary-content/80 transition-colors"
              >
                info@mckelllogistics.com
              </a>
              <p className="text-primary-content/80 text-sm mt-2">
                We'll respond within 24 hours
              </p>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className="bg-primary-content/10 rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-primary-content/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary-content"
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
              </div>
            </div>
            <h3 className="text-lg font-semibold text-primary-content mb-3">
              Hours of Operation
            </h3>
            <div className="space-y-1 text-primary-content/90">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Emergency Only</span>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="mt-8">
            <p className="text-primary-content/80 mb-4">
              Ready to get started? Contact us for a free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1234567890" className="btn btn-secondary btn-lg">
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
                Call Now
              </a>
              <a
                href="mailto:info@mckelllogistics.com"
                className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary"
              >
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
