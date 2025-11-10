document.getElementById('userName').addEventListener('blur',function (){
    if(this.value){
        //si hay texto en input
        let userCont = localStorage.getItem('usersCont');
        if(userCont){
            //si hay usuarios
            for (let i = 1; i < userCont; i++) {
                //recoremos todos los usuarios existentes
                let idUser = 'userData' + i;
                const savedUserData = JSON.parse(localStorage.getItem(idUser));
                
            }
        }else{
            //si no hay ningun usuario

            //iniciamos la variable contador de usuarios
            localStorage.setItem('usersCont',1);
            
            //creamos usuario
            const userData = {
                id: 1,
                username: "john_doe",
                day:'',
                time:'',
            };
        }
        //window.location.href = '/pantalla2.html';
        console.log(this.value);

        const savedUserData = JSON.parse(localStorage.getItem("userData"));
        console.log(savedUserData['username']);
    }else{
        //si no hay texto en input
        console.log('vacio')
    }
});