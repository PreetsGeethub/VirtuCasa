import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b061a] text-white/80">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* LOGO + TAGLINE */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              {/* Replace with your logo image if needed */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-black font-bold">
                W
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  WALKTHRU
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  India’s Leading AR / VR / MR / XR Developer
                </p>
              </div>
            </Link>
          </div>

          {/* NAV LINKS */}
          <nav className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "AR, VR, MR Solutions", to: "/solutions" },
              { label: "Aerial Virtual Tour", to: "/aerial-tour" },
              { label: "Blog", to: "/blog" },
              { label: "Contact Us", to: "/contact" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="hover:text-[rgb(101,255,75)] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px w-full bg-white/10" />

        {/* BOTTOM ROW */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* COPYRIGHT */}
          <p className="text-sm text-white/60">
            © 2026 WalkThru Tech Pvt Ltd. All Rights Reserved
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60 mr-2">
              Follow Us
            </span>

            {[
              FaFacebookF,
              FaLinkedinIn,
              FaInstagram,
              FaYoutube,
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="
                  w-9 h-9 rounded-full
                  border border-white/20
                  flex items-center justify-center
                  text-white/70
                  transition-all duration-300
                  hover:bg-[rgb(101,255,75)]
                  hover:text-[#0b061a]
                  hover:border-[rgb(101,255,75)]
                "
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
