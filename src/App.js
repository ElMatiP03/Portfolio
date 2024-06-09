import "./App.css";
import BarraLateral from "./components/barraLateral/barraLateral";
import BarraCentral from "./components/barraCentral/barraCentral";
import BarraSuperior from "./components/barraSuperior/barraSuperior";
import { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
//fi fi-es

function App() {
  const [language, setLanguage] = useState("my-float  fi fi-us");
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <BarraSuperior /> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          if (language === "my-float  fi fi-us") {
            setLanguage("my-float  fi fi-es");
            i18n.changeLanguage("es");
          } else {
            setLanguage("my-float  fi fi-us");
            i18n.changeLanguage("en");
          }
        }}
        class="float"
      >
        <i className="w-2/3 px-4 py-2 mb-4 text-[1.2rem] rounded-full cursor-pointer bg-gradient-to-r from-Primario to-Secundario hover:scale-105 focus:outline-none my-float">
          <i class={language}></i>
        </i>
      </button>
      <div className="grid grid-cols-12 gap-[3rem] px-[6rem] bg-Fondo1 lg:h-screen md:h-[200vh] sm:h-[200vh] text-white">
        <div className="my-auto col-span-12 lg:col-span-3 p-[1rem] bg-Fondo3 rounded-[2rem] h-[90vh] ">
          <BarraLateral />
        </div>

        <div className="my-auto col-span-12 lg:col-span-9 bg-Fondo3 rounded-[2rem] h-[90vh] overflow-hidden">
          <BarraCentral />
        </div>
      </div>
    </>
  );
}

export default App;
