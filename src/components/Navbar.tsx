import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/outline";

type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    // Remove focus from the dropdown button to close it
    const dropdown = document.activeElement as HTMLElement;
    if (dropdown) {
      dropdown.blur();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeDropdown();
    }
  };

  return (
    <nav
      className="navbar bg-base-100 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onKeyDown={handleKeyDown}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            aria-label="Toggle navigation menu"
          >
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <li role="none">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={closeDropdown}
                role="menuitem"
              >
                Home
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={closeDropdown}
                role="menuitem"
              >
                Services
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={closeDropdown}
                role="menuitem"
              >
                About
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={closeDropdown}
                role="menuitem"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl font-bold"
          aria-label="McKell Logistics - Go to homepage"
        >
          McKell Logistics
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1"
          role="menubar"
          aria-label="Desktop navigation menu"
        >
          <li role="none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
              role="menuitem"
            >
              Home
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
              role="menuitem"
            >
              Services
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
              role="menuitem"
            >
              About
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
              role="menuitem"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="tel:+18016094144"
          className="btn btn-primary"
          aria-label="Call McKell Logistics at 801-609-4144"
        >
          <PhoneIcon className="w-4 h-4 mr-2" aria-hidden="true" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </nav>
  );
};
