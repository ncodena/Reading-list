// Create a class called Book
class BookElement {
    constructor(title, genre, author, read, readDate = null) {
        this.title = title,
        this.genre = genre,
        this.author = author,
        this.read = read,
        this.readDate = readDate
    }

}

const myBook = new BookElement("Some title", "History", "Someone", true, new Date());
const anotherBook = new BookElement("Some title new", "History", "Someone else", true);
