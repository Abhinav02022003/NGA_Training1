import Dispatcher from "./dispatcher";
import { addBook } from "../api/bookAPI";

export const addBookAction = async (book) => {
  const newBook = await addBook(book);
  Dispatcher.dispatch({
    type: "ADD_BOOK",
    payload: newBook,
  });
};
