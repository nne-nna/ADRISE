import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      price: "$0",
      name: "Great for personal use or as a first step to explore Adrise",
      buttonText: "Upgrade",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
      features: [
        "Feature offered by Adrise",
        "Feature offered by Adrise",
        "Feature offered by Adrise",
        "Feature offered by Adrise",
      ],
    },
    {
      price: "$0",
      name: "Great for personal use or as a first step to explore Adrise",
      buttonText: "Upgrade",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
      features: [
        "Feature offered by Adrise",
        "Feature offered by Adrise",
        "Feature offered by Adrise",
        "Feature offered by Adrise",
      ],
    },
    {
      price: "$0",
      name: "Great for personal use or as a first step to explore Adrise",
      buttonText: "Upgrade",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
      features: [
        "Feature offered by Adrise",
        "Feature offered by Adrise",
        "Feature offered by Adrise",
        "Feature offered by Adrise",
      ],
    },
  ];

  return (
    <section className="px-6 max-w-6xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold mb-4 font-aloevera">
          We mentioned 'cheaper'...
          <br />
          See for yourself.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#26233F75] border border-[#FFFFFF33] rounded-lg relative transition-all duration-300 hover:bg-[#2a2745] hover:border-[#FFFFFF55] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 group cursor-pointer"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 font-aloevera transition-colors duration-300 group-hover:text-purple-300">{plan.price}</h3>
              <h4 className="text-sm font-semibold mb-4 font-aloevera-light transition-colors duration-300 group-hover:text-gray-200">{plan.name}</h4>
              <button
                className={`w-full ${plan.buttonStyle} py-3 rounded-lg font-semibold font-aloevera mb-4 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-500/25`}
              >
                {plan.buttonText}
              </button>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300 transition-colors duration-300 group-hover:text-gray-200"
                  >
                    <Check className="pr-2 text-[#6B39FF] transition-colors duration-300 group-hover:text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/ellipse-4.png"
              alt="Ellipse"
              className="absolute bottom-0 left-0 transition-opacity duration-300 group-hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
};