// src/components/BookCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const BookCard = ({ book, onSelect }) => {
  return (
    <Card className="book-card shadow-sm m-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Genre: {book.genre}</Card.Text>
        <Button variant="primary" onClick={() => onSelect(book.author)}>
          View Author
        </Button>
      </Card.Body>
    </Card>
  );
};

// Prop validation
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BookCard;
