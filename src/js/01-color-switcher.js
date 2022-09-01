function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const body = document.querySelector('body')
const buttonStart = document.querySelector('[data-start]')
const buttonStop = document.querySelector('[data-stop]')
let timer = null


buttonStart.addEventListener ('click', (event)=>{
    activeButton(event); 
    inactiveButton(buttonStop)
      timer= setInterval (onButtonStart, 1000); 
}
  )

function onButtonStart (){
    return body.style.backgroundColor = getRandomHexColor() 

}
buttonStop.addEventListener('click', onButtonStop)

function onButtonStop (event){
    clearInterval (timer)
    activeButton(event)
    inactiveButton(buttonStart);
}
function activeButton(button){button.target.setAttribute('disabled','true')
}
function inactiveButton(button){button.removeAttribute('disabled')}


