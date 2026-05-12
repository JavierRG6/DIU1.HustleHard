import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import FormField from "../components/FormField";

export default function Contacto({ onNavegar }) {
  const [enviado, setEnviado] = useState(false);
  const [preferencia, setPreferencia] = useState("email");

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <Navbar active="Contacto" onNavegar={onNavegar} />

      {/* HERO */}
      <section className="px-8 py-12 flex flex-col items-center text-center gap-3">
        <h1 className="text-[#F4ECD8] font-serif text-5xl">Contacta con nosotros</h1>
        <p className="text-[#F4ECD8]/60 font-sans text-sm max-w-md">¿Tienes alguna pregunta, sugerencia o quieres organizar un evento? Escríbenos.</p>
      </section>

      {/* DOS COLUMNAS */}
      <section className="px-8 pb-8 flex flex-col md:flex-row gap-6 w-full">

        {/* FORMULARIO */}
        <div className="bg-[#F4ECD8] rounded-2xl p-8 flex-1 flex flex-col gap-5">
          <h2 className="text-[#1A1A1A] font-serif text-2xl">Envíanos un mensaje</h2>
          {enviado ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#5B7F3D] flex items-center justify-center text-3xl text-white">✓</div>
              <h3 className="text-[#1A1A1A] font-serif text-xl">¡Mensaje enviado!</h3>
              <p className="text-[#1A1A1A]/60 font-sans text-sm">Te respondemos en menos de 24 horas.</p>
              <button onClick={() => setEnviado(false)} className="text-[#C8102E] font-sans text-xs underline mt-2">Enviar otro mensaje</button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <FormField label="Nombre" placeholder="Ej: Javier Romero" required />
                <FormField label="Email" type="email" placeholder="Ej: javier@mail.com" required />
                <FormField label="Teléfono" type="tel" placeholder="Ej: +34 600 000 000" />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">
                    Mensaje <span className="text-[#C8102E]">*</span>
                  </label>
                  <textarea rows={4} placeholder="Cuéntanos en qué podemos ayudarte..."
                    className="border border-[#1A1A1A] rounded-xl px-4 py-3 text-sm font-sans bg-white placeholder:text-gray-400 placeholder:italic focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all resize-none" />
                  <span className="text-[#1A1A1A]/40 font-sans text-xs text-right">0 / 500</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">Prefiero que me contacten por</label>
                  <div className="flex gap-3">
                    {["email", "teléfono", "sin preferencia"].map(p => (
                      <button key={p} onClick={() => setPreferencia(p)}
                        className={`px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all capitalize
                          ${preferencia === p ? "bg-[#C8102E] text-[#F4ECD8]" : "border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#C8102E]"}`}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <Button label="Enviar mensaje" variant="primary" onClick={() => setEnviado(true)} />
            </>
          )}
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-4 w-full md:w-80">
          <div className="bg-[#F4ECD8] rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-[#1A1A1A] font-serif text-xl">Información</h3>
            {[
              { icono: "📍", titulo: "Dirección", valor: "Calle Ghibli 4, Granada, España" },
              { icono: "📞", titulo: "Teléfono", valor: "+34 958 000 000" },
              { icono: "✉️", titulo: "Email", valor: "info@animeramen.es" },
              { icono: "🕐", titulo: "Horario", valor: "Mar–Dom: 13:00–16:00 / 20:00–23:30" },
            ].map(item => (
              <div key={item.titulo} className="flex gap-3 items-start">
                <span className="text-xl">{item.icono}</span>
                <div>
                  <p className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">{item.titulo}</p>
                  <p className="text-[#1A1A1A] font-sans text-sm">{item.valor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MAPA PLACEHOLDER */}
          <div className="bg-[#5B7F3D]/20 rounded-2xl h-48 flex items-center justify-center border border-[#5B7F3D]/30">
            <div className="text-center">
              <span className="text-4xl">📍</span>
              <p className="text-[#F4ECD8]/60 font-sans text-xs mt-2">Granada, España</p>
            </div>
          </div>

          <div className="bg-[#5B7F3D] rounded-2xl p-5 flex flex-col gap-2">
            <span className="text-[#F4ECD8] text-xl">✓</span>
            <p className="text-[#F4ECD8] font-serif text-base">¿Prefieres reservar directamente?</p>
            <button onClick={() => onNavegar("Reserva")}
              className="text-[#F4ECD8] font-sans text-xs underline text-left">Ir a Reservas →</button>
          </div>
        </div>
      </section>

      {/* RRSS */}
      <section className="px-8 pb-8 flex flex-col items-center gap-4">
        <p className="text-[#F4ECD8]/40 font-sans text-xs tracking-widest uppercase">· O si prefieres, contáctanos en RR.SS. ·</p>
        <div className="flex gap-4">
          {["Instagram", "LinkedIn", "Facebook", "YouTube"].map(s => (
            <button key={s} className="border border-[#F4ECD8]/20 text-[#F4ECD8] font-sans text-xs px-4 py-2 rounded-full hover:border-[#C8102E] hover:text-[#C8102E] transition-all">
              {s}
            </button>
          ))}
        </div>
      </section>

      <Footer onNavegar={onNavegar} />
    </div>
  );
}
