//Exo 1
const date2 = new Date(1990, 5, 15)
const now = new Date()
const diff = now.getTime() - date2.getTime()
const diffInYear = Math.floor(diff / (1000*60*60*24*364))
console.log(diffInYear)

//exo2
function isValidDate(date2)
    const now = new Date()
    const diff = now.getTime() - date2.getTime()
    const year = ''
    if (Math.floor(diff / (1000*60*60*24*364))-4 = 0) {
        year = true
    } else {
        year = false
}
isValidDate(2024, 2, 28)
console.log(year)