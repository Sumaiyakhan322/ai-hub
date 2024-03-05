import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ModelCard from "../components/ModelCard";
import Footer from "../components/Footer";

import ContactUs from "../components/ContactUs";
import Accordion from "../components/Accordion/Accordion";

//bg-black bg-opacity-70  z-10 absolute top-0 left-0
const Home = () => {
  return (
    <div className="font-serif">
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto ">
        <div className=""></div>
        <Banner></Banner>
        <ModelCard></ModelCard>
     <Accordion></Accordion>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
