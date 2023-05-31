import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-24 w-[90vw] lg:pt-20 lg:h-96 rounded-lg lg:bg-[url('/gray.jpg')] bg-cover flex flex-col text-white">
      {/* MOBILE */}
      <div className="fixed top-0 w-xl bg-slate-800 lg:hidden">
        <div className="flex justify-between py-4 w-[90vw]">
          <div className="flex w-1/2 items-center gap-6">
            <button
              id="hamburger-button"
              className={`h-8 w-8 cursor-pointer text-3xl lg:hidden ${
                showMenu && "toggle-btn"
              }`}
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <div
                className="-mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']
              "
              />
            </button>
            <p className="text-3xl font-bold uppercase">Lorena</p>
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-red-200 rounded-3xl px-3 w-auto text-slate-800 text-lg font-bold">
              CV
            </button>
          </div>
        </div>
      </div>

      {showMenu && (
        <section
          id="mobile-menu"
          className="top-68 fixed top-0 flex w-full origin-top animate-open-menu flex-col justify-center bg-slate-800 text-5xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <button className="fixed top-4 left-4">x</button>
          <nav
            className="flex min-h-screen flex-col items-center justify-center py-8 gap-14 text-gray-100"
            aria-label="mobile"
          >
            <a href="#about">
              <p>Om mig</p>
            </a>
            <a href="#skills">
              <p>Erfarenheter</p>
            </a>
            <a href="#portfolio">
              <p>Portfolio</p>
            </a>
            <a href="#footer">
              <p>Kontakt</p>
            </a>
          </nav>
        </section>
      )}

      {/* DESKTOP */}
      <div className="hidden lg:block h-full">
        <div className="fixed top-0 w-full bg-slate-800">
          <div className="flex justify-between w-[90vw] my-6">
            <div className="flex justify-start w-1/2 items-center gap-8">
              <p className="text-3xl font-bold uppercase text-gray-100">
                Lorena
              </p>
              <nav className="flex gap-4 text-gray-100 text-xl">
                <a href="#about" className="hover:opacity-75">
                  <p>Om mig</p>
                </a>
                <a href="#skills" className="hover:opacity-75">
                  <p>Erfarenheter</p>
                </a>
                <a href="#portfolio" className="hover:opacity-75">
                  <p>Portfolio</p>
                </a>
                <a href="#footer" className="hover:opacity-75">
                  <p>Kontakt</p>
                </a>
              </nav>
            </div>
            <div className="w-1/2 flex justify-end">
              <button className="bg-red-200 rounded-3xl px-4 text-slate-800 text-lg font-bold hover:opacity-75">
                CV
              </button>
            </div>
          </div>
        </div>

        <div className="h-full flex items-center justify-center">
          <h1 className="text-center text-4xl text-slate-800 font-bold">
            Hej! Mitt namn är Lorena och jag <br />
            <p className="text-slate-800">en Junior Full-stack utvecklare</p>
          </h1>
        </div>
      </div>
    </header>
  );
};
