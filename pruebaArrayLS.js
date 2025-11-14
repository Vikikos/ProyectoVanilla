let prueba = {
    id: 1,
    text: 'texto',
};

let arrayPre1 =[];
arrayPre1.push(prueba)
localStorage.setItem("preguntas", JSON.stringify(arrayPre1));

let prueba2 = {
    id: 2,
    text: 'texto2',
};
let prueba3 = {
    id: 3,
    text: 'texto2',
};
const preguntas = JSON.parse(localStorage.getItem('preguntas'));

arrayPre  = [preguntas];

arrayPre.push(prueba2);
arrayPre.push(prueba3);

localStorage.setItem("preguntas", JSON.stringify(arrayPre));

let pre = JSON.parse(localStorage.getItem('preguntas'));
pre.forEach(element => {
    console.log(element['id'])
});
console.log(pre)