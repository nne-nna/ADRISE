export const Stats = () => {
  const stats = [
    {
      number: "300K",
      label: "Satisfied users",
    },
    {
      number: "300K",
      label: "Satisfied users",
    },
    {
      number: "300K",
      label: "Satisfied users",
    },
  ];

  return (
    <>
      <section className="lg:px-6 py-12 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4 font-aloevera">
          Numbers don't lie
        </h2>

        <div className="relative w-full mx-auto px-6 flex justify-center items-center min-h-[400px]">
          <div
            className="absolute inset-0 w-full h-full bg-[url('/ellipse-3.png'),url('/number-backdrop.png')] bg-cover bg-center bg-no-repeat z-0"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
              minHeight: '400px',
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] items-center gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div
                  className={`transition-all duration-300 relative ${
                    index === 1
                      ? "px-16 py-18 w-full max-w-lg bg-cover bg-center bg-no-repeat shadow-lg mx-auto rounded-lg"
                      : "px-8 py-14 w-full max-w-xs mx-auto"
                  } ${
                    index === 0
                      ? "border-left-extended md:border-0 md:border-r-2 md:border-[#15192C]"
                      : index === 2
                      ? "border-right-extended md:border-0 md:border-l-2 md:border-[#15192C]"
                      : "md:border-x-2 md:border-[#15192C]"
                  } ${
                    index === 0
                      ? "border-t-2 border-l-2 border-r-2 border-[#15192C] md:border-0 md:border-r-2"
                      : index === 2
                      ? "border-b-2 border-l-2 border-r-2 border-[#15192C] md:border-0 md:border-l-2"
                      : "border-l-2 border-r-2 border-[#15192C] md:border-x-2"
                  }`}
                  style={
                    index === 1 ? { backgroundImage: 'url("/image.png")' } : {}
                  }
                >
                  <div
                    className={`font-bold mb-2 font-akira ${
                      index === 1
                        ? "text-4xl text-shadow-bottom"
                        : "text-4xl text-gradient"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-[#FFFFFF] font-bold text-lg font-aloevera ${
                      index === 1 ? "" : ""
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>

                {index === 0 && (
                  <div
                    className="absolute bottom-3 -left-3 w-full h-0.5 bg-[#15192C] transform translate-x-[-40px] translate-y-[12px] hidden md:block"
                    style={{ width: 'calc(100% + 51px)' }}
                  ></div>
                )}
                {index === 2 && (
                  <div
                    className="absolute bottom-3 -right-3 w-full h-0.5 bg-[#15192C] transform translate-x-[40px] translate-y-[12px] hidden md:block"
                    style={{ width: 'calc(100% + 51px)' }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};