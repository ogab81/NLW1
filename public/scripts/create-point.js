

function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res =>  res.json()) // res => re.json() - short code
    .then(states => {

        for (const state of states) {
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

        
    })
}

populateUFs()

function getcities (event) {
        const cityselect = document.querySelector("select[name=city]")
        const stateinput = document.querySelector("input[name=state]")

        const ufvalue =  event.target.value
        
        const selectedStateindex = event.target.selectedIndex
        stateinput.value = event.target.options[selectedStateindex].text

 

        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
     
    cityselect.innerHTML = "<option value>Selecione a cidade<option>"
    cityselect.disabled = true

    fetch(url)
    .then(res =>  res.json()) // res => re.json() - short code
    .then(cities => {

        for (const city of cities) {
            cityselect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        cityselect.disabled = false
        
    })


}

//document is the actual page being coded
document
//selects elements inside the document
.querySelector("select[name=uf]")
//waits for responses(events) in order to execute something
.addEventListener("change", getcities)

//itens de coleta
//pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect) {
    item.addEventListener("click",handleSelectedItem)
}



//update hidden field with selected items
const collectedItems = document.querySelector("input[name=items")

let selectedItems = []

function handleSelectedItem(event){
    
    const itemLi = event.target

    //add or remove class with JS
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //check if there is selected items
    //if there is collect selected items
    // => substitue uma função anonima
    const alreadySelected = selectedItems.findIndex( item => {
        const Itemfound = item == itemId // this is true ou false
        return Itemfound
    })

    //if its selected, unselected
    if(alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const ItemIsDifferent = item != itemId //bool expression
            return ItemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId) //if not selected, add to selected
    }
    
    
    collectedItems.value = selectedItems
}

