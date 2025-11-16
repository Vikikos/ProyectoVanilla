document.addEventListener('keyup',(evento) =>{
    if(evento.ctrlKey && evento.key === 'y'){
        document.getElementById('formUser').style.display = 'block';
        document.getElementById('titleH1').style.display = 'none';
    } 
});

setTimeout(() => {
    document.getElementById('formUser').style.display = 'block';
    document.getElementById('titleH1').style.display = 'none';
}, 5000);

