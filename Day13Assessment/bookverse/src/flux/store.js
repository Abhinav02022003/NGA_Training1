import Dispatcher from "./dispatcher";
import { getBooks } from "../api/bookAPI";

let _books = [];
let _listeners = [];

const BookStore = {
  async loadBooks() {
    _books = await getBooks();
    BookStore.emitChange();
  },

  getBooks() {
    return _books;
  },

  addChangeListener(listener) {
    _listeners.push(listener);
  },

  emitChange() {
    _listeners.forEach((listener) => listener());
  },
};

// Registering actions
Dispatcher.register((action) => {
  switch (action.type) {
    case "ADD_BOOK":
      _books.push(action.payload);
      BookStore.emitChange();
      break;
    default:
      break;
  }
});

export default BookStore;
