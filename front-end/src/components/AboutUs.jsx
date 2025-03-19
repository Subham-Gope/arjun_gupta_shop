import { Check } from "lucide-react";
import { Button } from "./ui/button";
import Image from "../assets/about_img.png";

const AboutUs = () => {
  return (
    <div className="px-6 py-6 flex flex-col gap-4 max-w-[1440px] mx-auto">
      <h1 className="text-titleText text-2xl font-title font-semibold text-center mb-4">
        ABOUT
      </h1>
      <div className="flex flex-col items-start justify-center md:flex-row gap-4">
        <div className="md:basis-[70%] w-full flex flex-col gap-4">
          <h2 className="text-titleText font-medium text-xl font-pop">
            Who we are:
          </h2>
          <p className="text-bodyText text-sm font-pop">
            At Arjun Gupta Shop, we are a team of passionate individuals
            dedicated to providing you with the best in stationery and
            groceries. Our goal is to offer top-quality products, exceptional
            customer service, and a shopping experience that&apos;s both
            convenient and affordable. We care about making your life easier,
            whether you&apos;re at work, home, or anywhere in between.
          </p>
          <h3 className="text-titleText text-sm font-pop font-semibold">
            What we offer:
          </h3>
          <div className="flex gap-1 items-center">
            <Check className="h-10 w-10 text-primaryColor basis-[12%] " />
            <p className="text-base text-bodyText font-pop ">
              Premium Stationery: A wide selection of quality pens, notebooks,
              and office supplies to suit every need.
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Check className="h-10 w-10 text-primaryColor basis-[12%]" />
            <p className="text-base text-bodyText font-pop ">
              Fresh Groceries: Organic produce, pantry essentials, and daily
              grocery items delivered straight to your door.
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Check className="h-10 w-10 text-primaryColor  basis-[12%]" />
            <p className="text-base text-bodyText font-pop ">
              Convenience & Value: Affordable pricing with fast, reliable
              delivery for all your stationery and grocery essentials.
            </p>
          </div>
          <Button className="font-menuFont text-lg bg-primaryColor hover:bg-btnHover text-white px-8 py-2">
            Learn More
          </Button>
        </div>
        <div className="flex w-full items-start h-full md:basis-[30%]">
          <img className="flex-1" src={Image} alt="Fresh Products" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
