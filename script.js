
//Clases para los vasos pequeños
const smallCup = document.querySelectorAll(".cup.cup-small")

//Clase referente a los litros
const liters = document.querySelector(".liters")

//Clase referente al container de los litros y al remained
const remained = document.getElementById("remained")

//Id referida al porcentaje
const percentage = document.getElementById('percentage')

//Comando que recorre a los elementos referentes a los vasos pequeños y los recorre asignandole un indice acendente 
smallCup.forEach((cup, idx)=> {
    //funcion que captura el evento de clickear un vaso pequeño y iniciar la funcion con su indice respectivo
    cup.addEventListener("click", () => highlistCup(idx))
})

actualizeCup()
//Funcion que condiciona el indice seleccionado para poder añadirle la clase "full" a los vasos pequeños
function highlistCup(idx){
    //Si seleccionamos el ultimo vaso pequeño y ya habia sido seleccionado anteriormente, resta un indice
    if(idx===7 && smallCup[idx].classList.contains("full")) idx--;
        //Y si el vaso que seleccionamos ya habia sido seleccionado y ademas el vaso siguente al seleccionado tambien habia sido seleccionado resta un numero al indice.
    else if(smallCup[idx].classList.contains("full") && !smallCup[idx].nextElementSibling.classList.contains("full")){
        idx--;
    }
    //Recorrer nuevamente todos los vasos pequeños para poder comparar con el indice seleccionado anteriormente
    smallCup.forEach((cup, idx2)=> {
        //Añade la clase 'full' a todos los vasos seleccionados menores o iguales al indice del vaso seleccionado
        if(idx2 <= idx) {
            //Recorre el vaso y añadele la clase full
            cup.classList.add("full")
        } else {
            //A todos aquellos vasos que sean mayores al indice seleccionado quita la clase full.
            cup.classList.remove("full")
        }
    })
    //Llamar funcion
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

    } 
    //Para los vasos seleccionados añade el estilo...
    else {
        percentage.style.visibility = 'visible'
        //Calculo para mostrar la cantidad de agua bebida en pantalla referente a la cantidad de vasos seleccionados
        percentage.style.height = `${fullCups / allCups * 330}px`
        //Cambiar el porcentaje innerText
        percentage.innerText = `${fullCups / allCups * 100}%`
    }
    //Si tenemos todos los vasos seleccionados...
    if(fullCups === allCups) {
        remained.style.visibility = 'hidden'
    } else {
        remained.style.height = 0
        remained.style.visibility = 'visible'
        //Mostrar los litros bebidos en pantalla mediante un innerText referente a la cantidad de vasos seleccionados O con la clase 'full'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

    
}
