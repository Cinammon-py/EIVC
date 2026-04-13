import { useForm } from "react-hook-form";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const colors = {
    forestGreen: '#1B4332',
    beige: '#EDE6DB',
    charcoal: '#2E2E2E',
    amber: '#FFC857'
  };

  const contactInfo = [
    { icon: MdPhone, label: "Phone", value: "+250 788 302 512" },
    { icon: MdEmail, label: "Email", value: "info@ecivc.rw" },
    { icon: MdLocationOn, label: "Location", value: "Gasabo, Remera, Kigali City, Rwanda" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    alert("Your message has been sent!");
    reset();
  };

  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }

        .font-heading { font-family: 'Poppins', sans-serif; }
        .font-body { font-family: 'Open Sans', sans-serif; }

        .contact-info-card {
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .contact-info-card:hover {
          transform: translateY(-4px);
          border-color: ${colors.amber};
          box-shadow: 0 12px 30px rgba(27, 67, 50, 0.12);
        }

        .form-input {
          transition: all 0.3s ease;
          border: 2px solid #e5e7eb;
          font-family: 'Open Sans', sans-serif;
        }
        .form-input:focus {
          outline: none;
          border-color: ${colors.forestGreen};
          box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.08);
        }

        .submit-btn {
          background: linear-gradient(135deg, ${colors.forestGreen} 0%, #2d5a43 100%);
          transition: all 0.3s ease;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(27, 67, 50, 0.3);
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
      `}</style>

      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{ backgroundColor: colors.forestGreen, borderRadius: '50%', transform: 'translate(50%, -50%)' }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5" style={{ backgroundColor: colors.amber, borderRadius: '50%', transform: 'translate(-50%, 50%)' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: colors.forestGreen }}>
              Let's Build
              <span className="block text-gradient">Something Together</span>
            </h2>
            <p className="font-body text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: colors.charcoal }}>
              Ready to start your next project? Reach out to our team and we'll provide a tailored solution for your construction needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h3 className="font-heading text-3xl font-bold mb-8" style={{ color: colors.forestGreen }}>
                Get In Touch
              </h3>

              <div className="space-y-4 mb-12">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="contact-info-card flex items-center gap-5 p-5 rounded-xl"
                    style={{ backgroundColor: colors.beige }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 section-accent">
                      <Icon size={22} color="white" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: colors.forestGreen }}>{label}</p>
                      <p className="font-body text-base" style={{ color: colors.charcoal }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accent quote card */}
              <div className="p-6 rounded-2xl section-accent">
                <p className="font-body text-base italic leading-relaxed text-white opacity-90">
                  "Every great structure starts with a conversation. Let's talk about your vision."
                </p>
                <p className="font-body text-sm font-semibold mt-3" style={{ color: colors.amber }}>— E.C.I.V.C Team</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="p-8 rounded-2xl shadow-xl" style={{ backgroundColor: colors.beige }}>
                <h3 className="font-heading text-2xl font-bold mb-6" style={{ color: colors.forestGreen }}>
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                      className="form-input w-full p-4 rounded-xl bg-white"
                    />
                    {errors.name && <span className="font-body text-red-500 text-sm mt-1 block">Name is required</span>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", { required: true })}
                      className="form-input w-full p-4 rounded-xl bg-white"
                    />
                    {errors.email && <span className="font-body text-red-500 text-sm mt-1 block">Email is required</span>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      {...register("subject")}
                      className="form-input w-full p-4 rounded-xl bg-white"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      {...register("message", { required: true })}
                      className="form-input w-full p-4 rounded-xl bg-white resize-none"
                    />
                    {errors.message && <span className="font-body text-red-500 text-sm mt-1 block">Message is required</span>}
                  </div>

                  <button
                    type="submit"
                    className="submit-btn w-full py-4 rounded-xl font-body font-semibold text-white text-base flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
