//obtenemos los datos del usuario
let user = JSON.parse(localStorage.getItem('sessionUser'));//obtenemos el ide del usuario actual
let users = JSON.parse(localStorage.getItem('sessionUser'));//todos los usuarios

document.getElementById('userEmail').textContent = user['usermail'];
document.getElementById('date').textContent = user['day'];
document.getElementById('time').textContent = user['time'];

//actualizamos los valores de fecha y hora

//user['day'] = getDate();
//user['time'] = getTime();

//localStorage.setItem(idUser, JSON.stringify(userData));