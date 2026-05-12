import FormField from "./FormField";
export default { title: "Anime Ramen/FormField", component: FormField };
export const Default = { args: { label: "Nombre", placeholder: "Ej: Javier", required: true } };
export const Email = { args: { label: "Email", type: "email", placeholder: "Ej: javier@mail.com", required: true } };
