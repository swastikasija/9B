import "./App.css";
import Content from "./components/Content";
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
    </>
  );
}

export default App;
