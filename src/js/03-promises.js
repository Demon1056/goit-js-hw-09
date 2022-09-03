
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3 
 return new Promise((resolve, reject)=>{ setTimeout(() => {
    if (shouldResolve) {
    resolve ({position, delay}) 
  } 
  else{
    reject ({position, delay})}
  }, delay)})}

const form = document.querySelector('.form')
const submitButton = document.querySelector('button')

form.addEventListener('click', showPromises)
function showPromises(event) {
  event.preventDefault()
  const delayValue = Number(event.currentTarget.elements.delay.value);
  const stepValue = Number(event.currentTarget.elements.step.value);
  const amountValue=event.currentTarget.elements.amount.value;
  if (event.target===submitButton){
    for (let position = 1; position  <= amountValue; position += 1) 
    {delay=delayValue+(position-1)*stepValue
     
    createPromise(position,delay).then(({position, delay})=>{
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({position, delay}) => { 
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });}
  }
  
}
