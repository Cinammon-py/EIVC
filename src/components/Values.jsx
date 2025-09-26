import { FaLightbulb, FaLeaf, FaShieldAlt } from "react-icons/fa";

const values = [
  {
    icon: <FaLightbulb className="text-amber text-4xl mb-4" />,
    title: "Innovation",
    desc: "Adopting cutting-edge technology to improve efficiency and sustainability.",
  },
  {
    icon: <FaLeaf className="text-green-600 text-4xl mb-4" />,
    title: "Sustainability",
    desc: "Building with eco-friendly materials and reducing environmental impact.",
  },
  {
    icon: <FaShieldAlt className="text-forest text-4xl mb-4" />,
    title: "Quality & Safety",
    desc: "Ensuring every project meets the highest safety and quality standards.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-heading font-bold text-forest mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
