import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import WorldAndUs from "../components/WorldAndUs";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Questions from "../components/Questions";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <OurWork />
        <OurServices />
        <Categories />
        <WorldAndUs />
        <ContactUs />
        <Questions />
      </main>
      <Footer />
    </>
  );
};

export default Home;
