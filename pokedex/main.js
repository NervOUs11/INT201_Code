import poke from './pokemon.json' assert {type: 'json'}
import pokeImg from './pokemon-images.json' assert { type: 'json' }

let divPokedex = document.getElementById('pokedex')
for (let i = 0; i < 150; i++) {
  let newDiv = document.createElement('div')
  newDiv.className = 'pokeCard'

  let newImgElement = document.createElement('img')
  newImgElement.className = 'pokeImg'
  newImgElement.src = pokeImg[poke[i].name.english]

  let pElement = document.createElement('p')
  pElement.innerText = poke[i].name.japanese

  //add to pokeCard element
  newDiv.append(newImgElement)
  newDiv.append(pElement)
  
  //add to pokeDex
  divPokedex.append(newDiv)
}