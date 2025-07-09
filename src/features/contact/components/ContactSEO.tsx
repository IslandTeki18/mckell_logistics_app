import React from "react";
import { Helmet } from "react-helmet";

export const ContactSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "McKell Logistics",
    description:
      "Contact McKell Logistics for professional hauling services in Utah. Call (801) 609-4144 for free quotes on material delivery, site cleanup, and construction hauling.",
    url: "https://mckelllogistics.com/contact",
    telephone: "(801) 609-4144",
    email: "info@mckelllogistics.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Utah",
      addressRegion: "UT",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.321,
      longitude: -111.0937,
    },
    areaServed: {
      "@type": "Place",
      name: "Utah",
    },
    openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Check", "Credit Card"],
    hasMap: "https://maps.google.com/maps?q=Utah",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "(801) 609-4144",
        contactType: "customer service",
        areaServed: "US-UT",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "(801) 609-4144",
        contactType: "sales",
        areaServed: "US-UT",
        availableLanguage: "English",
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>
        Contact McKell Logistics | Get Your Free Hauling Quote Today - (801)
        609-4144
      </title>
      <meta
        name="description"
        content="Contact McKell Logistics for professional hauling services in Utah. Call (801) 609-4144 for free quotes on material delivery, demolition cleanup, and site-to-site hauling. Available Mon-Fri 7AM-6PM."
      />
      <meta
        name="keywords"
        content="contact mckell logistics, utah hauling quote, free hauling estimate, (801) 609-4144, hauling services utah contact, material delivery quote"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://mckelllogistics.com/contact" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mckelllogistics.com/contact" />
      <meta
        property="og:title"
        content="Contact McKell Logistics | Free Hauling Quotes Utah"
      />
      <meta
        property="og:description"
        content="Get your free hauling quote today! Call (801) 609-4144 or fill out our quick form. Professional hauling services throughout Utah."
      />
      <meta
        property="og:image"
        content="https://mckelllogistics.com/contact-og-image.jpg"
      />
      <meta property="og:site_name" content="McKell Logistics" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mckelllogistics.com/contact" />
      <meta
        name="twitter:title"
        content="Contact McKell Logistics | Free Hauling Quotes Utah"
      />
      <meta
        name="twitter:description"
        content="Get your free hauling quote today! Call (801) 609-4144 or request a quote online. Professional service throughout Utah."
      />
      <meta
        name="twitter:image"
        content="https://mckelllogistics.com/contact-twitter-image.jpg"
      />

      {/* Contact & Local SEO */}
      <meta name="geo.region" content="US-UT" />
      <meta name="geo.placename" content="Utah" />
      <meta name="geo.position" content="39.3210;-111.0937" />
      <meta name="ICBM" content="39.3210, -111.0937" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#1f2937" />

      {/* Contact page specific meta */}
      <meta name="contact" content="(801) 609-4144" />
      <meta name="coverage" content="Utah" />
      <meta name="distribution" content="Local" />
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
              name: "Contact",
              item: "https://mckelllogistics.com/contact",
            },
          ],
        })}
      </script>


      {/* WebSite Schema for sitelinks searchbox */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "McKell Logistics",
          url: "https://mckelllogistics.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://mckelllogistics.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </Helmet>
  );
};
