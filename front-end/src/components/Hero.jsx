import { Button } from "./ui/button";
import bgImg from "../assets/Hero section of Arjun Gupta Shop.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="h-[80vh]  bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center md:flex-row md:items-center md:justify-start px-8 py-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col basis-1 md:basis-[50%] gap-4">
        <h1 className="mb-8 text-6xl text-white font-menuFont font-semibold">
          Your One-Stop Shop for Stationery & Groceries
        </h1>
        <p className="text-base text-white font-pop">
          From everyday essentials to creative supplies, we bring you the best
          of both worlds. Stock up on stationery for your work or studies, and
          grab your groceries with ease. Everything you need, all in one place.
        </p>
        <Link to="/contact">
          <Button className="text-base font-menuFont  bg-primaryColor hover:bg-btnHover text-white px-8 py-2">
            Contact now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
