import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Product Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
      text: 'NextGen has completely transformed how our team collaborates. The intuitive interface and powerful features have made our workflow seamless. I can\'t imagine going back to our old tools.'
    },
    {
      name: 'Michael Chen',
      role: 'UI Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      text: 'The platform is incredibly well-designed and easy to use. As a developer, I appreciate the attention to detail and the smooth performance. It\'s made my daily work so much more efficient.'
    },
    {
      name: 'David Martinez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
      text: 'From a technical perspective, NextGen exceeds expectations. The scalability, security, and innovation built into this platform make it the perfect solution for growing businesses like ours.'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <section className="bg-linear-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. See what our customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-blue-600 mb-4" strokeWidth={1.5} />
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <img 
                        alt={testimonial.name} 
                        className="w-14 h-14 object-cover object-center rounded-full border-2 border-blue-600 shadow-sm" 
                        src={testimonial.image}
                      />
                      <div>
                        <h3 className="text-gray-900 font-semibold text-sm">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;