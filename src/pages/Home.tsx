import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import WorldAndUs from "../components/WorldAndUs";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurWork />
        <OurServices />
        <WorldAndUs />
        <Categories />
        <Questions />
      </main>
      <Footer />
    </>
  );
};

export default Home;
