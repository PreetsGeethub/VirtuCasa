import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
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
    ${
      isScrolled
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
                    ${
                      isActive
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
                  absolute top-full left-0 mt-4 w-56
                  bg-[rgb(7,9,38)]
                  transition-all duration-300 ease-out
                  ${
                    openDropdown === "services" && isVisible
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-3 pointer-events-none"
                  }
                `}
              >
                <ul className="py-3">
                  {["Virtual Tour", "3D Rendering", "AI Based Video"].map(
                    (item) => (
                      <li
                        key={item}
                        className="px-4 py-2 text-white hover:text-[rgb(101,255,75)] transition-colors duration-300"
                      >
                        {item}
                      </li>
                    )
                  )}
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
                    ${
                      isActive
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
                    ${
                      isActive
                        ? "text-[rgb(101,255,75)]"
                        : "text-white hover:text-[rgb(101,255,75)]"
                    }
                  `
                }
              >
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
