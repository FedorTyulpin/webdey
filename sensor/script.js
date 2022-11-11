let button = document.querySelector("#btn")
let h2 = document.querySelector("h2")
let lable = document.querySelector("#sr-num")
let slider = document.querySelector("#sensor_sr")
let ledBtn = document.querySelector("#led-Btn")


slider.addEventListener('change', e => {
    lable.innerHTML = slider.value
})


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
    bg.style.p = picker.value;
    bg.style.color = "white"
  

    

})

let button2 = document.querySelector("#btn1")

button2.addEventListener('click', e => {
    //button.style.background = 'rgb(50, 56, 40)'
    button2.style.color = 'rgb(245 245 245)'
    button.style.color = 'rgb(255	176	46)'
    button4.style.color = 'rgb(255	176	46)'

    

    let bg = document.querySelector('body')
    bg.style.background = 'rgb(50, 56, 40)'
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





function sendReq() {
    fetch("http://10.0.0.16/sensor")
    .then((response) => {return response.json()})
    .then((data) => h2.innerHTML = data.sensor)
    
}

setInterval(sendReq, 1000)






async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'no-cors', 
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response //.json(); //
}


ledBtn.addEventListener('click', e => {
    postData("http://10.0.0.16:80/led", { "threshold": slider.value })
        .then((data) => {
          console.log(data); // JSON data parsed by `data.json()` call
    });
});