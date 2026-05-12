export default function Stepper({ steps = ["Fecha", "Bioma", "Mesa", "Confirmación"], current = 0 }) {
  return (
    <div className="flex items-center gap-2 w-full justify-center py-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold border-2 transition-all
              ${i < current ? "bg-[#5B7F3D] border-[#5B7F3D] text-[#F4ECD8]" : i === current ? "bg-[#C8102E] border-[#C8102E] text-[#F4ECD8]" : "bg-transparent border-[#F4ECD8] text-[#F4ECD8]"}`}>
              {i < current ? "✓" : i + 1}
            </div>
            <span className={`text-xs font-sans mt-1 tracking-wide ${i === current ? "text-[#C8102E]" : "text-[#F4ECD8]"}`}>{step}</span>
          </div>
          {i < steps.length - 1 && <div className={`w-8 h-0.5 mb-4 ${i < current ? "bg-[#5B7F3D]" : "bg-[#F4ECD8]/30"}`} />}
        </div>
      ))}
    </div>
  );
}
