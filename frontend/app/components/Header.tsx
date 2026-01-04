import React from "react";
import { Search } from "lucide-react";

const Header = () => {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="relative flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl font-medium text-gray-900 tracking-normal leading-tight">
                  NextGen
                </h1>
                <p className="text-xs text-gray-600 font-normal tracking-normal leading-tight">
                  Innovate Together
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-gray-50 rounded border border-gray-300 px-3 py-1.5 shadow-sm">
                <Search className="w-5 h-5 text-gray-500" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500 w-48 font-normal"
                />
              </div>

              <button className="px-4 py-2 text-blue-600 font-medium rounded hover:bg-blue-50 transition-colors text-sm uppercase tracking-wide">
                Sign In
              </button>

              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors text-sm uppercase tracking-wide shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;