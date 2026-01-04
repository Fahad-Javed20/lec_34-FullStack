import React from 'react';
import { Home, Mail, Users, Info, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Contact Us', href: 'contactus', icon: Mail },
    { name: 'Users', href: 'users', icon: Users },
    { name: 'About', href: 'about', icon: Info }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <nav className="bg-linear-to-r from-gray-50 to-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="relative px-4 py-2.5 text-gray-700 font-medium text-sm transition-all hover:text-blue-600 rounded-lg hover:bg-white group flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <Icon className="w-4 h-4" strokeWidth={2} />
                    <span className="relative">{link.name}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-10 transition-all duration-200"></span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <TrendingUp className="w-4 h-4 text-green-600" strokeWidth={2} />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-900">1.2K</span>
                  <span className="text-xs text-gray-500">Active Users</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-xs font-medium text-gray-700">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;