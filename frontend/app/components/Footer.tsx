import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const categories = [
    { title: "Product", links: ["Features", "Pricing", "Documentation", "API Reference"] },
    { title: "Company", links: ["About Us", "Careers", "Press", "Partners"] },
    { title: "Resources", links: ["Blog", "Newsletter", "Events", "Help Center"] },
    { title: "Support", links: ["Contact", "FAQ", "Live Chat", "Status"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"] },
    { title: "Social", links: ["Twitter", "LinkedIn", "Facebook", "Instagram"] },
  ];

  const socialIcons = [
    { icon: <TwitterIcon fontSize="small" />, name: "Twitter" },
    { icon: <FacebookIcon fontSize="small" />, name: "Facebook" },
    { icon: <InstagramIcon fontSize="small" />, name: "Instagram" },
    { icon: <LinkedInIcon fontSize="small" />, name: "LinkedIn" },
  ];

  return (
    <footer className="bg-linear-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">NextGen</h2>
              <p className="text-xs text-gray-500">Innovate Together</p>
            </div>
          </div>
          <p className="text-gray-600 max-w-md text-sm leading-relaxed">
            Build the future of the web with powerful tools, seamless deployment, and limitless scalability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-4">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 text-sm mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2026 NextGen. All rights reserved.</p>
          <p className="text-sm text-gray-500">Built with passion and innovation</p>

          <div className="flex gap-3 mt-3 md:mt-0">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center transition-all hover:bg-blue-600 hover:text-white hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
