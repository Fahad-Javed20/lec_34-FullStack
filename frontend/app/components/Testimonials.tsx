
const Testimonials = () => {
  const testimonials = [
    {
      name: 'SARAH JOHNSON',
      role: 'Senior Product Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=302&h=302&fit=crop',
      text: 'NextGen has completely transformed how our team collaborates. The intuitive interface and powerful features have made our workflow seamless. I can\'t imagine going back to our old tools.'
    },
    {
      name: 'MICHAEL CHEN',
      role: 'UI Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      text: 'The platform is incredibly well-designed and easy to use. As a developer, I appreciate the attention to detail and the smooth performance. It\'s made my daily work so much more efficient.'
    },
    {
      name: 'DAVID MARTINEZ',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=305&h=305&fit=crop',
      text: 'From a technical perspective, NextGen exceeds expectations. The scalability, security, and innovation built into this platform make it the perfect solution for growing businesses like ours.'
    }
  ];

  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  alt="testimonial" 
                  className="w-24 h-24 mb-6 object-cover object-center rounded-full inline-block border-4 border-blue-500 shadow-md" 
                  src={testimonial.image}
                />
                <p className="leading-relaxed text-gray-600 mb-6">
                  {testimonial.text}
                </p>
                <span className="inline-block h-1 w-12 rounded-full bg-linar-to-r from-blue-500 to-cyan-400 mb-4"></span>
                <h2 className="text-gray-900 font-semibold tracking-wider text-sm mb-1">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;