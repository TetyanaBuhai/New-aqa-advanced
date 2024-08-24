const Book = require('./book.js');
const EBook = require('./Ebook.js');

const book1 = new Book('Brain on Fire: My Month of Madness', 'Susannah Cahalan', 2012);
const book2 = new Book('A Collapse of Horses', 'Brian Evenson', 2016);

book1.printInfo();
book2.printInfo();
const ebook1 = new EBook('The Mysterious Affair at Styles', 'Agatha Christie', 1920, 'PDF');

ebook1.printInfo();

const booksArray = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(booksArray);
console.log("The oldest book:");
oldestBook.printInfo();

const ebook2 = EBook.createFromBook(book2, 'EPUB');
ebook2.printInfo();