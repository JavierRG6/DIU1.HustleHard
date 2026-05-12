import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Stepper from "../components/Stepper";

const biomas = [
  { nombre: "Bosque", color: "#5B7F3D", emoji: "🌿", pelicula: "Mononoke", descripcion: "Bosque primigenio. Ramen vegetal." },
  { nombre: "Mar", color: "#3B6E8F", emoji: "🌊", pelicula: "Marnie", descripcion: "Profundidades marinas. Ramen de mar." },
  { nombre: "Casa de Baños", color: "#7A2A2A", emoji: "🏮", pelicula: "Kaguya", descripcion: "Espíritus del otoño. Ramen lacado." },
  { nombre: "Cielo", color: "#6B8CAE", emoji: "☁️", pelicula: "Laputa", descripcion: "Entre las nubes. Ramen etéreo." },
];

const mesas = [
  { id: "M1", capacidad: 2, zona: "Ventana", libre: true },
  { id: "M2", capacidad: 4, zona: "Interior", libre: false },
  { id: "M3", capacidad: 2, zona: "Barra", libre: false },
  { id: "M4", capacidad: 4, zona: "Interior", libre: true },
  { id: "M5", capacidad: 2, zona: "Interior", libre: false },
  { id: "M6", capacidad: 6, zona: "Sala", libre: true },
];

const steps = ["Fecha y comensales", "Bioma", "Mesa", "Confirmación"];

