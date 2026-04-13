import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check which section is currently in view
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // offset for navbar height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      // Toggle darkMode for light background sections
      if (["about", "services", "contact", "values"].includes(current)) {
        setDarkMode(true); // dark text
      } else {
        setDarkMode(false); // white text
      }
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "backdrop-blur-lg shadow-lg" : "bg-transparent"}
      ${darkMode ? "bg-white text-charcoal" : "bg-transparent text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className={`text-xl font-heading font-bold ${
            darkMode ? "text-charcoal" : "text-white"
          }`}
        >
          E.C.I.V.C
        </a>
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`hover:text-amber transition-colors ${
                  darkMode ? "text-charcoal" : "text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
