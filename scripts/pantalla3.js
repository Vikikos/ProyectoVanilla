function getCuestions(delay = false) {
    //obtener preguntas y escribirlas
    let delayTime = 0;
    if(delay){
        //si se establece delay
        delayTime = 5000;
    }
    let resBox = document.getElementById('noQuest');
    resBox.innerHTML='Cargando preguntas ...';
    setTimeout(() => {
        //obtenemos al user actual
        let sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
        //obtenemos preguntas
        if (sessionUser['questions'].length > 0) {
            //hay preguntas
            let table = document.getElementById('questtable');
            sessionUser['questions'].forEach(question => {
                //las imprimimos
                let text = '<tr>';
                    text +='<td>'+ question['question'] +'</td>';
                    text +='<td>'+ question['answer'] +'</td>';
                    text +='<td>'+ question['score'] +'</td>';
                    text +='<td class="state">OK</td>';
                    text += '</tr>';
                    table.innerHTML += text;
            });
            resBox.textContent = '';
        }else{
            //no hay preguntas
            resBox.innerHTML='No tiene preguntas añadidas';
        }
    }, delayTime);
}

window.addEventListener('load', getCuestions());
 

// let q   = {
//             question: string,
//             answer:frue o false,
//             score:0-9,
//         };