import React from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/outline";

type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars3Icon className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold">
          McKell Logistics
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="tel:+18016094144" className="btn btn-primary">
          <PhoneIcon className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </div>
  );
};
