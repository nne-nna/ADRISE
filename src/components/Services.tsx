export const Services = () => {
  const services = [
    {
      title: ["Generate engaging", "social media posts"],
      image: "/service-1.png",
    },
    {
      title: ["Audit your", "AD campaigns"],
      image: "/service-2.png",
    },
    {
      title: ["Optimize your", "website for SEO"],
      image: "/service-3.png",
    },
  ];

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto relative">
      <div className="w-fit mx-auto">
        <img
          src="/service.png"
          alt="Service"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>
      <div className="w-fit mx-auto text-center mt-20 mb-80 lg:mb-24">
        <p className="font-aloevera-light">We have a solution</p>
        <h3 className="font-aloevera text-3xl font-bold md:mb-72 lg:mb-4 max-w-lg">
          Adrise helps you handle your marketing options easier, quicker and
          cheaper
        </h3>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center lg:hidden ">
          <img
            src="/services-mobile-vector.png"
            alt="Mobile Services Background"
            className="w-full max-w-md object-contain"
          />
        </div>

        <div className="absolute top-[-100px] left-0 right-0 mx-auto w-[70%] hidden lg:block">
          <img
            src="/services-vector.png"
            alt="Services Vector"
            className="w-full"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4
                        mx-auto max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-none"> 
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#5954DA] border border-[#7B76E8] rounded-2xl p-8 my-2 lg:my-36 text-center relative z-10
                         transition-all duration-300 ease-out
                         hover:bg-[#5954DA55] hover:border-[#FFFFFF55] hover:shadow-2xl hover:shadow-[#5954DA]/20
                         hover:scale-105 hover:-translate-y-2
                         cursor-pointer group
                         w-full mx-auto"
            >
              <div
                className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6"
              >
                <img
                  src={service.image}
                  alt={service.title.join(" ")}
                  className="w-full h-full object-contain transition-all duration-300 ease-out group-hover:brightness-110"
                />
              </div>
              <h3
                className="text-xl font-medium text-white mb-4 font-aloevera transition-all duration-300 ease-out group-hover:text-opacity-90 group-hover:scale-105"
              >
                {service.title[0]} <br /> {service.title[1]}
              </h3>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[-100px] left-0 right-0 mx-auto w-[70%] hidden lg:block">
          <img
            src="/services-vector2.png"
            alt="Services Vector 2"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
