import Stepper from "./Stepper";
export default { title: "Anime Ramen/Stepper", component: Stepper, parameters: { backgrounds: { default: "dark" } } };
export const Paso1 = { args: { current: 0 } };
export const Paso2 = { args: { current: 1 } };
export const Paso3 = { args: { current: 2 } };
export const Completado = { args: { current: 4 } };
