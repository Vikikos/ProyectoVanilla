function getCuestions(delay = false) {
    //obtener preguntas y escribirlas
    let delayTime = 0;
    if(delay){
        //si se establece delay
        delayTime = 5000;
    }
    setTimeout(() => {
        //obtenemos al user actual
        let sessionId = localStorage.getItem('sessionId');
        //obtenemos preguntas
        let questions = JSON.parse(localStorage.getItem('questions'));
        if (questions) {
            //hay preguntas
            let table = document.getElementById('questtable');
            let havetQuest = true;
            questions.forEach(question => {
                if(question['userid'] == sessionId){
                    havetQuest =false;
                    let text = '<tr>';
                    text +='<td>'+ question['question'] +'</td>';
                    text +='<td>'+ question['answer'] +'</td>';
                    text +='<td>'+ question['score'] +'</td>';
                    text +='<td>OK</td>';
                    text += '</tr>';
                    table.innerHTML += text;
                }
            });
            if(havetQuest){
                //si el usuario no tiene preguntas
                document.getElementById('noQuest').innerHTML='<td colspan="4">No tiene preguntas añadidas</td>';
            }
        }else{
            //no hay preguntas
            document.getElementById('noQuest').innerHTML='<td colspan="4">No tiene preguntas añadidas</td>';
        }
    }, delayTime);
}

window.addEventListener('load', getCuestions());
 

// let q   = {
//             userid: sessionid,
//             question: string,
//             answer:frue o false,
//             score:0-9,
//         };