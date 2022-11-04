let button = document.querySelector("#btn")

button.addEventListener('click', e => {
    //button.style.background = 'rgb(52	59	41)'
    button.style.color = 'rgb(245 245 245)'
    button2.style.color = 'rgb(255	176	46)'
    button4.style.color = 'rgb(255	176	46)'

    //let bg = document.querySelector('body')
    //bg.style.background = 'rgb(52	59	41)'

    let bg = document.querySelector('body')
    bg.style.background = 'rgb(52	59	41)'

    
    
    let picker = document.querySelector('#cp')
    console.log(picker.value)
    bg.style.background = picker.value;
    bg.style.color = "white"
  

    

})

let button2 = document.querySelector("#btn1")

button2.addEventListener('click', e => {
    //button.style.background = 'rgb(52	59	41)'
    button2.style.color = 'rgb(245 245 245)'
    button.style.color = 'rgb(255	176	46)'
    button4.style.color = 'rgb(255	176	46)'

    

    let bg = document.querySelector('body')
    bg.style.background = 'rgb(52	59	41)'
    bg.style.color = "white"

})

let button3 = document.querySelector("#btn2")

button3.addEventListener('click', e => {
    let slider = document.querySelector("#sr")
    let h1 = document.querySelector("h1")
    h1.style.fontSize = slider.value
    bg.style.color = slider.value

})

let button4 = document.querySelector("#btn3")

button4.addEventListener('click', e => {
    //button.style.background = 'rgb(255 250 250)'
    button4.style.color = 'rgb(245 245 245)'
    button.style.color = 'rgb(255	176	46)'
    button2.style.color = 'rgb(255	176	46)'

    

    let bg = document.querySelector('body')
    bg.style.background = 'rgb(255 250 250)'
    bg.style.color = "black"

})