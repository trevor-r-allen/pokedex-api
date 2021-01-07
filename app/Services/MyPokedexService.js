import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./axiosService.js"


class MyPokedexService {
  async getAllPokemon() {
    
  }
  
  async getOnePokemon(name) {
    let pokemon = ProxyState.myPokedex.find(p => p.name == name)
    console.log(pokemon)
    ProxyState.activePokemon = pokemon
  }
  
  async catchPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    console.log(res.data)
    console.log(ProxyState.activePokemon)
    ProxyState.myPokedex = [...ProxyState.myPokedex, new Pokemon(res.data)]
  }
}
export const myPokedexService = new MyPokedexService()