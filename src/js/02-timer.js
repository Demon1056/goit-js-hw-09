import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('[data-start]')
const daysText = document.querySelector('[data-days]')
const hoursText = document.querySelector('[data-hours]')
const minutesText = document.querySelector('[data-minutes]')
const secondsText  = document.querySelector('[data-seconds]')
startButton.setAttribute('disabled', true)
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: choiceDate}
  
    flatpickr('#datetime-picker', options)
    startButton.setAttribute('disabled', true)
 
startButton.addEventListener('click', startTimer )

function startTimer (){ startButton.setAttribute('disabled', true)  
const setIntervalId= setInterval(()=>{ 
   const updateCurrentTime = new Date()   
        const timerTime=selectedTime-updateCurrentTime 
        const {days, hours, minutes, seconds} = convertMs(timerTime)
        if (timerTime<=0) {  
            daysText.textContent= '00';
            hoursText.textContent= '00';
            minutesText.textContent= '00';
            secondsText.textContent= '00'; 
           return clearInterval(setIntervalId)  
          }
      
    daysText.textContent= addLeadingZero(days.toString());
    hoursText.textContent=addLeadingZero(hours.toString());
    minutesText.textContent=addLeadingZero(minutes.toString());
    secondsText.textContent=addLeadingZero(seconds.toString())
} 
,1000)
}
function choiceDate(selectedDates) {
    const currentDate = new Date()
    selectedTime=selectedDates[0]
    if(selectedTime - currentDate > 0) 
    {
    startButton.removeAttribute('disabled') 
     
    }
    else { 
        // window.alert("Please choose a date in the future")
    Notiflix.Notify.info("Please choose a date in the future");
     } 

    }
   
function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds }}
        
        function addLeadingZero (value) {
          return value.padStart(2 ,'0')
        }
   
