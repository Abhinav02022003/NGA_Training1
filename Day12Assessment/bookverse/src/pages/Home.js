import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RenderPropsComponent from "../components/RenderPropsComponent";
import withLoading from "../utils/withLoading"; // ✅ Corrected path

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="home-container">
      <h1>Book List</h1>
      <RenderPropsComponent render={() => <p>Welcome, Reader!</p>} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withLoading(Home);
