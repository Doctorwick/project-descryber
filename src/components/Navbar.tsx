import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/simulation", label: "Try It Out" },
    { path: "/history", label: "History" },
    { path: "/support", label: "Support" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Logo />
              <span className="ml-2 text-xl sm:text-2xl font-bold text-[#8B5CF6] 
                transition-colors duration-300 group-hover:text-[#7C3AED]">
                Descryber
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-base font-medium transition-all duration-300 
                  ${location.pathname === link.path 
                    ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#8B5CF6]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="text-gray-600 hover:text-[#8B5CF6] p-2 rounded-xl transition-colors duration-200"
              onClick={toggleMenu}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="glass px-2 pt-2 pb-3 space-y-1 mx-4 mb-4 rounded-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 
                    ${location.pathname === link.path
                      ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#8B5CF6]"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}