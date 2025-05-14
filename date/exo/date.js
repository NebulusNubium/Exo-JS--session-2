//Exo 1
setTimeout(function(){
  document.getElementById('welcome').textContent = 'welcome to JS!'
}, 2000);

//exo 2
let seconds = 5

const container = document.getElementById('countdown')
container.textContent = "Virus injecté dans..."+seconds

const timer = setInterval(() => {
  seconds--
  if (seconds > 0) {
    container.textContent = "Virus injecté dans..."+seconds
  } else {
    container.textContent = "Virus injecté!"
    clearInterval(timer)
  }
}, 1000)

//exo 3

let seconds = 10

const container = document.getElementById('countdown')
container.textContent = "Virus injecté dans..."+seconds/2

const timer = setInterval(() => {
  seconds--

  if (seconds%2 == 1) {
    container.textContent = "Virus injecté dans..."+(seconds+1)/2
  } else {
    container.textContent = ""
  }
  if (seconds == 0) {
    container.textContent = "Virus injecté !"
    clearInterval(timer)
  }
}, 500)
message = container.textContent = "Virus injecté dans..."+(seconds+1)/2
alert (message)
//Exo 4