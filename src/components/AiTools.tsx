export const AITools = () => {
  const tools = [
    {
      title: "Generate engaging social media posts",
      description:
        "Mix great copywriting with intelligent visual design. No garbled AI text. Perfectly legible and editable, excellent for images without captions",
      image: "/AiTools-1.png",
      icon: "/1.png",
    },
    {
      title: "SEO Audit + Optimization",
      description:
        "Provides a complete picture of your search engine optimization opportunities and ways to finetune it to leap ahead of the competition",
      image: "/AiTools-2.png",
      icon: "/2.png",
    },
    {
      title: "Audit your AD campaigns",
      description:
        "Auditing your performance across Google Ads, Facebook Ads and more to give you insights you can actually use to 10x your reach",
      image: "/AiTools-3.png",
      icon: "/3.png",
    },
  ];

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-white min-h-screen lg:mt-20">
      <div className="text-center mb-32 mt-56 lg:mt-20">
        <h2 className="text-3xl font-bold md:mt-60 lg:mt-0 lg:mb-4 font-aloevera">
          ...integrating 3 critical
          <br />
          marketing functions into
          <br />
          <span className="text-[#8D67FF]">1 powerful solution</span>
        </h2>
      </div>
      <div className="space-y-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center lg:gap-20 bg-[#15192C] rounded-3xl p-8 w-full relative ${
              index === 0
                ? 'before:content-[""] before:absolute before:-top-22 before:left-1/2 before:transform before:-translate-x-1/2 before:w-0.5 before:h-22 before:bg-[#FFFFFF33]'
                : ""
            }`}
          >
            <div className="w-full lg:w-1/2 lg:pr-8 font-aloevera text-left">
              <div className="mb-4">
                <img
                  src={tool.icon}
                  alt={`${tool.title} icon`}
                  className="w-28 h-28 mb-3"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{tool.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{tool.description}</p>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};