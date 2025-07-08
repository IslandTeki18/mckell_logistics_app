import React from "react";
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
// @ts-ignore
import rockImage from "url:../assets/images/dirt_gravel_sand.jpg";
// @ts-ignore
import constructionWasteImage from "url:../assets/images/construction_waste.jpg";
// @ts-ignore
import asphaltConcreteImage from "url:../assets/images/asphalt_concrete.jpg";


type WhatWeHaulSectionProps = {};

export const WhatWeHaulSection = (props: WhatWeHaulSectionProps) => {
  const materials = [
    {
      icon: BuildingOffice2Icon,
      title: "Dirt, Gravel, Sand",
      description: "Various construction materials",
      image: rockImage,
    },
    {
      icon: HomeModernIcon,
      title: "Asphalt, Concrete Debris",
      description: "Road and construction debris",
      image: asphaltConcreteImage,
    },
    {
      icon: TrashIcon,
      title: "Construction Waste",
      description: "General construction site waste",
      image: constructionWasteImage,
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
          {materials.map((material, index) => {
            const IconComponent = material.icon;
            return (
              <div
                key={index}
                className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <figure className="px-2 pt-2">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body text-center">
                  <IconComponent className="w-12 h-12 mx-auto mb-2 text-secondary" />
                  <h3 className="card-title justify-center text-lg font-semibold text-base-content">
                    {material.title}
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    {material.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
