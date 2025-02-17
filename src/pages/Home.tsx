import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import WorldAndUs from "../components/WorldAndUs";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";
import MissionandVission from "../components/MissionandVission";
import Overview from "../components/Overview";
import Certificates from "../components/Certificates";
import ImageCollage from "../components/Collage";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="lg:w-[95%] 2xl:w-[90%] mx-auto flex flex-col justify-center">
          <OurWork />
          <ImageCollage />
          <OurServices />
          <MissionandVission />
          <Overview />
          <Certificates />
        </div>
        <WorldAndUs />
        <Categories />
        <Questions />
      </main>
      <Footer />
    </>
  );
};

export default Home;
