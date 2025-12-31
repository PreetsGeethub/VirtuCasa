const Dropdown = ({ items }) => {
    return (
      <ul className="absolute top-full left-0 mt-4 w-56 bg-black border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-800 transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;
  