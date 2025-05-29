import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../assets/logoprimelink.png";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreSubmenuOpen, setMoreSubmenuOpen] = useState(false);

  const sections = ["getStarted", "pricing", "qnA", "testimonial", "karir", "faq"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = () =>
    "text-black hover:text-[#1a6ba3] transition-colors duration-200";

  const headerClass = `${isScrolled ? "fixed shadow-md" : "relative"
    } top-0 left-0 right-0 z-50 bg-white transition-all duration-300`;

  return (
    <div className="z-50">
      {isMobile ? (
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${headerClass} px-4 py-3`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-[120px] pl-2">
              <a href="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-[56px] w-auto object-contain"
                />
              </a>
            </div>

            <div className="relative pr-2">
              <button
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setMoreSubmenuOpen(false);
                }}
                className="btn btn-ghost btn-circle flex items-center justify-center"
              >
                {!dropdownOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-3 w-[240px] bg-white rounded-lg shadow-md py-3 px-4 z-50 space-y-1">
                  <li className="relative">
                    <button
                      onClick={() => setMoreSubmenuOpen(!moreSubmenuOpen)}
                      className="w-full text-left block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                    >
                      Tentang
                    </button>
                    {moreSubmenuOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                                                <a
                          href="#about-us"
                          onClick={() => {
                            setMoreSubmenuOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                        >
                          Profil
                        </a>
                        <a
                          href="#career"
                          onClick={() => {
                            setMoreSubmenuOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                        >
                          Karir
                        </a>
                        <a
                          href="#faq"
                          onClick={() => {
                            setMoreSubmenuOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                        >
                          FAQ
                        </a>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href="#our-services"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                    >
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                    >
                      Harga
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </motion.header>
      ) : (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`${headerClass} flex items-center justify-between w-full px-8 h-[80px]`}
        >
          {/* Logo */}
          <div className="w-[200px] pl-14">
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-[45px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigasi */}
          <div className="flex gap-6 text-lg items-center pr-14 relative">
            {/* Tentang Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreSubmenuOpen(!moreSubmenuOpen)}
                className="px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-colors"
              >
                Tentang
              </button>
              {moreSubmenuOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-md z-50">
                                                                  <a
                          href="#about-us"
                          onClick={() => {
                            setMoreSubmenuOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="block px-4 py-2 text-black hover:bg-blue-50 rounded-lg transition-all"
                        >
                          Profil
                        </a>
                  <a
                    href="#career"
                    onClick={() => setMoreSubmenuOpen(false)}
                    className="block px-4 py-2 text-black hover:bg-blue-50 rounded-t-lg"
                  >
                    Karir
                  </a>
                  <a
                    href="#faq"
                    onClick={() => setMoreSubmenuOpen(false)}
                    className="block px-4 py-2 text-black hover:bg-blue-50 rounded-b-lg"
                  >
                    FAQ
                  </a>
                </div>
              )}
            </div>

            <a
              href="#our-services"
              className={`${navLinkStyle()} px-4 py-2 hover:bg-blue-50 rounded-lg`}
            >
              Layanan
            </a>
            <a
              href="#pricing"
              className={`${navLinkStyle()} px-4 py-2 hover:bg-blue-50 rounded-lg`}
            >
              Harga
            </a>
            <a
              href="#blog"
              className={`${navLinkStyle()} px-4 py-2 hover:bg-blue-50 rounded-lg`}
            >
              Blog
            </a>
            <a
              href="#contact"
              className={`${navLinkStyle()} px-4 py-2 hover:bg-blue-50 rounded-lg`}
            >
              Kontak
            </a>
          </div>
        </motion.header>
      )}
    </div>
  );
}
