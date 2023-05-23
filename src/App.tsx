import { Header } from "Components/Header";
import { About } from "Components/About";
import { Footer } from "Components/Footer";
import { Skills } from "Components/Skills";
import { Portfolio } from "Components/Portfolio";
import { Contact } from "Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen flex-col justify-center items-center">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
