import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const biomas = [
  { nombre: "Bosque", codigo: "BIOMA 01", color: "#5B7F3D", emoji: "🌿" },
  { nombre: "Mar", codigo: "BIOMA 02", color: "#3B6E8F", emoji: "🌊" },
  { nombre: "Casa de Baños", codigo: "BIOMA 03", color: "#7A2A2A", emoji: "🏮" },
  { nombre: "Cielo", codigo: "BIOMA 04", color: "#6B8CAE", emoji: "☁️" },
];

const mesas = {
  Bosque: [
    { id: "M1", capacidad: 2, zona: "Ventana", estado: "libre", horarios: ["19:00", "20:45", "22:00"] },
    { id: "M2", capacidad: 4, zona: "Interior", estado: "ocupada", horarios: [] },
    { id: "M3", capacidad: 2, zona: "Barra", estado: "ocupada", horarios: [] },
    { id: "M4", capacidad: 4, zona: "Interior", estado: "libre", horarios: ["19:00", "20:45", "22:00"] },
    { id: "M5", capacidad: 2, zona: "Interior", estado: "ocupada", horarios: [] },
    { id: "M6", capacidad: 6, zona: "Sala", estado: "libre", horarios: ["19:30", "21:00"] },
  ],
  Mar: [
    { id: "M1", capacidad: 2, zona: "Terraza", estado: "libre", horarios: ["19:00", "21:00"] },
    { id: "M2", capacidad: 4, zona: "Interior", estado: "libre", horarios: ["19:00", "20:30", "22:00"] },
    { id: "M3", capacidad: 2, zona: "Barra", estado: "ocupada", horarios: [] },
    { id: "M4", capacidad: 6, zona: "Sala", estado: "ocupada", horarios: [] },
    { id: "M5", capacidad: 4, zona: "Ventana", estado: "libre", horarios: ["20:00", "22:00"] },
    { id: "M6", capacidad: 2, zona: "Terraza", estado: "ocupada", horarios: [] },
  ],
  "Casa de Baños": [
    { id: "M1", capacidad: 4, zona: "Interior", estado: "ocupada", horarios: [] },
    { id: "M2", capacidad: 2, zona: "Rincón", estado: "libre", horarios: ["19:00", "20:45"] },
    { id: "M3", capacidad: 6, zona: "Sala", estado: "libre", horarios: ["20:00", "22:00"] },
    { id: "M4", capacidad: 2, zona: "Barra", estado: "ocupada", horarios: [] },
    { id: "M5", capacidad: 4, zona: "Interior", estado: "libre", horarios: ["19:30", "21:00"] },
    { id: "M6", capacidad: 2, zona: "Ventana", estado: "ocupada", horarios: [] },
  ],
  Cielo: [
    { id: "M1", capacidad: 2, zona: "Terraza", estado: "libre", horarios: ["19:00", "20:30", "22:00"] },
    { id: "M2", capacidad: 4, zona: "Interior", estado: "ocupada", horarios: [] },
    { id: "M3", capacidad: 6, zona: "Sala", estado: "libre", horarios: ["20:00", "21:30"] },
    { id: "M4", capacidad: 2, zona: "Barra", estado: "ocupada", horarios: [] },
    { id: "M5", capacidad: 4, zona: "Ventana", estado: "libre", horarios: ["19:30", "21:00"] },
    { id: "M6", capacidad: 2, zona: "Rincón", estado: "libre", horarios: ["20:00", "22:00"] },
  ],
};

const detallesMesa = {
  Bosque: { foto: "🌿", ambiente: "Cascada del bosque", mobiliario: "Mesas de roble + helechos" },
  Mar: { foto: "🌊", ambiente: "Arrecife de coral", mobiliario: "Mesas de cristal + conchas" },
  "Casa de Baños": { foto: "🏮", ambiente: "Vapor del baño", mobiliario: "Tatami + lámparas japonesas" },
  Cielo: { foto: "☁️", ambiente: "Entre las nubes", mobiliario: "Sillas blancas + cortinas vaporosas" },
};

