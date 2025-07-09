import React from "react";
import { Helmet } from "react-helmet";

export const ServicesSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "McKell Logistics Hauling Services",
    provider: {
      "@type": "LocalBusiness",
      name: "McKell Logistics",
      telephone: "(801) 609-4144",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Utah",
        addressCountry: "US",
      },
    },
    serviceType: "Hauling and Logistics Services",
    description:
      "Comprehensive hauling services including site-to-site hauling, material delivery, demolition cleanup, and debris removal throughout Utah.",
    areaServed: {
      "@type": "Place",
      name: "Utah",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hauling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site-to-Site Hauling",
            description:
              "Efficient material transport between construction sites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pit-to-Site Delivery",
            description:
              "Direct delivery of materials from quarries to job sites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Demolition Cleanup",
            description: "Complete debris removal and site cleanup services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Material Delivery",
            description:
              "Reliable delivery of construction materials and supplies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Debris Removal",
            description: "Professional cleanup and debris hauling services",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>
        Hauling Services Utah | McKell Logistics - Material Delivery & Site
        Cleanup
      </title>
      <meta
        name="description"
        content="Professional hauling services in Utah. Site-to-site hauling, material delivery, demolition cleanup, debris removal. Serving contractors, developers, and businesses. Free quotes available."
      />
      <meta
        name="keywords"
        content="hauling services utah, material delivery utah, demolition cleanup, debris removal, site-to-site hauling, construction hauling, aggregate delivery, dirt hauling utah"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://mckelllogistics.com/services" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mckelllogistics.com/services" />
      <meta
        property="og:title"
        content="Professional Hauling Services Utah | McKell Logistics"
      />
      <meta
        property="og:description"
        content="Comprehensive hauling services throughout Utah. Site-to-site hauling, material delivery, demolition cleanup, and debris removal for contractors and businesses."
      />
      <meta
        property="og:image"
        content="https://mckelllogistics.com/services-og-image.jpg"
      />
      <meta property="og:site_name" content="McKell Logistics" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mckelllogistics.com/services" />
      <meta
        name="twitter:title"
        content="Professional Hauling Services Utah | McKell Logistics"
      />
      <meta
        name="twitter:description"
        content="Site-to-site hauling, material delivery, demolition cleanup throughout Utah. Call (801) 609-4144 for free quote."
      />
      <meta
        name="twitter:image"
        content="https://mckelllogistics.com/services-twitter-image.jpg"
      />

      {/* Local SEO */}
      <meta name="geo.region" content="US-UT" />
      <meta name="geo.placename" content="Utah" />

      {/* Service-specific meta */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1f2937" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://mckelllogistics.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://mckelllogistics.com/services",
            },
          ],
        })}
      </script>
    </Helmet>
  );
};
