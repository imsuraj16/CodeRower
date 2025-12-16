import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-full md:w-72 md:h-screen sticky top-0 flex flex-col gap-4 md:gap-8 p-4 md:p-6 border-b md:border-b-0 md:border-r border-white/5 bg-black/20 backdrop-blur-xl z-50">
      {/* Brand / Logo Area */}
      <div className="flex items-center justify-between md:mb-4">
        <div className="flex items-center gap-3 px-2">
          <div className="relative flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-xl shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            CodeRower
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col gap-3 h-full`}>
        <nav className="flex flex-col gap-3">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 font-medium tracking-wide overflow-hidden ${
              isActive("/")
                ? "text-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
                : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isActive("/")
                  ? "text-white"
                  : "text-neutral-500 group-hover:text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Fetching Config
          </Link>
          <Link
            to="/update"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 font-medium tracking-wide overflow-hidden ${
              isActive("/update")
                ? "text-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
                : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isActive("/update")
                  ? "text-white"
                  : "text-neutral-500 group-hover:text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Update Remark
          </Link>
        </nav>

        <div className="mt-auto">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                RV
              </div>
              <div>
                <p className="text-sm font-medium text-white">Suraj Verma</p>
                <p className="text-xs text-neutral-500">Admin Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
