import { navLinks } from "../data/navLinks";
import NavItem from "./NavItem";

const DesktopMenu = () => {
  return (
    <ul className="hidden xl:flex items-center gap-8">
      {navLinks.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default DesktopMenu;
