import Logo from "./Logo";

const links = ["Carta", "Reserva", "Mapa", "FAQs", "Contacto"];

export default function Navbar({ active = "Inicio", onNavegar }) {
  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full bg-[#1A1A1A] px-8 py-3 flex items-center justify-between">
        <button onClick={() => onNavegar?.("Inicio")} className="flex-shrink-0">
          <Logo size="sm" />
        </button>
        <ul className="flex gap-4 items-center">
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => onNavegar?.(l)}
                className={`text-xs font-sans tracking-widest uppercase transition-all duration-200 px-3 py-1 rounded-full
                  ${active === l ? "bg-[#F4ECD8] text-[#1A1A1A]" : "text-[#F4ECD8] hover:text-[#C9A961]"}`}>
                {l}
              </button>
            </li>
          ))}
          <li>
            <button className="text-[#F4ECD8] hover:text-[#C9A961] transition-all ml-2 text-lg" title="Cambiar idioma">
              🌐
            </button>
          </li>
        </ul>
      </nav>
      <div className="w-full h-px bg-[#C8102E]" />
    </div>
  );
}
