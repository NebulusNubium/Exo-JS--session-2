const currentDate = new Date() // affiche toute la date de l'heure à l'année

console.log(currentDate.getMonth()) // le mois, de 0 à 11
console.log(currentDate.getFullYear()) //année
console.log(currentDate.getDate()) //jour du mois
console.log(currentDate.getDay()) //le jour Semaine de 0 à 6, 0 étant dimanche
console.log(currentDate.getHours()) //l'heure
console.log(currentDate.getMinutes()) //minutes
console.log(currentDate.getSeconds()) //secondes


const month = currentDate.getMonth()
const year = currentDate.getFullYear() 
const day = currentDate.getDate()
const weekday = currentDate.getDay()
const hour = currentDate.getHours()
const minutes = currentDate.getMinutes()

const weekDays = ['dimanche','lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
const months = ['janvier','fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']

const formattedDate = `${weekDays[weekday]} ${day} ${months[month]} ${year}`
console.log(formattedDate)

//même chose que formattedDate mais sans besoin du tableau:
const formattedDateReduce = currentDate.toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    weekday: 'long'
})
console.log(formattedDateReduce)

//date sans heure avec slashs
const formattedDate2 = currentDate.toLocaleDateString() 
console.log(formattedDate2)
//heure sans date
const formattedTime = currentDate.toLocaleTimeString()
console.log(formattedTime)
//heure et date slash
const formattedDateAndTime = currentDate.toLocaleString()
console.log(formattedDateAndTime)

//les milisecondes écoulées depuis 01/01/1970  
const time = currentDate.getTime()
console.log(time)

const container = document.getElementById('date')
container.textContent = formattedDateAndTime

function showDate() {
    const date = new Date()
    container.textContent = date.toLocaleString() 
}

const interval = setInterval(showDate, 1000)
// pour arrêter un interval net:
//clearInterval(interval)

//pour l'arrêter avec un timer:
setTimeout(function(){
    clearInterval(interval)
}, 5000)

//cleartimeout aussi possible