export default function FormField({ label = "Nombre", type = "text", placeholder = "", required = false }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-xs font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]">
        {label}{required && <span className="text-[#C8102E] ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-[#1A1A1A] rounded-xl px-4 py-3 text-sm font-sans bg-white placeholder:text-gray-400 placeholder:italic focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all"
      />
    </div>
  );
}
