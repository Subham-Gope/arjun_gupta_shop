import ContactUsSection from "../components/ContactUsSection";
import TitleCover from "../components/TitleCover.jsx";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <TitleCover title={"CONTACT US"} />
      <ContactUsSection />
    </div>
  );
};

export default Contact;
