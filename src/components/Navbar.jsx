import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const colors = {
  forestGreen: "#1B4332",
  amber: "#FFC857",
  beige: "#EDE6DB",
  charcoal: "#2E2E2E",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 80) {
          current = section.getAttribute("id");
        }
      });

      setDarkMode(["about", "services", "contact", "values"].includes(current));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Values", href: "#values" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg shadow-lg" : "bg-transparent"
      } ${darkMode ? "bg-white" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span
            className="text-xl font-bold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: darkMode ? colors.forestGreen : "white",
            }}
          >
            E.C.I.V.C
          </span>
          <span
            className="text-[7px] font-mono tracking-tight"
            style={{ color: darkMode ? colors.charcoal : "rgba(255,255,255,0.7)" }}
          >
            Environmental & Construction Innovation Value Chain
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: darkMode ? colors.forestGreen : "white" }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: colors.amber,
                color: colors.forestGreen,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{
            color: darkMode ? colors.forestGreen : "white",
            backgroundColor: menuOpen
              ? darkMode
                ? colors.beige
                : "rgba(255,255,255,0.15)"
              : "transparent",
          }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "white", borderTop: `3px solid ${colors.amber}` }}
      >
        <ul className="px-6 py-4 space-y-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:pl-6"
                style={{ color: colors.forestGreen }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.beige)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: colors.forestGreen, color: "white" }}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
