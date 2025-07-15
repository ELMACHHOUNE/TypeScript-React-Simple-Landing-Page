import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer/Footer";
import AboutSection from "./Components/subComponents/AboutSection";
import CurriculumSection from "./Components/subComponents/CurriculumSection";
import ApplySection from "./Components/subComponents/ApplySection";

function App() {
  return (
    <>
      <Navbar />
      <Header title="MSc Software Engineer" />
      <Hero />
      <Layout>
        <AboutSection />
        <CurriculumSection />
        <ApplySection />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
