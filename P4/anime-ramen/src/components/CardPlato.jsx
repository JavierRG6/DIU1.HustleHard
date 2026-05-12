import Badge from "./Badge";
export default function CardPlato({ nombre = "Ramen Bosque", descripcion = "Caldo de bambú, setas shiitake y tofu ahumado.", precio = "13,50 €", badge = "VEGANO", badgeColor = "verde", imagen }) {
  return (
    <div className="bg-[#F4ECD8] rounded-3xl overflow-hidden shadow-md flex flex-col w-64">
      <div className="h-36 bg-[#1A1A1A] flex items-center justify-center">
        {imagen ? <img src={imagen} alt={nombre} className="w-full h-full object-cover" /> : <span className="text-[#F4ECD8] text-4xl">🍜</span>}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <p className="font-serif text-[#1A1A1A] text-base leading-tight">{nombre}</p>
          <Badge label={badge} color={badgeColor} />
        </div>
        <p className="text-[#1A1A1A] text-xs font-sans leading-relaxed">{descripcion}</p>
        <p className="text-[#C8102E] font-sans font-bold text-sm mt-1">{precio}</p>
      </div>
    </div>
  );
}
