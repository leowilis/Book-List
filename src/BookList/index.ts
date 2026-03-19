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

// Function to list all books
function listBooks(): void {
    console.log("All Books:");
    books.forEach((b) => {
        console.log(`- ${b.title} by ${b.author} (${b.year})`);
    });
}

// Function to search for a book by title
function searchBook(title?: string): void {
    if (!title) {
        console.log("Please provide a title to search.");
        return;
    }

    const results = books.filter((b) => b.title.includes(title));

    if (results.length === 0) {
        console.log(`No books found with title containing "${title}".`);
        return;
    }

    console.log(`Search result for "${title}":`);
    results.forEach((b) => {
        console.log(`- ${b.title} by ${b.author} (${b.year})`);
    });
}