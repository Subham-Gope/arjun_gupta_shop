import { Menu, X } from "lucide-react";
import { Button } from "./ui/button.jsx";
import logo from "../assets/Arjun-Gupta-Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinksStyles = ({ isActive }) => {
    return {
      color: isActive ? "#1B9FFF" : "#101010",
    };
  };

  return (
    <header className="flex gap-5 py-2 px-6 items-center justify-between bg-white shadow-sm">
      <div className="p-1 ">
        <Link to="/home">
          <img className="w-28" src={logo} alt="Logo" />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="gap-5 hidden md:flex font-menuFont">
        <NavLink
          className="text-textColor text-base"
          style={NavLinksStyles}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="text-textColor text-base"
          style={NavLinksStyles}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="text-textColor text-base"
          style={NavLinksStyles}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className="text-textColor text-base"
          style={NavLinksStyles}
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
      <Link className="hidden md:block" to="/contact">
        <Button className="px-8 py-2 bg-primaryColor hover:bg-btnHover text-white font-menuFont">
          Contact
        </Button>
      </Link>
      <Menu
        className="text-textColor h-6 w-6 block md:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Menu */}

      <div
        className={`absolute top-0 right-0 flex  flex-col md:hidden gap-4 bg-blue-50 h-screen w-48 px-4 py-8 transition-all ease-in-out duration-500 ${
          isMobileMenuOpen ? "right-0 " : "right-[-220px]"
        }`}
      >
        <X
          className="absolute right-4"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav className="flex flex-col gap-5 mt-12 font-menuFont">
          <NavLink
            className="text-textColor text-base"
            style={NavLinksStyles}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="text-textColor text-base"
            style={NavLinksStyles}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="text-textColor text-base"
            style={NavLinksStyles}
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
        <Link to="/contact">
          <Button className="bg-primaryColor hover:bg-btnHover text-white mt-12 font-menuFont text-base px-8 py-2">
            Contact
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
