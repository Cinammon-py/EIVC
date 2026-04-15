// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">E.C.I.V.C</h2>
          <h3 className="text-white font-mono text-[9px] font-semibold mb-6">Environmental & Construction Innovation Value Chain</h3>
          <p className="text-sm leading-relaxed">
            Empowering Inclusion through Vocational Competence.
            Building a future where everyone has equal access to skills and opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/programs" className="hover:text-white transition">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Kigali, Rwanda</p>
          <p className="text-sm">
            <a href="mailto:info@ecivcltd.com">
              Email: info@ecivcltd.com
            </a>
          </p>
          <p className="text-sm">
            <a href="tel:+250788302512">
              Phone: +250 788 3025 12
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ECIVC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
