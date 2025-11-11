    // localStorage.removeItem('userData2');
    // localStorage.removeItem('usersCont');
    // localStorage.removeItem('sessionId');
document.getElementById('userName').addEventListener('blur',function (){
    var value = this.value;
    if(value){
        //si hay texto en input
        var userCont = parseInt( localStorage.getItem('usersCont'));
        if(userCont){
            let noExists = false;
            //si hay usuarios
            for (let i = 1; i <= userCont; i++) {
                //recoremos todos los usuarios existentes
                let idUser = 'userData' + i;//nombre de la variable

                //obtenemos los datos de ese usuario
                const savedUserData = JSON.parse(localStorage.getItem(idUser));

                if(savedUserData['username'] === value){
                    //si ya existe 
                    localStorage.setItem('sessionId', savedUserData['id']);
                    noExists = false;
                    break;
                }else{
                    noExists = true;
                }
                //console.log(savedUserData['username']);
            }
            if(noExists){
                //si no existe el usuario lo creamos
                let idUser = 'userData' + (userCont+1);
                let userData = {
                    id: (userCont+1),
                    username: value,
                    day:'',
                    time:'',
                };
                //creamos al usuario
                localStorage.setItem(idUser, JSON.stringify(userData));
                //establecemos que el usuario actual con el id
                localStorage.setItem('sessionId', (userCont+1));
                //sumamos el count de usuarios
                localStorage.setItem('usersCont',(userCont+1));
                //console.log('sesion iniciada en usuario nuevo')
            }
            //console.log('sesion iniciada en usuario existente')
        }else{
            //si no hay ningun usuario

            //iniciamos la variable contador de usuarios
            localStorage.setItem('usersCont',1);
            
            //creamos usuario con id 1 por ser el primero
            let userData = {
                id: 1,
                username: value,
                day:'',
                time:'',
            };
            //creamos al usuario
            localStorage.setItem("userData1", JSON.stringify(userData));
            //establecemos que el usuario actual con el id
            localStorage.setItem('sessionId', 1);
        }
        //siempre redirige
        window.location.href = '/pantalla2.html';

    }else{
        //si no hay texto en input
        console.log('vacio')
    }
});