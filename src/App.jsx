import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Model from "./components/Model";
import Features from "./components/Features";
import Chips from "./components/Chips";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <Chips />
    </main>
  );
};

export default App;
