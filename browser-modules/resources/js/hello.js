export const explain = () => console.log("These are greetings.");

const hello = () => console.log("Hello!");

const hola = () => console.log("¡Hola!");

const bonjour = () => console.log("Bonjour!");

const resources = {
  hello,
  hola,
  bonjour
}

export default resources;
// or => export { resources as default };