import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} index />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
