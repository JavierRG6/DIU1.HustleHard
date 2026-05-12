export default function Logo({ size = "sm" }) {
  const sizes = {
    sm: "w-10 h-10 text-[10px]",
    md: "w-16 h-16 text-base",
    lg: "w-32 h-32 text-2xl",
  };
  return (
    <div className={`${sizes[size]} bg-[#F4ECD8] rounded-xl flex flex-col items-center justify-center leading-tight font-serif`}>
      <span className="text-[#C8102E] font-bold">ANI</span>
      <span className="text-[#1A1A1A] font-bold">ME</span>
      <span className="text-[#C8102E] font-bold tracking-widest text-[8px]">RAMEN</span>
    </div>
  );
}
