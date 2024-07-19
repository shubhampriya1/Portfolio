import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import Component from "./components/HomeV2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/new-home" element={<Component />} />
      </Routes>
    </>
  );
}

export default App;
