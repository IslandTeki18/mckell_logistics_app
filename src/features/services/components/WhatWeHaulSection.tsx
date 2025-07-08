import * as React from "react";

type WhatWeHaulSectionProps = {};

export const WhatWeHaulSection = (props: WhatWeHaulSectionProps) => {
  const materials = [
    {
      icon: "🏗️",
      title: "Dirt, Gravel, Sand",
      description: "Various construction materials",
      image: "https://placehold.co/300x200/8B4513/FFFFFF?text=Dirt+%26+Gravel",
    },
    {
      icon: "🛣️",
      title: "Asphalt, Concrete Debris",
      description: "Road and construction debris",
      image:
        "https://placehold.co/300x200/696969/FFFFFF?text=Asphalt+%26+Concrete",
    },
    {
      icon: "🏗️",
      title: "Construction Waste",
      description: "General construction site waste",
      image:
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Construction+Waste",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            What We Haul
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            We provide reliable hauling services for a wide range of materials
            and debris
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure className="px-4 pt-4">
                <img
                  src={material.image}
                  alt={material.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <div className="text-4xl mb-2">{material.icon}</div>
                <h3 className="card-title justify-center text-lg font-semibold text-base-content">
                  {material.title}
                </h3>
                <p className="text-base-content/70 text-sm">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
