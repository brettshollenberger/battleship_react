var GamesStore = require("./stores/games_store.js"),
    history    = require("./history.js");

GamesStore.addListener("CLONED_GAME", (game) => {
  if (location.pathname == "/waiting") {
    history.replaceState(null, `/games/${game.id}`)
  }
});
