// @ts-ignore
export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/trevor/pokemon"
})