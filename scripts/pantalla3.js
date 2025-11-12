function getCuestions(delay = false) {
    let delayTime = 0;
    if(delay){
        delayTime = 5000;
    }
    setTimeout(() => {
        //obtenemos al user actual
        let sessionId = localStorage.getItem('sessionId');
        let contQuest = localStorage.getItem('contQuest');
        if(contQuest){
            //hay preg8untas
            let questions = [];
            for (let i = 1; i <= contQuest; i++) {
                //recorremos todas las preguntas
                const savedQuest = JSON.parse(localStorage.getItem(q+i));
                if(savedQuest['userid'] == sessionId){
                    //la pregunta es del usuario
                    questions.push(savedQuest);
                }
            }
            if(questions.length == 0){
                //no hay preguntas del usuario
                document.getElementById('noQuest').innerHTML = '<td colspan="4">No hay preguntas</td>';
            }else{
                //hay preguntas del usuario
                let cont = 1;
                questions.forEach(question => {
                    let text = '<tr>';
                    text += '<td>Pregunta'+ cont +'</td>';
                    text += '<td>'+ question['question'] +'</td>';
                    text += '<td>'+ question['answer'] +'</td>';
                    text += '<td>'+ question['score'] +'</td>';
                    text += '<td>OK</td>';
                    text += '</tr>';
                });
            }
        }else{
            //no hay preguntas
            document.getElementById('noQuest').innerHTML = '<td colspan="4">No hay preguntas</td>';
        }
    }, delayTime);
}

window.addEventListener('load', getCuestions());



// let q + id  = {
//             userid: sessionid,
//             question: string,
//             answer:frue o false,
//             score:0-9,
//         };