//JS execute ligne par ligne, ce qui est dérangeant quand une commande prend du temps, eg: téléchargements, attente d'une réponse
/*

console.log('1. Début')
loadData()
console.log('2. Je fais autre chose')

function loadData(){
    setTimeout((){
        console.log('3. réponse reçu')
    }, 2000)
}

//plutôt qu'un timeout, on veut utiliser des Promesses:
const promise = new Promise(() =>{
    //il y a 3status possibles: 'pending', 'resolved', 'rejected'
})
console.log(promise)
*/

//exemple avec le DOM

const container = document.querySelector('.container')
const button = document.querySelector('.button')

function addImages() {
    return new Promise((resolve, reject) =>{
        if(container){
            const img = document.createElement('img')
            img.src = 'https://picsum.photos/200/300' 
            setTimeout(function(){
                container.appendChild(img)
                resolve()
            }, 3000)

        } else{
            reject('erreur')
        }
    })
}
button.addEventListener('click', async function(){
    await addImages
    await addImages
    await addImages
})
