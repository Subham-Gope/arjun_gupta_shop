import { Link } from "react-router-dom";
import logo from "../assets/Arjun-Gupta-Logo.svg";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 py-8 gap-12 bg-blue-50">
      <div className="flex-[30%] flex flex-col gap-4">
        <img src={logo} alt="logo" className="w-32" />
        <p className="text-sm text-textColor font-pop">
          Your one-stop shop for top-quality stationery and groceries.
          We&apos;re passionate about providing exceptional service, convenient
          shopping, and affordable prices to make your life easier.
        </p>
      </div>
      <div className="flex-[30%] flex flex-col gap-4">
        <h3 className="text-base font-semibold font-menuFont mb-4">
          Navigation Links
        </h3>
        <Link to="/home" className="text-base text-textColor font-menuFont">
          Home
        </Link>
        <Link to="/about" className="text-base text-textColor font-menuFont">
          About
        </Link>
        <Link to="/contact" className="text-base text-textColor font-menuFont">
          Services
        </Link>
        <Link to="/contact" className="text-base text-textColor font-menuFont">
          Contact
        </Link>
      </div>
      <div className="flex-[30%] flex flex-col gap-4">
        <h3 className="text-base font-semibold font-menuFont mb-4">Contact</h3>
        <p className="text-textColor text-sm font-pop">
          <span className="font-semibold">Email:</span>{" "}
          arjungupta1967m@gmail.com
        </p>
        <p className="text-textColor text-sm font-pop">
          <span className="font-semibold">Email:</span> D .224, Dabri - Palam
          Rd, Mahavir Enclave I, Mahavir Enclave Part 1, Mahavir Enclave, New
          Delhi, Delhi, 110045
        </p>
      </div>
    </div>
  );
};

export default Footer;
