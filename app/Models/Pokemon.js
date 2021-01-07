export default class Pokemon {
constructor({name, img, description, weight, height, types, sprites, id}){
  this.name = name
  this.img = img || sprites.other['official-artwork'].front_default
  this.description = description
  this.height = height
  this.weight = weight
  this.types = types || types.map(t => t.type.name).join(" | ")
  this.id = id || null
  console.log(this)
}

get Template(){
  return /*html*/`
  <h2>Selected Pokemon</h2>
  <img src="${this.img}" class="img-fluid \${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
  <p>${this.name}</p>
  <p>Height: ${this.height} Weight: ${this.weight}</p>
  <p>Types: ${this.types}</p>
  <p>${this.description}</p>
  ${this.Button}
  `
}

get Button(){
  if(this.id){
    return /*html*/`<button type="button" class="btn btn-outline-success" onclick="app.myPokedexController.catchPokemon()">Catch</button>`
  }
  return /*html*/`<button type="button" class="btn btn-outline-danger" onclick="app.myPokedexController.removePokemon(${this.id})">Remove</button>`
}
}