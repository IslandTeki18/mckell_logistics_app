import * as React from 'react'

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
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}