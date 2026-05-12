# Práctica 4: Exportación + Documentación

Este documento detalla el proceso técnico seguido para la transposición de los diseños de alta fidelidad de Figma a un entorno de desarrollo real utilizando React. El código fuente completo de la aplicación se encuentra en la carpeta `/anime-ramen`.

## 1. Exportación a HTML/React

El proceso de desarrollo no se limitó a una exportación automática, sino que se planteó como una **construcción integral de componentes de diseño a código de producción**.

### Flujo de Trabajo

1. **Opción elegida (1C — Generación directa en React):** Se optó por construir los componentes directamente en React, tomando como referencia visual el prototipo de Figma y el Design System definido en la práctica anterior, sin depender de plugins de exportación automática.
2. **Tecnologías utilizadas:**
   - **React + Vite:** Para una configuración de desarrollo rápida y moderna.
   - **Tailwind CSS v3:** Para los estilos utilitarios, respetando la paleta de colores, tipografía y tokens de diseño del sistema definido en Figma.
   - **React State (useState):** Implementación de navegación entre vistas y lógica interactiva sin necesidad de router externo.

### Detalles Técnicos de Implementación

- **Sistema de navegación:** Se implementó un sistema de estado global en `App.jsx` mediante `useState` que gestiona la vista activa, permitiendo navegar entre las seis páginas principales (Landing, Carta, Mapa Interactivo, Reserva, FAQs y Contacto) sin React Router.
- **Diseño Atómico aplicado:** Se construyeron átomos reutilizables (`Button`, `Badge`, `Logo`, `FormField`), moléculas (`Navbar`, `Footer`, `Stepper`, `CardPlato`) y organismos (páginas completas como `Reserva` o `Carta`) siguiendo la metodología Atomic Design definida en el Design System.
- **Componentes parametrizados:** Todos los componentes reciben props para renderizar contenido dinámico. Por ejemplo, `CardPlato` acepta nombre, descripción, precio y badges; `Badge` acepta label y color; `Stepper` acepta el paso actual y los labels de cada etapa.
- **Gestión de estado e interactividad real:** Se implementó lógica funcional en todas las páginas: filtrado por bioma y categoría en la Carta, selección de mesa con codificación por color en el Mapa, flujo de reserva en 4 pasos con validación de campos obligatorios, acordeón en FAQs y formulario con estado de envío en Contacto.
- **Integración entre vistas:** El Mapa Interactivo pasa los datos de bioma, mesa y hora seleccionados directamente a la página de Reserva, pre-rellenando el formulario y situando al usuario en el paso correspondiente.

---

## 2. Documentación con Storybook

Se instaló y configuró **Storybook 10** en el proyecto. Se documentaron los siguientes componentes con sus variantes:

| Componente | Variantes documentadas |
|---|---|
| Button | Primary, Secondary, Outline |
| Badge | Rojo, Verde, Oro, Sumi |
| Navbar | Activo en cada sección |
| Footer | Default |
| CardPlato | Default, Signature |
| Stepper | Paso 1, 2, 3, Completado |
| FormField | Default, Email |
| Logo | Small, Medium, Large |

Storybook queda disponible en el proyecto ejecutando `npm run storybook` desde la carpeta `/anime-ramen`.

---

## 3. Autoevaluación del diseño (Accesibilidad)

### Puntos Fuertes

- **Contraste de color:** La paleta se construyó desde el principio con criterios de accesibilidad WCAG 2.2 AA, alcanzando un ratio de contraste de 13:1 entre Tatami Cream (#F4ECD8) y Tinta Sumi (#1A1A1A), muy por encima del mínimo exigido de 4.5:1.
- **Codificación visual de estados:** El sistema de mesas del Mapa Interactivo utiliza verde para disponible, rojo para ocupada y dorado para seleccionada, cumpliendo la heurística de Nielsen de visibilidad del estado del sistema.
- **Feedback de errores:** El flujo de Reserva implementa validación en tiempo real con mensajes de error en rojo bajo cada campo obligatorio, indicando al usuario exactamente qué debe corregir antes de continuar.
- **Interactividad de teclado:** Al usar etiquetas `<button>` e `<input>` reales en lugar de divs, se hereda de forma natural el comportamiento de foco y navegación por teclado.

### Puntos de Mejora

- **Textos alternativos en imágenes:** Al usar emojis como sustitutos visuales de imágenes de platos, se pierde contexto para usuarios con lectores de pantalla. En producción real se reemplazarían por imágenes con atributos `alt` descriptivos.
- **Responsive móvil:** El diseño está optimizado para escritorio (1440px) siguiendo el mockup de Figma. Algunas vistas como el Mapa o la Reserva en paso 3 requieren ajustes adicionales para pantallas menores de 768px.

---

## 4. Problemas detectados y soluciones adoptadas

| Problema | Solución |
|---|---|
| Node.js v18 incompatible con Vite 9 | Instalación de nvm y actualización a Node v20 |
| Tailwind CSS v4 incompatible con PostCSS | Downgrade a Tailwind CSS v3, estable y compatible |
| Favicon no se actualizaba | Creación de `favicon.svg` personalizado con el logo ANI/ME/RAMEN |
| Página en blanco al acceder a la URL de Surge | Copia de `index.html` como `200.html` para gestionar el routing en cliente |
| Navegación entre páginas no funcionaba | Refactorización del sistema de props `onNavegar` para pasar la función de navegación a todos los componentes |

---

## 5. Conclusiones

La realización de esta práctica ha permitido al equipo comprender la distancia real entre el diseño visual en Figma y el desarrollo de software funcional. Partir de un Design System bien definido en la práctica anterior fue clave: tener los colores, tipografías y componentes documentados facilitó enormemente la traducción a código, ya que cada decisión de diseño tenía una justificación clara que podía trasladarse directamente a clases de Tailwind o props de componente.

La opción 1C (generación directa en React) resultó ser la más exigente técnicamente pero también la que ofrece mayor control sobre el resultado final. A diferencia de los plugins de exportación automática, que generan código rígido con posicionamiento absoluto difícil de mantener, construir los componentes desde cero permitió aplicar correctamente la metodología Atomic Design y obtener una base de código limpia, modular y escalable. El mayor aprendizaje ha sido comprobar que una buena arquitectura de componentes no es un lujo, sino una necesidad para que un proyecto crezca de forma sostenible.

La WebApp fue desplegada de forma optativa en Surge.sh y está disponible en: [https://anime-ramen-ugr.surge.sh](https://anime-ramen-ugr.surge.sh)
