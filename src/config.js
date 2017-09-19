// Chargement du fichier de configuration de production ou de développement

let configFile = '';

if (process.env.NODE_ENV === "production") {
  configFile = 'prod.js';
} else {
  configFile = 'dev.js';
}

export default require("./config/" + configFile).default;