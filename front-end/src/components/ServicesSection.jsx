import { Headset, ShoppingCart, Truck } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="flex flex-col px-6 py-6 my-6 max-w-[1440px] mx-auto">
      <h2 className="text-titleText text-2xl font-title font-semibold text-center">
        SERVICES
      </h2>

      <div className="flex flex-col items-center justify-between  py-6 gap-8 md:flex-row md:items-stretch">
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-[0px_4px_8px_4px_rgba(0,0,0,0.1)] border-1 border-gray-400 w-full md:basis-[30%] aspect-square hover:scale-105 transition-transform duration-300">
          <Truck
            style={{ strokeWidth: 1 }}
            className="text-primaryColor  h-32 w-32"
          />
          <h3 className="text-titleText text-xl font-title text-center">
            Fast & Reliable Delivery
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-[0px_4px_8px_4px_rgba(0,0,0,0.1)] border-1 border-gray-400 w-full md:basis-[30%] aspect-square hover:scale-105 transition-transform duration-300">
          <ShoppingCart
            style={{ strokeWidth: 1 }}
            className="text-primaryColor  h-32 w-32"
          />
          <h3 className="text-titleText text-xl font-title text-center">
            Personalized Shopping Experience
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-[0px_4px_8px_4px_rgba(0,0,0,0.1)] border-1 border-gray-400 w-full md:basis-[30%] aspect-square hover:scale-105 transition-transform duration-300">
          <Headset
            style={{ strokeWidth: 1 }}
            className="text-primaryColor  h-32 w-32"
          />
          <h3 className="text-titleText text-xl font-title text-center">
            Dedicated Customer Care
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
