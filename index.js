class Book {

    #title;
    #genre;
    #author;
    #read;
    #readDate
    constructor(title, genre, author, read, readDate = null) {
        this.#title = title,
        this.#genre = genre,
        this.#author = author,
        this.#read = read,
        this.#readDate = readDate
    }

    get getTitle() {
        return this.#title
    }

    set changeTitle(newTitle) {
        this.#title = newTitle
    }

    get getRead() {
        return this.#read
    }

}

const myBook1 = new Book("Title", "History", "Someone", true, new Date());
const myBook2 = new Book("Another title", "History", "Someone 3", true, new Date());
const myBook3 = new Book("Some another title", "History", "Someone 2", false);

class BookList {
    #name;
    #books = [];
    #booksRead = [];
    #booksUnread = [];
    #currentBook;

    constructor(name) {
        this.#name = name
    }

    get getBooks() {
        return this.#books
    }

    set addNewListBooks(books) {
        // Check instance before doing anything
        books instanceof Array ? this.#books = books : console.log('this is not an array!');
    }

    addBooks(book) {
        // Check instance before doing anything
        book instanceof Book ? this.#books.push(book) : console.log('this is not a book!')
    }

    // Method to check read books by filter method
    getReadBooks() {
        this.#booksRead = this.#books.filter(book => book.getRead);
    }

    // Method to check unread books by filter method
    getUnreadBooks() {
        this.#booksUnread = this.#books.filter(book => book.getRead === false);
    }

    // Set current book

    set currentBook(book) {
        // Check instance before doing anything
        book instanceof Book ? this.#currentBook = book : console.log('not a book');
    }


}

const bookList = new BookList("History");
bookList.addNewListBooks = [myBook1, myBook3];
bookList.addBooks(myBook2);
bookList.currentBook = myBook2;
bookList.getReadBooks();
bookList.getUnreadBooks();
console.log(bookList);











