let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
minValue = (minValue < -999) || (isNaN(minValue)) ? minValue = -999 : minValue = minValue;
minValue = (minValue > 0) ? minValue = 0 : minValue = minValue;
   
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
maxValue = (maxValue > 999) || (isNaN(maxValue)) ? maxValue = 999 : maxValue = maxValue;
maxValue = (maxValue < 0) ? maxValue = 100 : maxValue = maxValue;



 
   

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
let questions = [
    `Вы загадали число ${answerNumber}?`,
    `Это число ${answerNumber}, я угадал?`,
    `Я думаю, что это число ${answerNumber}, верно?`
];
answerField.innerText = questions[Math.floor(Math.random() * 3)];







document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    if (confirm('Вы действительно хотите начать игру заново?')) {
        window.location.reload();
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            console.log(minValue);
            console.log(maxValue);
            let questions = [
                `Вы загадали число ${answerNumber}?`,
                `Это число ${answerNumber}, я угадал?`,
                `Я думаю, что это число ${answerNumber}, верно?`
            ];
            answerField.innerText = questions[Math.floor(Math.random() * 3)];
        }
    }
})



document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            console.log(minValue);
            console.log(maxValue);
            let questions = [
                `Вы загадали число ${answerNumber}?`,
                `Это число ${answerNumber}, я угадал?`,
                `Я думаю, что это число ${answerNumber}, верно?`
            ];
            answerField.innerText = questions[Math.floor(Math.random() * 3)];
        }
    }
})



 







document.getElementById('btnEqual').addEventListener('click', function () {
    let phrases = [
        `Я всегда угадываю\n\u{1F60E}`,
        `Это было легко!`,
        `Да, я в этом профи!`
    ];
    if (gameRun){
        answerField.innerText = phrases[Math.floor(Math.random() * 3)]; 
        gameRun = false;
    }
})




// let first = (number % 10);
// let second = (number % 100);
// let third = (number % 1000);
// let firstStr = first.toString()[0];
// console.log(firstStr);
// let secondStr = second.toString()[0];
// console.log(secondStr);
// let thirdStr = third.toString()[0];
// console.log(thirdStr);



// let answerPhraseStr;




// function lessThanTwelve () {
//     if (answerPhrase === 0){
//     answerPhraseStr = 'Ноль';
// }
// else if (answerPhrase === 1){
//     answerPhraseStr = 'Один';
// }
// else if (answerPhrase === 2){
//     answerPhraseStr = 'Два';
// }
// else if (answerPhrase === 3){
//     answerPhraseStr = 'Три';
// }
// else if (answerPhrase === 4){
//     answerPhraseStr = 'Четыре';
// }
// else if (answerPhrase === 5){
//     answerPhraseStr = 'Пять';
// }
// else if (answerPhrase === 6){
//     answerPhraseStr = 'Шесть';
// }
// else if (answerPhrase === 7){
//     answerPhraseStr = 'Семь';
// }
// else if (answerPhrase === 8){
//     answerPhraseStr = 'Восемь';
// }
// else if (answerPhrase === 9){
//     answerPhraseStr = 'Девять';
// }
// else if (answerPhrase === 10){
//     answerPhraseStr = 'Десять';
// }
// else if (answerPhrase === 11){
//     answerPhraseStr = 'Одинадцать';
// }
// else if (answerPhrase === 12){
//     answerPhraseStr = 'Двенадцать';
// }
// else if (answerPhrase === 13){
//     answerPhraseStr = 'Тринадцать';
// }
// else if (answerPhrase === 14){
//     answerPhraseStr = 'Четырнадцать';
// }
// else if (answerPhrase === 15){
//     answerPhraseStr = 'Пятнадцать';
// }
// else if (answerPhrase === 16){
//     answerPhraseStr = 'Шестннадцать';
// }
// else if (answerPhrase === 17){
//     answerPhraseStr = 'Семнаадцать';
// }
// else if (answerPhrase === 18){
//     answerPhraseStr = 'Восемнадцать';
// }
// else if (answerPhrase === 19){
//     answerPhraseStr = 'Девятнадцать';
// }
// else if (answerPhrase === 20){
//     answerPhraseStr = 'Дваддцать';
// }
// }

// lessThanTwelve();


// function getUnits () {
//     if (firstStr === '0'){
//     firstStr = 'Ноль';
//     console.log(firstStr);
// }
// else if (firstStr === '1'){
//     firstStr = 'Один';
//     console.log(firstStr);
// }
// else if (firstStr === '2'){
//     firstStr = 'Два';
//     console.log(firstStr);
// }
// else if (firstStr === '3'){
//     firstStr = 'Три';
//     console.log(firstStr);
// }
// else if (firstStr === '4'){
//     firstStr = 'Четыре';
//     console.log(firstStr);
// }
// else if (firstStr === '5'){
//     firstStr = 'Пять';
//     console.log(firstStr);
// }
// else if (firstStr === '6'){
//     firstStr = 'Шесть';
//     console.log(firstStr);
// }
// else if (firstStr === '7'){
//     firstStr = 'Семь';
//     console.log(firstStr);
// }
// else if (firstStr === '8'){
//     firstStr = 'Восемь';
//     console.log(firstStr);
// }
// else if (firstStr === '9'){
//     firstStr = 'Девять';
//     console.log(firstStr);
// }
// if (secondStr === '0'){
//     secondStr = '';
//     console.log(secondStr);
// }
// }

