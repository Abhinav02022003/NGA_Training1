import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Benefits from "./pages/Benefits";
export default function App() {
  return (
    <div className="app">
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            marginRight: 12,
            color: isActive ? "blue" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            marginRight: 12,
            color: isActive ? "blue" : "black",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/user/42"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          User 42
        </NavLink>
        <NavLink
          to="/benefits"
          style={({ isActive }) => ({
            marginRight: 12,
            color: isActive ? "blue" : "black",
          })}
        >
          Benefits
        </NavLink>  
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
