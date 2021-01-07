import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./axiosService.js"


class MyPokedexService {
  async catchPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    console.log(res.data)
    ProxyState.myPokedex = [...ProxyState.myPokedex, new Pokemon(res.data)]
  }
  async getAllPokemon() {
    
  }

  async getOnePokemon(id) {
    
  }
  
}
export const myPokedexService = new MyPokedexService()