import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WordSection from "./components/WordSection";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <HeroSection />
        <WordSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