export default function Reserva({ onNavegar, datosIniciales }) {
  const [paso, setPaso] = useState(datosIniciales?.bioma ? 1 : 0);
  const [errores, setErrores] = useState({});
  const [datos, setDatos] = useState(datosIniciales ? { ...{ fecha: "", hora: datosIniciales.hora || "20:00", comensales: datosIniciales.comensales || 2, nombre: "", email: "", comentarios: "", bioma: datosIniciales.bioma || null, mesa: datosIniciales.mesa || null } } : {
    fecha: "", hora: "20:00", comensales: 2, nombre: "", email: "", comentarios: "",
    bioma: null, mesa: null,
  });

  const biomaObj = biomas.find(b => b.nombre === datos.bioma);
  const mesaObj = mesas.find(m => m.id === datos.mesa);
  const refReserva = `#AR-2026-${Math.floor(Math.random() * 9000) + 1000}`;

  const validarPaso1 = () => {
    const nuevosErrores = {};
    if (!datos.fecha) nuevosErrores.fecha = "La fecha es obligatoria";
    if (!datos.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!datos.email.trim()) nuevosErrores.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(datos.email)) nuevosErrores.email = "El email no es válido";
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <Navbar active="Reserva" onNavegar={onNavegar} />

      <section className="px-8 py-10 flex flex-col items-center text-center gap-3">
        <h1 className="text-[#F4ECD8] font-serif text-5xl">Realiza tu reserva</h1>
        <p className="text-[#F4ECD8]/60 font-sans text-sm">Reserva tu experiencia en el restaurante</p>
      </section>

      <div className="px-8 mb-6">
        <Stepper steps={steps} current={paso} />
      </div>

      <section className="px-8 pb-8 w-full">

        {/* PASO 1 */}
        {paso === 0 && (
          <div className="bg-[#F4ECD8] rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <span className="text-[#C9A961] font-sans text-xs tracking-[4px] uppercase">Paso 1</span>
              <h2 className="text-[#1A1A1A] font-serif text-2xl mt-1">Fecha, hora y comensales</h2>
              <p className="text-[#C8102E] font-sans text-xs mt-1">* Todos los campos marcados son obligatorios</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col gap-1">
                <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">Fecha <span className="text-[#C8102E]">*</span></label>
                <input type="date" value={datos.fecha} onChange={e => { setDatos({...datos, fecha: e.target.value}); setErrores({...errores, fecha: null}); }}
                  className={`border rounded-xl px-4 py-3 text-sm font-sans bg-white focus:outline-none transition-all ${errores.fecha ? "border-[#C8102E]" : "border-[#1A1A1A] focus:border-[#C8102E]"}`} />
                {errores.fecha && <p className="text-[#C8102E] font-sans text-xs">{errores.fecha}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">Hora <span className="text-[#C8102E]">*</span></label>
                <select value={datos.hora} onChange={e => setDatos({...datos, hora: e.target.value})}
                  className="border border-[#1A1A1A] rounded-xl px-4 py-3 text-sm font-sans bg-white focus:outline-none focus:border-[#C8102E] transition-all">
                  {["13:00","13:30","14:00","14:30","15:00","15:30","20:00","20:30","21:00","21:30","22:00","22:30"].map(h => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">Comensales <span className="text-[#C8102E]">*</span></label>
                <div className="flex items-center gap-3 border border-[#1A1A1A] rounded-xl px-4 py-3 bg-white w-fit">
                  <button onClick={() => setDatos({...datos, comensales: Math.max(1, datos.comensales - 1)})} className="text-[#C8102E] font-bold text-lg w-6">−</button>
                  <span className="font-sans text-sm w-4 text-center font-semibold">{datos.comensales}</span>
                  <button onClick={() => setDatos({...datos, comensales: Math.min(8, datos.comensales + 1)})} className="text-[#C8102E] font-bold text-lg w-6">+</button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">Nombre <span className="text-[#C8102E]">*</span></label>
                <input type="text" value={datos.nombre} onChange={e => { setDatos({...datos, nombre: e.target.value}); setErrores({...errores, nombre: null}); }}
                  placeholder="Ej: Javier Romero"
                  className={`border rounded-xl px-4 py-3 text-sm font-sans bg-white placeholder:text-gray-400 placeholder:italic focus:outline-none transition-all ${errores.nombre ? "border-[#C8102E]" : "border-[#1A1A1A] focus:border-[#C8102E]"}`} />
                {errores.nombre && <p className="text-[#C8102E] font-sans text-xs">{errores.nombre}</p>}
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">Email <span className="text-[#C8102E]">*</span></label>
                <input type="email" value={datos.email} onChange={e => { setDatos({...datos, email: e.target.value}); setErrores({...errores, email: null}); }}
                  placeholder="Ej: javier@mail.com"
                  className={`border rounded-xl px-4 py-3 text-sm font-sans bg-white placeholder:text-gray-400 placeholder:italic focus:outline-none transition-all ${errores.email ? "border-[#C8102E]" : "border-[#1A1A1A] focus:border-[#C8102E]"}`} />
                {errores.email && <p className="text-[#C8102E] font-sans text-xs">{errores.email}</p>}
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">Comentarios o alergias</label>
                <textarea rows={3} value={datos.comentarios} onChange={e => setDatos({...datos, comentarios: e.target.value})}
                  placeholder="Cuéntanos si tienes alguna alergia, preferencia o petición especial..."
                  className="border border-[#1A1A1A] rounded-xl px-4 py-3 text-sm font-sans bg-white placeholder:text-gray-400 placeholder:italic focus:outline-none focus:border-[#C8102E] transition-all resize-none" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button label="Siguiente →" variant="primary" onClick={() => { if (validarPaso1()) setPaso(1); }} />
            </div>
          </div>
        )}

        {/* PASO 2 */}
        {paso === 1 && (
          <div className="flex flex-col gap-6">
            <div className="bg-[#F4ECD8] rounded-2xl p-6">
              <span className="text-[#C9A961] font-sans text-xs tracking-[4px] uppercase">Paso 2</span>
              <h2 className="text-[#1A1A1A] font-serif text-2xl mt-1">Elige tu bioma</h2>
              <p className="text-[#1A1A1A]/60 font-sans text-sm mt-1">Cada bioma es un mundo distinto. ¿En cuál quieres vivir tu historia?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {biomas.map(b => (
                <button key={b.nombre} onClick={() => setDatos({...datos, bioma: b.nombre, mesa: null})}
                  className={`rounded-2xl p-6 flex flex-col gap-3 text-left transition-all duration-200 hover:scale-105 border-2 ${datos.bioma === b.nombre ? "border-[#F4ECD8]" : "border-transparent"}`}
                  style={{ backgroundColor: b.color }}>
                  <div className="flex justify-between items-start">
                    <span className="text-4xl">{b.emoji}</span>
                    {datos.bioma === b.nombre && <span className="bg-[#F4ECD8] text-[#1A1A1A] font-sans text-xs font-bold px-2 py-0.5 rounded-full">SELECCIONADO</span>}
                  </div>
                  <div>
                    <p className="text-[#F4ECD8] font-serif text-xl">{b.nombre}</p>
                    <p className="text-[#F4ECD8]/70 font-sans text-xs mt-1">{b.pelicula} · {b.descripcion}</p>
                  </div>
                </button>
              ))}
            </div>
            {!datos.bioma && <p className="text-[#C8102E] font-sans text-xs text-center">Selecciona un bioma para continuar</p>}
            <div className="flex justify-between">
              <Button label="← Anterior" variant="outline" onClick={() => setPaso(0)} />
              <Button label="Siguiente →" variant="primary" onClick={() => datos.bioma && setPaso(2)} />
            </div>
          </div>
        )}

        {/* PASO 3 */}
        {paso === 2 && (
          <>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-[#F4ECD8] rounded-2xl p-6 flex-1 flex flex-col gap-4">
                <div>
                  <span className="text-[#C9A961] font-sans text-xs tracking-[4px] uppercase">Paso 3</span>
                  <h2 className="text-[#1A1A1A] font-serif text-2xl mt-1">Selecciona tu mesa</h2>
                  <p className="text-[#1A1A1A]/60 font-sans text-sm">Bioma {datos.bioma} · {datos.comensales} comensales · {datos.hora}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 bg-[#1A1A1A]/5 rounded-xl p-4">
                  {mesas.map(m => (
                    <button key={m.id} onClick={() => m.libre && setDatos({...datos, mesa: m.id})}
                      disabled={!m.libre}
                      className={`rounded-xl p-3 flex flex-col items-center gap-1 transition-all font-sans text-sm font-bold
                        ${!m.libre ? "bg-[#C8102E] text-[#F4ECD8] cursor-not-allowed opacity-80" :
                          datos.mesa === m.id ? "text-[#1A1A1A] scale-105" : "bg-[#5B7F3D] text-[#F4ECD8] hover:scale-105"}`}
                      style={datos.mesa === m.id ? { backgroundColor: biomaObj?.color || "#C9A961", outline: "3px solid #F4ECD8" } : {}}>
                      <span>{m.id}</span>
                      <span className="text-xs font-normal opacity-80">{m.capacidad}p</span>
                      {datos.mesa === m.id && <span className="text-xs font-bold">✓</span>}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  {[{ color: "#5B7F3D", label: "Disponible" }, { color: "#C8102E", label: "Ocupada" }, { color: biomaObj?.color || "#C9A961", label: "Tu mesa" }].map(l => (
                    <div key={l.label} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
                      <span className="text-[#1A1A1A]/60 font-sans text-xs">{l.label}</span>
                    </div>
                  ))}
                </div>
                {!datos.mesa && <p className="text-[#C8102E] font-sans text-xs">Selecciona una mesa disponible para continuar</p>}
              </div>
              <div className="bg-[#F4ECD8] rounded-2xl p-6 w-full md:w-72 flex flex-col gap-4">
                {!mesaObj ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 gap-3">
                    <span className="text-5xl opacity-30">{biomaObj?.emoji}</span>
                    <p className="text-[#1A1A1A]/40 font-sans text-sm text-center">Selecciona una mesa del plano</p>
                  </div>
                ) : (
                  <>
                    <div className="rounded-xl h-28 flex items-center justify-center text-5xl" style={{ backgroundColor: biomaObj?.color }}>{biomaObj?.emoji}</div>
                    <h3 className="text-[#1A1A1A] font-serif text-xl">Mesa {mesaObj.id.replace("M", "")}</h3>
                    <div className="flex flex-col gap-2">
                      {[
                        { label: "Capacidad", valor: `${mesaObj.capacidad} personas` },
                        { label: "Zona", valor: mesaObj.zona },
                        { label: "Bioma", valor: datos.bioma },
                        { label: "Hora", valor: datos.hora },
                      ].map(item => (
                        <div key={item.label} className="flex justify-between">
                          <span className="text-[#1A1A1A]/50 font-sans text-xs uppercase">{item.label}</span>
                          <span className="text-[#1A1A1A] font-sans text-xs font-semibold">{item.valor}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button label="← Anterior" variant="outline" onClick={() => setPaso(1)} />
              <Button label="Confirmar reserva →" variant="primary" onClick={() => datos.mesa && setPaso(3)} />
            </div>
          </>
        )}

        {/* PASO 4 */}
        {paso === 3 && (
          <div className="flex flex-col gap-6">
            <div className="bg-[#5B7F3D] rounded-2xl px-8 py-10 flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#F4ECD8] flex items-center justify-center text-3xl">✓</div>
              <h2 className="text-[#F4ECD8] font-serif text-3xl">¡Reserva confirmada!</h2>
              <p className="text-[#F4ECD8]/80 font-sans text-sm">Tu mesa está reservada. Te esperamos con el cuenco caliente.</p>
              <span className="text-[#F4ECD8]/60 font-sans text-xs mt-1">Ref: {refReserva}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F4ECD8] rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-[#1A1A1A] font-serif text-xl">🗓 Mesa reservada</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Fecha", valor: datos.fecha },
                    { label: "Hora", valor: datos.hora },
                    { label: "Comensales", valor: `${datos.comensales} personas` },
                    { label: "Bioma", valor: datos.bioma },
                    { label: "Mesa", valor: `Mesa ${datos.mesa?.replace("M", "")} · ${mesaObj?.zona}` },
                    { label: "Referencia", valor: refReserva },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
                      <span className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">{item.label}</span>
                      <span className="text-[#1A1A1A] font-sans text-xs font-semibold">{item.valor}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F4ECD8] rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-[#1A1A1A] font-serif text-xl">📋 Preferencias</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Nombre", valor: datos.nombre },
                    { label: "Email", valor: datos.email },
                    { label: "Comentarios", valor: datos.comentarios || "Ninguno" },
                  ].map(item => (
                    <div key={item.label} className="flex flex-col border-b border-[#1A1A1A]/10 pb-2">
                      <span className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">{item.label}</span>
                      <span className="text-[#1A1A1A] font-sans text-xs font-semibold">{item.valor}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => { setPaso(0); setDatos({ fecha:"", hora:"20:00", comensales:2, nombre:"", email:"", comentarios:"", bioma:null, mesa:null }); setErrores({}); }}
                  className="text-[#C8102E] font-sans text-xs underline text-left mt-2">+ Hacer otra reserva</button>
              </div>
            </div>
            <div className="flex justify-center">
              <Button label="Volver al inicio" variant="primary" onClick={() => onNavegar("Inicio")} />
            </div>
          </div>
        )}
      </section>
      <Footer onNavegar={onNavegar} />
    </div>
  );
}
