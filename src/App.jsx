import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Model from "./components/Model";
import Features from "./components/Features";
import Chips from "./components/Chips";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <Chips />
      <Footer />
    </main>
  );
};

export default App;
