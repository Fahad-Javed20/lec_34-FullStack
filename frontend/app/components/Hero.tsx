import React from 'react';
import { Play, Info, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        
        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600/90 backdrop-blur-sm rounded text-xs font-semibold text-white mb-6 uppercase tracking-wide">
              New Release
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build the Future of Web
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Experience the next generation of web development with powerful tools, seamless deployment, and unlimited scalability. Start building today.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors text-lg">
                <Play className="w-5 h-5 fill-black" strokeWidth={0} />
                Get Started
              </button>
              
              <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/30 backdrop-blur-sm text-white font-semibold rounded hover:bg-gray-500/50 transition-colors text-lg border border-gray-400">
                <Info className="w-5 h-5" strokeWidth={2} />
                More Info
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-500" strokeWidth={3} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-500" strokeWidth={3} />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-500" strokeWidth={3} />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent"></div>
      </section>
    </>
  );
};

export default Hero;