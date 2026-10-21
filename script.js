const catalog = {
  books: [
    { title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", price: 18.99, color: "#3d526d" },
    { title: "The House in the Cerulean Sea", author: "TJ Klune", genre: "Fantasy", price: 19.5, color: "#387c88" },
    { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", genre: "Fiction", price: 20.0, color: "#b34e3e" },
    { title: "Braiding Sweetgrass", author: "Robin Wall Kimmerer", genre: "Nature", price: 17.99, color: "#49704c" },
    { title: "Piranesi", author: "Susanna Clarke", genre: "Fantasy", price: 16.5, color: "#85765d" },
    { title: "The Song of Achilles", author: "Madeline Miller", genre: "Historical fiction", price: 18.0, color: "#a25649" },
    { title: "A Psalm for the Wild-Built", author: "Becky Chambers", genre: "Science fiction", price: 15.99, color: "#bf8050" },
    { title: "Remarkably Bright Creatures", author: "Shelby Van Pelt", genre: "Fiction", price: 19.99, color: "#546f83" }
  ]
};

const bookGrid = document.querySelector("#book-grid");
const bookCount = document.querySelector("#book-count");
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

catalog.books.forEach((book) => {
  const card = document.createElement("article");
  card.className = "book-card";

  const cover = document.createElement("div");
  cover.className = "book-cover";
  cover.style.backgroundColor = book.color;

  const coverTitle = document.createElement("span");
  coverTitle.className = "cover-title";
  coverTitle.textContent = book.title;
  cover.append(coverTitle);

  const info = document.createElement("div");
  info.className = "book-info";

  const genre = document.createElement("p");
  genre.className = "book-genre";
  genre.textContent = book.genre;

  const title = document.createElement("h3");
  title.className = "book-title";
  title.textContent = book.title;

  const author = document.createElement("p");
  author.className = "book-author";
  author.textContent = `by ${book.author}`;

  const price = document.createElement("p");
  price.className = "book-price";
  price.textContent = formatter.format(book.price);

  info.append(genre, title, author, price);
  card.append(cover, info);
  bookGrid.append(card);
});

bookCount.textContent = `${catalog.books.length} books`;
