import { ProxyState } from "../AppState.js";
import { myPokedexService } from "../Services/MyPokedexService.js";

function _draw(){
  let pokedex = ProxyState.myPokedex
  let template = /*html*/`<h2>All Pokemon</h2><ol>`
  pokedex.forEach(p => template += /*html*/`<li onclick="app.myPokedexController.getOnePokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('myPokedex').innerHTML = template+/*html*/`</ol>`
}

export default class MyPokedexController{
  constructor(){
    ProxyState.on("myPokedex", _draw)
  }
  catchPokemon(){
    try{
      myPokedexService.catchPokemon()
    }
    catch(error){
      console.error(error);
    }
  }
  getAllPokemon(){
    try{
      myPokedexService.getAllPokemon()
    }
    catch(error){
      console.error(error);
    }
  }
  getOnePokemon(id){
    try{
      myPokedexService.getOnePokemon(id)
    }
    catch(error){
      console.error(error);
    }
  }

}