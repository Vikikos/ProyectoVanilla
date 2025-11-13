//obtenemos los datos del usuario
let sessionId = localStorage.getItem('sessionId');//obtenemos el ide del usuario actual
let idUser = 'userData' + sessionId;//buscamos la variable del usuario acrtual
const userData = JSON.parse(localStorage.getItem(idUser));//usuario actual

document.getElementById('userEmail').textContent = userData['usermail'];
document.getElementById('date').textContent = userData['day'];
document.getElementById('time').textContent = userData['time'];

//actualizamos los valores de fecha y hora
userData['day'] = getDate();
userData['time'] = getTime();

//localStorage.setItem(idUser, JSON.stringify(userData));