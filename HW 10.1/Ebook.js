/*
Завдання 1

Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book,
 який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та 
 викличте printInfo для кожного екземпляру.
В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та 
методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод
 printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) 
книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг 
(серед них мають бути екземляри обох класів Book та EBook)
Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат
 файлу як рядок ****та повертати екземпляр класу EBook

*/

const Book = require('./book');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

  
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._fileFormat = value;
        } else {
            throw new Error("Формат файлу має бути рядком і не бути порожнім");
        }
    }

    printInfo() {
        console.log(`Name: ${this._title}, Author: ${this._author}, Year: ${this._year}, File format: ${this._fileFormat}`);
    }

    static createFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

module.exports = EBook;