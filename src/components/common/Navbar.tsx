import { useState } from "react";
import Row from "./Row";
import { BiMessageDots } from "react-icons/bi";
import IconButton from "./button/Icon.button";

const Navbar = () => {
  const menu = [
    { page: "Home", sectionId: "#/" },
    { page: "About", sectionId: "#about" },
    { page: "Service", sectionId: "#service" },
    { page: "Contact", sectionId: "#contact" },
  ];

  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <Row
      id="/"
      className="w-full justify-center items-center py-4 md:py-6 bg-[#291c3a]"
    >
      <Row className="px-4 md:px-0 w-full md:w-[90%] justify-between md:justify-center md:gap-28 items-center">
        <Row className="gap-2 md:gap-6">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.sectionId}
              className={`text-center poppinsRegular text-[11px] md:text-[14px] rounded-sm cursor-pointer py-1 transition duration-200 ease-in-out ${
                selectedMenu === item.page
                  ? "bg-[#8121d0] text-white bg-opacity-25 px-2 md:px-4"
                  : "text-[#fff]"
              }`}
              onClick={() => setSelectedMenu(item.page)}
            >
              {item.page}
            </a>
          ))}
        </Row>

        <IconButton title="Hire Me" linkTo="#contact" icon={BiMessageDots} className="bg-white text-[#291c3a] " />
      </Row>
    </Row>
  );
};

export default Navbar;
