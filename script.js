
//Clases para los vasos pequeños
const smallCup = document.querySelectorAll(".cup.cup-small")

//Clase referente a los litros
const liters = document.querySelector(".liters")

//Clase referente al container de los litros y al remained
const remained = document.getElementById("remained")

//Id referida al porcentaje
const percentage = document.getElementById('percentage')

//Comando que recorre a los elementos referentes a los vasos pequeños y los recorre asignandole un numero en asenso 
smallCup.forEach((cup, idx)=> {
    //funcion que captura el evento de clickear un vaso pequeño y iniciar la funcion con su indice respectivo
    cup.addEventListener("click", () => highlistCup(idx))
})

actualizeCup()
//Funcion que condiciona el indice seleccionado para poder añadirle la clase "full" a los vasos pequeños
function highlistCup(idx){
    if(idx===7 && smallCup[idx].classList.contains("full")) idx--;
    else if(smallCup[idx].classList.contains("full") && !smallCup[idx].nextElementSibling.classList.contains("full")){
        idx--;
    }
    smallCup.forEach((cup, idx2)=> {
        if(idx2 <= idx) {
            cup.classList.add("full")
        } else {
            cup.classList.remove("full")
        }
    })
    actualizeCup()
}

function actualizeCup(){
    //Selecciona los vasos que tengan la clase full y los cuenta
    const fullCups = document.querySelectorAll(".cup.cup-small.full").length;

    //Total de vasos
    const allCups = smallCup.length
    //Si no seleccionamos vasos...
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / allCups * 330}px`
        percentage.innerText = `${fullCups / allCups * 100}%`
    }
    //Si tenemos todos los vasos seleccionados...
    if(fullCups === allCups) {
        remained.style.visibility = 'hidden'
    } else {
        remained.style.height = 0
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}