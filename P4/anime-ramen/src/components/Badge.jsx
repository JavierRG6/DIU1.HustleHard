export default function Badge({ label = "NUEVO", color = "rojo" }) {
  const colors = {
    rojo: "bg-[#C8102E] text-[#F4ECD8]",
    verde: "bg-[#5B7F3D] text-[#F4ECD8]",
    oro: "bg-[#C9A961] text-[#1A1A1A]",
    sumi: "bg-[#1A1A1A] text-[#F4ECD8]",
  };
  return (
    <span className={`${colors[color]} px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-widest uppercase`}>
      {label}
    </span>
  );
}
