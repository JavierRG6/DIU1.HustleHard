export default function Footer({ onNavegar }) {
  return (
    <footer className="w-full bg-[#F4ECD8] px-8 py-10 flex flex-col md:flex-row justify-between gap-8">
      <div>
        <p className="font-serif text-[#1A1A1A] text-lg mb-2">ANIME RAMEN</p>
        <p className="text-[#1A1A1A] text-sm font-sans">Cuatro mundos. Un cuenco.</p>
      </div>
      <div className="flex gap-12 text-sm font-sans text-[#1A1A1A]">
        <ul className="flex flex-col gap-2">
          <li className="font-semibold tracking-widest uppercase text-xs text-[#C9A961] mb-1">Navega</li>
          {["Carta", "Reserva", "Mapa", "FAQs", "Contacto"].map((l) => (
            <li key={l} className="hover:text-[#C8102E] cursor-pointer" onClick={() => onNavegar?.(l)}>{l}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-semibold tracking-widest uppercase text-xs text-[#C9A961] mb-1">Contacto</li>
          <li>info@animeramen.es</li>
          <li>+34 958 000 000</li>
          <li>Granada, España</li>
        </ul>
      </div>
    </footer>
  );
}
