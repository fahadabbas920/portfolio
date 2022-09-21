import { Fragment } from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Main from "./Pages/Main.jsx";
import Projects from "./Pages/Projects.jsx";
import { Routes, Route } from "react-router-dom";
import Menubtn from "./components/menu/menu.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "../src/components/footer/footer.jsx";

function App() {
  window.addEventListener('load',()=>{
      <Main></Main>
  })
  return (
    <Fragment>
        <Navbar></Navbar>
        <Menubtn></Menubtn>
        <Routes>
        <Route path="/*"  element={<Main/>}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
