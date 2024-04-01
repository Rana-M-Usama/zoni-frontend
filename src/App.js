import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import ProgramSection from "./components/programSection/ProgramSection";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProgramSection />
    </>
  );
}

export default App;
