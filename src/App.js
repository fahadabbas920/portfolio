import { Fragment } from "react";
// import Footer from "./components/footer/footer.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Main from "./Pages/Main.jsx";
import Projects from "./Pages/Projects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubtn from "./components/menu/menu.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
// import Background from "./components/background/background.jsx";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Menubtn></Menubtn>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
