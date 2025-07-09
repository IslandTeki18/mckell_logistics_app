import React from "react";
import { Helmet } from "react-helmet";

export const AboutSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "McKell Logistics",
    description:
      "Family-owned hauling and logistics company serving Utah since [YEAR]. Professional, reliable service for contractors, developers, and businesses throughout the state.",
    url: "https://mckelllogistics.com",
    logo: "https://mckelllogistics.com/logo.png",
    telephone: "(801) 609-4144",
    email: "info@mckelllogistics.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Utah",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "Utah",
    },
    foundingDate: "2025",
    numberOfEmployees: "1",
    slogan: "Reliable hauling solutions for Utah's construction industry",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.321,
        longitude: -111.0937,
      },
      geoRadius: "200000", // 200km radius
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
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Material Delivery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Demolition Cleanup",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>
        About McKell Logistics | Utah's Trusted Hauling Company Since [YEAR]
      </title>
      <meta
        name="description"
        content="Learn about McKell Logistics, Utah's trusted family-owned hauling company. Professional, reliable service for contractors and businesses. Serving Utah with integrity and expertise since [YEAR]."
      />
      <meta
        name="keywords"
        content="about mckell logistics, utah hauling company, family owned business, professional hauling utah, construction logistics utah, reliable hauling services"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://mckelllogistics.com/about" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mckelllogistics.com/about" />
      <meta
        property="og:title"
        content="About McKell Logistics | Utah's Trusted Hauling Company"
      />
      <meta
        property="og:description"
        content="Family-owned hauling company serving Utah with professional, reliable service for contractors and businesses. Learn about our commitment to excellence."
      />
      <meta
        property="og:image"
        content="https://mckelllogistics.com/about-og-image.jpg"
      />
      <meta property="og:site_name" content="McKell Logistics" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mckelllogistics.com/about" />
      <meta
        name="twitter:title"
        content="About McKell Logistics | Utah's Trusted Hauling Company"
      />
      <meta
        name="twitter:description"
        content="Family-owned hauling company serving Utah with professional, reliable service. Learn about our story and commitment to excellence."
      />
      <meta
        name="twitter:image"
        content="https://mckelllogistics.com/about-twitter-image.jpg"
      />

      {/* Local & Business SEO */}
      <meta name="geo.region" content="US-UT" />
      <meta name="geo.placename" content="Utah" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1f2937" />

      {/* Business specific meta */}
      <meta
        name="subject"
        content="About McKell Logistics Utah Hauling Company"
      />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

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
              name: "About",
              item: "https://mckelllogistics.com/about",
            },
          ],
        })}
      </script>
    </Helmet>
  );
};
