import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./axiosService.js"
class FullPokedexService {
  async getAllPokemon(){
    let res = await pokeApi.get('pokemon?limit=10')
    console.log(res.data)
    ProxyState.fullPokedex = res.data.results
  }
  async getOnePokemon(name){
    let res = await pokeApi.get('pokemon/'+name)
    let res2 = await pokeApi.get("pokemon-species/"+name)
    console.log(res.data)
    console.log(res2.data)
    res.data['description'] = res2.data.flavor_text_entries[0].flavor_text
    console.log(res.data);
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}


export const fullPokedexService = new FullPokedexService()