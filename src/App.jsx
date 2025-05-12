import "./App.css";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
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
        <GoToTopButton />
      </div>
    </>
  );
}

export default App;
