import React from "react"
import {
  TruckIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  BoltIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
// @ts-ignore
import truck from "url:~/src/assets/images/truck_trailer.jpg";

type EquipmentCapabilitiesSectionProps = {};

export const EquipmentCapabilitiesSection = (
  props: EquipmentCapabilitiesSectionProps
) => {
  const capabilities = [
    {
      icon: TruckIcon,
      title: "Site-to-Site",
      description: "Moving materials between job sites efficiently",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Pit-to-Site",
      description: "Direct delivery from quarries and pits",
    },
    {
      icon: BuildingOffice2Icon,
      title: "Demo Hauling",
      description: "Removal of demolition debris and waste",
    },
    {
      icon: BoltIcon,
      title: "Short Notice",
      description: "Daily and hourly dispatch available",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Equipment & Capabilities
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Professional hauling equipment built for serious construction work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Equipment Showcase */}
          <div className="card bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src={truck}
                alt="Truck with side dump trailer"
                className="rounded-lg w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-base-content">
                Truck + Side Dump Trailer
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold text-secondary mr-2">
                    Max Payload:
                  </span>
                  <span className="text-base-content">25-27 tons</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-secondary mr-2">
                    Trailer Type:
                  </span>
                  <span className="text-base-content">
                    Side dump for easy unloading
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-secondary mr-2">
                    Capacity:
                  </span>
                  <span className="text-base-content">
                    Professional grade equipment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="card-body text-center p-6">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-secondary" />
                    <h4 className="font-bold text-base-content mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-base-content/70 text-sm">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="alert alert-info shadow-lg max-w-2xl mx-auto">
            <InformationCircleIcon className="stroke-current flex-shrink-0 w-6 h-6" />
            <div>
              <h3 className="font-bold">Ready for Your Project</h3>
              <div className="text-xs">
                Short notice availability • Daily and hourly dispatch •
                Professional service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
