import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={{ padding: "1.2rem 0.5rem", background: "#222", color: "#fff", marginBottom: 16 }}>
    <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <h2 style={{ margin: 0 }}>K-pop 음악 대장</h2>
      <nav>
        <Link to="/" style={{ color: "#fff", marginRight: 18, textDecoration: "none", fontWeight: 500 }}>Home</Link>
        <Link to="/melon" style={{ color: "#fff", marginRight: 18, textDecoration: "none" }}>멜론</Link>
        <Link to="/bugs" style={{ color: "#fff", marginRight: 18, textDecoration: "none" }}>벅스</Link>
        <Link to="/genie" style={{ color: "#fff", textDecoration: "none" }}>지니</Link>
      </nav>
    </div>
  </header>
);

export default Header;
