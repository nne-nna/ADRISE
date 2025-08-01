export const CTA = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-[#6B39FF] to-[#211151] rounded-2xl p-12 text-white flex items-center justify-center flex-col md:flex-row gap-20 relative">
        <img
          src="/hero-vector-1.png"
          alt="Ellipse Background"
          className="absolute left-0 top-0 h-full w-1/2 object-contain object-left z-0 pointer-events-none"
        />
        <div className="md:w-1/2 flex items-center justify-start relative z-10">
          <div className="flex flex-col items-start space-y-4">
            <img src="/Logo.png" alt="Logo" className="w-10 h-10" />
            <p className="text-xl text-[#FFFFFFD9] font-aloevera">
              Be among the first to enjoy a cheaper, easier way to do marketing. We'll inform you once we've opened for access!
            </p>
          </div>
        </div>
        <div className="md:w-1/2 text-center">
          <div className="space-y-4 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#FFFFFF0A] border border-[#FFFFFF4D] font-aloevera-light text-white rounded-lg px-4 py-4 w-full placeholder:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/60 focus:bg-[#FFFFFF15] hover:border-white/60"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#FFFFFF0A] border border-[#FFFFFF4D] font-aloevera-light text-white rounded-lg px-4 py-4 w-full placeholder:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/60 focus:bg-[#FFFFFF15] hover:border-white/60"
              />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <img src="/send-icon.png" />
              </span>
              <input
                type="text"
                placeholder="Telegram username (optional)"
                className="bg-[#FFFFFF0A] border border-[#FFFFFF4D] font-aloevera-light text-white rounded-lg pl-12 pr-4 py-4 w-full placeholder:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/60 focus:bg-[#FFFFFF15] hover:border-white/60"
              />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <img src="/twitter-icon.png" />
              </span>
              <input
                type="text"
                placeholder="Twitter username (optional)"
                className="bg-[#FFFFFF0A] border border-[#FFFFFF4D] font-aloevera-light text-white rounded-lg pl-12 pr-4 py-4 w-full placeholder:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/60 focus:bg-[#FFFFFF15] hover:border-white/60"
              />
            </div>
            <button className="bg-white text-black px-6 py-4 rounded-lg font-semibold w-full font-aloevera transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 active:bg-gray-200">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};