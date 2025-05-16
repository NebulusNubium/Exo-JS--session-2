const xhr = new XMLHttpRequest()

//il y a 4 type de requête HTTP:
// GET : pour lire des données
// POST: créer un élément
// PUT: update un élément
// DELETE
/*
xhr.open('GET','./text.txt')
xhr.onreadystatechange = function (){
    if(xhr.readyState ===4 && xhr.status === 200){
        console.log('done')
        console.log(xhr.response)
    } else {
        console.log('fail')
        console.log({
            status: xhr.status,
            text: xhr.statusText
        })
    }
}
xhr.send()
console.log(xhr)
*/
/*
const btn = document.querySelector('.button')
btn.addEventListener('click', getData)

function getData() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', './api/text.txt')
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const paragraph = document.createElement('p')
      paragraph.textContent = xhr.response
      document.body.appendChild(paragraph)
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText
      })
    }
  }
  xhr.send()
}
*/
const btn = document.querySelector('.button')
btn.addEventListener('click', getData)

function getData() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', './api/text.json')
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response)
      data.forEach(element => {
        const paragraph = document.createElement('p')
        paragraph.textContent = `${element.name}, ${element.age} ans`
        document.body.appendChild(paragraph)
      })
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText
      })
    }
  }
  xhr.send()
}
