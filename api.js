let dropdown = document.getElementById("pokemons")
let pokePic = document.getElementById("pokePic")
let pokeTypes = document.getElementById("types")
const url = "https://pokeapi.co/api/v2/pokemon?limit=500"

fetch(url)
.then(res => res.json())
.then(data=> {
    data.results.forEach(element => {
        
        dropdown.innerHTML += `<option value="${element.url}" >${element.name}</option>`
        //let op = document.createElement("option")
        //op.innerText = element.name
        //dropdown.appendChild(op)
    });
})


function changePokemon(option){
    let pokeURL = option.value

    fetch(pokeURL)
    .then(res => res.json())
    .then(data => {
        pokePic.src=data.sprites.front_default
    

        pokeTypes.innerText = ""
        data.types.forEach(element => {
            pokeTypes.innerText += element.type.name
        })
    
    
    })
}