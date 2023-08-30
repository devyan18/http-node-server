const div = document.getElementById('respuesta')

const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')

fetch('http://localhost:4000/')
    .then(res => res.text())
    .then(data => {
        div.innerHTML = data 
    })


sumar.addEventListener('click', () => {
    fetch('http://localhost:4000/incrementar')
        .then(res => res.text())
        .then(data => {
            div.innerHTML = data 
        })

})

restar.addEventListener('click', () => {
    fetch('http://localhost:4000/disminuir')
        .then(res => res.text())
        .then(data => {
            div.innerHTML = data 
        })

})

