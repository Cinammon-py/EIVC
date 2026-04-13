import React, { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Brand colors
  const colors = {
    forestGreen: '#1B4332',
    beige: '#EDE6DB',
    charcoal: '#2E2E2E',
    amber: '#FFC857'
  };

  const services = [
    {
      title: "Infrastructure Development",
      desc: "Comprehensive road construction, bridge engineering, and railway networks that enhance regional connectivity and economic growth.",
      img: "/infra.jpg",
      number: "01",
      features: ["Roads & Highways", "Bridge Construction", "Railway Networks", "Urban Planning"]
    },
    {
      title: "Residential Construction",
      desc: "Modern housing solutions from affordable family homes to luxury residential complexes that meet Rwanda's growing urban needs.",
      img: "/residential.jpg",
      number: "02",
      features: ["Affordable Housing", "Luxury Complexes", "Gated Communities", "Urban Development"]
    },
    {
      title: "Commercial Construction",
      desc: "Strategic commercial spaces including office buildings, retail centers, and hospitality facilities that drive business growth.",
      img: "/commercial.jpg",
      number: "03",
      features: ["Office Buildings", "Shopping Centers", "Hotels & Resorts", "Industrial Facilities"]
    },
    {
      title: "Institutional Construction",
      desc: "Essential public infrastructure including educational facilities, healthcare centers, and government buildings that serve communities.",
      img: "/institutional.jpg",
      number: "04",
      features: ["Educational Facilities", "Healthcare Centers", "Government Buildings", "Community Centers"]
    },
    {
      title: "Energy & Utilities",
      desc: "Sustainable energy solutions including solar installations, hydropower projects, and comprehensive utility infrastructure development.",
      img: "/energy.jpg",
      number: "05",
      features: ["Solar Energy Systems", "Hydropower Projects", "Water Treatment", "Utility Infrastructure"]
    },
    {
      title: "Sustainable Construction",
      desc: "Environmentally responsible building practices using eco-friendly materials and energy-efficient technologies for a greener future.",
      img: "/sustainable.jpg",
      number: "06",
      features: ["Green Building", "Eco Materials", "Energy Efficiency", "LEED Certification"]
    },
  ];

  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-delay-600 { animation-delay: 0.6s; }

        .service-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          background: white;
          border: 2px solid transparent;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, ${colors.forestGreen} 0%, ${colors.amber} 100%);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(27, 67, 50, 0.2);
          border-color: ${colors.amber};
        }

        .service-number {
          background: linear-gradient(135deg, ${colors.forestGreen} 0%, #2d5a43 100%);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-number {
          background: linear-gradient(135deg, ${colors.amber} 0%, #ffb84d 100%);
          transform: scale(1.1);
        }

        .service-image-overlay {
          background: linear-gradient(135deg, rgba(27, 67, 50, 0.8) 0%, rgba(27, 67, 50, 0.6) 100%);
          transition: all 0.4s ease;
        }

        .service-card:hover .service-image-overlay {
          background: linear-gradient(135deg, rgba(255, 200, 87, 0.9) 0%, rgba(255, 200, 87, 0.7) 100%);
        }

        .feature-list {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }

        .service-card:hover .feature-list {
          opacity: 1;
          transform: translateY(0);
        }

        .font-heading {
          font-family: 'Poppins', sans-serif;
        }

        .font-body {
          font-family: 'Open Sans', sans-serif;
        }

        .bg-texture {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(27, 67, 50, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 200, 87, 0.05) 0%, transparent 50%);
        }

        .service-icon {
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.2) rotate(5deg);
        }
      `}</style>

      <section id="services" className="py-24 bg-texture relative" style={{ backgroundColor: colors.beige }}>
        {/* Background decorative elements */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: colors.forestGreen }}>
            Our Services
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card rounded-2xl shadow-lg animate-scale-in animate-delay-${(index % 3 + 1) * 100}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  {/* Placeholder for service image */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />


                  {/* Service Number */}
                  <div className="service-number absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-bold text-lg">
                    {service.number}
                  </div>

                  {/* Hover Overlay */}
                  <div className="service-image-overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="text-white text-center px-4">
                      <h4 className="font-heading text-lg font-bold mb-2">Explore Service</h4>
                      <div className="w-12 h-0.5 bg-white mx-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  <div className="mb-4">
                    <h3 className="font-heading text-xl font-bold mb-3 leading-tight" style={{ color: colors.forestGreen }}>
                      {service.title}
                    </h3>
                    <p className="font-body leading-relaxed" style={{ color: colors.charcoal }}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Feature List - appears on hover */}
                  <div className="feature-list">
                    <div className="border-t pt-4" style={{ borderColor: colors.beige }}>
                      <h4 className="font-body font-semibold text-sm mb-3 uppercase tracking-wide" style={{ color: colors.forestGreen }}>
                        Key Services:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={feature}
                            className={`flex items-center text-sm font-body animate-slide-in-right animate-delay-${(featureIndex + 1) * 100}`}
                            style={{ color: colors.charcoal }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                              style={{ backgroundColor: colors.amber }}
                            ></div>
                            <span className="leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-4 border-t" style={{ borderColor: colors.beige }}>
                    <button
                      className="font-body text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:underline"
                      style={{ color: colors.forestGreen }}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="inline-block p-8 rounded-2xl" style={{ backgroundColor: 'white' }}>
              <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: colors.forestGreen }}>
                Ready to Start Your Project?
              </h3>
              <p className="font-body text-lg mb-6 max-w-2xl" style={{ color: colors.charcoal }}>
                Our expert team is ready to discuss your construction needs and provide tailored solutions
                that align with your vision and budget.
              </p>
              <button
                className="inline-flex items-center px-8 py-4 rounded-full font-body font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                style={{ backgroundColor: colors.forestGreen }}
              >
                <span>Get Free Consultation</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;