import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Badge from "../components/Badge";

const biomas = [
  { nombre: "Bosque", codigo: "BIOMA 01", color: "#5B7F3D", emoji: "🌿" },
  { nombre: "Mar", codigo: "BIOMA 02", color: "#3B6E8F", emoji: "🌊" },
  { nombre: "Casa de Baños", codigo: "BIOMA 03", color: "#7A2A2A", emoji: "🏮" },
  { nombre: "Cielo", codigo: "BIOMA 04", color: "#6B8CAE", emoji: "☁️" },
];

const categorias = ["Todos", "Entrantes", "Ramen", "Postres", "Bebidas"];

const platos = {
  Bosque: [
    { nombre: "Ramen de la Diosa Ciervo", categoria: "Ramen", ingredientes: "Caldo miso claro vegetal, shiitake, tomate, bambú en láminas.", plato: "Ramen vegetal del corazón del bosque. Caldo limpio, fresco, profundo.", precio: "14,50 €", badges: [{ label: "★ MÁS PEDIDO", color: "rojo" }, { label: "VEGANO", color: "verde" }], emoji: "🍜" },
    { nombre: "Edamame del Bosque", categoria: "Entrantes", ingredientes: "Edamame fresco, sal de koshika, sésamo tostado, aceite de oliva.", plato: "El aperitivo perfecto para abrir camino dentro del bosque.", precio: "5,50 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🫘" },
    { nombre: "Ramen del Bosque Profundo", categoria: "Ramen", ingredientes: "Caldo miso shiitake, bambú, soja, gochujang.", plato: "El oscuro caldo de Totoro en cuenco. Reconfortante, fuerte, suave.", precio: "13,90 €", badges: [{ label: "VEGETARIANO", color: "verde" }, { label: "SIN GLUTEN", color: "sumi" }], emoji: "🍲" },
    { nombre: "Tartar de tofu ahumado", categoria: "Entrantes", ingredientes: "Tofu ahumado, yuzu, aguacate, láminas tostadas, aceite de hierbas.", plato: "Tartar fresco con hierbas del bosque. Limpio, ligero.", precio: "9,50 €", badges: [{ label: "NUEVO", color: "sumi" }], emoji: "🥗" },
    { nombre: "Mochi de Matcha", categoria: "Postres", ingredientes: "Mochi de té verde, pasta de judía roja, sésamo negro tostado.", plato: "Dulce y suave como el musgo del bosque. El postre de Totoro.", precio: "5,90 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🍡" },
    { nombre: "Té Bancha del Bosque", categoria: "Bebidas", ingredientes: "Té bancha japonés, infusión de bambú, servido caliente o frío.", plato: "La bebida del guardián del bosque. Terrenal y reconfortante.", precio: "3,50 €", badges: [{ label: "SIN GLUTEN", color: "sumi" }], emoji: "🍵" },
    { nombre: "Limonada de Yuzu", categoria: "Bebidas", ingredientes: "Yuzu fresco, agua con gas, miel de bosque, hielo.", plato: "Refrescante y cítrica. Como la brisa entre los árboles.", precio: "4,00 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🍋" },
  ],
  Mar: [
    { nombre: "Ramen del Mar", categoria: "Ramen", ingredientes: "Dashi de algas kombu, gambas frescas, huevo marinado, nori.", plato: "El sabor del océano en un cuenco. Profundo y delicado.", precio: "15,90 €", badges: [{ label: "SIGNATURE", color: "oro" }], emoji: "🍜" },
    { nombre: "Gyoza de Cangrejo", categoria: "Entrantes", ingredientes: "Cangrejo fresco, jengibre, cebollino, salsa ponzu.", plato: "Crujientes por fuera, jugosas por dentro.", precio: "8,50 €", badges: [{ label: "NUEVO", color: "sumi" }], emoji: "🥟" },
    { nombre: "Ramen de Langostinos", categoria: "Ramen", ingredientes: "Bisque de langostinos, fideos gruesos, maíz, mantequilla.", plato: "Cremoso y potente. Un tributo al mar de Ponyo.", precio: "16,50 €", badges: [{ label: "★ MÁS PEDIDO", color: "rojo" }], emoji: "🍜" },
    { nombre: "Ensalada de Wakame", categoria: "Entrantes", ingredientes: "Alga wakame, pepino, sésamo, vinagre de arroz.", plato: "Refrescante y ligera. El aperitivo del verano marino.", precio: "6,90 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🥗" },
    { nombre: "Panna Cotta de Coco y Alga", categoria: "Postres", ingredientes: "Leche de coco, agar-agar, alga spirulina, coulis de mango.", plato: "Cremosa y marina. El postre que Ponyo soñaría.", precio: "6,50 €", badges: [{ label: "SIN GLUTEN", color: "sumi" }], emoji: "🍮" },
    { nombre: "Agua de Mar con Gas", categoria: "Bebidas", ingredientes: "Agua mineral con gas, sal marina, pepino, menta.", plato: "Mineral y fresca. Como el primer sorbo del océano.", precio: "3,00 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "💧" },
    { nombre: "Cóctel de Sake y Yuzu", categoria: "Bebidas", ingredientes: "Sake japonés, zumo de yuzu, agua con gas, hielo picado.", plato: "El cóctel de las profundidades. Elegante y refrescante.", precio: "7,50 €", badges: [{ label: "SIGNATURE", color: "oro" }], emoji: "🍶" },
  ],
  "Casa de Baños": [
    { nombre: "Ramen Lacado", categoria: "Ramen", ingredientes: "Caldo de cerdo 12h, chashu, bambú encurtido, huevo.", plato: "El ramen más oscuro y profundo. Para los valientes del otoño.", precio: "14,50 €", badges: [{ label: "★ MÁS PEDIDO", color: "rojo" }], emoji: "🍜" },
    { nombre: "Takoyaki", categoria: "Entrantes", ingredientes: "Pulpo fresco, masa dorada, mayonesa, bonito seco.", plato: "Las bolas de pulpo de los espíritus. Calientes y adictivas.", precio: "7,90 €", badges: [{ label: "SIGNATURE", color: "oro" }], emoji: "🐙" },
    { nombre: "Ramen de Miso Rojo", categoria: "Ramen", ingredientes: "Miso rojo, chashu, maíz, mantequilla, shiitake.", plato: "Intenso y reconfortante. El calor del baño de los espíritus.", precio: "13,90 €", badges: [{ label: "NUEVO", color: "sumi" }], emoji: "🍲" },
    { nombre: "Gyoza de Cerdo", categoria: "Entrantes", ingredientes: "Cerdo picado, col, jengibre, ajo, salsa de soja.", plato: "Las gyozas del espíritu del baño. Doradas y jugosas.", precio: "7,50 €", badges: [{ label: "★ MÁS PEDIDO", color: "rojo" }], emoji: "🥟" },
    { nombre: "Mochi de Judía Roja", categoria: "Postres", ingredientes: "Mochi tradicional, anko, polvo de té rojo, sésamo.", plato: "El dulce de la abuela Yubaba. Oscuro y adictivo.", precio: "5,50 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🍡" },
    { nombre: "Amazake Caliente", categoria: "Bebidas", ingredientes: "Amazake de arroz fermentado, jengibre rallado, canela.", plato: "La bebida tradicional del baño. Dulce, sin alcohol, reconfortante.", precio: "4,50 €", badges: [{ label: "SIN GLUTEN", color: "sumi" }], emoji: "🍵" },
    { nombre: "Shochu con Ciruela", categoria: "Bebidas", ingredientes: "Shochu de cebada, umeshu, hielo, piel de naranja.", plato: "El licor de los espíritus del baño. Intenso y frutal.", precio: "8,00 €", badges: [{ label: "SIGNATURE", color: "oro" }], emoji: "🍸" },
  ],
  Cielo: [
    { nombre: "Ramen del Cielo", categoria: "Ramen", ingredientes: "Caldo claro de pollo, yuzu, seta enoki, cebollino.", plato: "Ligero como las nubes. El ramen más delicado de la carta.", precio: "13,90 €", badges: [{ label: "NUEVO", color: "sumi" }], emoji: "🍜" },
    { nombre: "Gyoza de Pollo", categoria: "Entrantes", ingredientes: "Pollo, jengibre, ajo, salsa de soja, cebollino.", plato: "Voladoras y crujientes. El aperitivo del castillo en el cielo.", precio: "7,50 €", badges: [{ label: "SIGNATURE", color: "oro" }], emoji: "🥟" },
    { nombre: "Ramen de Trufa", categoria: "Ramen", ingredientes: "Caldo de pollo trufado, fideos finos, huevo, aceite de trufa.", plato: "El lujo del cielo en un cuenco. Elegante y sofisticado.", precio: "18,90 €", badges: [{ label: "★ MÁS PEDIDO", color: "rojo" }, { label: "SIGNATURE", color: "oro" }], emoji: "🍜" },
    { nombre: "Tempura de Verduras", categoria: "Entrantes", ingredientes: "Verduras de temporada, masa ligera, salsa tentsuyu.", plato: "Ligeras como el viento. El aperitivo que flota entre nubes.", precio: "8,90 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🌸" },
    { nombre: "Helado de Sésamo Negro", categoria: "Postres", ingredientes: "Helado artesanal de sésamo negro, galleta de arroz, miel.", plato: "El postre más etéreo. Dulce oscuro entre nubes blancas.", precio: "5,50 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🍨" },
    { nombre: "Dorayaki de Crema", categoria: "Postres", ingredientes: "Bizcocho esponjoso japonés, crema de vainilla, anko.", plato: "El postre de Doraemon entre nubes. Suave y nostálgico.", precio: "6,00 €", badges: [{ label: "NUEVO", color: "sumi" }], emoji: "🥞" },
    { nombre: "Té Blanco de las Nubes", categoria: "Bebidas", ingredientes: "Té blanco premium, flor de cerezo, miel, agua a 75°.", plato: "Delicado y floral. La bebida que beben los ángeles.", precio: "4,50 €", badges: [{ label: "VEGANO", color: "verde" }], emoji: "🍵" },
    { nombre: "Lychee Spritz", categoria: "Bebidas", ingredientes: "Zumo de lychee, prosecco, agua con gas, flor de saúco.", plato: "Burbujeante y celestial. El brindis del castillo en el aire.", precio: "8,50 €", badges: [{ label: "SIGNATURE", color: "oro" }], emoji: "🥂" },
  ],
};

export default function Carta({ onNavegar }) {
  const [biomaActivo, setBiomaActivo] = useState("Bosque");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [verMas, setVerMas] = useState(false);

  const platosActivos = platos[biomaActivo].filter((p) => {
    const matchCategoria = categoriaActiva === "Todos" || p.categoria === categoriaActiva;
    const matchBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || p.ingredientes.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  const platosVisibles = verMas ? platosActivos : platosActivos.slice(0, 4);
  const colorBioma = biomas.find(b => b.nombre === biomaActivo)?.color;

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <Navbar active="Carta" onNavegar={onNavegar} />

      <section className="bg-[#1A1A1A] px-8 py-16 flex flex-col items-center text-center gap-4">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase">— Dos películas cuentan el plato —</span>
        <h1 className="text-[#F4ECD8] font-serif text-5xl">Nuestra carta</h1>
        <p className="text-[#F4ECD8]/60 font-sans text-sm max-w-md">Explora platos y bebidas por bioma o categoría. Cada plato cuenta una escena.</p>
      </section>

      {/* TABS BIOMA */}
      <section className="px-8 pb-4 flex flex-col gap-4">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase text-center">Paso 1 — Selecciona un bioma</span>
        <div className="flex gap-3 justify-center flex-wrap">
          {biomas.map((b) => (
            <button key={b.nombre} onClick={() => { setBiomaActivo(b.nombre); setCategoriaActiva("Todos"); setVerMas(false); setBusqueda(""); }}
              className="flex items-center gap-2 px-5 py-2 rounded-full font-sans text-sm font-semibold tracking-wide transition-all duration-200"
              style={{ backgroundColor: biomaActivo === b.nombre ? b.color : "transparent", color: "#F4ECD8", border: `2px solid ${b.color}` }}>
              {b.emoji} {b.nombre} <span className="text-xs opacity-60">{b.codigo}</span>
            </button>
          ))}
        </div>
      </section>

      {/* FILTROS */}
      <section className="px-8 py-4 flex flex-col gap-3">
        <span className="text-[#C9A961] font-sans text-xs tracking-[6px] uppercase text-center">Paso 2 — Filtra por categoría</span>
        <div className="flex gap-3 items-center flex-wrap justify-center">
          <div className="flex items-center gap-2 bg-[#F4ECD8]/10 rounded-full px-4 py-2">
            <span className="text-[#F4ECD8]/50 text-sm">🔍</span>
            <input value={busqueda} onChange={(e) => { setBusqueda(e.target.value); setVerMas(false); }}
              placeholder="Buscar plato, ingrediente..."
              className="bg-transparent text-[#F4ECD8] text-sm font-sans outline-none placeholder:text-[#F4ECD8]/40 w-48" />
          </div>
          {categorias.map((c) => (
            <button key={c} onClick={() => { setCategoriaActiva(c); setVerMas(false); }}
              className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-200
                ${categoriaActiva === c ? "bg-[#C8102E] text-[#F4ECD8]" : "border border-[#F4ECD8]/30 text-[#F4ECD8] hover:border-[#F4ECD8]"}`}>
              {c}
            </button>
          ))}
        </div>
        <p className="text-[#F4ECD8]/40 font-sans text-xs text-center">
          Mostrando {platosVisibles.length} de {platosActivos.length} platos del bioma {biomaActivo}
        </p>
      </section>

      {/* GRID */}
      <section className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {platosVisibles.length === 0 ? (
          <div className="col-span-2 text-center py-16">
            <p className="text-[#F4ECD8]/40 font-sans text-sm">No hay platos para esta búsqueda.</p>
          </div>
        ) : platosVisibles.map((p) => (
          <div key={p.nombre} className="bg-[#F4ECD8] rounded-2xl overflow-hidden flex gap-4 p-4 relative hover:shadow-lg transition-all">
            <div className="w-28 h-28 rounded-xl flex items-center justify-center text-5xl flex-shrink-0" style={{ backgroundColor: colorBioma }}>
              {p.emoji}
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex gap-1 flex-wrap">
                {p.badges.map((badge) => <Badge key={badge.label} label={badge.label} color={badge.color} />)}
              </div>
              <h3 className="text-[#1A1A1A] font-serif text-lg leading-tight">{p.nombre}</h3>
              <p className="text-[#1A1A1A]/50 font-sans text-xs uppercase tracking-widest">Ingredientes</p>
              <p className="text-[#1A1A1A]/70 font-sans text-xs leading-relaxed">{p.ingredientes}</p>
              <p className="text-[#1A1A1A]/60 font-sans text-xs italic leading-relaxed">{p.plato}</p>
              <p className="text-[#C8102E] font-sans font-bold text-base mt-1">{p.precio}</p>
            </div>
            <button className="absolute top-3 right-3 text-[#C8102E] text-lg hover:scale-125 transition-all">♡</button>
          </div>
        ))}
      </section>

      {platosActivos.length > 4 && (
        <div className="flex justify-center py-4">
          <button onClick={() => setVerMas(!verMas)}
            className="border border-[#F4ECD8]/40 text-[#F4ECD8] font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#F4ECD8]/10 transition-all">
            {verMas ? "Ver menos" : "Ver más platos"}
          </button>
        </div>
      )}

      <section className="bg-[#C8102E] mx-8 my-8 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[#F4ECD8]/70 font-sans text-xs tracking-[4px] uppercase">¿Por qué decidir?</span>
          <h2 className="text-[#F4ECD8] font-serif text-2xl">Pídenos el menú degustación de los 4 mundos.</h2>
          <p className="text-[#F4ECD8]/70 font-sans text-xs">Un plato signature por bioma + bebida maridada. 39 € / persona.</p>
        </div>
        <Button label="Ver menú" variant="secondary" />
      </section>

      <Footer onNavegar={onNavegar} />
    </div>
  );
}
