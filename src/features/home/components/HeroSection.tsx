import * as React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";

type HeroSectionProps = {};

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-md lg:max-w-lg">
            <img
              src="https://placehold.co/600x400"
              alt="Construction hauling truck with side dump trailer"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="max-w-md lg:max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-bold text-base-content">
              Reliable Construction Hauling in the Utah County area
            </h1>
            <p className="py-6 text-lg text-base-content/80">
              We haul dirt, gravel, sand, and debris with a side dump trailer!
              Fast, safe, dependable!
            </p>
            <button className="btn btn-secondary btn-lg">
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
