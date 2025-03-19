import AboutUs from "../components/AboutUs";
import ContactUsSection from "../components/ContactUsSection";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
