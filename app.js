// Book Constructor: Handles Creating Book objects

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor: Set of prototype methods like adding book to UI, deleting, etc
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');
  row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
  list.appendChild(row);
};

// Validation error alert
UI.prototype.showAlert = function (msg, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Placement of the error alert div
  container.insertBefore(div, form);
  // Timeout after 3s
  setTimeout(function () {
    document.querySelector('.error').remove();
  }, 3000);
};

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  //   Valdiations
  if (title === '' || author === '' || isbn === '') {
    // alert('Failed.');
    // Error alert
    ui.showAlert('Please fill all fields', 'error');
  } else {
    ui.addBookToList(book);
  }

  ui.clearFields();

  e.preventDefault();
});
