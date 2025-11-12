import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../storeContext";

const Home = () => {
  const store = useContext(StoreContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    store.loadBooks();
    const update = () => setBooks([...store.getBooks()]);
    store.addChangeListener(update);
    return () => {}; // Cleanup not needed for demo
  }, [store]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available. Add some!</p>
      ) : (
        <ul>
          {books.map((b) => (
            <li key={b.id}>
              <strong>{b.title}</strong> — {b.author} (${b.price})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
