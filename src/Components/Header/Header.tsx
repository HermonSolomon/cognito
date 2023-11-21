import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

const Header = () => {
  const cartProducts = useSelector((state: RootState) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link to="/">Logo</Link>
          </div>

          {!isMobileMenuOpen ? (
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          ) : (
            <div className="close" onClick={() => setIsMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                color="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          )}

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute z-50 top-12 h-1/2 left-0 w-full bg-gray-800">
              <Link
                to="/"
                className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/cart"
                className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                aria-current="page"
              >
                Cart
              </Link>
              <Link
                to="/cart"
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
              >
                <div className="absolute">
                  <div className="relative top-1 left-8">
                    {cartProducts.length}
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
            </div>
          )}

          {/* Desktop menu */}
          <div className="md:flex items-center hidden">
            <Link
              to="/"
              className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
              aria-current="page"
            >
              Cart
            </Link>
            <Link
              to="/cart"
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
            >
              <div className="absolute">
                <div className="relative top-1 left-8">
                  {cartProducts.length}
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
