import React from 'react';

interface Testimonial {
  avatar: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

interface MovingCarouselProps {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
  label: string;
}

const Features: React.FC = () => {
  const topTestimonials: Testimonial[] = [
    {
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
  ];

  const bottomTestimonials: Testimonial[] = [
    {
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      text: "I just want to spend time on my product. Don't want to be learning marketing too.",
    },
  ];

  const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => (
    <div className="flex-shrink-0 w-80 mx-2">
      <div className="bg-[#FFFFFF1C] backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={`Testimonial ${index + 1}`}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <p className="text-gray-300 text-xs font-aloevera-light leading-relaxed flex-1">{testimonial.text}</p>
      </div>
    </div>
  );

  const MovingCarousel: React.FC<MovingCarouselProps> = ({ testimonials, direction = "left", label }) => {
    const duplicatedTestimonials: Testimonial[] = [...testimonials, ...testimonials];
    
    return (
      <div className="relative overflow-hidden py-2">
        <div className="absolute left-0 top-0 text-xs text-gray-500 font-medium mb-2 z-10">
          {label}
        </div>
        {/* Left fade overlay */}
        <div 
          className="absolute top-0 left-0 h-full w-20 z-20" 
          style={{ 
            background: 'linear-gradient(to right, #01081D, transparent)' 
          }}
        ></div>
        {/* Right fade overlay */}
        <div 
          className="absolute top-0 right-0 h-full w-20 z-20" 
          style={{ 
            background: 'linear-gradient(to left, #01081D, transparent)' 
          }}
        ></div>
        <div 
          className={`flex ${direction === 'left' ? 'scroll-left' : 'scroll-right'}`}
          style={{
            width: `${duplicatedTestimonials.length * 320}px`,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="text-white">
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="relative text-center">
          <img src="/ellipse-1.png" alt="Ellipse 1" className="mx-auto" />
          <img
            src="/Logo.png"
            alt="Logo mark"
            className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="text-center mb-10">
          <p className="font-aloevera-light">We saw the problem</p>
          <h2 className="text-3xl font-bold mb-4 font-aloevera">
            Traditional marketing
            <br />
            agencies are often
            <br />
            just...not it
          </h2>
        </div>

        <div className="">
          <MovingCarousel 
            testimonials={topTestimonials} 
            direction="left" 
            label=""
          />
        </div>

        <div className="">
          <MovingCarousel 
            testimonials={bottomTestimonials} 
            direction="right" 
            label=""
          />
        </div>
      </section>
    </div>
  );
};

export default Features;
