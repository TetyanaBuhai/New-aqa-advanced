/* 
Завдання 1

Створіть функцію handleNum яка буде приймати 3 параметри.
число
Колбек функцію яку треба викликати якщо передане число парне
Колбек функцію яку треба викликати якщо передане число непарне

Створіть ще дві функції які ви будете передавати у якості колбеків, 
наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. 
Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст 
“number is odd”
Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції
які ви створили раніше
*/ 

function handleNum (num, handleEvenCb,handleOddCb) {
       
    if (num % 2 === 0)  {
        handleEvenCb() 
    } else {
        handleOddCb()
    }
     } 
     function handleEven(){
        console.log ("number is even")
     } 
     function handleOdd() {
        console.log ("number is odd") 
     }
    
let num = 9
handleNum (num, handleEven, handleOdd)
num = 4
handleNum (num, handleEven, handleOdd)
   

