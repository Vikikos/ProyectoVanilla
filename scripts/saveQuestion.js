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
        let checkAnswer = false;
        for (const input of answerInput) {
            if(input != null ){
                answer = input.value;
                console.log('nada null');
                
                checkAnswer = true;
                break;
            }
        }
        if(checkAnswer){
            saveButton.removeAttribute('disabled');
        }else{
            saveButton.setAttribute('disabled','');
        }
    }else{
        saveButton.setAttribute('disabled','');
    }

})


