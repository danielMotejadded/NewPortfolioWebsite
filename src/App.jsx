import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <CustomCursor />

        <Home />
        <About />
        <Projects />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;