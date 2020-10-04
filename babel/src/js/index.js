import '../css/index.css'
import search from './search.js'
import render from './render.js'

const id = prompt('Quién es ese pokemon?')

search(id)
.then((data) => {
    console.log(data)
    render(data)
})
.catch(() => {
    console.log('no hubo pokemon')
})