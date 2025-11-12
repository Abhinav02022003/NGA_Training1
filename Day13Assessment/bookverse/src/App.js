import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddBookForm from "./pages/AddBookForm";
import { StoreProvider } from "./storeContext";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <div style={{ padding: 20 }}>
          <h1>BookVerse</h1>
          <nav>
            <Link to="/" style={{ marginRight: 10 }}>Home</Link>
            <Link to="/add">Add Book</Link>
          </nav>

          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBookForm />} />
          </Routes>
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
