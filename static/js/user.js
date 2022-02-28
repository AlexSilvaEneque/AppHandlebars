function eliminar(id) {
    fetch('/user/delete/'+id,{
        method:'DELETE'
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        window.location = '/'
    })
}