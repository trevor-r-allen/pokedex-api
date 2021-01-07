import { ProxyState } from "../AppState.js";
import { fullPokedexService } from "../Services/FullPokedexService.js";

function _draw(){
  let pokedex = ProxyState.fullPokedex
  let template = /*html*/`<h2>All Pokemon</h2><ol>`
  pokedex.forEach(p => template += /*html*/`<li onclick="app.fullPokedexController.getOnePokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('fullPokedex').innerHTML = template+/*html*/`</ol>`
}
function _drawActive(){
  let pokemon = ProxyState.activePokemon
  document.getElementById('activePokemon').innerHTML = pokemon.Template
}
export default class FullPokedexController{
  constructor(){
    ProxyState.on("fullPokedex", _draw)
    ProxyState.on("activePokemon", _drawActive)
    _draw()
    this.getAllPokemon()
  }
  getAllPokemon(){
    try{
      fullPokedexService.getAllPokemon()
    }
    catch(error){
      console.error(error);
    }
  }
  getOnePokemon(name){
    try{
      fullPokedexService.getOnePokemon(name)
    }
    catch(error){
      console.error(error);
    }
  }
}