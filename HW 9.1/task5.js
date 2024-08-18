/*
Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі

*/

const users = [
    {
  name: "Svitlana",  email:"svitlana@o.net",  age: 31},
  {
    name: "Ihnat",  email:"ihnat@o.net",  age: 45},
    {
  name: "Anatolii",  email:"anatolii@o.net",  age: 22}
]

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`)
}