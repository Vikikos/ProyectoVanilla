let saveButton = document.getElementById('saveButton');

let checkScore = (score)=>{
    return Number.isInteger(score);
}
//metodo para verificar que todo este rellenado y activar el boton de guardado
window.addEventListener('change',()=>{
    //obtenemos los valores de los imputs
    let testQuest = document.getElementById('question').value;
    let answerInput = document.getElementsByName('answer');
    let score = document.getElementById('score').value;
    let answer;
    if(testQuest != '' && score != ''){
        //no estan vacias
        for (const input of answerInput) {
            //comprobamos si hay respuesta 
            if(input != null){
                answer = input.value;
                break;
            }
        }
        if(answer){
            //hay respuesta
            saveButton.removeAttribute('disabled');
        }else{
            //error
            saveButton.setAttribute('disabled','true');//bloqueamos el boton de grabar
            document.getElementById('errorText').textContent = 'Debes rellenar todos los campos para guardar';
        }
    }else{
        //estan vacias
        saveButton.setAttribute('disabled','true');
        document.getElementById('errorText').textContent = 'Debes rellenar todos los campos para guardar';
    }
});
function saveQuestion(questionData) {
    return new Promise((resolve, reject) => {
        let sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
        if(questionData){
            //todo bien se guarda
            sessionUser['questions'].push(questionData);
            localStorage.setItem('sessionUser',JSON.stringify(sessionUser));
            let users = JSON.parse(localStorage.getItem('users'));
            for (const user of users) {
                //buscamos al usuario para guardar las preguntas
                if(user['mail'] === sessionUser['mail']){
                    user['questions'] = sessionUser['questions'];
                    break;
                }
            }
            resolve('OK'); 
        }else{
            reject('Error en el guardado vuelve a intentarlo mas tarde');
        }
    })
}
saveButton.addEventListener('click',(e)=>{
    e.preventDefault();//eliminamos su comportamiento habitual
    //desabilitamos el boton de atras
    document.getElementById('goBackButton').setAttribute('disabled','true');
    let table = document.getElementById('questtable');
    //obtenemos todos los valores de los campos
    var testQuest = document.getElementById('question').value;
    var answerInput = document.getElementsByName('answer');
    var score = document.getElementById('score').value;
    var answer;
    document.getElementById('questForm').reset();
    for (const input of answerInput) {
        //comprobamos si hay respuesta 
        if(input != null){
            answer = input.value;
            break;
        }
    }
    setTimeout(() => {
        let questionData = {
            "question":testQuest,
            "answer":answer,
            "score":score,
        }
        //imprimimos
        let sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
        let newRow = document.createElement('tr');
        let text = '<tr>';
            text +='<td>'+ testQuest +'</td>';
            text +='<td>'+ answer +'</td>';
            text +='<td>'+ score +'</td>';
            text +='<td id="state' + sessionUser['questions'].length + '">Guardando...</td>';
            text += '</tr>';
            newRow.innerHTML += text;
            table.appendChild(newRow);
        setTimeout(() => {
            //estado de la pregunta
            saveQuestion(questionData).then((res)=>{
                let stateCell = document.getElementById('state'+sessionUser['questions'].length);
                stateCell.textContent = res;
            })
            //habilitamos el boton atras
            document.getElementById('goBackButton').removeAttribute('disabled');
        }, 5000);
    },5000);
});

document.getElementById('goBackButton').addEventListener('click',()=>{
    window.location.href = '/pantalla2.html';
})
