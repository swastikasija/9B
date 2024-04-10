import "./App.css";
import Content from "./components/Content";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Numbers from "./components/Numbers";
import Team from "./components/Team";


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Numbers/>
      <Team/>
      <Content/>
      <Featured/>
      <Check/>
    </>
  );
}

export default App;
