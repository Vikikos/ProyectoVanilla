    // localStorage.removeItem('userData2');
    // localStorage.removeItem('usersCont');
    // localStorage.removeItem('sessionId');
    //cambiar esto si me da tiempo
let correctEmail = (email) =>{
    //validar el email
    let dot = email.lastIndexOf('.');//localizamos el ultimo punto
    let aroba = email.lastIndexOf('@');
    if(dot > -1 && aroba> -1){
        //si estan
        let firstChars = email.substring(0,aroba);
        let midChars = email.substring(aroba+1,dot);
        let lastChars = email.substring(dot+1,email.length+1);
        if(firstChars.length == 0 || midChars == 0 || lastChars == 0){
            //si no hay caracteres en alguna
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}
document.getElementById('userName').addEventListener('blur',function (){
    //pierde el foco
    var value = this.value;
    if(value){
        //si hay texto en input
        let emailC = correctEmail(value);//guardamos la respuyesta de si es correcto o no
        console.log(emailC)
        if(emailC){
            //si es correcto
            var userCont = parseInt( localStorage.getItem('usersCont'));
            if(userCont){
                let noExists = false;
                //si hay usuarios
                for (let i = 1; i <= userCont; i++) {
                    //recoremos todos los usuarios existentes
                    let idUser = 'userData' + i;//nombre de la variable

                    //obtenemos los datos de ese usuario
                    const savedUserData = JSON.parse(localStorage.getItem(idUser));

                    if(savedUserData['usermail'] === value){
                        //si ya existe 
                        localStorage.setItem('sessionId', savedUserData['id']);
                        noExists = false;
                        break;
                    }else{
                        noExists = true;
                    }
                }
                if(noExists){
                    //si no existe el usuario lo creamos
                    let idUser = 'userData' + (userCont+1);
                    //obtenemos la fecha actual
                    let userDate = getDate();
                    let userTime = getTime();
                    let userData = {
                        id: (userCont+1),
                        usermail: value,
                        day:userDate,
                        time:userTime,
                    };
                    //creamos al usuario
                    localStorage.setItem(idUser, JSON.stringify(userData));
                    //establecemos que el usuario actual con el id
                    localStorage.setItem('sessionId', (userCont+1));
                    //sumamos el count de usuarios
                    localStorage.setItem('usersCont',(userCont+1));
                }
            }else{
                //si no hay ningun usuario

                //iniciamos la variable contador de usuarios
                localStorage.setItem('usersCont',1);
                //obtenemos la fecha actual
                let userDate = getDate();
                let userTime = getTime();
                
                //creamos usuario con id 1 por ser el primero
                let userData = {
                    id: 1,
                    usermail: value,
                    day:userDate,
                    time:userTime,
                };
                //creamos al usuario
                localStorage.setItem("userData1", JSON.stringify(userData));
                //establecemos que el usuario actual con el id
                localStorage.setItem('sessionId', 1);
            }
            //siempre redirige
            window.location.href = '/pantalla2.html';
        }else{
            //no es correcto
            document.getElementById('emailAnswer').textContent = 'Correo incorrecto';
        }
    }else{
        //si no hay texto en input
        console.log('vacio')
    }
});
