// src/components/BookList.jsx
import React, { Component, createRef } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import BookCard from './BookCard';
import AuthorInfo from './AuthorInfo';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAuthor: null,
      books: [
        { title: "Harry Potter", genre: "Fantasy", author: "J.K. Rowling" },
        { title: "A Game of Thrones", genre: "Fantasy", author: "George R.R. Martin" },
        { title: "Murder on the Orient Express", genre: "Mystery", author: "Agatha Christie" }
      ],
    };

    this.searchRef = createRef(); // uncontrolled component
  }

  focusInput = () => {
    this.searchRef.current.focus();
  };

  selectAuthor = (author) => {
    this.setState({ selectedAuthor: author });
  };

  render() {
    const { selectedAuthor, books } = this.state;

    return (
      <Container className="p-4">
        <h2 className="text-center mb-4">BookVerse</h2>

        {/* Ref demo */}
        <div className="d-flex justify-content-center mb-3">
          <Form.Control
            type="text"
            placeholder="Search book..."
            ref={this.searchRef}
            style={{ width: "300px" }}
          />
          <Button className="ms-2" onClick={this.focusInput}>
            Focus Search
          </Button>
        </div>

        {/* Book Cards */}
        <Row className="justify-content-center">
          {books.map((book, index) => (
            <Col key={index} md={4}>
              <BookCard book={book} onSelect={this.selectAuthor} />
            </Col>
          ))}
        </Row>

        {/* Conditional Author Info */}
        {selectedAuthor && (
          <div className="mt-4">
            <h3 className="text-center">Author Details</h3>
            <AuthorInfo author={selectedAuthor} />
          </div>
        )}
      </Container>
    );
  }
}

export default BookList;
