import React from "react";
import { NavLink } from "react-router-dom";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <TruckIcon className="w-6 h-6 text-primary mr-2" />
              <h3 className="font-bold text-lg">McKell Logistics</h3>
            </div>
            <p className="text-base-content/70 mb-2">
              Professional construction hauling services in Utah County
            </p>
            <p className="text-base-content/70">Licensed & Insured</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-base-content/80">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-base-content/80">
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <a
                  href="tel:+18016094144"
                  className="hover:text-primary transition-colors"
                >
                  (801) 609-4144
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <a
                  href="mailto:logisticsmckell@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  logisticsmckell@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span>Utah County, UT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-content/20 mt-8 pt-8 text-center text-base-content/60">
          <p>&copy; 2025 McKell Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
