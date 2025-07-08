import * as React from "react";

type CallOrTextSectionProps = {};

export const CallOrTextSection = (props: CallOrTextSectionProps) => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
            Call or Text for Fastest Response
          </h2>
          <p className="text-lg text-base-content/70 mb-12">
            Get immediate assistance or quick scheduling with a simple phone
            call or text
          </p>

          {/* Phone Number Section */}
          <div className="card bg-base-200 shadow-lg mb-8">
            <div className="card-body text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-base-content mb-6">
                Ready to Help You Now
              </h3>

              {/* Large Phone Number */}
              <a
                href="tel:+18015550123"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary hover:text-primary-focus transition-colors duration-200 mb-6 block"
              >
                (801) 555-0123
              </a>

              {/* Call/Text Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href="tel:+18015550123" className="btn btn-primary btn-lg">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
                <a href="sms:+18015550123" className="btn btn-secondary btn-lg">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Send Text
                </a>
              </div>

              {/* Text Message */}
              <div className="alert alert-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Text anytime, we respond quickly.</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <h4 className="card-title justify-center text-lg font-bold text-base-content mb-4">
                  📞 Phone Hours
                </h4>
                <div className="space-y-2 text-base-content/70">
                  <div>Monday - Friday: 7 AM - 6 PM</div>
                  <div>Saturday: 8 AM - 4 PM</div>
                  <div>Sunday: Emergency only</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <h4 className="card-title justify-center text-lg font-bold text-base-content mb-4">
                  💬 Text Messages
                </h4>
                <div className="space-y-2 text-base-content/70">
                  <div>Available 24/7</div>
                  <div>Response within 2 hours</div>
                  <div>Perfect for quick questions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
