import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HighLights />
    </main>
  );
};

export default App;
