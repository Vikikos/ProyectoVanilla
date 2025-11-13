let checkInputEmpty = (value) => {
    if(value === ''){
        return false;
    }else{
        return true;
    }
}

let saveButton = document.getElementById('saveButton');
window.addEventListener('change',()=>{
    let testQuest = document.getElementById('question').value;
    let answerInput = document.getElementsByName('answer');
    let answer = false;
    let score = document.getElementById('score').value;

    if (checkInputEmpty(testQuest) && checkInputEmpty(score)) {
        //no estan vacios
        let checkAnswer = false;
        for (const input of answerInput) {
            //recorremos el verdadero y falso
            if(input != null ){
                //cogemos el que no sea null
                answer = input.value;
                checkAnswer = true;
                break;
            }
        }
        //comprobamos que hay respuesta
        if(checkAnswer){
            saveButton.removeAttribute('disabled');
        }else{
            //no hay respuesta
            saveButton.setAttribute('disabled','true');//bloqueamos el boton de grabar
            document.getElementById('errorText').textContent = 'Debes rellenar todos los campos para guardar';
        }
    }else{
        //estan vacios
        saveButton.setAttribute('disabled','true');
        document.getElementById('errorText').textContent = 'Debes rellenar todos los campos para guardar';
    }

})

saveButton.addEventListener('click',(e)=>{
    e.preventDefault();//eliminamos su comportamiento habitual
    document.getElementById('goBackButton').setAttribute('disabled','true');
    setTimeout(() => {
        //se guarda la pregunta
        //como esta activo el boton se entiende que esta todo bien
        //obtenemos los datos del formulario
        let question = document.getElementById('question').value;
        let score = document.getElementById('score').value;
        let answerInput = document.getElementsByName('answer');
        let answer = '';
        for (const input of answerInput) {
            //recorremos el verdadero y falso
            if(input != null ){
                //cogemos el que no sea null
                answer = input.value;
                break;
            }
        }
        //usuario actual 
        let sessionId = localStorage.getItem('sessionId');
        const questionSave ={
            "userid": sessionId,
            "question":question,
            "answer":answer,
            "score":score,
        }
        //obtenemos las preguntas
        const questions = JSON.parse(localStorage.getItem('questions'));
        if(questions){
            //hay preguntas
            let arrayQuest = [questions];
            arrayQuest.push(questionSave);
            localStorage.setItem("questions", JSON.stringify(arrayQuest));
        }else{
            //no hay preguntas
            localStorage.setItem("questions", JSON.stringify(questionSave));
        }
        //mostramos las preguntas en la tabla
        const questionsWrite = JSON.parse(localStorage.getItem('questions'));
        let table = document.getElementById('questtable');
        questionsWrite.forEach(question => {
            if(question['userid'] == sessionId){
                
                let text = '<tr>';
                text +='<td>'+ question['question'] +'</td>';
                text +='<td>'+ question['answer'] +'</td>';
                text +='<td>'+ question['score'] +'</td>';
                text +='<td>Guardando...</td>';
                text += '</tr>';
                table.innerHTML += text;
            }
        });
    }, 1000);

})
