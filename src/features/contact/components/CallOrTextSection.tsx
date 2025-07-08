import React from "react";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

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
              <div className="flex justify-center mb-4">
                <DevicePhoneMobileIcon className="w-16 h-16 text-primary" />
              </div>
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
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a href="sms:+18015550123" className="btn btn-secondary btn-lg">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  Send Text
                </a>
              </div>

              {/* Text Message */}
              <div className="alert alert-info">
                <InformationCircleIcon className="stroke-current flex-shrink-0 w-6 h-6" />
                <span>Text anytime, we respond quickly.</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <div className="flex justify-center mb-2">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="card-title justify-center text-lg font-bold text-base-content mb-4">
                  Phone Hours
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
                <div className="flex justify-center mb-2">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="card-title justify-center text-lg font-bold text-base-content mb-4">
                  Text Messages
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
