class Book {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.id = this.generateRandomId(); // Gere um ID único para o livro
  }

  generateRandomId() {
    const min = 1; // Valor mínimo para o ID
    const max = 10000; // Valor máximo para o ID (ajuste conforme necessário)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  // Adicione um livro à biblioteca
  addBook(bookInfo) {
    const book = new Book(
      bookInfo.title,
      bookInfo.description,
      bookInfo.author
    );
    this.books.push(book);
    return book;
  }

  // Obtenha todos os livros na biblioteca
  getBooks() {
    return this.books;
  }

  // Remova um livro da biblioteca pelo ID
  removeBookById(id) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Obtenha um livro da biblioteca pelo ID
  getBookById(id) {
    return this.books.find((book) => book.id === id);
  }

  // Atualize um livro da biblioteca pelo ID e informações fornecidas
  updateBookById(id, info) {
    const book = this.getBookById(id);
    if (!book) {
      throw new Error("Livro não encontrado");
    }

    if (info.title !== undefined) {
      book.title = info.title;
    }

    if (info.description !== undefined) {
      book.description = info.description;
    }

    if (info.author !== undefined) {
      book.author = info.author;
    }

    return book;
  }
}

// Exemplo de uso
const myLibrary = new Library();

const livro1 = myLibrary.addBook({
  title: "Guia histórico de Vertentes",
  description: "Um guia prático para conhecer a cidade de Vertentes.",
  author: "Estevão Ferreira",
});

const livro2 = myLibrary.addBook({
  title: "Educação como prática",
  description: "Educação que liberta seres humanos da condição de oprimido.",
  author: "Paulo Freire",
});
console.log("Criando os livros:");
console.log(myLibrary.getBooks());

myLibrary.updateBookById(livro1.id, { author: "Carlinhos Bala" });
console.log("Atualizando os livros:");
console.log(myLibrary.getBooks());

myLibrary.removeBookById(livro2.id);
console.log("Removendo os livros:");
console.log(myLibrary.getBooks());
