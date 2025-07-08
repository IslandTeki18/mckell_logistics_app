import React from "react"
import { PhoneIcon, CheckIcon } from "@heroicons/react/24/outline";

type HowToBookSectionProps = {};

export const HowToBookSection = (props: HowToBookSectionProps) => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    jobType: "",
    address: "",
    timeframe: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const jobTypes = [
    "Site-to-Site Hauling",
    "Pit-to-Site Delivery",
    "Demolition Cleanup",
    "Material Delivery",
    "Debris Removal",
    "Other",
  ];

  const timeframes = [
    "ASAP",
    "Within 24 hours",
    "Within 3 days",
    "Within a week",
    "Flexible timing",
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            How to Book
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Get started with your hauling project today - quick form or give us
            a call
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-base-content mb-6 justify-center">
                Request a Quote
              </h3>

              <div className="max-w-md mx-auto w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="">Select job type</option>
                      {jobTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control">
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Job site address or location"
                      className="textarea textarea-bordered h-20 w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="">When do you need this done?</option>
                      {timeframes.map((timeframe, index) => (
                        <option key={index} value={timeframe}>
                          {timeframe}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-full"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone Contact */}
            <div className="card bg-primary text-primary-content shadow-lg">
              <div className="card-body text-center">
                <PhoneIcon className="w-16 h-16 mx-auto mb-4 text-primary-content" />
                <h3 className="card-title justify-center text-xl font-bold mb-2">
                  Call Us Directly
                </h3>
                <p className="text-primary-content/90 mb-4">
                  For immediate assistance or urgent requests
                </p>
                <div className="text-2xl font-bold mb-2">(801) 555-0123</div>
                <div className="text-sm text-primary-content/80">
                  Monday - Friday: 7 AM - 6 PM
                  <br />
                  Saturday: 8 AM - 4 PM
                  <br />
                  Sunday: Emergency only
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg font-bold text-base-content mb-4">
                  Quick Response Guarantee
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">
                      Form responses within 2 hours
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Free quotes and estimates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Same-day service available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
