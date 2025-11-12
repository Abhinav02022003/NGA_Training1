// src/components/AuthorInfo.jsx
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorData: null,
    };
  }

  componentDidMount() {
    console.log("AuthorInfo mounted: Loading author data...");

    // Simulating data fetch
    const authors = {
      "J.K. Rowling": {
        bio: "British author, best known for the Harry Potter series.",
        topBooks: ["Harry Potter 1", "Harry Potter 2", "Harry Potter 3"]
      },
      "George R.R. Martin": {
        bio: "American novelist and short story writer, known for Game of Thrones.",
        topBooks: ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords"]
      },
      "Agatha Christie": {
        bio: "English writer known for her detective novels.",
        topBooks: ["Murder on the Orient Express", "Death on the Nile", "The ABC Murders"]
      }
    };

    const data = authors[this.props.author] || null;
    this.setState({ authorData: data });
  }

  render() {
    const { author } = this.props;
    const { authorData } = this.state;

    if (!authorData) return <p className="text-center">Loading author info...</p>;

    return (
      <Card className="p-3 m-3 shadow author-card">
        <h3>{author}</h3>
        <p>{authorData.bio}</p>
        <h5>Top 3 Books:</h5>
        <ul>
          {authorData.topBooks.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Card>
    );
  }
}

export default AuthorInfo;
