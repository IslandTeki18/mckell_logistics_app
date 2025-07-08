import * as React from "react";
import { HomePage, ContactPage, AboutPage, ServicesPage } from "~src/features";
import { NotFoundPage } from "~src/components/pages/NotFoundPage";
import { Layout } from "./Layout";

export const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
