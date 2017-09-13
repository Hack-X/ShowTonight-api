// Load different configs for production or development
let configFile = '';

if (process.env.NODE_ENV === "production") {
  configFile = 'prod.js';
} else {
  configFile = 'dev.js';
}

export default require("./config/" + configFile).default;