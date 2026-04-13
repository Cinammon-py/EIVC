import React from 'react';
import { GiPlantRoots } from 'react-icons/gi';
import { HiLightBulb } from 'react-icons/hi';
import { MdOutlineVerified } from 'react-icons/md';


const About = () => {
  // Brand colors
  const colors = {
    forestGreen: '#1B4332',
    beige: '#EDE6DB',
    charcoal: '#2E2E2E',
    amber: '#FFC857'
  };

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    { title: "Sustainability", description: "Environmental stewardship in every project", icon: GiPlantRoots },
    { title: "Innovation", description: "Cutting-edge construction methodologies", icon: HiLightBulb },
    { title: "Quality", description: "Uncompromising standards of excellence", icon: MdOutlineVerified },
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }

        .stat-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, ${colors.beige} 0%, #f8f6f0 100%);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, ${colors.amber} 0%, ${colors.forestGreen} 100%);
          transition: width 0.3s ease;
        }

        .stat-card:hover::before {
          width: 8px;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(27, 67, 50, 0.15);
        }

        .value-card {
          transition: all 0.3s ease;
          background: white;
          border: 2px solid transparent;
        }

        .value-card:hover {
          transform: translateY(-4px);
          border-color: ${colors.amber};
          box-shadow: 0 12px 30px rgba(27, 67, 50, 0.12);
        }

        .quote-decoration {
          background: linear-gradient(135deg, ${colors.amber} 0%, #ffb84d 100%);
        }

        .section-accent {
          background: linear-gradient(135deg, ${colors.forestGreen} 0%, #2d5a43 100%);
        }

        .text-gradient {
          background: linear-gradient(135deg, ${colors.forestGreen} 0%, ${colors.amber} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .font-heading {
          font-family: 'Poppins', sans-serif;
        }

        .font-body {
          font-family: 'Open Sans', sans-serif;
        }
      `}</style>

      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{ backgroundColor: colors.forestGreen, borderRadius: '50%', transform: 'translate(50%, -50%)' }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5" style={{ backgroundColor: colors.amber, borderRadius: '50%', transform: 'translate(-50%, 50%)' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: colors.forestGreen }}>
              Building Rwanda's
              <span className="block text-gradient">Sustainable Future</span>
            </h2>
            <p className="font-body text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: colors.charcoal }}>
              Environmental & Construction Innovation Value Chain (E.C.I.V.C) Ltd leads Rwanda's construction industry
              with innovative, sustainable solutions that preserve our environment while building tomorrow's infrastructure.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section */}
            <div className="relative animate-fade-in-left">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Placeholder for construction image */}
                <img
                  src="/tolu-olubode-PlBsJ5MybGc-unsplash.jpg"
                  alt="Construction site"
                  className="w-full aspect-[4/3] object-cover"
                />

                {/* Decorative overlay */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-xl section-accent opacity-95 flex items-center justify-center shadow-lg">
                  <GiPlantRoots size={26} color="white" />
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 p-6 rounded-xl shadow-xl" style={{ backgroundColor: colors.amber }}>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold" style={{ color: colors.forestGreen }}>15+</div>
                  <div className="font-body text-sm font-medium" style={{ color: colors.forestGreen }}>Years Excellence</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="animate-fade-in-right">
              <h3 className="font-heading text-3xl font-bold mb-6" style={{ color: colors.forestGreen }}>
                Leading Construction Excellence in Rwanda
              </h3>
              <div className="space-y-6 mb-8">
                <p className="font-body text-lg leading-relaxed" style={{ color: colors.charcoal }}>
                  As Rwanda's premier construction company, E.C.I.V.C Ltd specializes in delivering world-class infrastructure
                  solutions that balance economic growth with environmental responsibility. Our comprehensive approach
                  encompasses residential, commercial, institutional, and infrastructure development projects.
                </p>
                <p className="font-body text-lg leading-relaxed" style={{ color: colors.charcoal }}>
                  We leverage cutting-edge technologies, sustainable building practices, and innovative project management
                  methodologies to ensure exceptional quality, timely delivery, and long-term environmental stewardship.
                </p>
              </div>

              {/* Featured Quote */}
              <div className="relative p-6 rounded-xl mb-8" style={{ backgroundColor: colors.beige }}>
                <div className="absolute top-0 left-0 w-1 h-full quote-decoration rounded-l-xl"></div>
                <div className="pl-4">
                  <p className="font-body text-lg italic leading-relaxed mb-4" style={{ color: colors.charcoal }}>
                    "We believe in building not just structures, but a sustainable future for Rwanda. Every project
                    is an opportunity to demonstrate our commitment to environmental stewardship and construction excellence."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-title font-bold" style={{ color: colors.forestGreen }}>Murokore Eric</div>
                      <div className="font-mono text-sm" style={{ color: colors.charcoal }}>Maj General Rtd.</div>
                      <div className="font-body text-sm" style={{ color: colors.charcoal }}>Chief Executive Officer (CEO)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`stat-card p-6 rounded-xl text-center animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="font-heading text-3xl font-bold mb-2" style={{ color: colors.forestGreen }}>
                  {stat.number}
                </div>
                <div className="font-body text-sm font-medium tracking-wide uppercase" style={{ color: colors.charcoal }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="font-heading text-3xl font-bold mb-4" style={{ color: colors.forestGreen }}>
              Our Core Values
            </h3>
            <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: colors.charcoal }}>
              The principles that guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`value-card p-8 rounded-xl text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center section-accent text-white">
                  <value.icon size={28} />
                </div>

                <h4 className="font-heading text-xl font-bold mb-3" style={{ color: colors.forestGreen }}>
                  {value.title}
                </h4>
                <p className="font-body leading-relaxed" style={{ color: colors.charcoal }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;