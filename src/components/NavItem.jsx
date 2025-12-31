import Dropdown from "./Dropdown";

const NavItem = ({ item }) => {
  if (item.children) {
    return (
      <li className="relative group">
        <button className="hover:text-gray-300 transition">
          {item.label}
        </button>
        <Dropdown items={item.children} />
      </li>
    );
  }

  return (
    <li>
      <a
        href={item.href}
        className="hover:text-gray-300 transition"
      >
        {item.label}
      </a>
    </li>
  );
};

export default NavItem;
