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
            //hay caracteres
            return true;
        }
    }else{
        return false;
    }
}

document.getElementById('userName').addEventListener('blur',function (){
    //obtenemos el email
    var value = this.value;
    if(value){
        //tiene texto
        let emailC = correctEmail(value);//comprobamos que el formato es correcto
        if(emailC){
            //formato correcto
            //obtenemos los usuarios
            var users = JSON.parse(localStorage.getItem('users'));
            if(users){
                //hay usuarios
                let exists = false;
                let arrayUsers = users;
                for (const user of arrayUsers) {
                    if(user['mail'] === value){
                        //si ya existe
                        //establecemos la sesios actual
                        localStorage.setItem('sessionUser', JSON.stringify(user));
                        exists = true;
                        break;
                    }
                }
                if(!exists){
                    //no existe
                    //creamos
                    let userDate = getDate();
                    let userTime = getTime();
                    let userData = {
                        "mail": value,
                        "day":userDate,
                        "time":userTime,
                        "questions":[],
                    };
                    arrayUsers.push(userData);
                    //guardamos
                    localStorage.setItem('users', JSON.stringify(arrayUsers));
                    localStorage.setItem('sessionUser', JSON.stringify(userData));
                }
            }else{
                //no hay usuarios este es el primero
                let userDate = getDate();
                let userTime = getTime();
                let userDataNew = {
                    "mail": value,
                    "day":userDate,
                    "time":userTime,
                    "questions":[],
                };
                let arrayNewUser = [];
                arrayNewUser.push(userDataNew);
                localStorage.setItem('users', JSON.stringify(arrayNewUser));
                localStorage.setItem('sessionUser', JSON.stringify(userDataNew));
            }
            window.location.href = 'pantalla2.html';
        }else{
            this.select();
            document.getElementById('emailAnswer').textContent = 'Error de formato (ejemplo@mail.com)';
        }
    }else{
        //esta vacio
        document.getElementById('emailAnswer').textContent = 'Debes rellenar el campo';
    }
});