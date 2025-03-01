import React, { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const btnRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(btnRefs.current[index], {
      backgroundSize: "100% 100%",
      duration: 0.5,
      ease: "power2.out",
      color: "#facc15",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(btnRefs.current[index], {
      backgroundSize: "0% 100%",
      duration: 0.5,
      ease: "power2.out",
      color: "black",
    });
  };

  const menuItems = [
    { name: "MENUS", path: "/menus" },
    { name: "CATERING", path: "/menus" },
    { name: "BBQ BOX", path: "/menus" },
    { name: "SUPPER CLUB", path: "/menus" },
    { name: "GIFT CARDS", path: "/menus" },
    { name: "ORDER ONLINE", path: "/menus" },
  ];

  return (
    <div className="h-[25vh] bg-yellow-400 pt-2">
      <Link>
        <img
          className="h-20 w-53 mx-auto invert hue-rotate-180 brightness-200"
          src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/75474fed-pig-yellow.png"
          alt="Logo"
        />
      </Link>
      <div className="flex justify-center mt-4">
        <ul className="flex flex-row gap-5 mx-auto">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (btnRefs.current[index] = el)} 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="px-2 py-1 text-black font-semibold bg-yellow-400 overflow-hidden 
                         transition-all duration-500 bg-[linear-gradient(to_right,_black_0%,_black_100%)]
                         bg-[size:0%_100%] bg-no-repeat"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
