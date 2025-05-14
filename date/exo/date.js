//Exo 1
function message(){
    const message = 'welcome to JS!'
    const container = document.getElementById('welcome')
    container.textContent = message
}

setTimeout(function(){
    message()
}, 2000)

//exo 2