export default function Mapa({ onNavegar, onReservarMesa }) {
  const [biomaActivo, setBiomaActivo] = useState("Bosque");
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [comensales, setComensales] = useState(2);

  const mesasActuales = mesas[biomaActivo];
  const detalle = detallesMesa[biomaActivo];
  const colorBioma = biomas.find(b => b.nombre === biomaActivo)?.color;
  const mesa = mesasActuales.find(m => m.id === mesaSeleccionada);

  const getEstadoColor = (estado, id) => {
    if (id === mesaSeleccionada) return { bg: "#C9A961", text: "#1A1A1A", border: "2px dashed #C9A961" };
    if (estado === "libre") return { bg: "#5B7F3D", text: "#F4ECD8", border: "none" };
    return { bg: "#C8102E", text: "#F4ECD8", border: "none" };
  };

  const handleReservar = () => {
    if (mesa && horaSeleccionada) {
      onReservarMesa({
        bioma: biomaActivo,
        mesa: mesaSeleccionada,
        hora: horaSeleccionada,
        comensales,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <Navbar active="Mapa" onNavegar={onNavegar} />

      <section className="px-8 py-12 flex flex-col items-center text-center gap-3">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase">— Disponibilidad en tiempo real —</span>
        <h1 className="text-[#F4ECD8] font-serif text-5xl">Mapa interactivo del restaurante</h1>
        <p className="text-[#F4ECD8]/60 font-sans text-sm max-w-md">Explora cada bioma, elige la mesa que más te guste y resérvala al instante.</p>
      </section>

      <section className="px-8 pb-6 flex gap-3 justify-center flex-wrap">
        {biomas.map((b) => (
          <button key={b.nombre} onClick={() => { setBiomaActivo(b.nombre); setMesaSeleccionada(null); setHoraSeleccionada(null); }}
            className="flex items-center gap-2 px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: biomaActivo === b.nombre ? b.color : "transparent", color: "#F4ECD8", border: `2px solid ${b.color}` }}>
            {b.emoji} {b.nombre} <span className="text-xs opacity-60">{b.codigo}</span>
          </button>
        ))}
      </section>

      <section className="px-8 pb-8 flex flex-col md:flex-row gap-6 w-full">
        {/* PLANO */}
        <div className="bg-[#F4ECD8] rounded-2xl p-6 flex-1 flex flex-col gap-4">
          <div>
            <p className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">Plano del bioma</p>
            <h2 className="text-[#1A1A1A] font-serif text-2xl">{biomaActivo} · Sala principal</h2>
            <p className="text-[#1A1A1A]/60 font-sans text-xs">Toca cualquier mesa libre para ver los detalles y reservar</p>
          </div>
          <div className="grid grid-cols-3 gap-3 bg-[#1A1A1A]/5 rounded-xl p-4">
            {mesasActuales.map((m) => {
              const estilo = getEstadoColor(m.estado, m.id);
              return (
                <button key={m.id} onClick={() => m.estado !== "ocupada" && setMesaSeleccionada(m.id)}
                  disabled={m.estado === "ocupada"}
                  className="rounded-xl p-3 flex flex-col items-center gap-1 transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-80"
                  style={{ backgroundColor: estilo.bg, color: estilo.text, border: estilo.border, outline: m.id === mesaSeleccionada ? `3px solid ${colorBioma}` : "none" }}>
                  <span className="font-sans font-bold text-sm">{m.id}</span>
                  <span className="font-sans text-xs opacity-80">{m.capacidad}p</span>
                  {m.id === mesaSeleccionada && <span className="text-xs font-bold">SELECCIONADA</span>}
                </button>
              );
            })}
          </div>
          <div className="flex gap-4 flex-wrap">
            {[{ color: "#5B7F3D", label: "Disponible" }, { color: "#C8102E", label: "Ocupada" }, { color: "#C9A961", label: "Tu mesa" }].map(l => (
              <div key={l.label} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
                <span className="text-[#1A1A1A]/60 font-sans text-xs">{l.label}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[#1A1A1A]/10 pt-4 flex flex-col gap-3">
            <div className="flex gap-4 flex-wrap">
              <div className="flex flex-col gap-1">
                <label className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">Hora preferida</label>
                <select className="border border-[#1A1A1A]/20 rounded-lg px-3 py-2 text-sm font-sans bg-white">
                  <option>20:00</option><option>19:00</option><option>21:00</option><option>22:00</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">Comensales</label>
                <div className="flex items-center gap-2 border border-[#1A1A1A]/20 rounded-lg px-3 py-2 bg-white">
                  <button onClick={() => setComensales(Math.max(1, comensales - 1))} className="text-[#C8102E] font-bold">−</button>
                  <span className="font-sans text-sm w-4 text-center">{comensales}</span>
                  <button onClick={() => setComensales(Math.min(8, comensales + 1))} className="text-[#C8102E] font-bold">+</button>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">Fecha</label>
                <div className="border border-[#1A1A1A]/20 rounded-lg px-3 py-2 text-sm font-sans bg-white">Hoy · Lun 4 May</div>
              </div>
            </div>
            <button onClick={handleReservar}
              className="w-full bg-[#C8102E] text-[#F4ECD8] font-sans text-sm font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:brightness-90 transition-all">
              Reservar mesa seleccionada
            </button>
            {!mesaSeleccionada && <p className="text-[#C8102E] font-sans text-xs text-center">Selecciona una mesa del plano primero</p>}
            {mesaSeleccionada && !horaSeleccionada && <p className="text-[#C9A961] font-sans text-xs text-center">Selecciona una hora disponible en el panel de la derecha</p>}
          </div>
        </div>

        {/* DETALLE */}
        <div className="bg-[#F4ECD8] rounded-2xl p-6 w-full md:w-80 flex flex-col gap-4">
          {!mesa ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
              <span className="text-6xl opacity-30">{detalle.foto}</span>
              <p className="text-[#1A1A1A]/40 font-sans text-sm text-center">Selecciona una mesa del plano para ver sus detalles</p>
            </div>
          ) : (
            <>
              <div className="rounded-xl h-32 flex items-center justify-center text-6xl" style={{ backgroundColor: colorBioma }}>{detalle.foto}</div>
              <h3 className="text-[#1A1A1A] font-serif text-2xl">Mesa {mesa.id.replace("M", "")}</h3>
              <p className="text-[#1A1A1A]/40 font-sans text-xs uppercase tracking-widest">{biomaActivo} · {mesa.zona.toUpperCase()}</p>
              <div className="flex flex-col gap-2 text-sm">
                {[
                  { label: "Capacidad", valor: `${mesa.capacidad} personas` },
                  { label: "Zona", valor: mesa.zona },
                  { label: "Ambiente", valor: detalle.ambiente },
                  { label: "Mobiliario", valor: detalle.mobiliario },
                ].map(item => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">{item.label}</span>
                    <span className="text-[#1A1A1A] font-sans text-xs">{item.valor}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <span className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">Disponibilidad</span>
                  <span className="bg-[#5B7F3D] text-[#F4ECD8] font-sans text-xs px-2 py-0.5 rounded-full">LIBRE</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">Próximas horas libres</p>
                <div className="flex gap-2 flex-wrap">
                  {mesa.horarios.map(h => (
                    <button key={h} onClick={() => setHoraSeleccionada(h)}
                      className={`px-3 py-1 rounded-full font-sans text-xs font-semibold transition-all
                        ${horaSeleccionada === h ? "bg-[#C8102E] text-[#F4ECD8]" : "border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#C8102E]"}`}>
                      {h}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleReservar}
                className="w-full bg-[#C8102E] text-[#F4ECD8] font-sans text-sm font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:brightness-90 transition-all">
                Reservar esta mesa
              </button>
              <button onClick={() => { setMesaSeleccionada(null); setHoraSeleccionada(null); }}
                className="text-[#1A1A1A]/50 font-sans text-xs text-center hover:text-[#C8102E] transition-all">
                + Volver al mapa
              </button>
            </>
          )}
        </div>
      </section>

      <section className="bg-[#F4ECD8]/5 mx-8 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
        <div className="flex flex-col gap-2">
          <span className="text-[#C9A961] font-sans text-xs tracking-[4px] uppercase">Sobre los biomas</span>
          <p className="text-[#F4ECD8] font-sans text-sm max-w-lg">Cada bioma tiene su propia carta y ambiente. Cambia de tab para ver las mesas de Mar, Casa de Baños o Cielo.</p>
        </div>
        <Button label="Ver los biomas" variant="outline" onClick={() => onNavegar("Carta")} />
      </section>

      <section className="px-8 py-12 flex flex-col items-center text-center">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase mb-4">— Elige tu mundo —</span>
        <blockquote className="text-[#F4ECD8] font-serif text-2xl italic">«Cuatro biomas, doce películas, una mesa para ti.»</blockquote>
      </section>

      <Footer onNavegar={onNavegar} />
    </div>
  );
}
