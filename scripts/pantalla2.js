//obtenemos los datos del usuario
let user = JSON.parse(localStorage.getItem('sessionUser'));//obtenemos el ide del usuario actual
let users = JSON.parse(localStorage.getItem('users'));//todos los usuarios

document.getElementById('userEmail').textContent = user['mail'];
document.getElementById('date').textContent = user['day'];
document.getElementById('time').textContent = user['time'];

//actualizamos los valores de fecha y hora
user['day'] = getDate();
user['time'] = getTime();
localStorage.setItem('sessionUser',JSON.stringify(user));
for (const us of users) {
    if(us['mail'] == user['mail']){
        //guardamos la nueva fecha y hora
        us['day'] = getDate();
        us['time'] = getTime();
        //si viene del boton de atras
        us['questions'] = user['questions'];
        break;
    }
}
localStorage.setItem('users',JSON.stringify(users));

