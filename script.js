

function months() {


let a  = Number(prompt("Задайте номер месяца и я скажу вам какое это время года!"));


a >= 3 && a<=5 ? alert("Это Весна") :
a >= 6 && a<=8 ? alert("Это Лето")   :  
a >= 9 && a<=11 ? alert("Это Осень") :
a == 11 || a == 12 || a < 3 ? alert("Это Зима") :
alert("Вы ввели что-то не то!");
}

function fruits() {

let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
list = arr.sort(() => Math.random() - 0.5);

alert(arr);

let fisrtQuestion = prompt('Чему равнялся первый элемент массива?');
let secondQuestion = prompt('Чему равнялся последний элемент массива?');

if (fisrtQuestion === arr[0] && secondQuestion === arr[arr.length -1]) {
    alert('Поздравляем вы победили !!!')
    
} else if   (fisrtQuestion === arr[0] || secondQuestion === arr[arr.length -1]) { 
   
    alert("Вы были близки к победе!");
} else { alert("Ответ не верный..."); }
}



 function game4() {

    const  game = {
        question: 'Угадай Загадку : Речка спятила с ума - По домам пошла сама. ',
        answerList: ['водопровод', 'вадапровод'],
        hints:[ 'По ней течет вода в доме' , 'Его ремонтирует сантехник' ]
    }
    userAnswer = prompt(game.question).toLocaleLowerCase();
     
    if (game.answerList.includes(userAnswer)) {
        alert('Поздравляем - Вы угадали!');
    } else {
       showHint();
    }



    function showHint() {
        alert(game.hints[0]);
             game.hints.shift();
             userAnswer = prompt(game.question).toLocaleLowerCase();
             if (game.answerList.includes(userAnswer)) {
                alert('Поздравляем - Вы угадали!');
              
             }
             
             else if (game.hints.length > 0) {
                alert(game.hints[0]);
                userAnswer = prompt(game.question).toLocaleLowerCase();
                if (game.answerList.includes(userAnswer)) {
                    alert('Поздравляем - Вы угадали!');
                   }  else {
                    alert("Вы проиграли");
                   } 
             }
             
             
             
             
    }
   
 }





