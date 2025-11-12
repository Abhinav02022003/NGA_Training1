import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

const App = () => {
  return (
    <Router>
      <div className="App fade">
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Main routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
