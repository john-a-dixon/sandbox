import { explain as explainHello } from "./hello.js";
import { explain as explainGoodbye } from "./goodbye.js";

import { goodbye, adios, auRevoir } from "./goodbye.js";

import resources from "./hello.js";
const { hello, hola, bonjour } = resources;

// Greetings
explainHello();
hello();
hola();
bonjour();

console.log("\n");

// Farewells
explainGoodbye();
goodbye();
adios();
auRevoir();