import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Your message has been sent!");
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Map */}
        {/* <div className="w-full h-96">
          <iframe
            title="E.I.V.C Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.722... (replace with actual embed link)"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-forest mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-forest"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-forest"
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

            <textarea
              placeholder="Your Message"
              rows="5"
              {...register("message", { required: true })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-forest"
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">Message is required</span>}

            <button
              type="submit"
              className="bg-amber text-charcoal px-6 py-3 rounded-lg font-medium hover:bg-amber/80 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-gray-600">
            <p>Phone: +250 788 302 512</p>
            <p>Location: Gasabo, Remera, Kigali City, Rwanda</p>
          </div>
        </div>
      </div>
    </section>
  );
}
