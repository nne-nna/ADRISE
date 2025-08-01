import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
      <div className="relative">
        <img src="/nav-shadow.png" className="absolute" />

        <div className="relative z-10 flex items-center space-x-2 p-4">
          <img src="/Logo.png" alt="Logo" className="w-5 h-5" />
          <span className="text-lg font-bold font-akira">ADRISE</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-10 font-aloevera">
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Features
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          FAQs
        </a>
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full group"
          >
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
              Resources
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </a>

          <div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 z-50 ${
              isDropdownOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <div className="bg-[#FFFFFF1A] backdrop-blur-2xl border border-[#FFFFFF38] rounded-xl p-6 shadow-2xl min-w-[600px]">
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Docs
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Getting Started
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Social media posts
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      AD Auditing
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      SEO Optimization
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Community
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Telegram
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src="/dropdown.png"
                      alt="Featured content"
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-medium leading-relaxed">
                      How Adrise changed the marketing game — and here's how
                      we're moving going forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Docs
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Pricing
        </a>
      </div>

      <div className="flex items-center space-x-1.5">
        <button className="p-2 text-gray-300 border border-[#FFFFFF38] rounded-lg hover:text-white hover:border-blue-400 hover:bg-[#FFFFFF15] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 transform">
          <img
            src="/twitter-icon.png"
            className="transition-transform duration-300"
          />
        </button>
        <button className="p-2 text-gray-300 border border-[#FFFFFF38] rounded-lg hover:text-white hover:border-blue-400 hover:bg-[#FFFFFF15] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 transform">
          <img
            src="/send-icon.png"
            className="transition-transform duration-300"
          />
        </button>
        <button className="bg-[#FFFFFF1A] border border-[#FFFFFF38] text-sm font-aloevera hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};
