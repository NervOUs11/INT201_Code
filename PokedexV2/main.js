import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

let imgCount = 0
let divPokeCard = document.getElementById('poke_card')
let divPokeInfo = document.getElementById('poke_info')
let divContainer = document.getElementsByClassName('container')

let imgTag = document.createElement('img')
let pTag = document.createElement('p')
let divBth = document.createElement('div')
let btn_next = document.createElement('button')
let btn_prev = document.createElement('button')

pTag.textContent = poke[imgCount].name.japanese
imgTag.src = pokeImg[poke[imgCount].name.english]
divBth.className = 'btn'
btn_prev.className = 'prev_btn'
btn_next.className = 'next_btn'
btn_prev.textContent = 'Prev'
btn_next.textContent = 'Next'

divPokeCard.append(imgTag)
divPokeCard.insertBefore(imgTag, divPokeInfo)
divPokeInfo.append(pTag)
divContainer[0].append(divBth)
divBth.append(btn_prev)
divBth.append(btn_next)

btn_next.addEventListener('click',() => {
    imgCount++
    pTag.textContent = poke[imgCount].name.japanese
    imgTag.src = pokeImg[poke[imgCount].name.english]
})

btn_prev.addEventListener('click',() => {
    imgCount--
    pTag.textContent = poke[imgCount].name.japanese
    imgTag.src = pokeImg[poke[imgCount].name.english]
})