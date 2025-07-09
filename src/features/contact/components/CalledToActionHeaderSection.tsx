import React from "react";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

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
                <div className="flex justify-center mb-3">
                  <PhoneIcon className="w-12 h-12" />
                </div>
                <h3 className="card-title justify-center text-lg font-bold mb-2">
                  Call Us
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  Speak directly with us for immediate assistance
                </p>
                <a href="tel:+18016094144" className="btn btn-primary btn-sm">
                  (801) 609-4144
                </a>
              </div>
            </div>

            <div className="card bg-primary-content text-primary shadow-lg">
              <div className="card-body text-center">
                <div className="flex justify-center mb-3">
                  <ChatBubbleLeftRightIcon className="w-12 h-12" />
                </div>
                <h3 className="card-title justify-center text-lg font-bold mb-2">
                  Text Us
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  Quick questions or schedule via text
                </p>
                <a href="sms:+18016094144" className="btn btn-primary btn-sm">
                  Send Text
                </a>
              </div>
            </div>

            <div className="card bg-primary-content text-primary shadow-lg">
              <div className="card-body text-center">
                <div className="flex justify-center mb-3">
                  <DocumentTextIcon className="w-12 h-12" />
                </div>
                <h3 className="card-title justify-center text-lg font-bold mb-2">
                  Send Request
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  Fill out our form for detailed quotes
                </p>
                <button className="btn btn-primary btn-sm" disabled>Feature Coming Soon</button>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-primary-content/80">
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-2" />
              <span>Response within 2 hours</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-2" />
              <span>Free estimates</span>
            </div>
            <div className="flex items-center">
              <BoltIcon className="w-5 h-5 mr-2" />
              <span>Same-day service available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
