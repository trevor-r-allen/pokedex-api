export default class Pokemon {
constructor({name, img, description, weight, height, types, sprites, species}){
  this.name = name
  this.img = img || sprites.other['official-artwork'].front_default
  this.description = description || species
  this.height = height
  this.weight = weight
  let typeString = ""
  types.forEach(t => {typeString+= t.type.name+" "})
  this.types = typeString
}

get Template(){
  return /*html*/`
  <h2>Selected Pokemon</h2>
  <img src="${this.img}" class="img-fluid \${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
  <p>${this.name}</p>
  <p>Height: ${this.height} Weight: ${this.weight}</p>
  <p>Types: ${this.types}</p>
  <p>${this.description}</p>
  <button type="button" class="btn btn-outline-primary" onclick="app.myPokedexController.catchPokemon()">Catch</button>
  `
}
}