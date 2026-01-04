import React from 'react';

const NavComponent = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact Us', href: 'contactus' },
    { name: 'Users', href: 'users' },
    { name: 'About', href: 'about' }
  ];

  return (
    <nav className="bg-linear-to-r from-blue-50 via-white to-cyan-50 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex items-center gap-8 w-full">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-4 py-1 text-gray-700 font-medium text-base transition-all duration-300 hover:text-blue-600 group"
              >
                <span className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
                
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;