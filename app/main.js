import FullPokedexController from "./Controllers/FullPokedexController.js";
import MyPokedexController from "./Controllers/MyPokedexController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  fullPokedexController = new FullPokedexController();
  myPokedexController = new MyPokedexController();
}

window["app"] = new App();
