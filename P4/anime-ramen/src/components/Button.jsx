export default function Button({ label = "Reservar", variant = "primary", onClick }) {
  const base = "px-6 py-3 rounded-full font-sans font-semibold tracking-widest uppercase text-sm transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-[#C8102E] text-[#F4ECD8] hover:brightness-90",
    secondary: "border-2 border-[#F4ECD8] text-[#F4ECD8] hover:bg-[#F4ECD8] hover:text-[#1A1A1A]",
    outline: "border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-[#F4ECD8]",
  };
  return <button className={`${base} ${variants[variant]}`} onClick={onClick}>{label}</button>;
}
