import React from "react";
import { Helmet } from "react-helmet";

export const HomepageSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "McKell Logistics",
    description:
      "Professional hauling and logistics services in Utah. Site-to-site hauling, material delivery, demolition cleanup, and debris removal.",
    url: "https://mckelllogistics.com",
    telephone: "(801) 609-4144",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Utah",
      addressCountry: "US",
    },
    serviceArea: {
      "@type": "Place",
      name: "Utah",
    },
    services: [
      "Site-to-Site Hauling",
      "Pit-to-Site Delivery",
      "Demolition Cleanup",
      "Material Delivery",
      "Debris Removal",
    ],
    openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>
        McKell Logistics - Professional Hauling & Material Delivery Services in
        Utah
      </title>
      <meta
        name="description"
        content="McKell Logistics provides reliable hauling and logistics services throughout Utah. Specializing in site-to-site hauling, material delivery, demolition cleanup, and debris removal. Call (801) 609-4144 for a free quote."
      />
      <meta
        name="keywords"
        content="hauling services utah, material delivery, demolition cleanup, debris removal, site-to-site hauling, logistics utah, construction hauling"
      />
      <meta name="author" content="McKell Logistics" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://mckelllogistics.com" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mckelllogistics.com" />
      <meta
        property="og:title"
        content="McKell Logistics - Professional Hauling & Material Delivery Services"
      />
      <meta
        property="og:description"
        content="Reliable hauling and logistics services throughout Utah. Site-to-site hauling, material delivery, demolition cleanup, and debris removal."
      />
      <meta
        property="og:image"
        content="https://mckelllogistics.com/og-image.jpg"
      />
      <meta property="og:site_name" content="McKell Logistics" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mckelllogistics.com" />
      <meta
        name="twitter:title"
        content="McKell Logistics - Professional Hauling Services"
      />
      <meta
        name="twitter:description"
        content="Reliable hauling and logistics services throughout Utah. Call (801) 609-4144 for a free quote."
      />
      <meta
        name="twitter:image"
        content="https://mckelllogistics.com/twitter-image.jpg"
      />

      {/* Mobile & Local SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="US-UT" />
      <meta name="geo.placename" content="Utah" />
      <meta name="theme-color" content="#1f2937" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};
