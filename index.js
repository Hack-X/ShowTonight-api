// On démarre babel, un outil qui permet d'utiliser les dernières évolutions du
// langage Javascript (ici l'évolution ES2015) en restant compatible avec tous
// les serveurs et navigateurs

if (process.env.NODE_ENV === "development") {
  require("babel-register");
  require("./src/server");
} else {
  require("./lib/server");
}