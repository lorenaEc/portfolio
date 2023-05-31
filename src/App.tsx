import { Header } from "Components/Header";
import { About } from "Components/About";
import { Footer } from "Components/Footer";
import { Skills } from "Components/Skills";
import { Portfolio } from "Components/Portfolio";

const App = () => {
  return (
    <div className="min-h-screen flex-col justify-center items-cente bg-slate-800">
      <main className="mx-auto px-6 text-left lg:text-center lg:px-12 ">
        <Header />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;
