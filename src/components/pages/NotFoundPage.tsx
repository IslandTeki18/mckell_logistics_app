import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* 404 Number */}
          <div className="mb-8 relative">
            <h1 className="text-9xl font-extrabold text-primary">404</h1>
            <div className="badge badge-error badge-lg absolute top-4 right-4 rotate-12 font-semibold">
              Page Not Found
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-base-content">
              Oops! We can't find that page
            </h2>
            <p className="text-base-content/70 text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Illustration */}
          <div className="my-8">
            <svg
              className="mx-auto h-40 w-40 text-base-content/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-8a8 8 0 100 16 8 8 0 000-16z"
              />
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="btn btn-primary btn-lg">
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-outline btn-lg"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go Back
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-base-300">
            <p className="text-sm text-base-content/60">
              Need help? Check our{" "}
              <Link to="/contact" className="link link-primary font-medium">
                contact page
              </Link>{" "}
              or visit our{" "}
              <Link to="/services" className="link link-primary font-medium">
                services
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
