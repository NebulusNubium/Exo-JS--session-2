const navItems = document.querySelectorAll('.nav-item')
const list = document.getElementById('list')

navItems[0].classList.add('active')

async function fetchData(category = 'Ordinary_Drink') {
    try {
        const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        const cocktailData = await response.json()
        addItems(cocktailData.drinks)
    } catch (error) {
        console.error(error)
    }
}

async function fetchDrinkDetails(drinkId) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
        const data = await response.json();
        const drink = data.drinks[0];
        showDrink(drink);
    } catch (error) {
        console.error(error);
    }
}

navItems.forEach(item => {
    item.addEventListener('click', function (event) {
        navItems.forEach(nav => nav.classList.remove('active'))
        event.currentTarget.classList.add('active')
        fetchData(event.currentTarget.id)
    })
})

fetchData();

function addItems(drinks) {
    list.innerHTML = ''
    drinks.forEach(drink => {
        const container = document.createElement('div')
        container.classList.add('list-item', 'col-12', 'col-sm-3')

        const title = document.createElement('h3')
        title.textContent = drink.strDrink

        const thumbnail = document.createElement('img')
        thumbnail.setAttribute('src', drink.strDrinkThumb)
        thumbnail.classList.add('thumbnail')

        container.appendChild(thumbnail)
        container.appendChild(title)

        container.addEventListener('click', () => {
        fetchDrinkDetails(drink.idDrink)
        })

        list.appendChild(container)
    })
}

function showDrink(drink) {
    const modal = document.getElementById('modal')
    const modalContent = document.getElementById('modal-content')
    const name = document.getElementById('drink-name')
    const image = document.getElementById('drink-image')
    const instructions = document.getElementById('drink-instructions')
    const ingredientsList = document.getElementById('drink-ingredients')

    name.textContent = drink.strDrink
    image.src = drink.strDrinkThumb
    instructions.textContent = drink.strInstructionsFR

    ingredientsList.innerHTML = ''
    let i = 1
    while (drink[`strIngredient${i}`] !== null && drink[`strIngredient${i}`] !== '') {
        const ingredient = drink[`strIngredient${i}`]
        const li = document.createElement('li')
        li.textContent = ingredient
        ingredientsList.appendChild(li)
        i++
}

    modal.style.display = 'flex'
}

document.getElementById('modal').addEventListener('click', function(close) {
    if (close.target.id === 'modal') {
        this.style.display = 'none'
    }
})
