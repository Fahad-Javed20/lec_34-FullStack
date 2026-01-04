import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-linear-to-r from-blue-500 to-cyan-400 p-2 rounded-xl shadow-md group-hover:shadow-xl transition-all group-hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                NextGen
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                Innovate Together
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 relative overflow-hidden group">
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
