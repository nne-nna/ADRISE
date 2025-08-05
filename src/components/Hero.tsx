import { ChevronRight, Infinity } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative px-6 py-12 text-center max-w-6xl mx-auto">
      <div className="relative z-10">
        <div className="inline-flex items-center border border-[#5B6575] rounded-full px-4 py-1 space-x-1 w-fit mb-6 hover:border-purple-400 hover:bg-[#FFFFFF08] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group">
          <img
            src="/light-bolt.png"
            alt="Light Bolt"
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
          <p className="text-sm font-base font-aloevera group-hover:text-purple-300 transition-colors duration-300">
            BOOSTING YOUR PRODUCT
          </p>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold font-akira mb-6 tracking-wide hover:scale-[1.02] transition-transform duration-500 cursor-default">
          <span className="bg-[#65658A] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
            FIRST AI{" "}
          </span>{" "}
          TO REPLACE
          <br />
          <span className="bg-gradient-to-r from-[#FFFFFF] to-[#65658A] bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300">
            {" "}
            MARKETING AGENCIES{" "}
          </span>
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto font-aloevera hover:text-gray-200 transition-colors duration-300">
          Lay back and let AI audit your campaigns, boost your SEO, and generate
          social media posts that drive engagement.
        </p>

        <button className="bg-[#6B39FF] hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-lg text-sm font-medium font-aloevera-light mb-2 flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
          <span className="group-hover:text-white transition-colors duration-300">
            Join our exclusive waitlist
          </span>
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="text-gray-400 text-sm font-aloevera-light mb-20 hover:text-gray-300 transition-colors duration-300">
          You're early, get a chance to get sweet offers when we kick start
        </p>

        <div className="w-full flex justify-center px-4 sm:px-6 md:px-0">
          <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#A083FF] to-[#3C8BD9] hover:from-purple-400 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] group">
            <div className="flex items-center space-x-6 bg-gray-800 hover:bg-gray-750 rounded-lg px-1 py-2 transition-colors duration-300">
              <input
                type="email"
                placeholder="Make a tweet about getting listed on CMC"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-70 text-white font-aloevera-light text-sm placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 transition-colors duration-300"
              />
              <button className="bg-[#6B39FF] hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 p-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110 group/btn">
                <Infinity className="w-4 h-4 text-white transition-transform duration-300 group-hover/btn:rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
