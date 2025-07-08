import React from "react";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  TruckIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
// @ts-ignore
import truck from "url:~src/assets/images/truck_trailer.jpg";

type HeroSectionProps = {};

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-base-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      </div>

      <div className="hero min-h-screen relative">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4">
          {/* Image Section */}
          <div className="max-w-md lg:max-w-xl relative">
            {/* Trust Badge */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="badge badge-primary badge-lg p-4 shadow-lg">
                <StarIcon className="w-4 h-4 mr-1" />
                Utah County Trusted
              </div>
            </div>

            <img
              src={truck}
              alt="Construction hauling truck with side dump trailer"
              className="rounded-2xl shadow-2xl w-full border-4 border-base-300"
            />

            {/* Quick Features */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
              <div className="grid grid-cols-3 gap-2">
                <div className="card bg-success text-success-content shadow-lg p-2">
                  <div className="text-center">
                    <CheckCircleIcon className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-xs font-bold">Licensed</span>
                  </div>
                </div>
                <div className="card bg-warning text-warning-content shadow-lg p-2">
                  <div className="text-center">
                    <TruckIcon className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-xs font-bold">Insured</span>
                  </div>
                </div>
                <div className="card bg-info text-info-content shadow-lg p-2">
                  <div className="text-center">
                    <ClockIcon className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-xs font-bold">On-Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-md lg:max-w-2xl text-center lg:text-left">
            {/* Tag Line */}
            <div className="badge badge-secondary badge-lg mb-4 animate-pulse mt-6 lg:mt-0">
              🚛 Same Day Service Available
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-base-content leading-tight">
              Reliable Construction Hauling in{" "}
              <span className="text-primary">Utah County</span>
            </h1>

            <p className="py-6 text-xl text-base-content/80 leading-relaxed">
              We haul dirt, gravel, sand, and debris with a side dump trailer!{" "}
              <span className="text-secondary font-semibold">
                Fast, safe, dependable!
              </span>
            </p>

            {/* Value Props */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircleIcon className="w-5 h-5 text-success mr-3" />
                <span className="text-base-content">
                  Free estimates on all projects
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircleIcon className="w-5 h-5 text-success mr-3" />
                <span className="text-base-content">
                  Response within 2 hours
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircleIcon className="w-5 h-5 text-success mr-3" />
                <span className="text-base-content">
                  Local Utah County expertise
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="tel:+18015550123"
                className="btn btn-secondary btn-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a
                href="sms:+18015550123"
                className="btn btn-outline btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
                Quick Text
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href="tel:+18015550123"
          className="btn btn-secondary btn-circle btn-lg shadow-2xl animate-bounce"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
