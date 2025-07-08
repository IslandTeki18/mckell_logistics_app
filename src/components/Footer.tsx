type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">McKell Logistics</h3>
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
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-base-content/80">
              <p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@mckelllogistics.com"
                  className="hover:text-primary transition-colors"
                >
                  info@mckelllogistics.com
                </a>
              </p>
              <p>Utah County, UT</p>
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
