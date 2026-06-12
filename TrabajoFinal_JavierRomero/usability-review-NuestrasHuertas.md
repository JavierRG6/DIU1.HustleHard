# Usability Review — Nuestras Huertas
**Web analizada:** https://www.nuestrashuertas.com/  
**Autor:** Javier Romero Gálvez  
**Fecha:** Junio 2026  
**Puntuación total: 68 / 100**

---

## Criterios de evaluación

Escala de valoración por criterio: 0 = No se cumple / 1 = Cumplimiento parcial / 2 = Se cumple correctamente

| # | Criterio | Valoración (0-2) | Comentario |
|---|---|---|---|
| **NAVEGACIÓN** | | | |
| 1 | ¿Tiene una navegación principal clara y visible? | 2 | Menú de 7 ítems bien diferenciados en header |
| 2 | ¿Es consistente la navegación en todas las páginas? | 1 | El menú se duplica en 3 zonas distintas (header, mid-page, footer) generando redundancia |
| 3 | ¿Existe indicación de dónde se encuentra el usuario? | 1 | Breadcrumbs ausentes en páginas de producto |
| 4 | ¿Los enlaces son claramente identificables? | 2 | Color y subrayado distinguen correctamente los enlaces |
| 5 | ¿Hay mapa del sitio o estructura clara? | 1 | No hay sitemap explícito; la estructura se infiere del menú |
| **CONTENIDO** | | | |
| 6 | ¿El contenido es relevante y está bien organizado? | 2 | Secciones bien diferenciadas: huerta propia, productores, cestas, tienda |
| 7 | ¿Los textos son legibles (contraste, tamaño)? | 2 | Tipografía limpia, tamaño ≥16px en cuerpo |
| 8 | ¿El lenguaje es adecuado para el usuario objetivo? | 2 | Tono cercano y divulgativo, sin tecnicismos |
| 9 | ¿Se actualiza el contenido con regularidad? | 1 | Blog activo pero sin fechas visibles en listado |
| 10 | ¿Hay errores gramaticales u ortográficos? | 2 | Ninguno detectado |
| **USABILIDAD GENERAL** | | | |
| 11 | ¿La página de inicio comunica claramente el propósito? | 2 | Tagline "sembrando vida" + subtítulo explican la propuesta en 3 segundos |
| 12 | ¿Las tareas principales se pueden completar fácilmente? | 1 | Comprar una cesta requiere 4 clics; precio no visible hasta el tercer clic |
| 13 | ¿El tiempo de carga es aceptable? | 2 | Carga inicial <2s (estimado por estructura ligera) |
| 14 | ¿Hay retroalimentación al usuario en acciones? | 1 | Formulario de contacto sin confirmación visible tras enviar |
| 15 | ¿Se evita la sobrecarga cognitiva en cada página? | 1 | Homepage densa; el repetido menú duplica la carga visual |
| **DISEÑO VISUAL** | | | |
| 16 | ¿Existe una jerarquía visual clara? | 2 | Patrón en Z correcto: logo → propuesta → CTA → prueba social |
| 17 | ¿La paleta de colores es coherente? | 2 | Verdes y blancos coherentes en toda la web |
| 18 | ¿El espaciado y layout son adecuados? | 2 | Uso generoso de whitespace; secciones bien delimitadas |
| 19 | ¿Las imágenes añaden valor informativo? | 2 | Fotografías de producto y campo de alta calidad |
| 20 | ¿Es el diseño consistente con la identidad de marca? | 2 | Tono visual coherente de principio a fin |
| **ACCESIBILIDAD** | | | |
| 21 | ¿Tiene declaración de accesibilidad? | 2 | Sí, accesible desde footer |
| 22 | ¿Existe enlace skip-to-content? | 2 | Sí, presente |
| 23 | ¿Las imágenes tienen texto alternativo descriptivo? | 1 | Alt texts genéricos en varias fotografías de productos |
| 24 | ¿El contraste de texto cumple WCAG AA (4.5:1)? | 1 | Texto secundario gris sobre blanco no siempre supera el umbral |
| 25 | ¿Es accesible con teclado? | 1 | Navegación parcialmente operable; algunos elementos sin focus visible |
| **EXPERIENCIA MÓVIL** | | | |
| 26 | ¿El diseño es responsive? | 2 | Breakpoints básicos implementados |
| 27 | ¿Los botones tienen área táctil ≥44px? | 0 | Varios botones de producto <44px en móvil (WCAG 2.5.5) |
| 28 | ¿El menú de navegación es usable en móvil? | 1 | Se colapsa correctamente pero requiere muchos pasos para navegar |
| 29 | ¿Los formularios son usables en móvil? | 1 | Formulario de suscripción comprimido; campos pequeños |
| 30 | ¿El contenido tiene prioridad adecuada en móvil? | 1 | La duplicación del menú se mantiene en móvil, consumiendo espacio valioso |
| **CONFIANZA Y CREDIBILIDAD** | | | |
| 31 | ¿Hay señales de confianza visibles? | 2 | Reseñas Google, badge EU Digital Programme, certificaciones |
| 32 | ¿La información de contacto es accesible? | 2 | Email, teléfono y dirección visibles en footer |
| 33 | ¿La política de privacidad está disponible? | 2 | Enlace visible en footer |
| 34 | ¿Hay testimonios o casos de éxito? | 2 | 74 reseñas de Google visibles en homepage |
| 35 | ¿El proceso de compra transmite seguridad? | 1 | Sin indicadores de seguridad SSL visibles en checkout |

---

## Resumen de puntuaciones por área

| Área | Puntos obtenidos | Puntos máximos | % |
|---|---|---|---|
| Navegación | 7 | 10 | 70% |
| Contenido | 9 | 10 | 90% |
| Usabilidad general | 7 | 10 | 70% |
| Diseño visual | 10 | 10 | 100% |
| Accesibilidad | 7 | 10 | 70% |
| Experiencia móvil | 5 | 10 | 50% |
| Confianza | 9 | 10 | 90% |
| **TOTAL** | **54** | **70 (35×2)** | **68/100** |

---

## Principales problemas detectados (por severidad)

### Severidad Alta
- **Precio no visible en primer nivel:** El precio de las cestas de suscripción requiere 3+ clics para ser visible. Viola el principio de divulgación progresiva (Krug) y genera desconfianza → abandono predecible.
- **Sin filtros de producto:** Imposible filtrar por tipo de dieta, certificación ecológica o distancia de producción. Viola Nielsen H7 (Flexibilidad y eficiencia de uso) para el perfil de usuario experto.

### Severidad Media
- **Navegación triplicada:** El menú aparece en header, mid-page y footer sin justificación funcional. Viola Nielsen H4 (Consistencia) y genera carga cognitiva innecesaria.
- **Botones <44px en móvil:** Barrera de accesibilidad motórica. Incumple WCAG 2.5.5.
- **Alt texts genéricos:** Las imágenes de productos no tienen texto alternativo descriptivo. Incumple WCAG 1.1.1.

### Severidad Baja
- Sin breadcrumbs en páginas internas.
- Blog sin fechas de publicación visibles en el listado.
- Ausencia de confirmación visual tras enviar formulario de contacto.

---

## Conclusión

*Nuestras Huertas* es una web con excelente diseño visual y contenido de calidad, que cumple su función comercial principal (venta de cestas de suscripción). Sus mayores debilidades son la **experiencia móvil deficiente** (área táctil, menú, formularios) y la **transparencia de precio tardía**, ambas críticas para el perfil universitario mobile-first del EcoMercado UGR, que abandona rápidamente si no encuentra la información clave en los primeros 3 segundos.
