/*
Завдання 3

Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

*/
function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
}

const result1 = checkOrder(100, 90); 
const result2 = checkOrder(3,0); 
const result3 = checkOrder(15, 20); 


console.log(result1); 
console.log(result2); 
console.log(result3); 
