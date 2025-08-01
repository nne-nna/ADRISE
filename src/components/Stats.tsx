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
      <section className="px-6 py-20 max-w-6xl mx-auto text-center mt-8 text-white">
        <h2 className="text-3xl font-bold mb-2 font-aloevera">
          Numbers don't lie
        </h2>

        <div className="relative h-[300px] w-3/4 mx-auto">
          <div className="absolute inset-0 bg-[url('/ellipse-3.png'),url('/number-backdrop.png')] bg-cover bg-center bg-no-repeat"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 mb-20 items-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div
                  className={`rounded-lg transition-all duration-300 mt-10 relative ${
                    index === 1
                      ? "px-16 py-18 w-full max-w-2xl bg-cover bg-center bg-no-repeat shadow-lg mx-auto"
                      : "px-8 py-16 w-full max-w-md mx-auto"
                  } ${
                    index === 0
                      ? "border-left-extended"
                      : index === 2
                      ? "border-right-extended"
                      : ""
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
                  <div className={`text-[#FFFFFF] font-bold text-lg font-aloevera ${
                    index === 1 ? "" : ""
                  }`}>
                    {stat.label}
                  </div>
                </div>
                
                {index === 0 && (
                  <div className="absolute bottom-3 -left-3 w-full h-0.5 bg-[#15192C] transform translate-x-[-40px] translate-y-[12px]" style={{width: 'calc(100% + 51px)'}}></div>
                )}
                {index === 2 && (
                  <div className="absolute bottom-3 -right-3 w-full h-0.5 bg-[#15192C] transform translate-x-[40px] translate-y-[12px]" style={{width: 'calc(100% + 51px)'}}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};