export const Footer = () => {
  const footerSections = [
    {
      links: ["About", "Features", "FAQs", "Pricing"],
    },
    {
      links: ["Terms of Service", "Privacy Policy"],
    },
  ];

  return (
    <footer className="px-6 pt-12 max-w-7xl mx-auto border-gray-800">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/Logo.png" alt="Logo" className="w-6 h-6" />
            <span className="text-xl font-semibold font-akira">ADRISE</span>
          </div>
          <p className="text-white text-sm mb-4 font-aloevera-light leading-6">
            Upgrade your marketing to intelligent automation. Adrise handles AD
            campaign analysis, SEO optimization, and social media content
            creation while maintaining your brand's unique voice.
          </p>
          <p className="text-white text-sm mb-4 font-semibold font-aloevera">
            Work smarter, not harder
          </p>
        </div>
        <div>
          <img
            src="/footer-image.png"
            alt="ADRISE Product"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="font-aloevera leading-12 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              {index === 1 && (
                <div className="flex space-x-4 mt-4">
                  <img
                    src="/send-icon.png"
                    alt="send"
                    className="w-8 h-8 border border-white rounded p-2 cursor-pointer transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-110 hover:shadow-md hover:shadow-purple-400/25"
                  />
                  <img
                    src="/twitter-icon.png"
                    alt="twitter"
                    className="w-8 h-8 border border-white rounded p-2 cursor-pointer transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-110 hover:shadow-md hover:shadow-purple-400/25"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <img src="/ADRISE.ai.png" alt="ADRISE logo" />
      </div>
    </footer>
  );
};