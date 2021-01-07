import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./axiosService.js"
class FullPokedexService {
  async getAllPokemon(){
    let res = await pokeApi.get('?limit=10')
    console.log(res.data)
    ProxyState.fullPokedex = res.data.results
  }
  async getOnePokemon(id){
    let res = await pokeApi.get(id)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}

export const fullPokedexService = new FullPokedexService()