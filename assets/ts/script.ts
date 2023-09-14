const cardDay = document.querySelector('.cardDay > .numberTimw') as HTMLElement
const cardHours = document.querySelector('.cardHours > .numberTimw') as HTMLElement
const cardMinutes = document.querySelector('.cardMinutes > .numberTimw') as HTMLElement
const cardsSecunds = document.querySelector('.cardsSecunds > .numberTimw') as HTMLElement

const DateActual = new Date(2023 , 7 , 1) 
const someDays = new Date(2023 , 7 , 15 ) 



let constToTalDays =  (someDays - DateActual ) / 1000

type daysNumber = number

function cronomtro(){
  

    const Days:daysNumber = Math.floor(constToTalDays / 3600 / 24)

    const Hours:daysNumber = Math.floor( constToTalDays / 3600) % 24

    const minutes:daysNumber  = Math.floor( constToTalDays / 60 ) % 60

    const seconds:daysNumber = Math.floor( constToTalDays) % 60

    

    cardDay.textContent = timerStandard(Days)

    cardHours.textContent = timerStandard(Hours)

    cardMinutes.textContent = timerStandard(minutes)

    cardsSecunds.textContent = timerStandard(seconds)

    
    constToTalDays =  constToTalDays - 1000 / 1000
   

    
}

function timerStandard (timer: any){
    return timer < 10 ? `0${timer}` : timer
}

cronomtro()


setInterval(cronomtro , 1000)