document.getElementById('newBurger').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/burgers', {
    burger_name: document.getElementById('burger').
    value,
    notEaten: false
  }).
    .then(({data}) => {
      let burgerElem = document.createElement('li')
      burgerElem.className = 'list-group-item'
      burgerElem.id = data.id 
      burgerElem.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">${document.getElementById('burger').value}</h4>
          <button class="eat btn btn-info"
          data-burger_name="${document.getElementById('burger').value}">Devour it!</button>
        </div>
      `
      document.getElementById('notEaten').append(burgerElem)
      document.getElementById('burger').value = ''
    })
    .catch(err => console.log(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('eaten')) {
    axios.put(`/api/burgers/${event.target.parentNode.parentNode.id}`, {
      eaten: true
    })
    .then(() => {
      let burgerElem = document.createElement('li')
      burgerElem.className = 'list-group-item'
      burgerElem.id= event.target.parentNode.parentNode.id 
      burgerElem.innertHTML = `
          <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">${event.target.dataset.burger_name}</h4>
        </div>
      `
      document.getElementById('eaten').append(burgerElem)
      event.target.parentNode.parentNode.remove()
    })
    .catch(err => console.log(err))
  }
})