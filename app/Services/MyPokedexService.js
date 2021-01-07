import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./axiosService.js"


class MyPokedexService {
  async getAllPokemon() {
    let res = await sandboxApi.get('')
    console.log(res.data)
    ProxyState.myPokedex = res.data.map(p => new Pokemon(p))
  }
  
  async getOnePokemon(id) {
    let pokemon = ProxyState.myPokedex.find(p => p.id == id)
    console.log(pokemon)
    ProxyState.activePokemon = pokemon
  }
  
  async catchPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    console.log(res.data)
    console.log(ProxyState.activePokemon)
    ProxyState.myPokedex = [...ProxyState.myPokedex, new Pokemon(res.data)]
  }
  async removePokemon() {
    let res = await sandboxApi.delete(ProxyState.activePokemon.id)
    console.log(res.data)
    ProxyState.myPokedex = ProxyState.myPokedex.filter(p => p.id !== ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }
}
export const myPokedexService = new MyPokedexService()