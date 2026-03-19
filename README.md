# 📚 Book List

A simple book management application built with TypeScript. This project demonstrates clean code practices, type safety, and unit testing with Jest.

## 🚀 Features

- Add books to the collection
- List all available books
- Search books by title

## 🛠️ Tech Stack

- TypeScript
- Node.js
- Jest & ts-jest

## 📁 Project Structure
```
src/
  BookList/
    index.ts        # Core logic
    BooksList.test.ts  # Unit tests
```

## ⚙️ Installation
```bash
npm install
```

## 🧪 Running Tests
```bash
npm run test
```

## 📖 Usage
```typescript
import { addBook, listBooks, searchBook } from './src/BookList';

addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

listBooks();
searchBook('1984');
```

## 📝 Output Example
```
Book added: "The Great Gatsby" by F. Scott Fitzgerald (1925)
Book added: "1984" by George Orwell (1949)
All Books:
- The Great Gatsby by F. Scott Fitzgerald (1925)
- 1984 by George Orwell (1949)
Search Results for "1984":
- 1984 by George Orwell (1949)
```

## 📄 License

MIT
