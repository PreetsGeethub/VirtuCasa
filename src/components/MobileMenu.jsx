import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function MobileMenu({ isOpen, onClose }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubmenu = (menu) => {
    setOpenSubmenu((prev) => (prev === menu ? null : menu));
  };

  const handleNavClick = (path) => {
    setOpenSubmenu(null);
    onClose();
    navigate(path);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/50
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Wrapper */}
      <div className="fixed inset-0 z-50 flex items-end pointer-events-none">

        {/* Purple Base Layer */}
        <div
          className={`
            absolute bottom-0 left-0 w-full h-[85%]
            bg-[rgb(31,27,45)]
            transition-transform duration-500 ease-out
            ${isOpen ? "translate-y-0" : "translate-y-full"}
          `}
        />

        {/* Black Content Layer */}
        <div
          className={`
            relative w-full h-[80%]
            bg-[rgb(15,23,42)]
            rounded-t-2xl
            transition-transform duration-700 ease-out delay-150
            ${isOpen ? "translate-y-0" : "translate-y-full"}
            pointer-events-auto
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span className="text-white text-lg font-semibold">Menu</span>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="overflow-y-auto">
            <ul className="py-4">

              {/* Home */}
              <li>
                <button
                  onClick={() => handleNavClick("/")}
                  className="w-full text-left px-6 py-3 text-white hover:text-[rgb(101,255,75)] transition-colors"
                >
                  Home
                </button>
              </li>

              {/* Services Accordion */}
              <li>
                <button
                  onClick={() => toggleSubmenu("services")}
                  className="w-full flex justify-between items-center px-6 py-3 text-white hover:text-[rgb(101,255,75)] transition-colors"
                >
                  <span>Services</span>
                  <span
                    className={`transition-transform duration-300 ${
                      openSubmenu === "services" ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSubmenu === "services"
                      ? "max-h-[300px]"
                      : "max-h-0"
                  }`}
                >
                  <ul className="pl-10 py-2 space-y-2 text-sm">
                    <li>
                      <button
                        onClick={() =>
                          handleNavClick("/services/virtual-tour")
                        }
                        className="text-gray-300 hover:text-[rgb(101,255,75)] transition-colors"
                      >
                        Virtual Tour
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          handleNavClick("/services/3d-rendering")
                        }
                        className="text-gray-300 hover:text-[rgb(101,255,75)] transition-colors"
                      >
                        3D Rendering
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          handleNavClick("/services/ai-video")
                        }
                        className="text-gray-300 hover:text-[rgb(101,255,75)] transition-colors"
                      >
                        AI Based Video
                      </button>
                    </li>
                  </ul>
                </div>
              </li>

              {/* About */}
              <li>
                <button
                  onClick={() => handleNavClick("/about")}
                  className="w-full text-left px-6 py-3 text-white hover:text-[rgb(101,255,75)] transition-colors"
                >
                  About Us
                </button>
              </li>

              {/* Contact */}
              <li>
                <button
                  onClick={() => handleNavClick("/contact")}
                  className="w-full text-left px-6 py-3 text-white hover:text-[rgb(101,255,75)] transition-colors"
                >
                  Contact
                </button>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
