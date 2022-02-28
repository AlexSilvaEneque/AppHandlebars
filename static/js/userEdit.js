let btnSave = document.querySelector('#modify')

let idUser = window.location.pathname.split('/')[2]
let formulario = document.querySelector('#frmEdit')


btnSave.addEventListener('click', () => {
    let data = {
        nombre: formulario.nombre.value,
        edad: formulario.edad.value,
        genero: formulario.genero.value,
        email: formulario.email.value,
        profesion: formulario.profesion.value,
        salario: formulario.salario.value,
        nroTelef: formulario.nroTelef.value
    }

    fetch('/user/edit/'+idUser,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => {
        location.href = "/"
        return res.json()
    })
    .then((data) => {
        location.href = "/"
    })
})