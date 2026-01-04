import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import QuickPanel from "./QuickPanel";
import MobileMenu from "./MobileMenu";
function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // determine scroll phase
        const scrolled = currentScrollY > 120;
        setIsScrolled(scrolled);

        // hide/show ONLY before bg change
        if (!scrolled) {
          if (currentScrollY > lastScrollY && currentScrollY > 60) {
            setIsVisible(false);
          } else {
          setIsVisible(true);
        }
      } else {
        // after bg change, always visible
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (

    <>
      <QuickPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
          <MobileMenu
    isOpen={isMobileMenuOpen}
    onClose={() => setIsMobileMenuOpen(false)}
  />

      <header
        className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}

      >
        <nav
          className={`
    h-[72px]
    transition-colors duration-700 ease-in-out
    ${isScrolled
              ? "bg-[rgb(7,9,38)]"
              : "bg-[rgb(83,74,77)]"
            }
  `}
        >
          <div className="flex items-center justify-between h-full mx-auto max-w-7xl px-8">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
                className="h-10"
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-10">

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `
                    font-sans text-[18px] leading-[24px] font-normal
                    transition-colors duration-300
                    ${isActive
                      ? "text-[rgb(101,255,75)]"
                      : "text-white hover:text-[rgb(101,255,75)]"
                    }
                  `
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span className="cursor-pointer font-sans text-[18px] leading-[24px] font-normal text-white hover:text-[rgb(101,255,75)] transition-colors duration-300">
                  Services
                </span>

                <div
  className={`
    absolute top-full left-0 pt-4 w-56
    bg-[rgb(7,9,38)]
    transition-all duration-300 ease-out
    ${openDropdown === "services" && isVisible
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
>

<ul className="py-3">
  <li>
    <NavLink
      to="/services/virtual-tour"
      className={({ isActive }) =>
        `
          block px-4 py-2
          transition-colors duration-300
          ${isActive
            ? "text-[rgb(101,255,75)]"
            : "text-white hover:text-[rgb(101,255,75)]"}
        `
      }
    >
      Virtual Tour
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/services/3d-rendering"
      className={({ isActive }) =>
        `
          block px-4 py-2
          transition-colors duration-300
          ${isActive
            ? "text-[rgb(101,255,75)]"
            : "text-white hover:text-[rgb(101,255,75)]"}
        `
      }
    >
      3D Rendering
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/services/ai-video"
      className={({ isActive }) =>
        `
          block px-4 py-2
          transition-colors duration-300
          ${isActive
            ? "text-[rgb(101,255,75)]"
            : "text-white hover:text-[rgb(101,255,75)]"}
        `
      }
    >
      AI Based Video
    </NavLink>
  </li>
</ul>

                </div>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `
                    font-sans text-[18px] leading-[24px] font-normal
                    transition-colors duration-300
                    ${isActive
                      ? "text-[rgb(101,255,75)]"
                      : "text-white hover:text-[rgb(101,255,75)]"
                    }
                  `
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `
                    font-sans text-[18px] leading-[24px] font-normal
                    transition-colors duration-300
                    ${isActive
                      ? "text-[rgb(101,255,75)]"
                      : "text-white hover:text-[rgb(101,255,75)]"
                    }
                  `
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              {/* Divider + Grid Icon */}
              <li className="flex items-center gap-6">

                {/* Vertical green line */}
                <span className="h-6 w-[2px] bg-[rgb(101,255,75)] opacity-80" />

                {/* Grid icon */}
                <button
                  onClick={() => setIsPanelOpen(true)}
                  className="
    grid grid-cols-3 gap-[4px]
    p-1
    hover:scale-105 transition-transform duration-200
  "
                  aria-label="Open quick panel"
                >
                  {[...Array(9)].map((_, i) => (
                    <span
                      key={i}
                      className="w-[6px] h-[6px] rounded-sm bg-white"
                    />
                  ))}
                </button>

              </li>


            </ul>
            {/* Mobile Controls */}
<div className="flex items-center gap-4 lg:hidden">
  
  {/* Quick Panel Button */}
  <button
    onClick={() => setIsPanelOpen(true)}
    aria-label="Open quick panel"
    className="grid grid-cols-3 gap-[4px] p-1"
  >
    {[...Array(9)].map((_, i) => (
      <span
        key={i}
        className="w-[6px] h-[6px] rounded-sm bg-white"
      />
    ))}
  </button>

  {/* Hamburger Button */}
  <button
    onClick={() => setIsMobileMenuOpen(true)}
    aria-label="Open mobile menu"
    className="flex flex-col gap-1.5 p-2"
  >
    <span className="w-6 h-0.5 bg-white"></span>
    <span className="w-6 h-0.5 bg-white"></span>
    <span className="w-6 h-0.5 bg-white"></span>
  </button>

</div>

          </div>
          
        </nav>
       

      </header>
    </>
  );
}

export default Header;
