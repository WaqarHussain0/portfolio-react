import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Service from "../components/Service";
import Skill from "../components/Skill";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Row from "../components/common/Row";

const Home = () => {
  return (
    <Row className="w-full flex-col items-center bg-[#e1ebed] ">
      <Navbar />
      <Banner />
      <Skill />
      <Service />

      <Experience />

      <Contact />
      <Footer />
    </Row>
  );
};

export default Home;
