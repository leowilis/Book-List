// Type of book
type Book = {
    title: string;
    author: string;
    year: number;
};

// In-memory array to store books
const books: Book[] = [];

// Function to add a book
function addBook(title: string, author: string, year: number): void {
    const newBook: Book = { title, author, year };
    books.push(newBook);
    console.log(`Book added: "${title}" by ${author} (${year})`);
}