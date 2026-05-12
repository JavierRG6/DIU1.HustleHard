import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categorias = ["Todos", "Reservas", "Carta", "Biomas", "General"];

const faqs = [
  { pregunta: "¿Cómo puedo hacer una reserva?", respuesta: "Puedes reservar directamente desde nuestra web en la sección 'Reserva', eligiendo bioma, mesa, fecha y hora. También puedes llamarnos al +34 958 000 000.", categoria: "Reservas" },
  { pregunta: "¿Puedo cancelar o modificar mi reserva?", respuesta: "Sí, puedes cancelar o modificar tu reserva hasta 24 horas antes sin ningún coste. Para hacerlo, contacta con nosotros por email o teléfono.", categoria: "Reservas" },
  { pregunta: "¿Cuánto dura una sesión en el restaurante?", respuesta: "Cada sesión tiene una duración estimada de 90 minutos. Si necesitas más tiempo, consúltanos al hacer la reserva.", categoria: "Reservas" },
  { pregunta: "¿Tienen menú para alérgicos o celíacos?", respuesta: "Sí. Nuestra carta indica claramente los alérgenos de cada plato. Tenemos opciones sin gluten, veganas y vegetarianas en todos los biomas.", categoria: "Carta" },
  { pregunta: "¿Puedo pedir platos de distintos biomas?", respuesta: "Cada mesa está asignada a un bioma, pero puedes solicitar platos de otros biomas bajo petición. Consúltalo con tu camarero.", categoria: "Carta" },
  { pregunta: "¿Cada cuánto cambia la carta?", respuesta: "La carta cambia cada temporada, aproximadamente cada tres meses, coincidiendo con el cambio de película en cada bioma.", categoria: "Carta" },
  { pregunta: "¿Qué es exactamente un bioma?", respuesta: "Cada bioma es un espacio temático inspirado en una película de Studio Ghibli. Tiene decoración, música, carta y ambiente propios.", categoria: "Biomas" },
  { pregunta: "¿Puedo elegir en qué bioma sentarme?", respuesta: "Sí, en el momento de la reserva puedes seleccionar el bioma de tu preferencia y ver las mesas disponibles en el mapa interactivo.", categoria: "Biomas" },
  { pregunta: "¿Con qué frecuencia cambian las películas de cada bioma?", respuesta: "Cada bioma rota su película de referencia cada tres meses. Recibirás una notificación si estás suscrito a nuestra newsletter.", categoria: "Biomas" },
  { pregunta: "¿Dónde estáis ubicados?", respuesta: "Estamos en Granada, España. Puedes ver la dirección exacta en nuestra sección de Contacto.", categoria: "General" },
  { pregunta: "¿Tenéis aparcamiento?", respuesta: "No disponemos de aparcamiento propio, pero hay varios aparcamientos públicos a menos de 5 minutos a pie.", categoria: "General" },
  { pregunta: "¿Aceptáis grupos o eventos privados?", respuesta: "Sí, podemos organizar eventos privados en cualquiera de los biomas. Contacta con nosotros para más información y presupuesto.", categoria: "General" },
];

export default function FAQs({ onNavegar }) {
  const [abierta, setAbierta] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const faqsFiltradas = faqs.filter(f => {
    const matchCat = categoriaActiva === "Todos" || f.categoria === categoriaActiva;
    const matchBusqueda = f.pregunta.toLowerCase().includes(busqueda.toLowerCase());
    return matchCat && matchBusqueda;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <Navbar active="FAQs" onNavegar={onNavegar} />

      {/* HERO oscuro */}
      <section className="px-8 py-16 flex flex-col items-center text-center gap-5">
        <h1 className="text-[#F4ECD8] font-serif text-5xl">Preguntas frecuentes</h1>
        <p className="text-[#F4ECD8]/60 font-sans text-sm max-w-md">Todo lo que necesitas saber antes de venir. Si no encuentras tu respuesta, pregúntanos.</p>
        <div className="flex items-center gap-2 bg-[#F4ECD8]/10 border border-[#F4ECD8]/20 rounded-full px-5 py-3 w-full max-w-md">
          <span className="text-[#F4ECD8]/40">🔍</span>
          <input value={busqueda} onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar pregunta..."
            className="bg-transparent text-[#F4ECD8] text-sm font-sans outline-none placeholder:text-[#F4ECD8]/40 w-full" />
        </div>
      </section>

      {/* FILTROS */}
      <section className="px-8 pb-6 flex gap-3 justify-center flex-wrap">
        {categorias.map(c => (
          <button key={c} onClick={() => setCategoriaActiva(c)}
            className={`px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all
              ${categoriaActiva === c ? "bg-[#C8102E] text-[#F4ECD8]" : "border border-[#F4ECD8]/30 text-[#F4ECD8] hover:border-[#F4ECD8]"}`}>
            {c}
          </button>
        ))}
      </section>

      {/* ACORDEÓN */}
      <section className="px-6 pb-8 flex flex-col gap-3 w-full">
        {faqsFiltradas.length === 0 ? (
          <p className="text-[#F4ECD8]/40 font-sans text-sm text-center py-12">No hay preguntas para esta búsqueda.</p>
        ) : faqsFiltradas.map((f, i) => (
          <div key={i} className="bg-[#F4ECD8] rounded-2xl overflow-hidden">
            <button onClick={() => setAbierta(abierta === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#C9A961] font-sans text-xs uppercase tracking-widest">{f.categoria}</span>
                <span className="text-[#1A1A1A] font-serif text-lg leading-tight">{f.pregunta}</span>
              </div>
              <span className={`text-[#C8102E] text-2xl font-light flex-shrink-0 transition-transform duration-200 ${abierta === i ? "rotate-45" : ""}`}>⊕</span>
            </button>
            {abierta === i && (
              <div className="px-6 pb-5 border-t border-[#1A1A1A]/10">
                <p className="text-[#1A1A1A]/70 font-sans text-sm leading-relaxed mt-4">{f.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] border border-[#F4ECD8]/10 mx-8 mb-8 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[#C9A961] font-sans text-xs tracking-[4px] uppercase">¿No encuentras tu respuesta?</span>
          <h2 className="text-[#F4ECD8] font-serif text-2xl">Pregúntale a un humano.</h2>
          <p className="text-[#F4ECD8]/50 font-sans text-xs">Respondemos en menos de 24 horas.</p>
        </div>
        <button onClick={() => onNavegar("Contacto")}
          className="bg-[#C8102E] text-[#F4ECD8] font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:brightness-90 transition-all">
          Contactar
        </button>
      </section>

      <Footer onNavegar={onNavegar} />
    </div>
  );
}
