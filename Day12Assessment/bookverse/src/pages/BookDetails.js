import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import withLoading from '../utils/withLoading';

const BookDetails = ({ isLoading, setLoading }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/books/${id}`)
      .then(res => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, setLoading]);

  return (
    <div className="fade">
      {isLoading ? (
        <p>Loading details...</p>
      ) : (
        book && (
          <>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
            <Link to="/home">⬅ Back to Home</Link>
          </>
        )
      )}
    </div>
  );
};

export default withLoading(BookDetails);
