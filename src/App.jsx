import "./App.scss";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import InfoCard from "./components/InfoCard/InfoCard";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <InfoCard />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
