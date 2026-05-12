import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Carta from "./pages/Carta";
import Mapa from "./pages/Mapa";
import FAQs from "./pages/FAQs";
import Contacto from "./pages/Contacto";
import Reserva from "./pages/Reserva";

const biomas = [
  { nombre: "Bosque", pelicula: "Mononoke", subtitulo: "Ramen de la Diosa Ciervo", color: "#5B7F3D" },
  { nombre: "Mar", pelicula: "Marnie", subtitulo: "Ramen de la Fantasía", color: "#3B6E8F" },
  { nombre: "Casa de Baños", pelicula: "Kaguya", subtitulo: "Ramen de la Princesa", color: "#7A2A2A" },
  { nombre: "Cielo", pelicula: "Laputa", subtitulo: "Ramen del Aire Errante", color: "#6B8CAE" },
];

function Landing({ setPagina }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <Navbar active="Inicio" onNavegar={setPagina} />
      <section className="bg-[#F4ECD8] px-8 py-16 flex flex-col items-center text-center gap-6">
        <span className="text-[#C8102E] font-sans text-xs tracking-[6px] uppercase">Bienvenido a</span>
        <h1 className="text-[#1A1A1A] font-serif text-6xl md:text-7xl leading-tight">Anime Ramen</h1>
        <p className="text-[#1A1A1A]/70 font-sans text-base max-w-md">Una experiencia gastronómica en cuatro biomas Ghibli únicos.<br />Cuatro mundos. Un cuenco.</p>
        <Button label="Reservar mesa" variant="primary" onClick={() => setPagina("Reserva")} />
      </section>
      <section className="px-6 py-8 flex flex-col gap-6">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase text-center">Nuestros cuatro mundos</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {biomas.map((b, i) => (
            <div key={b.nombre} className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200 flex flex-col border border-white/10" style={{ backgroundColor: b.color }}>
              <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-[#F4ECD8]/60 font-sans text-xs tracking-widest uppercase">{b.nombre}</span>
                  <span className="text-[#F4ECD8]/40 font-sans text-xs">BIOMA 0{i + 1}</span>
                </div>
                <span className="text-[#F4ECD8] font-serif text-2xl mt-2">{b.nombre}</span>
                <div className="mt-3 border-t border-white/20 pt-3">
                  <span className="text-[#F4ECD8]/50 font-sans text-xs uppercase tracking-widest">En carta ahora</span>
                  <p className="text-[#F4ECD8] font-serif text-base">{b.pelicula}</p>
                  <p className="text-[#F4ECD8]/60 font-sans text-xs">{b.subtitulo}</p>
                </div>
              </div>
              <div className="px-4 pb-4 mt-auto">
                <span className="text-[#F4ECD8] font-sans text-xs tracking-widest uppercase border border-[#F4ECD8]/40 rounded-full px-3 py-1">Explorar</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#F4ECD8]/5 mx-6 rounded-2xl px-8 py-12 flex flex-col items-center gap-8 border border-white/10">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase">Lo que nos hace únicos</span>
        <h2 className="text-[#F4ECD8] font-serif text-4xl text-center">¿Qué nos hace únicos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { icono: "🎌", titulo: "Experiencia temática", texto: "Cuatro biomas Ghibli conviven todo el año en un mismo local. Cada rincón, otro mundo." },
            { icono: "🍜", titulo: "Cocina inmersiva", texto: "Cada plato signature está inspirado en una película. Comer es entrar en escena." },
            { icono: "✨", titulo: "Ambientación 360°", texto: "Decoración, música, luz y aromas trabajan a la vez para sumergirte en cada bioma." },
          ].map((item) => (
            <div key={item.titulo} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#C9A961] flex items-center justify-center text-xl">{item.icono}</div>
              <h3 className="text-[#F4ECD8] font-serif text-lg">{item.titulo}</h3>
              <p className="text-[#F4ECD8]/60 font-sans text-sm leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-8 py-16 flex flex-col items-center text-center">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase mb-6">Manifiesto</span>
        <blockquote className="text-[#F4ECD8] font-serif text-2xl md:text-3xl italic max-w-2xl leading-relaxed">
          «Servimos historias en forma de caldo.<br />Cuatro películas se sientan a tu mesa.<br />Después, otras cuatro.»
        </blockquote>
      </section>
      <section className="bg-[#C8102E] mx-6 mb-6 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-[#F4ECD8]/70 font-sans text-xs tracking-[4px] uppercase">¿Y ahora?</span>
          <h2 className="text-[#F4ECD8] font-serif text-3xl">¿Tienes hambre de Ghibli?</h2>
          <p className="text-[#F4ECD8]/70 font-sans text-xs">Reserva mesa, elige tu rincón.</p>
        </div>
        <Button label="Reservar" variant="secondary" onClick={() => setPagina("Reserva")} />
      </section>
      <Footer onNavegar={setPagina} />
    </div>
  );
}

export default function App() {
  const [pagina, setPagina] = useState("Inicio");
  const [datosReservaInicial, setDatosReservaInicial] = useState(null);

  const handleReservarMesa = (datos) => {
    setDatosReservaInicial(datos);
    setPagina("Reserva");
  };

  return (
    <div>
      {pagina === "Inicio" && <Landing setPagina={setPagina} />}
      {pagina === "Carta" && <Carta onNavegar={setPagina} />}
      {pagina === "Mapa" && <Mapa onNavegar={setPagina} onReservarMesa={handleReservarMesa} />}
      {pagina === "FAQs" && <FAQs onNavegar={setPagina} />}
      {pagina === "Contacto" && <Contacto onNavegar={setPagina} />}
      {pagina === "Reserva" && <Reserva onNavegar={setPagina} datosIniciales={datosReservaInicial} />}
    </div>
  );
}
